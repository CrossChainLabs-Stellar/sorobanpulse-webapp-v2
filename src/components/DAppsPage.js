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
            marginTop: '8rem',
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
                            placeholder='Search by project'
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
                        <MainTable search={search} />
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}
export default DAppsPage