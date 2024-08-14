import { Box, Stack, Card, Typography, CardHeader, Link } from '@mui/material';
import { Client } from '../../utils/client';
import { useState, useEffect } from 'react';


function ContributorItem({ item }) {
    const { dev_name, avatar_url, contributions } = item

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Box component="img" src={avatar_url} sx={{ width: 30, height: 30, borderRadius: 1.5 }} />
            <Box sx={{ minWidth: 240 }}>
                <Typography variant="subtitle2" noWrap>
                    <Link
                        target="_blank"
                        color="inherit"
                        rel="noopener"
                        href={"https://github.com/" + dev_name}>
                        {dev_name}
                    </Link>
                </Typography>
            </Box>
            <Box flexGrow={2}></Box>
            <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
                {contributions} commits
            </Typography>
        </Stack>
    );
}


const StellarTop = () => {
    const [state, setState] = useState({
        loading: true,
        top_contributors: []
    });

    useEffect(() => {
        const client = new Client();


        client.get('top_contributors_stellar').then((response) => {
            let top_contributors = response;
            setState({
                loading: false,
                top_contributors: top_contributors?.slice(0, 10),
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
                    Contributors of the month
                </Typography>
            } />
            <Stack spacing={5.37} sx={{ p: 5.4, pr: 0, height: '25.5rem', overflowY: 'scroll' }}>
                {state.top_contributors && state.top_contributors.map((item) => (
                    <ContributorItem key={item.dev_name} item={item} />
                ))}
            </Stack>
        </Card>
    )
}
export default StellarTop;