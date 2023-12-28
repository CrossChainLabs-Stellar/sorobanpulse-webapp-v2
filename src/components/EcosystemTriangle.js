import React, { useState } from 'react';

// material
import {
    Box,
    Stack,
    IconButton,
    Menu,
    List,
    MenuItem,
    Paper,
    Divider,
    Typography
} from '@mui/material';



// assets
import x from '../assets/x.svg';
import Community from '../assets/Community.svg';
import Core from '../assets/Core.svg';
import clearFilter from '../assets/clearFilter.svg';
import triunghi from '../assets/triunghi.svg';




export default function EcosystemTriangle({ paramsCallback }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isSorted, setIsSorted] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function handleFilterClose(ecosystem) {
        handleClose();
        setIsSorted(true);
        paramsCallback({ ecosystem: ecosystem });
    }

    return (
        <>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    padding: 0,
                    marginTop: '0.15rem'
                }}
            >
                <img src={triunghi} alt='triunghi' />
            </IconButton>
            {isSorted ?
                <IconButton
                    id="basic-button"
                    onClick={() => {
                        setIsSorted(false);
                        paramsCallback({ ecosystem: undefined });
                    }}
                    style={{ padding: 0, marginLeft: '0.25rem' }}
                >
                    <img src={clearFilter} alt='clear' />
                </IconButton> : ''
            }
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                MenuListProps={{
                    sx: {
                        backgroundColor: "#fff",
                        padding: '0px',
                    }
                }}
            >
                <Box
                    sx={{
                        width: '13rem',
                        backgroundColor: '#fff',
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{
                            height: '2.5rem'
                        }}
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: '500',
                                fontSize: '15px',
                                ml: '1rem',
                            }}
                        >
                            Filter by ecosystem
                        </Typography>
                        <IconButton onClick={handleClose} sx={{ marginLeft: 'auto', mr: '0.5rem' }}>
                            <img src={x} alt='x' />
                        </IconButton>
                    </Stack>
                    
                    <Paper
                        sx={{
                            backgroundColor: "#fff",
                            height: '7.5rem',
                        }}
                    >
                        <List
                        >
                            <MenuItem
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    height: '3rem',
                                }}
                                onClick={() => handleFilterClose('community')}
                            >
                                <img
                                    src={Community}
                                    alt="Community"
                                />
                            </MenuItem>
                            
                            <MenuItem
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    height: '3rem',
                                }}
                                onClick={() => handleFilterClose('core')}
                            >
                                <img
                                    src={Core}
                                    alt="Core"
                                />
                            </MenuItem>
                        </List>
                    </Paper>
                </Box>
            </Menu>
        </>
    )
}
