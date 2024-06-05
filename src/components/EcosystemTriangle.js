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
import Stellar from '../assets/ecosystems/EcosystemLogoStellar.svg';
import Soroban from '../assets/ecosystems/EcosystemLogoSoroban.svg';
import clearFilter from '../assets/clearFilter.svg';
import filter from '../assets/bara.svg';




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
                <img src={filter} alt='filter' />
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
                        width: '11rem',
                        backgroundColor: '#fff',
                    }}
                >
                    
                    <Paper
                        sx={{
                            backgroundColor: "#fff",
                            height: '7rem',
                        }}
                    >
                        <List
                        >
                            <MenuItem
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    height: '3rem',
                                }}
                                onClick={() => handleFilterClose('stellar')}
                            >
                                <img
                                    src={Stellar}
                                    alt="Stellar"
                                    style={{
                                        width: '2rem',
                                        marginRight: '0.75rem'
                                    }}
                                />
                                <Typography>
                                    Stellar
                                </Typography>
                            </MenuItem>

                            <MenuItem
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    height: '3rem',
                                }}
                                onClick={() => handleFilterClose('soroban')}
                            >
                                <img
                                    src={Soroban}
                                    alt="Soroban"
                                    style={{
                                        width: '2rem',
                                        marginRight: '0.75rem'
                                    }}
                                />
                                <Typography>
                                    Soroban
                                </Typography>
                            </MenuItem>
                        </List>
                    </Paper>
                </Box>
            </Menu>
        </>
    )
}
