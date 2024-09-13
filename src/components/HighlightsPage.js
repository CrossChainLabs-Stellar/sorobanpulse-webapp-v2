import { useState, useEffect } from "react";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Waypoint } from 'react-waypoint';

import HighlightsGridBig from "./HighlightsGridBig";
import HighlightsGridSmall from "./HighlightsGridSmall";
import TopCard from "./highlightCards/TopCard";
import NewsCards from "./highlightCards/NewsCards";
import { Client } from '../utils/client';

import fast from '../assets/fast-to-finality.svg';
import energy_efficient from '../assets/energy-efficient.svg';
import affordable from '../assets/affordable.svg';
import fastWhite from '../assets/fast-to-finality-white.svg';
import energy_efficient_white from '../assets/energy-efficient-white.svg';
import affordableWhite from '../assets/affordable-white.svg';

const HighlightsPage = () => {
    const mapper = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const topCardStyling = {
        boxShadow: 12,
        height: {
            xxl: '13rem',
            xl: '13rem',
            lg_xl: '13rem',
            lg: '13rem',
            md: '13rem',
            sm: '17rem',
            xs: '17rem'
        },
        width: '33rem',
        borderRadius: '10px',
        padding: '2rem',
        backgroundColor: 'highlightCards.primary',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
    };

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
            marginTop: '8rem',
            marginBottom: '5rem',
        }}
        >
            <Grid
                container
                spacing={3}
                sx={{
                    paddingY: '4rem',
                }}
            >

                <Grid
                    item
                    xs={12} md={12} lg={4}
                    sx={{
                        display: 'flex',
                        justifyContent: {
                            xxl: 'flex-start',
                            xl: 'flex-start',
                            lg_xl: 'flex-start',
                            lg: 'flex-start',
                            md: 'center',
                            sm: 'center',
                            xs: 'center'
                        },
                        alignItems: {
                            xxl: 'flex-start',
                            xl: 'flex-start',
                            lg_xl: 'flex-start',
                            lg: 'flex-start',
                            md: 'center',
                            sm: 'center',
                            xs: 'center'
                        },
                    }}
                >
                    <TopCard
                        title='Fast to Finality'
                        text='The Stellar network transactions are confirmed within 5 seconds, with all time average ledger speed at 5.19s'
                        boxStyling={topCardStyling}
                        textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                        link='https://stellar.org/sustainability'
                        image={theme.palette.mode === 'light' ? fast : fastWhite}
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
                        boxStyling={topCardStyling}
                        textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                        link='https://stellar.org/sustainability'
                        image={theme.palette.mode === 'light' ? energy_efficient : energy_efficient_white}
                    />
                </Grid>

                <Grid
                    item
                    xs={12} md={12} lg={4}
                    sx={{
                        display: 'flex',
                        justifyContent: {
                            xxl: 'flex-end',
                            xl: 'flex-end',
                            lg_xl: 'flex-end',
                            lg: 'flex-end',
                            md: 'center',
                            sm: 'center',
                            xs: 'center'
                        },
                        alignItems: {
                            xxl: 'flex-end',
                            xl: 'flex-end',
                            lg_xl: 'flex-end',
                            lg: 'flex-end',
                            md: 'center',
                            sm: 'center',
                            xs: 'center'
                        },
                    }}
                >
                    <TopCard
                        title='Affordable for Developers'
                        text='The Stellar network performs transactions for a fraction of a US penny, with the average transaction cost = 0.00005 XLM.'
                        boxStyling={topCardStyling}
                        textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                        link='https://stellar.org/sustainability'
                        image={theme.palette.mode === 'light' ? affordable : affordableWhite}
                    />
                </Grid>

            </Grid>

            <Box
                sx={{
                    backgroundColor: '#2A2A2A',
                    height: { xl: '45rem', lg: '50rem' },
                    opacity: theme.palette.mode === 'light' ? '0.9' : 1,
                    padding: '2rem',
                    borderRadius: '8px'
                }}
            >
                {matches ? <HighlightsGridSmall /> : <HighlightsGridBig />}

            </Box>

            <Typography
                sx={{
                    // marginLeft: {
                    //     xxl: '15.75rem',
                    //     xl: '8rem',
                    //     lg_xl: '8rem',
                    //     lg: '5.5rem',
                    //     md: '5.5rem',
                    //     sm: '5.5rem',
                    //     xs: '2rem'
                    // },
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
                    // paddingX: {
                    //     xxl: '8.25rem',
                    //     xl: '8rem',
                    //     lg_xl: '7.5rem',
                    //     lg: '4rem',
                    // }
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
                    let alignment = 'center';
                    if (matches) {
                        ok = index % 2;
                    }
                    else {
                        ok = index % 8 < 4;
                    }
                    // pt 3 => /3 %2
                    if (index % 4 === 0) {
                        alignment = 'flex-start'
                    }
                    if (index % 4 === 3) {
                        alignment = 'flex-end'
                    }
                    if (ok) {
                        return (
                            <React.Fragment key={index}>
                                <Grid
                                    item
                                    xs={12} md={12} lg={3}
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: alignment,
                                        alignItems: alignment,
                                    }}
                                >
                                    <NewsCards
                                        titleShort={source}
                                        titleLong={article_title}
                                        iconData={icon_data}
                                        articleImageData={article_image_data}
                                        mainColor='#000'
                                        secondaryColor='#fff'
                                        link={url}
                                        pubDate={pub_date}
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
                                        justifyContent: alignment,
                                        alignItems: alignment,
                                    }}
                                >
                                    <NewsCards
                                        titleShort={source}
                                        titleLong={article_title}
                                        iconData={icon_data}
                                        articleImageData={article_image_data}
                                        mainColor='#fff'
                                        secondaryColor='#000'
                                        link={url}
                                        pubDate={pub_date}
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