import React, { useState } from 'react';

// @mui
import { styled } from '@mui/material/styles';

import {
    Stack,
    Paper,
    OutlinedInput,
    InputAdornment,
    Typography,
} from '@mui/material';

// components
import Iconify from './Iconify';
import MainTable from './MainTable';


// assets
const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
    height: '2.5rem',
    width: '15.625rem',
    marginBottom: '0.313rem',
    fontSize: 15,
    /*[theme.breakpoints.down('xl')]: {
        height: 35,
        width: 200,
    }*/
}));

export default function ProjectsTable() {

    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <Paper className="container">
            <Stack
                style={{ backgroundColor: '#FFFFFF', height: '5rem', marginBottom: '2rem' }}
                direction="row"
                alignItems="bottom"
                justifyContent="space-between"
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        marginTop: '2.5rem',
                        marginLeft: '2.75rem',
                        fontSize: '20px'
                    }}
                >
                    Projects on Soroban
                </Typography>
                <SearchStyle
                    sx={{
                        marginLeft: "auto",
                        marginTop: 'auto',
                        marginBottom: '0.25rem',
                        marginRight: '2.25rem'
                    }}
                    value={search}
                    onChange={(e) => handleSearch(e)}
                    placeholder={"Search by project"}
                    startAdornment={
                        <InputAdornment position="start">
                            <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                        </InputAdornment>
                    }
                />
            </Stack>

            <MainTable search={search}/>

        </Paper >
    );
}