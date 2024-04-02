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
    Paper,
    Link,
    Avatar
} from '@mui/material';

import styled from '@emotion/styled';
import { alpha } from '@mui/material/styles';
import merge from 'lodash/merge';

// components
// import SearchNotFound from '../SearchNotFound';
// import TableEmpty from '../TableEmpty';
import MainHead from './MainHead';
import { CustomChart } from './chart';
import ReactApexChart from 'react-apexcharts';
import mockData from '../mock/mockData';

// assets
import App1 from "../assets/placeholderAppsLogos/App1.svg";
import EcosystemLogo1 from "../assets/ecosystems/EcosystemLogo1.svg";


import { fNumber } from '../utils/format';
import { Client } from '../utils/client';
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


export default function MainTable({ search }) {
    const [state, setState] = useState({
        loading: true,
        total: 0,
        dapps: []
    });
    const [params, setParams] = useState({});
    const [offset, setOffset] = useState(0);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const client = new Client();
        params.offset = offset;

        if (!search) {
            params.search = undefined;
        }
        else if (params.search != search) {
            params.search = search;
            params.offset = 0;

            setOffset(0);
        }

        console.log(params);

        client.get('dapps', params).then((response) => {
            if (params.offset > 0) {
                setState({
                    loading: false,
                    total: response?.total,
                    dapps: [...state.dapps, ...response.list],
                });
            } else {
                setState({
                    loading: false,
                    total: response?.total,
                    dapps: response?.list,
                });
            }

            setNotFound(response.list.length === 0 && search);
        });
    }, [search, params, offset, setState]);

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
        tooltip: {
            enabled: false,
        },
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
        tooltip: {
            enabled: false,
        },
    });

    const paramsCallback = (new_params) => {
        setState({
            loading: true,
            total: 0,
            dapps: []
        });
        new_params.offset = 0;
        setOffset(0);
        setParams({
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
                    // minWidth: 800,
                    // width: 'max-content',
                    maxHeight: '86rem',
                }}
            // ref={tableEl}
            >
                <Table
                    stickyHeader
                    sx={{
                        "& .MuiTableRow-root:hover": {
                            backgroundColor: alpha('#919EAB', 0.2)
                        }
                    }}
                >

                    <MainHead paramsCallback={paramsCallback} />

                    <TableBody>
                        {state.dapps?.map((item, id) => {
                            const {
                                rank,
                                dapp,
                                url,
                                contributions,
                                developers,
                                activity_growth,
                                commits,
                                icon_data
                            } = item;

                            let activity = [];
                            let noActivity = true;

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

                                if (noActivity) {
                                    activity = [];
                                }
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
                                                paddingLeft: { xl: '3rem', lg: '1.5rem' },
                                                border: 'none',
                                                backgroundColor: 'tableColor.main'
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                noWrap
                                                sx={{
                                                    // maxWidth: {
                                                    //     xxl: '20rem',
                                                    //     xl: '20rem',
                                                    //     lg: '20rem',
                                                    //     md: '75%',
                                                    //     sm: '75%'
                                                    // },
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                {rank}
                                            </Typography>
                                        </TableCell>

                                        <TableCell
                                            align="left"
                                            component="th"
                                            scope="row"
                                            padding="none"
                                            sx={{
                                                height: '5rem',
                                                border: 'none',
                                                backgroundColor: 'tableColor.main'
                                            }}
                                        >
                                            <Stack direction='row' alignItems='center'>
                                                <Avatar
                                                    key={id}
                                                    src={icon_data}
                                                    alt=' '
                                                    sx={{
                                                        marginRight: {
                                                            xs: '0.5rem',
                                                            sm: '1rem',
                                                            md: '1rem',
                                                            lg: '1rem',
                                                            xl: '1rem',
                                                        },
                                                        marginTop: {
                                                            xs: '0.4rem',
                                                            sm: '0.2rem',
                                                            md: '0.2rem',
                                                            lg: '0.2rem',
                                                            xl: '0.2rem',
                                                        },
                                                        width: {
                                                            xs: '2rem',
                                                            sm: '2.5rem',
                                                            md: '2.5rem',
                                                            lg: '2.5rem',
                                                            xl: '2.5rem',
                                                        },
                                                        height: {
                                                            xs: '2rem',
                                                            sm: '2.5rem',
                                                            md: '2.5rem',
                                                            lg: '2.5rem',
                                                            xl: '2.5rem',
                                                        },
                                                    }}
                                                />
                                                <Typography
                                                    variant="subtitle2"
                                                    noWrap
                                                    sx={{
                                                        // maxWidth: {
                                                        //     xxl: '14rem',
                                                        //     xl: '14rem',
                                                        //     lg: '14rem',
                                                        //     md: '75%',
                                                        //     sm: '75%'
                                                        // },
                                                        maxWidth: '50%',
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                    }}
                                                >
                                                    <Link
                                                        target="_blank"
                                                        rel="noopener"
                                                        href={url}
                                                        color="inherit"
                                                    >
                                                        {dapp}
                                                    </Link>
                                                </Typography>
                                            </Stack>
                                        </TableCell>

                                        <TableCell
                                            align="left"
                                            component="th"
                                            scope="row"
                                            padding="none"
                                            sx={{
                                                border: 'none',
                                                backgroundColor: 'tableColor.main'
                                            }}
                                        >

                                            <img src={EcosystemLogo1} alt="app1" style={{ width: '2rem' }} />
                                        </TableCell>

                                        <TableCell
                                            align="left"
                                            component="th"
                                            scope="row"
                                            padding="none"
                                            sx={{
                                                border: 'none',
                                                backgroundColor: 'tableColor.main'
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                noWrap
                                                sx={{
                                                    // maxWidth: { xl: '18rem', lg: '10rem' },
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                {developers ? fNumber(developers) : ''}
                                            </Typography>
                                        </TableCell>

                                        <TableCell
                                            align="left"
                                            component="th"
                                            scope="row"
                                            padding="none"
                                            sx={{
                                                border: 'none',
                                                backgroundColor: 'tableColor.main'
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                noWrap
                                                sx={{
                                                    // maxWidth: { xl: '18rem', lg: '10rem' },
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                {contributions ? fNumber(contributions) : ''}
                                            </Typography>
                                        </TableCell>

                                        <TableCell
                                            align="left"
                                            component="th"
                                            scope="row"
                                            padding="none"
                                            sx={{
                                                border: 'none',
                                                paddingRight: '3rem',
                                                backgroundColor: 'tableColor.main'
                                            }}
                                        >
                                            {activity?.length > 0 && <ReactApexChart
                                                type="line"
                                                series={[
                                                    {
                                                        name: "Activity",
                                                        data: activity//activity ? activity : [],
                                                    },
                                                ]}
                                                options={growth_trend ? chartOptionsVerde : chartOptionsRosu}
                                                height={75}
                                                width={125}
                                            />}
                                        </TableCell>

                                        {/*
                                        <TableCell
                                            align="left"
                                            component="th"
                                            scope="row"
                                            padding="none"
                                            sx={{
                                                border: 'none',
                                                backgroundColor: 'tableColor.main'
                                            }}
                                        >
                                            <Typography variant="subtitle2" noWrap>
                                                {fNumber(days_until_expiration)} days
                                            </Typography>
                                        </TableCell>



                                        <TableCell
                                            align="left"
                                            component="th"
                                            scope="row"
                                            padding="none"
                                            sx={{
                                                border: 'none',
                                                backgroundColor: 'tableColor.main'
                                            }}
                                        >
                                            <Typography variant="subtitle2" noWrap>
                                                01/05/2024
                                            </Typography>
                                        </TableCell>
                                        */}

                                        <TableCell
                                            align="left"
                                            component="th"
                                            scope="row"
                                            padding="none"
                                            sx={{
                                                border: 'none',
                                                backgroundColor: 'tableColor.main'
                                            }}
                                        >
                                            <Typography variant="subtitle2" noWrap>
                                                2 followers
                                            </Typography>
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