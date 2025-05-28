import React, { useState } from 'react';

// @mui
import { styled } from '@mui/material/styles';

import {
    Box,
    TextField,
    Stack,
    Paper,
    OutlinedInput,
    InputAdornment,
} from '@mui/material';

// components
import Iconify from '../Iconify';
import MetricsTable from './MetricsTable';

// assets



const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
    height: '2.5rem',
    width: '15rem',
    marginBottom: '0.313rem',
    fontSize: 15,
    /*[theme.breakpoints.down('xl')]: {
        height: 35,
        width: 200,
    }*/
}));





export default function MetricsTableContrainer() {

    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }


    return (
        <Paper className="container">
            <Box
                sx={{
                    marginTop: '3rem',
                    backgroundColor: 'tableColor.main1',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 4px 0px #00000040',
                    // border: 1,
                    // borderColor: 'tableColor.border',
                }}
            >
                <TextField
                    placeholder='Search by repository'
                    variant="outlined"
                    sx={{
                        marginLeft: "auto",
                        marginY: '2rem',
                        marginRight: '2.5rem',

                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderRadius: '4px',
                                borderColor: '#C8C8C8',
                            },
                            '&:hover fieldset': {
                                borderColor: '#C8C8C8',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#C8C8C8',
                            },
                        },
                    }}
                    value={search}
                    onChange={(e) => handleSearch(e)}
                    size='small'
                    InputProps={{
                        startAdornment:
                            <InputAdornment position="start">
                                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                            </InputAdornment>,
                    }}
                />
                <MetricsTable search={search}/>
            </Box>
        </Paper >
    );
}