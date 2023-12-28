/** @module ContributionsChart **/
import merge from 'lodash/merge';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Typography, Stack } from '@mui/material';
import { CustomChart } from '../chart'
import { Client } from '../../utils/client';
import { number } from '../../utils/format';


/**
 * Line chart that displays the number of active developers and active repositories for each month over the last year.
 */
function Contributions() {
    const [state, setState] = useState({
        loading: true,
        categories: [],
        total: 0,
        data: [
            { name: 'Core', data: [] },
            { name: 'Community ', data: [] }
        ]
    });

    useEffect(() => {
        const client = new Client();

        client.get('commits').then((response) => {
            let commits = response;
            commits.pop();
            if (commits.length > 12) {
                commits.splice(0, commits.length - 12);
            }

            let total = 0;
            if (commits.length > 0) {
                total = parseInt(commits[commits.length - 1].commits_core) + parseInt(commits[commits.length - 1].commits_ecosystem);
            }

            let coreData = [];
            let ecosystemData = [];
            let categories = [];

            commits.forEach(item => {
                coreData.push(item.commits_core ? item.commits_core : 0);
                ecosystemData.push(item.commits_ecosystem ? item.commits_ecosystem : 0);
                categories.push(item.display_month.slice(0, -3));
            });

            setState({
                loading: false,
                categories: categories,
                total: total,
                data: [
                    { name: 'Core', data: coreData },
                    { name: 'Community', data: ecosystemData }
                ]
            });
        });
    }, [setState]);

    const chartOptions = merge(CustomChart(), {
        xaxis: {
            categories: state.categories,
        },
        colors: ["#FFDF42", "#3E3385"],
        // stroke: {
        //   width: 2,
        //   colors: ["#F15A24", '#F2C1B0'],
        // },
        markers: {
            colors: ["#FFDF42", "#3E3385"],
            strokeColors: ["#FFDF42", "#3E3385"],
        },
    });

    return (
        <Card
            sx={{
                marginTop: '4rem',
                boxShadow: '0px 4px 4px 0px #00000040',
            }}
        >
            <CardHeader title={
                <Stack direction='column'>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            marginX: '1.4rem',
                            fontSize: '20px',
                        }}
                    >
                        Contributions
                    </Typography>
                    <Typography
                        variant='caption'
                        sx={{
                            marginX: '1.4rem',
                            color: 'text.secondary',
                            fontSize: '16px',
                        }}
                    >
                        There are now {number(state.total)} monthly contributions in the ecosystem
                    </Typography>
                </Stack>
            }
            />
            <Box sx={{ mt: 3, ml: 3, mr: 4, marginTop: '0rem', marginBottom: '1.5rem' }} dir="ltr">
                <ReactApexChart
                    type="line"
                    series={state.data}
                    options={chartOptions}
                    height={364}
                />
            </Box>
        </Card>
    );
}

export default Contributions;

