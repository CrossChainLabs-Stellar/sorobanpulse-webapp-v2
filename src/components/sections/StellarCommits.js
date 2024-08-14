import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Typography } from '@mui/material';
import { CustomChart } from '../chart'
import { useTheme } from '@mui/material/styles';
import { Client } from '../../utils/client';
import { number } from '../../utils/format';
import { convertToMonthName } from '../../utils/format';
import { useState, useEffect } from 'react';

const StellarCommits = () => {
    const theme = useTheme();

    const [state, setState] = useState({
        loading: true,
        categories: [],
        total: 0,
        data: [
            { name: 'Community ', data: [] },
            { name: 'Core', data: [] },
        ]
    });

    useEffect(() => {
        const client = new Client();

        client.get('commits_stellar').then((response) => {
            let commits = response;
            if (commits.length < 1) {
                return;
            }
            console.log(commits);
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
                categories.push(convertToMonthName(item.display_month.slice(0, -3)));
            });
            setState({
                loading: false,
                categories: categories,
                total: total,
                data: [
                    { name: 'Core', data: coreData },
                    { name: 'Community', data: ecosystemData },
                ]
            });
        });
    }, [setState]);

    const chartOptions = merge(CustomChart(), {
        xaxis: {
            categories: state.categories,
        },
        colors: ["#0000EE", '#000'],
        // stroke: {
        //   width: 2,
        //   colors: ["#F15A24", '#F2C1B0'],
        // },
        markers: {
            colors: ["#0000EE", '#000'],
            strokeColors: ["#0000EE", '#000'],
        },
        tooltip: {
            theme: theme.palette.mode
        }
    });
    const data = [
        { name: 'Repositories', data: [25, 25, 36, 1, 26, 3, 25] },
    ]
    return (
        <Card sx={{ marginTop: '3rem', boxShadow: '0px 8px 10px #00000040' }}>
            <CardHeader
                title={
                    <Typography
                        sx={{
                            marginX: '1rem',
                            fontWeight: 600,
                            fontSize: '20px',
                        }}
                    >
                        Commits
                    </Typography>
                }
            />
            <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
                <ReactApexChart type="bar" series={state.data} options={chartOptions} height={364} />
            </Box>
        </Card>
    );
}
export default StellarCommits;