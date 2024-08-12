import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Typography } from '@mui/material';
import { CustomChart } from '../chart';
import { useTheme } from '@mui/material/styles';
import { Client } from '../../utils/client';
import { useState, useEffect } from 'react';
import { convertToMonthName } from '../../utils/format';
import { number } from '../../utils/format';


const StellarEcosystem = () => {
    const theme = useTheme();
    const [state, setState] = useState({
        loading: true,
        categories: [],
        total: 0,
        data: [
            { name: 'Core', data: [] },
            { name: 'Community ', data: [] }
        ]
    });

    const chartOptions = merge(CustomChart(), {
        xaxis: {
            // categories: state.categories,
            lables: {
                colors: ["#0000EE", '#000'],
            },
        },
        colors: ["#0000EE", '#000'],
        fill: {
            colors: ["#0000EE", '#000'],
        },
        tooltip: {
            theme: theme.palette.mode
        }
    });

    useEffect(() => {
        const client = new Client();

        client.get('active_repos_stellar').then((response) => {
            let repos = response;
            if (repos.length < 1) {
                return;
            }
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
                categories.push(convertToMonthName(item.display_month.slice(0, -3)));
            });
            console.log(ecosystemData, coreData)
            setState({
                loading: false,
                categories: categories,
                total: total,
                data: [
                    { name: 'Community', data: ecosystemData },
                    { name: 'Core', data: coreData },
                ]
            });
        });
    }, [setState]);

    return (
        <Card sx={{ marginTop: '3rem', boxShadow: '0px 8px 10px #00000040' }}>
            <CardHeader title={
                <Typography
                    sx={{
                        marginX: '1rem',
                        fontWeight: 600,
                        fontSize: '20px',
                    }}
                >
                    Active Repositories
                </Typography>
            } />
            <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
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
export default StellarEcosystem