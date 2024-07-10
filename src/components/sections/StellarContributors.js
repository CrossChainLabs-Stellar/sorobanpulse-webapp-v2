import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, Typography, Stack } from '@mui/material';
import { number } from '../../utils/format';
import { CustomChart } from '../chart'


const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

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



const StellarContributors = () => {
    const chartOptions = merge(CustomChart(), {
        colors: [
            "#BDB8FF",
            "#0000EE"
        ],
        chart: {
            width: 500
        },
        labels: ['New', 'Active'],
        stroke: {
            colors: ['#FFFFFF'],
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
        <Card sx={{ marginTop: '3rem', boxShadow: '0px 8px 10px #00000040' }}>
            <CardHeader
                title={
                    <Stack direction='row'>
                        <Typography
                            sx={{
                                marginX: '1rem',
                                fontWeight: 600,
                                fontSize: '20px',
                            }}
                        >
                            Contributors
                        </Typography>
                        <Typography
                            variant='caption'
                            sx={{
                                marginLeft: '16rem',
                                marginTop: 'auto',
                                color: 'text.secondary',
                            }}
                        >
                            last 30 days
                        </Typography>
                    </Stack>
                }
            />
            <ChartWrapperStyle dir="ltr">
                <ReactApexChart type="donut" series={[19, 75]} options={chartOptions} height={310} />
            </ChartWrapperStyle>
        </Card>
    );
}
export default StellarContributors