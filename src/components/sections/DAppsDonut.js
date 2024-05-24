/** @module Issues **/
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, Typography, Stack } from '@mui/material';
import { CustomChart } from '../chart'
import { number } from '../../utils/format';
import { useState, useEffect } from 'react';
import { Client } from '../../utils/client';
import { useTheme } from '@mui/material/styles';


const CHART_HEIGHT = 414;
const LEGEND_HEIGHT = 70;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
    height: CHART_HEIGHT,
    marginTop: theme.spacing(2),
    '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
    '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
        overflow: 'visible'
    },
    '& .apexcharts-legend': {
        height: LEGEND_HEIGHT,
        alignContent: 'center',
        position: 'relative !important',
        borderTop: `solid 1px ${theme.palette.divider}`,
        top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
    }
}));



const DAppsDonut = () => {
    const [state, setState] = useState({ loading: true, chartData: [0, 0] });

    const theme = useTheme();

    useEffect(() => {
        const client = new Client();
        client.get('dapps_statistics').then((statistics) => {
            let stellar = parseInt((statistics?.stellar) ? statistics?.stellar : 0);
            let soroban = parseInt((statistics?.soroban) ? statistics?.soroban : 0);

            setState({ loading: false, chartData: [soroban, stellar] });
        });
    }, [setState]);

    const chartOptions = merge(CustomChart(), {
        colors: [theme.palette.chart.primary, theme.palette.chart.secondary],
        chart: {
            width: 500
        },
        labels: ['Soroban', 'Stellar'],
        stroke: {
            colors: 'transparent',
            width: 10,
        },
        legend: { floating: true, horizontalAlign: 'center' },
        tooltip: {
            fillSeriesColor: true,
            y: {
                formatter: (seriesName) => number(seriesName),
                title: {
                    formatter: (seriesName) => `${seriesName}`
                }
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '85%',
                    labels: {
                        value: {
                            formatter: (val) => number(val)
                        },
                        total: {
                            formatter: (w) => {
                                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                return number(sum);
                            }
                        }
                    }
                }
            }
        },
    });
    return (
        <Card
            sx={{
                marginTop: '4rem',
                boxShadow: '0px 4px 4px 0px #00000040',
                backgroundColor: theme.palette.tableColor.card
            }}
        >
            <CardHeader
                title={
                    <Stack direction='column'>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                marginX: '1.4rem',
                                fontSize: '20px',
                            }}
                        >
                            DApps
                        </Typography>
                    </Stack>
                }

            />
            <ChartWrapperStyle dir="ltr">
                {/* <ReactApexChart type="donut" series={state.chartData} options={chartOptions} height={310} /> */}
                <ReactApexChart
                    type="donut"
                    series={state.chartData}
                    options={chartOptions}
                    height={310}
                />
            </ChartWrapperStyle>
        </Card>
    )
}
export default DAppsDonut