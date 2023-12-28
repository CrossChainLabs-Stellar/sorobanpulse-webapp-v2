/** @module TopDevelopers **/
import { useState, useEffect } from 'react';
import { Box, Stack, Card, Typography, CardHeader, Link, Select, MenuItem, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Client } from '../../utils/client';

const StyledInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 5,
        border: '1px solid #ced4da',
        paddingLeft: '0.5rem',
        paddingTop: '0rem',
        paddingBottom: '0rem',
        textAlign: 'center',
        fontSize: 13,
        height: '1.45rem',
    },

}));

function ContributorItem({ item }) {
    const { dev_name, avatar_url, contributions, is_core_developer } = item;

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Box
                component="img"
                src={avatar_url}
                sx={{
                    width: 45,
                    height: 45,
                    borderRadius: 1.5,
                    marginLeft: '1rem',
                }}
            />
            <Box
                sx={{
                    minWidth: {
                        xl: 200,
                        lg: 100,
                    },
                }}
            >
                <Typography variant="subtitle2" noWrap>
                    <Link
                        target="_blank"
                        color="inherit"
                        rel="noopener"
                        href={"https://github.com/" + dev_name}
                        underline='yes'
                        fontSize={15}
                    >
                        {dev_name}
                    </Link>
                </Typography>
            </Box>
            <Box flexGrow={2}></Box>
            <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary', fontSize: 14 }}>
                {contributions} commits
            </Typography>
        </Stack>
    );
}

/**
 * List of top 10 contributors of the month.
 */
function TopDevelopers() {
    const [state, setState] = useState({
        loading: true,
        top_contributors: []
    });

    const [selectedValue, setSelectedValue] = useState(3);

    useEffect(() => {
        const client = new Client();
        let endpoint = 'top_contributors';
        if (selectedValue === 1) {
            endpoint += '?type=community';
        } else if (selectedValue === 2) {
            endpoint += '?type=core';
        }

        client.get(endpoint).then((response) => {
            let top_contributors = response;
            setState({
                loading: false,
                top_contributors: top_contributors.slice(0, 10),
            });
        });
    }, [selectedValue, setState]);

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

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
                                fontWeight: 600,
                                marginX: '1.4rem',
                                fontSize: '20px',
                            }}
                        >
                            Top developers
                        </Typography>
                        <Typography
                            variant='caption'
                            sx={{
                                color: 'text.secondary',
                                marginX: '1.4rem',
                                fontSize: '15px',
                            }}
                        >
                            last 30 days
                        </Typography>
                    </Stack>
                }
                action={
                    <Select
                        value={selectedValue}
                        onChange={handleSelectChange}
                        defaultValue={3}
                        sx={{
                            width: '7rem',
                            marginRight: '0.3rem',
                        }}
                        input={<StyledInput />}
                        MenuProps={{
                            sx: {
                                "&& .Mui-selected": {
                                    backgroundColor: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#ffffff',
                                    },
                                    '&:active': {
                                        backgroundColor: '#ffffff',
                                    },
                                    '&:focus': {
                                        backgroundColor: '#ffffff',
                                    },
                                },
                                "&& .MuiList-root": {
                                    backgroundColor: '#ffffff',
                                }
                            }
                        }}
                    >
                        <MenuItem
                            value={1}
                            sx={{
                                backgroundColor: '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#ffffff',
                                },
                                fontSize: '15px',
                            }}
                        >
                            {'Community'}
                        </MenuItem>
                        <MenuItem
                            value={2}
                            sx={{
                                backgroundColor: '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#ffffff',
                                },
                                fontSize: '15px',
                            }}
                        >
                            {'Core'}
                        </MenuItem>
                        <MenuItem
                            value={3}
                            sx={{
                                backgroundColor: '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#ffffff',
                                },
                                fontSize: '15px',
                            }}
                        >
                            {'All'}
                        </MenuItem>
                    </Select>
                }
                sx={{
                    '& .MuiCardHeader-action': {
                        marginTop: '0.075rem',
                        marginRight: '0.5rem'
                    }
                }}
            />
            <Stack spacing={5} sx={{ p: 5, pt: 3.5, pr: 0, height: '25.25rem', overflowY: 'scroll' }}>
                {state.top_contributors?.map((item) => (
                    <ContributorItem key={item.dev_name} item={item} />
                ))}
            </Stack>
        </Card>
    );
}

export default TopDevelopers;
