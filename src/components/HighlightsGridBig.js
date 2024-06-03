import { Grid, Typography } from "@mui/material"

import TopCard from "./highlightCards/TopCard";

import speed from '../assets/speed.svg';
import fee from '../assets/fee.svg';
import energy from '../assets/energy.svg';


const HighlightsGridBig = () => {
    const boxStyling = {
        boxShadow: 1,
        height: '10rem',
        width: '33rem',
        borderRadius: '10px',
        padding: '2rem',
        backgroundColor: 'highlightCards.primary',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
    };


    return (
        <Grid
            container
            spacing={3}
            sx={{
                paddingY: '2rem',
                paddingX: {
                    xxl: '3rem',
                    xl: '6rem',
                    lg_xl: '6rem',
                    lg: '2rem',
                }
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
                    text='tx 3600 seconds'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://ycharts.com/indicators/bitcoin_average_confirmation_time'
                    image={speed}
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
                    boxStyling={{ ...boxStyling, backgroundColor: '#ffff00' }}
                    textStyling={{ marginTop: '1rem', color: '#000' }}
                    link='https://stellar.org/sustainability'
                    image={speed}
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
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://ycharts.com/indicators/ethereum_average_block_time'
                    image={speed}
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
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://digiconomist.net/bitcoin-energy-consumption'
                    image={energy}
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
                    boxStyling={{ ...boxStyling, backgroundColor: '#ffff00' }}
                    textStyling={{ marginTop: '1rem', color: '#000' }}
                    link='https://stellar.org/sustainability'
                    image={energy}
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
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://digiconomist.net/ethereum-energy-consumption'
                    image={energy}
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
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://ycharts.com/indicators/bitcoin_average_transaction_fee'
                    image={fee}
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
                    boxStyling={{ ...boxStyling, backgroundColor: '#ffff00' }}
                    textStyling={{ marginTop: '1rem', color: '#000' }}
                    link='https://stellar.org/learn/lumens'
                    image={fee}
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
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://ycharts.com/indicators/ethereum_average_transaction_fee'
                    image={fee}
                />
            </Grid>

        </Grid>
    )
}
export default HighlightsGridBig;