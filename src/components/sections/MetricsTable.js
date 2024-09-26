import { useState, useEffect } from 'react';
import React from "react";
// @mui
import {
    Box,
    Stack,
    Table,
    TableRow,
    TableBody,
    TableCell,
    Typography,
    TableContainer,
    LinearProgress,
    Paper
} from '@mui/material';

import merge from 'lodash/merge';

// components
import MetricsHead from './MetricsHead';
import { CustomChart } from '../chart';
import ReactApexChart from 'react-apexcharts';

// assets
import CirleRise from "../../assets/CircleRise.svg";
import CirleFall from "../../assets/CircleFall.svg";
import Comunity from "../../assets/Comunity.svg";
import Core from "../../assets/Core.svg";

import { fNumber } from '../../utils/format';
import { Client } from '../../utils/client';
import { Waypoint } from 'react-waypoint';

function SearchNotFound({ searchQuery = '', ...other }) {
    return (
        <Paper {...other}>
            <Typography gutterBottom align="center" variant="subtitle1">
                Not found
            </Typography>
            <Typography variant="body2" align="center">
                No results found for &nbsp;
                <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or using complete words.
            </Typography>
        </Paper>
    );
}

export default function MetricsTable({ search }) {
    const [state, setState] = useState({
        loading: true,
        total: 0,
        projects: []
    });
    const [params, setParams] = useState({});
    const [offset, setOffset] = useState(0);
    const [notFound, setNotFound] = useState(false);


    useEffect(() => {
        const client = new Client();
        let newParams = {
            ...params,
            offset: offset,
            search: search || undefined
        };

        if (search !== params.search && search) {
            newParams = { ...newParams, search: search, offset: 0 };
            setOffset(0);
        }

        client.get('projects', newParams).then((response) => {
            if (newParams.offset > 0) {
                setState(prevState => ({
                    loading: false,
                    total: response?.total,
                    projects: [...prevState.projects, ...(response?.list || [])],
                }));
            } else {
                setState({
                    loading: false,
                    total: response?.total,
                    projects: response?.list || [],
                });
            }

            setNotFound(response?.total === 0 && search);
        });

        setParams(newParams);
    }, [search, offset]);

    const chartOptionsVerde = merge(CustomChart(), {
        xaxis: {
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        grid: {
            show: false
        },
        colors: ["#67A161"],
    });

    const chartOptionsRosu = merge(CustomChart(), {
        xaxis: {
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        grid: {
            show: false
        },
        colors: ["#CA1A0D"],
    });

    const paramsCallback = (new_params) => {
        setState({
            loading: true,
            total: 0,
            projects: []
        });
        new_params.offset = 0;
        setOffset(0);
        setParams({
            ...params,
            ...new_params,
        });
        console.log({
            ...params,
            ...new_params,
        });
    }

    const handleWaypointEnter = () => {
        if (offset < state.total) {
            setOffset(offset + 20);
        }
    };

    return (
        <>
            <TableContainer
                sx={{
                    maxHeight: '86rem',
                }}
            >
                <Table stickyHeader>

                    <MetricsHead paramsCallback={paramsCallback}/>

                    <TableBody>
                        {state.projects?.map((item, id) => {
                             const {
                                 rank,
                                 name,
                                 is_core_project,
                                 active_contributors,
                                 contributions,
                                 developers,
                                 activity_growth,
                                 commits
                             } = item;

                             let activeDevelopersPercentage;
                             if (active_contributors === 0) {
                                 activeDevelopersPercentage = 0;
                             } else {
                                 activeDevelopersPercentage = (active_contributors / developers) * 100.0;
                             }

                             let activity = [];
                             let noActivity = true;
                             /*if (commits?.length > 6) {
                                 commits.pop();
                                 commits.splice(0, commits.length - 6);
                             }*/

                            try {
                                let activityItems = JSON.parse(commits);
                                if (activityItems?.length) {
                                    for (const a of activityItems) {
                                        if (a.commits > 0) {
                                            noActivity = false;
                                        }

                                        activity.push(parseInt(a.commits));
                                    }
                                }

                                /*if (noActivity) {
                                    activity = [];
                                }*/
                            } catch (error) {

                            }


                            let growth_trend = true;
                            if (activity?.length > 0 && activity_growth) {
                                if (activity_growth < 0) {
                                    growth_trend = false;
                                }
                            }

                            return (
                                <React.Fragment key={id}>
                                <TableRow
                                    key={id}
                                    tabIndex={-1}
                                >

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            height: '5rem',
                                            border: 'none',
                                            backgroundColor: id % 2 === 0 ? 'tableColor.main2' : 'tableColor.main1',
                                            paddingLeft: '3rem',
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            noWrap
                                            sx={{
                                                maxWidth: { xl: '18rem', lg: '10rem' },
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {fNumber(rank)}
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none',
                                            backgroundColor: id % 2 === 0 ? 'tableColor.main2' : 'tableColor.main1'
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            noWrap
                                            sx={{
                                                maxWidth: {
                                                    xxl: '12rem',
                                                    xl: '12rem',
                                                    lg: '10rem',
                                                    md: '75%',
                                                    sm: '75%'
                                                },
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                             {name} 
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none',
                                            backgroundColor: id % 2 === 0 ? 'tableColor.main2' : 'tableColor.main1'
                                        }}
                                    >

                                        {is_core_project ?
                                            (
                                                <img
                                                    src={Core}
                                                    alt="Core"
                                                />
                                            ) :
                                            (
                                                <img
                                                    src={Comunity}
                                                    alt="Comunity"
                                                />
                                            )
                                        }
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none',
                                            backgroundColor: id % 2 === 0 ? 'tableColor.main2' : 'tableColor.main1'
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            noWrap
                                            sx={{
                                                maxWidth: { xl: '18rem', lg: '10rem' },
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {fNumber(developers)}
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none',
                                            backgroundColor: id % 2 === 0 ? 'tableColor.main2' : 'tableColor.main1'
                                        }}
                                        className='progressBar'
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            alignItems="center"
                                            justifyContent='flex-end'
                                            noWrap
                                            sx={{
                                                width: '12rem',
                                                display: 'flex',
                                            }}
                                            className='progressNumber'
                                        >
                                            {active_contributors}
                                            
                                        </Typography>
                                        <LinearProgress
                                            sx={{
                                                width: '12rem',
                                                height: '0.4rem',
                                                borderRadius: 5,
                                                marginBottom: '1.45rem',
                                                backgroundColor: 'white',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: 'green'
                                                }
                                            }}
                                            variant='determinate'
                                            value={activeDevelopersPercentage}
                                        />
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none',
                                            backgroundColor: id % 2 === 0 ? 'tableColor.main2' : 'tableColor.main1'
                                        }}
                                    >
                                        <Typography variant="subtitle2" noWrap>
                                             {fNumber(contributions)}
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none',
                                            backgroundColor: id % 2 === 0 ? 'tableColor.main2' : 'tableColor.main1'
                                        }}
                                    >
                                        {activity_growth >= 0 && (
                                            <Stack direction="row">
                                                <img
                                                    src={CirleRise}
                                                    alt="rise"
                                                    style={{
                                                        height: '1.5rem',
                                                        marginRight: '0.5rem'
                                                    }}
                                                />
                                                <Typography
                                                    variant="subtitle2"
                                                    noWrap
                                                    sx={{
                                                        marginTop: '0.2rem'
                                                    }}
                                                >
                                                    {`+${activity_growth}%`}
                                                </Typography>
                                            </Stack>
                                        )}

                                        {activity_growth < 0 && (
                                            <Stack direction="row">
                                                <img
                                                    src={CirleFall}
                                                    alt="rise"
                                                    style={{
                                                        height: '1.5rem',
                                                        marginRight: '0.5rem'
                                                    }}
                                                />
                                                <Typography
                                                    variant="subtitle2"
                                                    noWrap
                                                    sx={{
                                                        marginTop: '0.2rem'
                                                    }}
                                                >
                                                    {`${activity_growth}%`}
                                                </Typography>
                                            </Stack>
                                        )}

                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none',
                                            paddingRight: '3rem',
                                            backgroundColor: id % 2 === 0 ? 'tableColor.main2' : 'tableColor.main1'
                                        }}
                                    >
                                        {growth_trend && (
                                            <ReactApexChart
                                                type="line"
                                                series={[
                                                    {
                                                        name: "Desktops",
                                                        data: activity,
                                                    },
                                                ]}
                                                options={chartOptionsVerde}
                                                height={75}
                                                width={125}
                                            />
                                        )}

                                        {!growth_trend && (
                                            <ReactApexChart
                                                type="line"
                                                series={[
                                                    {
                                                        name: "Desktops",
                                                        data: activity,
                                                    },
                                                ]}
                                                options={chartOptionsRosu}
                                                height={75}
                                                width={125}
                                            />
                                        )}

                                    </TableCell>

                                </TableRow>
                                <Waypoint onEnter={handleWaypointEnter} />
                                </React.Fragment>
                            );
                        })}
                    </TableBody>


                    {notFound && !state.loading && (
                        <TableBody>
                            <React.Fragment>
                                <TableRow>
                                    <TableCell align="center" colSpan={11} sx={{ py: 3 }}>
                                        <SearchNotFound searchQuery={search} />
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
        </>
    );
}