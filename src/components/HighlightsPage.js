import { useState, useEffect } from "react";
import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Waypoint } from 'react-waypoint';

import HightlightsGridBig from "./HightlightsGridBig";
import TopCard from "./highlightCards/TopCard";
import NewsCards from "./highlightCards/NewsCards";
import { Client } from '../utils/client';

const HighlightsPage = () => {
    const mapper = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    //const [news, setNews] = useState([]);
    const [offset, setOffset] = useState(0);
    const [state, setState] = useState({
        total: 0,
        news: []
    });

    useEffect(() => {
        const client = new Client();

        client.get('news', { offset: offset }).then((response) => {
            if (offset > 0) {
                setState(prevState => ({
                    total: response?.total,
                    news: [...prevState.news, ...(response?.list || [])],
                }));
            } else {
                setState({
                    total: response?.total,
                    news: response?.list || [],
                });
            }
        });
    }, [offset]);

    const handleWaypointEnter = () => {
        if (offset < state.total) {
            setOffset(offset + 20);
        }
    };

    return (
        <Box sx={{
            marginBottom: '5rem',
        }}
        >
            <Grid
                container
                spacing={3}
                sx={{
                    paddingY: '4rem',
                    paddingX: {
                        xxl: '4.5rem',
                        xl: '8rem',
                        lg_xl: '8rem',
                        lg: '4rem',
                    },
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
                            height: { xl: '15rem', lg: '18rem' },
                            width: '33rem',
                            borderRadius: '10px',
                            padding: '2rem',
                            backgroundColor: 'highlightCards.primary',
                            cursor: 'pointer'
                        }}
                        textStyling={{ marginLeft: '2rem', marginTop: '2rem', color: 'text.primary' }}
                        isRightImage={true}
                        link='https://mui.com/material-ui/react-link/'
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
                            height: { xl: '15rem', lg: '18rem' },
                            width: '33rem',
                            borderRadius: '10px',
                            padding: '2rem',
                            backgroundColor: 'highlightCards.primary',
                            cursor: 'pointer'
                        }}
                        textStyling={{ marginLeft: '2rem', marginTop: '2rem', color: 'text.primary' }}
                        isRightImage={true}
                        link='https://mui.com/material-ui/react-link/'
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
                            height: { xl: '15rem', lg: '18rem' },
                            width: '33rem',
                            borderRadius: '10px',
                            padding: '2rem',
                            backgroundColor: 'highlightCards.primary',
                            cursor: 'pointer'
                        }}
                        textStyling={{ marginLeft: '2rem', marginTop: '2rem', color: 'text.primary' }}
                        isRightImage={true}
                        link='https://mui.com/material-ui/react-link/'
                    />
                </Grid>

            </Grid>

            <Box
                sx={{
                    backgroundColor: '#2A2A2A',
                    height: { xl: '45rem', lg: '50rem' },
                    opacity: theme.palette.mode === 'light' ? '0.9' : 1,
                    padding: '2rem'
                }}
            >
                <HightlightsGridBig />
            </Box>

            <Typography
                sx={{
                    marginLeft: {
                        xxl: '15.75rem',
                        xl: '8rem',
                        lg_xl: '8rem',
                        lg: '5.5rem',
                        md: '5.5rem',
                        sm: '5.5rem',
                    },
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
                    paddingX: {
                        xxl: '8.25rem',
                        xl: '8rem',
                        lg_xl: '7.5rem',
                        lg: '4rem',
                    }
                }}
            >
                {state.news.map((item, index) => {
                    const {
                        url,
                        article_title,
                        pub_date,
                        source,
                        icon_data,
                        article_image_data,
                    } = item;
                    let ok;
                    if (matches) {
                        ok = index % 2;
                    }
                    else {
                        ok = index % 8 < 4;
                    }
                    // pt 3 => /3 %2
                    if (ok) {
                        return (
                            <React.Fragment key={index}>
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
                                        link='https://mui.com/material-ui/react-link/'
                                    />
                                </Grid>
                                <Waypoint onEnter={handleWaypointEnter} />
                            </React.Fragment>
                        )
                    }
                    else {
                        return (
                            <React.Fragment key={index}>
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
                                        link='https://mui.com/material-ui/react-link/'
                                    />
                                </Grid>
                                <Waypoint onEnter={handleWaypointEnter} />
                            </React.Fragment>
                        )
                    }

                })}
            </Grid>

        </Box>
    )
}
export default HighlightsPage