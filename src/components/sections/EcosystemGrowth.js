/** @module EcosystemGrowth **/
import { useState, useEffect } from 'react';
import { Stack, Card, Typography, CardHeader } from '@mui/material';
import TinyCircle from '../TinyCircle';
import { Client } from '../../utils/client';
import { number } from '../../utils/format';


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

    async function fetchData() {
        try {
            const client = new Client();

            let contributors = await client.get('active_contributors');
            contributors.pop();
            if (contributors.length > 12) {
                contributors.splice(0, contributors.length - 12);
            }

            let current_total_contributors = 0;
            let previous_total_contributors = 0;
            let ecosystem_growth_developers_value = 0;
            let ecosystem_growth_developers_percentage = 0;

            if (contributors.length >= 6) {
                current_total_contributors =
                    parseInt(contributors[contributors.length - 1].active_contributors_core) +
                    parseInt(contributors[contributors.length - 1].active_contributors_ecosystem);

                previous_total_contributors =
                    parseInt(contributors[contributors.length - 6].active_contributors_core) +
                    parseInt(contributors[contributors.length - 6].active_contributors_ecosystem);

                ecosystem_growth_developers_value = current_total_contributors - previous_total_contributors;
                ecosystem_growth_developers_percentage = (ecosystem_growth_developers_value / previous_total_contributors) * 100;
            }

            let active_repos = await client.get('active_repos');

            active_repos.pop();
            if (active_repos.length > 12) {
                active_repos.splice(0, active_repos.length - 12);
            }

            let current_total_projects = 0;
            let previous_total_projects = 0;
            let ecosystem_growth_projects_value = 0;
            let ecosystem_growth_projects_percentage = 0;

            if (active_repos.length >= 6) {
                current_total_projects =
                    parseInt(active_repos[active_repos.length - 1].active_repos_core) +
                    parseInt(active_repos[active_repos.length - 1].active_repos_ecosystem);

                previous_total_projects =
                    parseInt(active_repos[active_repos.length - 6].active_repos_core) +
                    parseInt(active_repos[active_repos.length - 6].active_repos_ecosystem);

                ecosystem_growth_projects_value = current_total_projects - previous_total_projects;
                ecosystem_growth_projects_percentage = (ecosystem_growth_projects_value / previous_total_projects) * 100;
            }


            let commits = await client.get('commits');

            commits.pop();
            if (commits.length > 12) {
                commits.splice(0, commits.length - 12);
            }

            let current_total_commits = 0;
            let previous_total_commits = 0;
            let ecosystem_growth_commits_value = 0;
            let ecosystem_growth_commits_percentage = 0;

            if (commits.length >= 6) {
                current_total_commits =
                    parseInt(commits[commits.length - 1].commits_core) +
                    parseInt(commits[commits.length - 1].commits_ecosystem);

                previous_total_commits =
                    parseInt(commits[commits.length - 6].commits_core) +
                    parseInt(commits[commits.length - 6].commits_ecosystem);

                ecosystem_growth_commits_value = current_total_commits - previous_total_commits;
                ecosystem_growth_commits_percentage = (ecosystem_growth_commits_value / previous_total_commits) * 100;
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
            <Stack spacing={3.37} sx={{ p: 5, pt: 0, pr: 0, height: '25.25rem', marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
                <Stack
                    direction="row"
                    sx={{
                        boxShadow: '0px 12px 24px -4px #0000001F',
                        width: '93%',
                        height: { xl: '30rem', lg: '19rem' },
                        borderRadius: '10px',
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
                            Monthly active projects
                        </Typography>
                    </Stack>

                </Stack>
                <Stack
                    direction="row"
                    sx={{
                        boxShadow: '0px 12px 24px -4px #0000001F',
                        width: '93%',
                        height: { xl: '30rem', lg: '19rem' },
                        borderRadius: '10px',
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
                                marginTop: 'auto'
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
                            Monthly active developers
                        </Typography>
                    </Stack>

                </Stack>
                <Stack
                    direction="row"
                    sx={{
                        boxShadow: '0px 12px 24px -4px #0000001F',
                        width: '93%',
                        height: { xl: '30rem', lg: '19rem' },
                        borderRadius: '10px',
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
                                marginTop: 'auto'
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
                            Monthly contributions
                        </Typography>
                    </Stack>

                </Stack>
            </Stack>
        </Card >
    );
}

export default EcosystemGrowth;
