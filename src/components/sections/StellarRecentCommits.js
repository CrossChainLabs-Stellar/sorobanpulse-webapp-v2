import { fToNow } from '../../utils/format';
import { Box, Stack, Card, Typography, CardHeader, Link } from '@mui/material';
import { alpha } from '@mui/material';

function CommitItem({ item }) {
    const { dev_name, repo, organisation, commit_hash, commit_date, avatar_url, message } = item;

    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
                height: '5rem',
                "&:hover": {
                    backgroundColor: alpha('#919EAB', 0.2)
                },
            }}
        >
            <Box component="img" src={avatar_url} sx={{ width: 30, height: 30, borderRadius: 1.5, marginLeft: '0.75rem' }} />

            <Box sx={{ minWidth: 240 }}>
                <Typography variant="body2" sx={{ color: 'text.primary', width: '65em' }} noWrap>
                    {message.indexOf('\n') > 0 ? message?.substring(0, message.indexOf('\n')) : message}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} justify="space-between">
                    <Typography variant="subtitle2" noWrap>
                        <Link
                            target="_blank"
                            color="inherit"
                            rel="noopener"
                            href={"https://github.com/" + dev_name}
                        >
                            {dev_name}
                        </Link>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        .
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                        <Link
                            target="_blank"
                            color="inherit"
                            rel="noopener"
                            href={"https://github.com/" + organisation + "/" + repo}
                        >
                            {organisation}/{repo}
                        </Link>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        .
                    </Typography>
                    <Typography variant="subtitle2" noWrap>
                        <Link
                            target="_blank"
                            color="inherit"
                            rel="noopener"
                            href={"https://github.com/" + organisation + "/" + repo + "/commit/" + commit_hash}
                        >
                            {commit_hash?.substring(0, 7)}
                        </Link>
                    </Typography>
                </Stack>
            </Box>

            <Box flexGrow={2}></Box>
            <Typography variant="caption" align="right" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
                {fToNow(commit_date)}
            </Typography>
        </Stack>
    );
}


const StellarRecentCommits = () => {
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
                    Recent commits
                </Typography>
            } />
            <Box
                sx={{
                    mb: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: '50em',
                    overflow: "hidden",
                    overflowY: "scroll",
                }}
            >
                <Stack sx={{ p: 3, pr: 0 }}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                        <CommitItem key={index} item={{ dev_name: 'placeholder', repo: 'placeholder_repo', organisation: 'org', commit_hash: '#123', commit_date: '', avatar_url: '', message: 'msg' }} />
                    ))}
                </Stack>
            </Box>
        </Card>
    )
}
export default StellarRecentCommits