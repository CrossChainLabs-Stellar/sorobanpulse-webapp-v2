/** @module EcosystemChart **/
import merge from 'lodash/merge';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Typography, Stack } from '@mui/material';
import { CustomChart } from '../chart'
import { Client } from '../../utils/client';
import { number } from '../../utils/format';
import { useTheme } from '@mui/material/styles';
import { convertToMonthName } from '../../utils/format';


const DAppsBar = () => {
    const [state, setState] = useState({
        loading: true,
        categories: [],
        total: 0,
        data: [
            { name: 'Soroban', data: [] },
            { name: 'Stellar ', data: [] }
        ]
    });

    const theme = useTheme();

    useEffect(() => {
        const client = new Client();

        client.get('dapps_chart').then((response) => {
            let contributors = response;
            if (contributors.length < 1) {
                return;
            }
            
            if (contributors.length > 12) {
                contributors.splice(0, contributors.length - 12);
            }

            let total = 0;
            if (contributors.length > 0) {
                total = parseInt(contributors[contributors.length - 1].soroban) + parseInt(contributors[contributors.length - 1].stellar);
            }

            let coreData = [];
            let ecosystemData = [];
            let categories = [];

            contributors.forEach(item => {
                coreData.push(item.soroban ? item.soroban : 0);
                ecosystemData.push(item.stellar ? item.stellar : 0);
                categories.push(convertToMonthName(item.month.slice(0, -3)));
            });

            setState({
                loading: false,
                categories: categories,
                total: total,
                data: [
                    { name: 'Stellar', data: ecosystemData },
                    { name: 'Soroban', data: coreData },
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
                colors: [theme.palette.chart.primary, theme.palette.chart.secondary],
            },
        },
        colors: [theme.palette.chart.secondary, theme.palette.chart.primary],
        fill: {
            colors: [theme.palette.chart.secondary, theme.palette.chart.primary],
            //colors: ["#F2C1B0", "#F15A24"],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 3,
                columnWidth: '25%'
            },
        },
        tooltip: {
            theme: theme.palette.mode
        }
        // stroke: {
        //   width: 2,
        //   colors: ["#F15A24", "#F2C1B0"],
        //   //colors: ["#F2C1B0", "#F15A24"],
        // },

    });

    return (
        <Card
            sx={{
                marginTop: '5rem',
                boxShadow: '0px 4px 4px 0px #00000040',
                backgroundColor: theme.palette.tableColor.card
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
                            Project Distribution
                        </Typography>
                        <Typography
                            variant='caption'
                            sx={{
                                marginX: '1.4rem',
                                color: 'text.secondary',
                                fontSize: '16px',
                            }}
                        >
                            {number(state.total)} vibrant and actively growing projects were added to the ecosystem last month
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
export default DAppsBar