import { Grid, Typography } from "@mui/material";


import { useTheme } from "@emotion/react";

import MiddleCard from "./highlightCards/MiddleCard";

import speed from '../assets/speed.svg';
import fee from '../assets/fee.svg';
import energy from '../assets/energy.svg';
import feeWhite from '../assets/feeWhite.svg';
import speedWhite from '../assets/speedWhite.svg';
import energyWhite from '../assets/energyWhite.svg';


const HightlightsGridBig = () => {
    const boxStyling = {
        boxShadow: 1,
        height: '10rem',
        width: '33rem',
        borderRadius: '10px',
        padding: '2rem',
        backgroundColor: 'highlightCards.primary',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '&: hover': {
            boxShadow: '0px 6px 30px 22px rgba(130,130,130,0.3)'
        }
    };

    const theme = useTheme();

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
                xs={12}
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
                        fontWeight: '600',
                        fontSize: '17px',
                    }}
                    align="center"
                >
                    Bitcoin BTC
                </Typography>
            </Grid>

            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <MiddleCard
                    title='Transaction Speed'
                    text='3,600 seconds'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://ycharts.com/indicators/bitcoin_average_confirmation_time'
                    image={theme.palette.mode === 'light' ? speed : speedWhite}
                />
            </Grid>

            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <MiddleCard
                    title='Energy Consumption'
                    text='1,201,090 Wh/txn'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://digiconomist.net/bitcoin-energy-consumption'
                    image={theme.palette.mode === 'light' ? energy : energyWhite}
                />
            </Grid>

            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <MiddleCard
                    title='Transaction Fee'
                    text='$6.12'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://ycharts.com/indicators/bitcoin_average_transaction_fee'
                    image={theme.palette.mode === 'light' ? fee : feeWhite}
                />
            </Grid>


            <Grid
                item
                xs={12}
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
                        fontWeight: '600',
                        fontSize: '17px',
                    }}
                    align="center"
                >
                    Stellar XLM
                </Typography >
            </Grid>

            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <MiddleCard
                    title='Transaction Speed'
                    text={<strong>5 seconds</strong>}
                    boxStyling={{ ...boxStyling, backgroundColor: '#f2cb00' }}
                    textStyling={{ marginTop: '1rem', color: '#000' }}
                    link='https://stellar.org/sustainability'
                    image={speed}
                />
            </Grid>

            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <MiddleCard
                    title='Energy Consumption'
                    text={<strong>0.173 Wh/txn </strong>}
                    boxStyling={{ ...boxStyling, backgroundColor: '#f2cb00' }}
                    textStyling={{ marginTop: '1rem', color: '#000' }}
                    link='https://stellar.org/sustainability'
                    image={energy}
                />
            </Grid>

            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <MiddleCard
                    title='Transaction Fee'
                    text={<strong>$0.0000065 </strong>}
                    boxStyling={{ ...boxStyling, backgroundColor: '#f2cb00' }}
                    textStyling={{ marginTop: '1rem', color: '#000' }}
                    link='https://stellar.org/sustainability'
                    image={fee}
                />
            </Grid>

            <Grid
                item
                xs={12}
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
                        fontWeight: '600',
                        fontSize: '17px',
                    }}
                    align="center"
                >
                    Ethereum ETH
                </Typography>
            </Grid>




            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <MiddleCard
                    title='Transaction Speed'
                    text='12 seconds'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://ycharts.com/indicators/ethereum_average_block_time'
                    image={theme.palette.mode === 'light' ? speed : speedWhite}
                />
            </Grid>




            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <MiddleCard
                    title='Energy Consumption'
                    text='30 Wh/txn'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://digiconomist.net/ethereum-energy-consumption'
                    image={theme.palette.mode === 'light' ? energy : energyWhite}
                />
            </Grid>




            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <MiddleCard
                    title='Transaction Fee'
                    text='$1.55'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://ycharts.com/indicators/ethereum_average_transaction_fee'
                    image={theme.palette.mode === 'light' ? fee : feeWhite}
                />
            </Grid>

        </Grid>
    )
}
export default HightlightsGridBig