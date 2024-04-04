import { useState, useEffect } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import TopCard from "./highlightCards/TopCard";
import NewsCards from "./highlightCards/NewsCards";
import { Client } from '../utils/client';

const HighlightsPage = () => {
    const mapper = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xl'));

    const [news, setNews] = useState([]);

    useEffect(() => {
        const client = new Client();

        client.get('news').then((response) => {
            if (response?.length > 0) {
                setNews(response);
            }
        });
    }, [setNews]);

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
                            backgroundColor: 'highlightCards.primary'
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
                            backgroundColor: 'highlightCards.primary'
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
                        text='The Stellar network performs transactions for a fraction of a US penny, with the average transaction cost = 0.00005 XLM.'
                        boxStyling={{
                            boxShadow: 12,
                            height: { xl: '12rem', lg: '15rem' },
                            width: '33rem',
                            borderRadius: '10px',
                            padding: '2rem',
                            backgroundColor: 'highlightCards.primary'
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
                            text='tx 600 seconds'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: 'highlightCards.primary'
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
                            text='tx 5 seconds'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: 'highlightCards.primary'
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
                            text='tx 12 seconds'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: 'highlightCards.primary'
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
                            text='1201090 Wh/txn electricity consumed per transaction'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: 'highlightCards.primary'
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
                            text='0.173 Wh/txn electricity consumed per transaction'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: 'highlightCards.primary'
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
                            text='30 Wh/txn electricity consumed per transaction'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: 'highlightCards.primary'
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
                            text='$6.12'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: 'highlightCards.primary'
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
                            text='$0.0000065'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: 'highlightCards.primary'
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
                            text='$1.55'
                            boxStyling={{
                                boxShadow: 1,
                                height: { xl: '8rem', lg: '10rem' },
                                width: '33rem',
                                borderRadius: '10px',
                                padding: '2rem',
                                backgroundColor: 'highlightCards.primary'
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
                {news.map((item, index) => {
                    const {
                        url,
                        article_title,
                        pub_date,
                        source,
                        icon_data,
                        article_image_data,
                    } = item;

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
                                    titleShort={source}
                                    titleLong={article_title}
                                    iconData={icon_data}
                                    articleImageData={article_image_data}
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
                                    titleShort={source}
                                    titleLong={article_title}
                                    iconData={icon_data}
                                    articleImageData={article_image_data}
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