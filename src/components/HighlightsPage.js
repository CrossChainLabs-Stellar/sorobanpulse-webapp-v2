import { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import TopCard from "./highlightCards/TopCard";
import NewsCards from "./highlightCards/NewsCards";

const HighlightsPage = () => {
    const mapper = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xl'));
    return (
        <Box sx={{
            marginBottom: '5rem',
        }}
        >
            <Grid
                container
                spacing={3}
                sx={{
                    paddingY: '2rem',
                    paddingX: { xl: '8rem', lg: '4rem' },
                }}
            >

                <Grid
                    item
                    xs={12} md={12} lg={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TopCard
                        title='Fast to Finality'
                        text='The Stellar network transactions are confirmed within 5 seconds, with all time average ledger speed at 5.19s'
                        boxStyling={{
                            boxShadow: 12,
                            height: { xl: '12rem', lg: '15rem' },
                            width: '33rem',
                            borderRadius: '10px',
                            padding: '2rem',
                            backgroundColor: '#fff'
                        }}
                        textStyling={{ marginLeft: '2rem', marginTop: '2rem', }}
                    />
                </Grid>

                <Grid
                    item
                    xs={12} md={12} lg={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TopCard
                        title='Energy-Efficient Design'
                        text='Research showed the Stellar network’s footprint is the equivalent to the greenhouse gas emissions from 33.7 US homes’ electricity use for one year.'
                        boxStyling={{
                            boxShadow: 12,
                            height: { xl: '12rem', lg: '15rem' },
                            width: '33rem',
                            borderRadius: '10px',
                            padding: '2rem',
                            backgroundColor: '#fff'
                        }}
                        textStyling={{ marginLeft: '2rem', marginTop: '2rem' }}
                    />
                </Grid>

                <Grid
                    item
                    xs={12} md={12} lg={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TopCard
                        title='Affordable for Developers'
                        text='The Stellar network performs transactions for a fraction of a US penny, with the average transaction cost = .000002 XLM.'
                        boxStyling={{
                            boxShadow: 12,
                            height: { xl: '12rem', lg: '15rem' },
                            width: '33rem',
                            borderRadius: '10px',
                            padding: '2rem',
                            backgroundColor: '#fff'
                        }}
                        textStyling={{ marginLeft: '2rem', marginTop: '2rem' }}
                    />
                </Grid>

            </Grid>

            <Box
                sx={{
                    backgroundColor: '#2A2A2A',
                    height: { xl: '40rem', lg: '45rem' },
                    opacity: theme.palette.mode === 'light' ? '0.9' : 1,
                    padding: '2rem'
                }}
            >

                <Grid
                    container
                    spacing={3}
                    sx={{
                        paddingY: '2rem',
                        paddingX: { xl: '6rem', lg: '2rem' }
                    }}
                >
                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#fff',
                                width: '33rem',
                                fontWeight: '600'
                            }}
                            align="center"
                        >
                            BTC
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#fff',
                                width: '33rem',
                                fontWeight: '600'
                            }}
                            align="center"
                        >
                            XML
                        </Typography >
                    </Grid>

                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#fff',
                                width: '33rem',
                                fontWeight: '600'
                            }}
                            align="center"
                        >
                            ETH
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TopCard
                            title='Speed'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: '#fff'
                            }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TopCard
                            title='Speed'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: '#fff'
                            }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TopCard
                            title='Speed'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: '#fff'
                            }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TopCard
                            title='Energy'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: '#fff'
                            }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TopCard
                            title='Energy'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: '#fff'
                            }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TopCard
                            title='Energy'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: '#fff'
                            }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TopCard
                            title='Transaction Fee'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: '#fff'
                            }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TopCard
                            title='Transaction Fee'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: '#fff'
                            }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={4} md={4} lg={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TopCard
                            title='Transaction Fee'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: '#fff'
                            }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                </Grid>
            </Box>

            <Typography
                sx={{
                    marginLeft: '5.5rem',
                    marginTop: '3rem',
                    fontSize: '24px',
                    fontWeight: '600'
                }}
            >
                News Feed
            </Typography>


            <Grid
                container
                // spacing={matches ? 8 : 12}
                spacing={3}
                sx={{
                    paddingY: '2rem',
                    paddingX: { xl: '8rem', lg: '4rem' }
                }}
            >
                {mapper.map((item, index) => {
                    if (index % 8 < 4) {
                        return (
                            <Grid
                                item
                                xs={12} md={12} lg={3}
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <NewsCards
                                    titleShort='Crypto News'
                                    titleLong='Stellar initiates security audits for imminent Soroban smart contracts platform'
                                    text='The Stellar Development Foundation is set to enhance its blockchain offerings with Soroban, a new smart contract platform, currently in...'
                                    mainColor='#000'
                                    secondaryColor='#fff'
                                />
                            </Grid>
                        )
                    }
                    else {
                        return (
                            <Grid
                                item
                                xs={12} md={12} lg={3}
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <NewsCards
                                    titleShort='Crypto News'
                                    titleLong='Stellar initiates security audits for imminent Soroban smart contracts platform'
                                    text='The Stellar Development Foundation is set to enhance its blockchain offerings with Soroban, a new smart contract platform, currently in...'
                                    mainColor='#fff'
                                    secondaryColor='#000'
                                />
                            </Grid>
                        )
                    }

                })}
            </Grid>

        </Box>
    )
}
export default HighlightsPage