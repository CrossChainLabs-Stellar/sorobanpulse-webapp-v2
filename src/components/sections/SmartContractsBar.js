/** @module EcosystemChart **/
import merge from 'lodash/merge';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Typography, Stack } from '@mui/material';
import { CustomChart } from '../chart'
import { Client } from '../../utils/client';
import { number } from '../../utils/format';



const SmartContractsBar = () => {
    const [state, setState] = useState({
        loading: true,
        categories: [],
        total: 0,
        data: [
            { name: 'Active', data: [] },
            { name: 'Expired ', data: [] }
        ]
    });

    useEffect(() => {
        const client = new Client();

        client.get('active_contributors').then((response) => {
            let contributors = response;
            contributors.pop();
            if (contributors.length > 12) {
                contributors.splice(0, contributors.length - 12);
            }

            let total = 0;
            if (contributors.length > 0) {
                total = parseInt(contributors[contributors.length - 1].active_contributors_core) + parseInt(contributors[contributors.length - 1].active_contributors_ecosystem);
            }

            let coreData = [];
            let ecosystemData = [];
            let categories = [];

            contributors.forEach(item => {
                coreData.push(item.active_contributors_core ? item.active_contributors_core : 0);
                ecosystemData.push(item.active_contributors_ecosystem ? item.active_contributors_ecosystem : 0);
                categories.push(item.display_month.slice(0, -3));
            });

            setState({
                loading: false,
                categories: categories,
                total: total,
                data: [
                    { name: 'Active', data: coreData },
                    { name: 'Expired', data: ecosystemData }
                ]
            });
        });
    }, [setState]);

    const chartOptions = merge(CustomChart(), {
        chart: {
            stacked: true,
        },
        xaxis: {
            categories: state.categories,
            lables: {
                colors: ["#FDDA24", "#3E3385"],
            },
        },
        colors: ["#FDDA24", "#3E3385"],
        fill: {
            colors: ["#FDDA24", "#3E3385"],
            //colors: ["#F2C1B0", "#F15A24"],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 0,
            },
        },
        // stroke: {
        //   width: 2,
        //   colors: ["#F15A24", "#F2C1B0"],
        //   //colors: ["#F2C1B0", "#F15A24"],
        // },

    });

    return (
        <Card
            sx={{
                marginTop: '4rem',
                boxShadow: '0px 4px 4px 0px #00000040',
            }}
        >
            <CardHeader
                title={
                    <Stack direction='column'>
                        <Typography
                            sx={{
                                marginX: '1.4rem',
                                fontWeight: 600,
                                fontSize: '20px',
                            }}
                        >
                            Soroban Smart Contracts
                        </Typography>
                    </Stack>
                }
            />
            <Box sx={{ mt: 3, ml: 3, mr: 4, marginTop: '0rem', marginBottom: '1.5rem' }} dir="ltr">
                {/* <ReactApexChart type="bar" series={state.data} options={chartOptions} height={364} /> */}
                <ReactApexChart
                    type="bar"
                    series={state.data}
                    options={chartOptions}
                    height={390}
                />
            </Box>
        </Card>
    )
}
export default SmartContractsBar