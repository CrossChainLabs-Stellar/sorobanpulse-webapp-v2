// import { useState, useEffect } from 'react';
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
    LinearProgress
} from '@mui/material';

import merge from 'lodash/merge';

// components
// import SearchNotFound from '../SearchNotFound';
// import TableEmpty from '../TableEmpty';
import MetricsHead from './MetricsHead';
import { CustomChart } from '../chart';
import ReactApexChart from 'react-apexcharts';

// assets
import CirleRise from "../../assets/CircleRise.svg";
import CirleFall from "../../assets/CircleFall.svg";
import Comunity from "../../assets/Comunity.svg";
import Core from "../../assets/Core.svg";

// import { fNumber } from '../../utils/format';
// import { Client } from '../utils/client';


export default function MetricsTable() {
    // const [state, setState] = useState({
    //     loading: true,
    //     projects: []
    // });

    // useEffect(() => {
    //     const client = new Client();

    //     client.get('projects').then((response) => {
    //         let projects = response;

    //         setState({
    //             loading: false,
    //             projects: projects,
    //         });
    //     });
    // }, [setState]);

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


    return (
        <>
            <TableContainer
                sx={{
                    maxHeight: '86rem',
                }}
            >
                <Table stickyHeader>

                    <MetricsHead />

                    <TableBody>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, id) => {
                            // const {
                            //     name,
                            //     is_core_project,
                            //     active_contributors,
                            //     contributions,
                            //     developers,
                            //     commits
                            // } = item;

                            // let activeDevelopersPercentage;
                            // if (active_contributors === 0) {
                            //     activeDevelopersPercentage = 0;
                            // } else {
                            //     activeDevelopersPercentage = (active_contributors / developers) * 100;
                            // }

                            // let growth = 10;
                            // let graf = 'verde';
                            // let activity = [];
                            // /*if (commits?.length > 6) {
                            //     commits.pop();
                            //     commits.splice(0, commits.length - 6);
                            // }*/

                            return (
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
                                            {/* {fNumber(developers)} */}
                                            1
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
                                            {/* {name} */}
                                            placeholder
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

                                        {/* {is_core_project ?
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
                                        } */}
                                        <img
                                            src={Core}
                                            alt="Core"
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
                                            {/* {fNumber(developers)} */}
                                            3
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
                                            {/* {active_contributors} */}
                                            5
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
                                            // value={activeDevelopersPercentage}
                                            value={50}

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
                                            {/* {fNumber(contributions)} */}
                                            6
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
                                        {/* {growth >= 0 && (
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
                                                    {`+${growth}%`}
                                                </Typography>
                                            </Stack>
                                        )}

                                        {growth < 0 && (
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
                                                    {`${growth}%`}
                                                </Typography>
                                            </Stack>
                                        )} */}

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
                                                {`+${5}%`}
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
                                            paddingRight: '3rem',
                                            backgroundColor: id % 2 === 0 ? 'tableColor.main2' : 'tableColor.main1'
                                        }}
                                    >
                                        {/* {graf === "verde" && (
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

                                        {graf === "rosu" && (
                                            <ReactApexChart
                                                type="line"
                                                series={[
                                                    {
                                                        name: "Desktops",
                                                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                                                    },
                                                ]}
                                                options={chartOptionsRosu}
                                                height={75}
                                                width={125}
                                            />
                                        )} */}

                                        <ReactApexChart
                                            type="line"
                                            series={[
                                                {
                                                    name: "Desktops",
                                                    // data: activity,
                                                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                                                },
                                            ]}
                                            options={chartOptionsVerde}
                                            height={75}
                                            width={125}
                                        />

                                    </TableCell>

                                </TableRow>
                            );
                        })}
                    </TableBody>


                    {/* {isUserNotFound && !tableEmpty && !state.loading && (
                        <TableBody>
                            <TableRow>
                                <TableCell align="center" colSpan={11} sx={{ py: 3 }}>
                                    <SearchNotFound searchQuery={search} />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )}

                    {tableEmpty && !state.loading && (
                        <TableBody>
                            <TableRow>
                                <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                    <TableEmpty />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )} */}
                </Table>
            </TableContainer>
        </>
    );
}