import { Box, Grid } from '@mui/material';
import CardWidget from './CardWidget';
import StellarRecentCommits from './sections/StellarRecentCommits';
import StellarCommits from './sections/StellarCommits';
import StellarEcosystem from './sections/StellarEcosystem';
import StellarContributors from './sections/StellarContributors';
import StellarTop from './sections/StellarTop';
import StellarMetricsTableContainer from './sections/StellarMetricsTableContainer';

import { useState, useEffect } from 'react';

import { Client } from '../utils/client';
import { number } from '../utils/format';

const client = new Client();

const StellarPage = () => {

    const [state, setState] = useState({
        loading: true,
        commits: '',
        new_commits_last_week: '',
        repositories: '',
        new_repos_last_week: '',
        contributors: '',
        new_contributors_last_week: '',
        new_contributors_last_month: '',
        active_contributors: '',

    });
    useEffect(() => {
        setState({ loading: true });

        client.get('statistics').then((statistics) => {
            setState({
                loading: false,
                commits: statistics.commits_stellar,
                new_commits_last_week: statistics.new_commits_last_week_stellar,
                repositories: statistics.repos_stellar,
                new_repos_last_week: statistics.new_repos_last_week_stellar,
                contributors: statistics.contributors_stellar,
                new_contributors_last_week: statistics.new_contributors_last_week_stellar,
                new_contributors_last_month: statistics.new_contributors_last_month_stellar,
                active_contributors: statistics.active_contributors_stellar,
            })

        });
    }, [setState]);

    return (
        <Box sx={{
            marginTop: '12rem',
            marginBottom: '5rem'
        }}
        >
            <Grid
                container
                spacing={5}
            // sx={{ marginY: '2rem' }}
            >
                <Grid item xs={12} md={4}>
                    <CardWidget
                        name='Contributors'
                        value={((state.contributors) ? number(state.contributors) : ' ')}
                        subtitle={((state.new_contributors_last_week > 0) ?
                            ('+ ' + number(state.new_contributors_last_week)) + ' than last week' :
                            (state.new_contributors_last_month) ? ('+ ' + number(state.new_contributors_last_month)) + ' then last month'
                                : ' ')}
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <CardWidget
                        name='Repositories'
                        value={((state.repositories) ? number(state.repositories) : ' ')}
                        subtitle={((state.new_repos_last_week > 0) ?
                            ('+ ' + number(state.new_repos_last_week)) + ' than last week' :
                            (state.new_repos_last_month) ? ('+ ' + number(state.new_repos_last_month)) + ' then last month'
                                : ' ')}
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <CardWidget
                        name='Commits'
                        value={((state.commits) ? number(state.commits) : ' ')}
                        subtitle={((state.new_commits_last_week > 0) ?
                            ('+ ' + number(state.new_commits_last_week)) + ' than last week' :
                            (state.new_commits_last_month) ? ('+ ' + number(state.new_commits_last_month)) + ' then last month'
                                : ' ')}
                    />
                </Grid>
                <Grid item xs={12} md={3} lg={4}>
                    <StellarTop />
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <StellarEcosystem />
                </Grid>

                <Grid item xs={12} md={3} lg={4}>
                    <StellarContributors active_contributors={state.active_contributors} new_contributors_last_month={state.new_contributors_last_month} />
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <StellarCommits />
                </Grid>

                <Grid item xs={12} lg={12}>
                    <StellarMetricsTableContainer />
                </Grid>
            </Grid>

        </Box>
    )
}
export default StellarPage