import { Grid, Box } from '@mui/material';
// import { useState, useEffect } from 'react';

import DAppsBar from './sections/DAppsBar';
import DAppsDonut from './sections/DAppsDonut';
import MainTable from './MainTable';

const DAppsPage = () => {
    return (
        <Box sx={{
            marginX: {
                xxl: '24rem',
                xl: '20rem',
                lg: '8rem',
                lg_xl: '8rem',
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

                <Grid item xs={12} lg={12}>
                    <MainTable />
                </Grid>

            </Grid>

        </Box>
    )
}
export default DAppsPage