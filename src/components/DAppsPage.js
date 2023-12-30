import { Grid, Box, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';


import DAppsBar from './sections/DAppsBar';
import DAppsDonut from './sections/DAppsDonut';
import MainTable from './MainTable';

import Iconify from './Iconify';



const DAppsPage = () => {
    const [search, setSearch] = useState('');
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    return (
        <Box sx={{
            marginX: {
                xxl: '8rem',
                xl: '8rem',
                lg_xl: '6rem',
                lg: '4rem',
                md: '4rem',
                sm: '2rem',
            },
            marginBottom: '5rem'
        }}
        >
            <Grid container spacing={5}>

                <Grid item xs={12} md={12} lg={4}>
                    <DAppsDonut />
                </Grid>

                <Grid item xs={12} md={12} lg={8}>
                    <DAppsBar />
                </Grid>

                <Grid item xs={12} lg={12} >
                    <Box
                        sx={{
                            backgroundColor: 'tableColor.main',
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            border: 1,
                            borderRadius: '8px',
                            borderColor: '#C8C8C8',
                        }}
                    >
                        <TextField
                            placeholder='DApps Name'
                            variant="outlined"
                            sx={{
                                marginLeft: "auto",
                                marginY: '1rem',
                                marginRight: '1rem',

                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderRadius: '8px',
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
                        <MainTable />
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}
export default DAppsPage