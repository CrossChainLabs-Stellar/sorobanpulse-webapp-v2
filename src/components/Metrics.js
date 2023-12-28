import { Grid, Box } from '@mui/material';
// import { useState, useEffect } from 'react';

import EcosystemGrowth from "./sections/EcosystemGrowth";
import ActiveProjects from "./sections/ActiveProjects";
import TopDevelopers from "./sections/TopDevelopers";
import ActiveDevelopers from "./sections/ActiveDevelopers";
import Developers from "./sections/Developers";
import Contributions from "./sections/Contributions";
import SmartContracts from "./sections/SmartContracts";
import SmartContractsBar from './sections/SmartContractsBar';


export default function Metrics() {

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
                    <EcosystemGrowth />
                </Grid>

                <Grid item xs={12} md={12} lg={8}>
                    <ActiveProjects />
                </Grid>


                <Grid item xs={12} md={12} lg={4}>
                    <Developers />
                </Grid>


                <Grid item xs={12} md={12} lg={8}>
                    <ActiveDevelopers />
                </Grid>

                <Grid item xs={12} md={12} lg={4}>
                    <TopDevelopers />
                </Grid>

                <Grid item xs={12} md={12} lg={8}>
                    <Contributions />
                </Grid>

                <Grid item xs={12} md={12} lg={4}>
                    <SmartContracts />
                </Grid>

                <Grid item xs={12} md={12} lg={8}>
                    <SmartContractsBar />
                </Grid>

            </Grid>

        </Box>
    );
}
