import React, { useState } from 'react';

// material
import {
    Box,
    IconButton,
    Menu,
    List,
    MenuItem,
    Paper,
} from '@mui/material';



// assets
import Core from '../assets/Core.svg';
import Comunity from '../assets/Comunity.svg';
import clearFilter from '../assets/clearFilter.svg';
import filter from '../assets/bara.svg';




export default function SorobanEcosystemTriangle({ paramsCallback }) {
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
                    style={{ padding: 0, paddingTop: '0.10rem', marginLeft: '0.25rem' }}
                >
                    <img src={clearFilter} alt='clear' style={{ width: '20px', height: '20px' }} />
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
                                onClick={() => handleFilterClose('core')}
                            >
                                <img
                                    src={Core}
                                    alt="Core"
                                // style={{
                                //     width: '2rem',
                                //     marginRight: '0.75rem'
                                // }}
                                />
                            </MenuItem>

                            <MenuItem
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    height: '3rem',
                                }}
                                onClick={() => handleFilterClose('community')}
                            >
                                <img
                                    src={Comunity}
                                    alt="Comunity"
                                // style={{
                                //     width: '2rem',
                                //     marginRight: '0.75rem'
                                // }}
                                />
                            </MenuItem>
                        </List>
                    </Paper>
                </Box>
            </Menu>
        </>
    )
}
