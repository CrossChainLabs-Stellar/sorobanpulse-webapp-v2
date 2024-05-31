/** @module EcosystemGrowth **/
import { useState, useEffect } from 'react';
import { Stack, Card, Typography, CardHeader } from '@mui/material';
import TinyCircle from '../TinyCircle';
import { Client } from '../../utils/client';
import { number } from '../../utils/format';
import { useTheme } from '@mui/material/styles';


function EcosystemGrowth() {
    const [state, setState] = useState({
        loading: true,
        ecosystem_growth_developers_value: 0,
        ecosystem_growth_developers_percentage: 0,
        ecosystem_growth_projects_value: 0,
        ecosystem_growth_projects_percentage: 0,
        ecosystem_growth_commits_value: 0,
        ecosystem_growth_commits_percentage: 0
    });

    const theme = useTheme();

    async function fetchData() {
        try {
            const client = new Client();
            let statistics = await client.get('statistics');


            let ecosystem_growth_developers_value = 0;
            let ecosystem_growth_developers_percentage = 0;

            if (statistics?.new_contributors_last_6_months && statistics?.total_active_contributors_last_12_months) {
                ecosystem_growth_developers_value = statistics?.new_contributors_last_6_months;
                ecosystem_growth_developers_percentage = (ecosystem_growth_developers_value / statistics?.total_active_contributors_last_12_months) * 100;
            }


            let ecosystem_growth_projects_value = 0;
            let ecosystem_growth_projects_percentage = 0;

            if (statistics?.new_repos_last_6_months && statistics?.new_repos_last_12_months) {
                ecosystem_growth_projects_value = statistics?.new_repos_last_6_months;
                ecosystem_growth_projects_percentage = (ecosystem_growth_projects_value / statistics?.new_repos_last_12_months) * 100;
            }


            let ecosystem_growth_commits_value = 0;
            let ecosystem_growth_commits_percentage = 0;

            if (statistics?.new_commits_last_6_months && statistics?.new_commits_last_12_months) {
                ecosystem_growth_commits_value = statistics?.new_commits_last_6_months;
                ecosystem_growth_commits_percentage = (ecosystem_growth_commits_value / statistics?.new_commits_last_12_months) * 100;
            }

            return {
                ecosystem_growth_developers_value,
                ecosystem_growth_developers_percentage,
                ecosystem_growth_projects_value,
                ecosystem_growth_projects_percentage,
                ecosystem_growth_commits_value,
                ecosystem_growth_commits_percentage,
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData().then((response) => {
            setState({
                loading: false,
                ecosystem_growth_developers_value: response.ecosystem_growth_developers_value,
                ecosystem_growth_developers_percentage: response.ecosystem_growth_developers_percentage,
                ecosystem_growth_projects_value: response.ecosystem_growth_projects_value,
                ecosystem_growth_projects_percentage: response.ecosystem_growth_projects_percentage,
                ecosystem_growth_commits_value: response.ecosystem_growth_commits_value,
                ecosystem_growth_commits_percentage: response.ecosystem_growth_commits_percentage
            });
        });
    }, [setState]);
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
                                marginX: '1.4rem',
                                fontWeight: 600,
                                fontSize: '20px',
                            }}
                        >
                            Ecosystem growth
                        </Typography>
                        <Typography
                            variant='caption'
                            sx={{
                                marginX: '1.4rem',
                                color: 'text.secondary',
                                fontSize: '15px',
                            }}
                        >
                            last 6 months
                        </Typography>
                    </Stack>
                }
            />
            <Stack spacing={3.37} sx={{ p: 5, pt: 0, pr: 0, height: '25.25rem', marginTop: '-0.5rem', marginBottom: '0.45rem' }}>
            <Stack
                    direction="row"
                    sx={{
                        boxShadow: '0px 12px 24px -4px #0000001F',
                        width: '93%',
                        height: { xl: '29.5rem', lg: '18.5rem' },
                        borderRadius: '10px',
                        backgroundColor: '#fff'
                    }}
                >
                    <TinyCircle fillColor={state.ecosystem_growth_developers_value >= 0 ? "#00AB55" : "#EB5757"} innerProcent={number(state.ecosystem_growth_developers_percentage)} />
                    <Stack
                        direction="column"
                        sx={{ marginLeft: '1rem' }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '20px',
                                marginTop: 'auto',
                                color: '#333333'
                            }}
                        >
                            {state.ecosystem_growth_developers_value > 0 ? '+' : ''}{number(state.ecosystem_growth_developers_value)}
                        </Typography>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                fontWeight: 600,
                                marginBottom: 'auto'
                            }}
                            color="text.secondary"
                        >
                            New developers
                        </Typography>
                    </Stack>

                </Stack>
                <Stack
                    direction="row"
                    sx={{
                        boxShadow: '0px 12px 24px -4px #0000001F',
                        width: '93%',
                        height: { xl: '29.5rem', lg: '18.5rem' },
                        borderRadius: '10px',
                        backgroundColor: '#fff'
                    }}
                >
                    <TinyCircle fillColor={state.ecosystem_growth_projects_value >= 0 ? "#00AB55" : "#EB5757"} innerProcent={number(state.ecosystem_growth_projects_percentage)} />
                    <Stack
                        direction="column"
                        sx={{ marginLeft: '1rem' }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '20px',
                                marginTop: 'auto',
                                color: '#333333'
                            }}
                        >
                            {state.ecosystem_growth_projects_value > 0 ? '+' : ''}{number(state.ecosystem_growth_projects_value)}
                        </Typography>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                fontWeight: 600,
                                marginBottom: 'auto'
                            }}
                            color="text.secondary"
                        >
                            New projects
                        </Typography>
                    </Stack>

                </Stack>

                <Stack
                    direction="row"
                    sx={{
                        boxShadow: '0px 12px 24px -4px #0000001F',
                        width: '93%',
                        height: { xl: '29.5rem', lg: '18.5rem' },
                        borderRadius: '10px',
                        backgroundColor: '#fff'
                    }}
                >
                    <TinyCircle fillColor={state.ecosystem_growth_commits_value >= 0 ? "#00AB55" : "#EB5757"} innerProcent={number(state.ecosystem_growth_commits_percentage)} />
                    <Stack
                        direction="column"
                        sx={{ marginLeft: '1rem' }}
                    >

                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '20px',
                                marginTop: 'auto',
                                color: '#333333'
                            }}
                        >
                            {state.ecosystem_growth_commits_value > 0 ? '+' : ''}{number(state.ecosystem_growth_commits_value)}
                        </Typography>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                fontWeight: 600,
                                marginBottom: 'auto'
                            }}
                            color="text.secondary"
                        >
                            Contributions
                        </Typography>
                    </Stack>

                </Stack>
            </Stack>
        </Card >
    );
}

export default EcosystemGrowth;
