/** @module Issues **/
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { styled } from '@mui/material/styles';
import { CustomChart } from './chart';
// import { number } from '../utils/format';
// import { useState, useEffect } from 'react';


const CHART_HEIGHT = 110;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
    height: CHART_HEIGHT,
    width: '7rem',
    // marginLeft: 'auto',
    // marginRight: '2rem',
    // marginTop: theme.spacing(2),
    '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
    '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
        overflow: 'visible'
    },
}));

/**
 * Pie chart that displays the number of issues.
 */
function TinyCircle({ fillColor, innerProcent }) {

    const chartOptions = merge(CustomChart(), {
        colors: ["#E9EBEE"],
        chart: {
            // width: 10,
            type: 'radialBar',
        },
        legend: {
            show: false,
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '60%',
                },
                dataLabels: {
                    show: true,
                    total: {
                        show: false
                    },
                    name: {
                        show: false,
                    },
                    value: {
                        show: true,
                        fontSize: '18px',
                        fontWeight: 600,
                        formatter: function (val) {
                            return (100 - val) + '%';
                        }
                    },
                },
                track: {
                    show: true,
                    background: fillColor,
                },
            },
        },
    });

    return (
        <ChartWrapperStyle dir="ltr">
            {/* <ReactApexChart type="donut" series={state.chartData} options={chartOptions} height={310} /> */}
            <ReactApexChart
                type="radialBar"
                series={[100 - innerProcent]}
                options={chartOptions}
                height={145}
            />
        </ChartWrapperStyle>
    );
}

export default TinyCircle;