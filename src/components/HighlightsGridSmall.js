import { Grid, Typography } from "@mui/material"

import TopCard from "./highlightCards/TopCard";

import speed from '../assets/speed.svg';
import fee from '../assets/fee.svg';
import energy from '../assets/energy.svg';


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
                        fontWeight: '600'
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
                <TopCard
                    title='Transaction Speed'
                    text='600 seconds'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                <TopCard
                    title='Energy Consumption'
                    text='1201090 Wh/txn'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                <TopCard
                    title='Transaction Fee'
                    text='$6.12'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                        fontWeight: '600'
                    }}
                    align="center"
                >
                    Stellar XML
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
                <TopCard
                    title='Transaction Speed'
                    text={<strong>5 seconds</strong>}
                    boxStyling={{ ...boxStyling, backgroundColor: '#f2cb00' }}
                    textStyling={{ marginTop: '1rem', color: '#000' }}
                    link='https://mui.com/material-ui/react-link/'
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
                <TopCard
                    title='Energy Consumption'
                    text={<strong>0.173 Wh/txn </strong>}
                    boxStyling={{ ...boxStyling, backgroundColor: '#f2cb00' }}
                    textStyling={{ marginTop: '1rem', color: '#000' }}
                    link='https://mui.com/material-ui/react-link/'
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
                <TopCard
                    title='Transaction Fee'
                    text={<strong>$0.0000065 </strong>}
                    boxStyling={{ ...boxStyling, backgroundColor: '#f2cb00' }}
                    textStyling={{ marginTop: '1rem', color: '#000' }}
                    link='https://mui.com/material-ui/react-link/'
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
                        fontWeight: '600'
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
                <TopCard
                    title='Transaction Speed'
                    text='12 seconds'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                <TopCard
                    title='Energy Consumption'
                    text='30 Wh/txn'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                <TopCard
                    title='Transaction Fee'
                    text='$1.55'
                    boxStyling={boxStyling}
                    textStyling={{ marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
                    image={fee}
                />
            </Grid>

        </Grid>
    )
}
export default HightlightsGridBig