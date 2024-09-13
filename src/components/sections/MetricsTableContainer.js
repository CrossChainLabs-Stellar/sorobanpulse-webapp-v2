import React, { useState } from 'react';

// @mui
import { styled } from '@mui/material/styles';

import {
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
    width: '15.625rem',
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
            <Stack
                style={{ backgroundColor: '#FFFFFF' }}
                direction="row"
                alignItems="bottom"
                justifyContent="space-between"
            >
                <SearchStyle
                    sx={{
                        marginLeft: "auto",
                        marginY: '2rem',
                        marginRight: '2.75rem'
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

            <MetricsTable />

        </Paper >
    );
}