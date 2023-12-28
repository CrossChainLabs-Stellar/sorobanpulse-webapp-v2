/** @module EcosystemChart **/
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
function ActiveProjects() {
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

        client.get('active_repos').then((response) => {
            let repos = response;
            repos.pop();
            if (repos.length > 12) {
                repos.splice(0, repos.length - 12);
            }

            let total = 0;
            if (repos.length > 0) {
                total = parseInt(repos[repos.length - 1].active_repos_core) + parseInt(repos[repos.length - 1].active_repos_ecosystem);
            }

            let coreData = [];
            let ecosystemData = [];
            let categories = [];

            repos.forEach(item => {
                coreData.push(item.active_repos_core ? item.active_repos_core : 0);
                ecosystemData.push(item.active_repos_ecosystem ? item.active_repos_ecosystem : 0);
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
        colors: ["#FDDA24", "#002E5D"],
        // stroke: {
        //   width: 2,
        //   colors: ["#F15A24", '#F2C1B0'],
        // },
        markers: {
            colors: ["#FDDA24", "#002E5D"],
            strokeColors: ["#FDDA24", "#002E5D"],
        },
    });

    return (
        <Card
            sx={{
                marginTop: '4rem',
                boxShadow: '0px 4px 4px 0px #00000040'
            }}
        >
            <CardHeader title={
                <Stack direction='column'>
                    <Typography
                        sx={{
                            marginX: '1.4rem',
                            fontWeight: 600,
                            fontSize: '20px',
                        }}
                    >
                        Active projects
                    </Typography>
                    <Typography
                        variant='caption'
                        sx={{
                            marginX: '1.4rem',
                            color: 'text.secondary',
                            fontSize: '16px',
                        }}
                    >
                        There are now {number(state.total)} monthly active projects in the ecosystem
                    </Typography>
                </Stack>
            } />
            <Box sx={{ mt: 3, ml: 3, mr: 4, marginTop: '0rem', marginBottom: '1.5rem' }} dir="ltr">
                <ReactApexChart
                    type="line"
                    series={state.data}
                    options={chartOptions}
                    height={363}
                // width={1110}
                />
            </Box>
        </Card>
    );
}

export default ActiveProjects;

