import { Grid, Typography } from "@mui/material"

import TopCard from "./highlightCards/TopCard"


const HightlightsGridBig = () => {
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
                    BTC
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
                    title='Speed'
                    text='tx 600 seconds'
                    boxStyling={{
                        boxShadow: 1,
                        height: { xl: '10rem', lg: '12rem' },
                        width: '33rem',
                        borderRadius: '10px',
                        padding: '2rem',
                        backgroundColor: 'highlightCards.primary',
                        cursor: 'pointer'
                    }}
                    textStyling={{ marginLeft: '2rem', marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                    title='Energy'
                    text='1201090 Wh/txn electricity consumed per transaction'
                    boxStyling={{
                        boxShadow: 1,
                        height: { xl: '10rem', lg: '12rem' },
                        width: '33rem',
                        borderRadius: '10px',
                        padding: '2rem',
                        backgroundColor: 'highlightCards.primary',
                        cursor: 'pointer'
                    }}
                    textStyling={{ marginLeft: '2rem', marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                    boxStyling={{
                        boxShadow: 1,
                        height: { xl: '10rem', lg: '12rem' },
                        width: '33rem',
                        borderRadius: '10px',
                        padding: '2rem',
                        backgroundColor: 'highlightCards.primary',
                        cursor: 'pointer'
                    }}
                    textStyling={{ marginLeft: '2rem', marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                    XML
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
                    title='Speed'
                    text='tx 5 seconds'
                    boxStyling={{
                        boxShadow: 1,
                        height: { xl: '10rem', lg: '12rem' },
                        width: '33rem',
                        borderRadius: '10px',
                        padding: '2rem',
                        backgroundColor: 'highlightCards.primary',
                        cursor: 'pointer'
                    }}
                    textStyling={{ marginLeft: '2rem', marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                    title='Energy'
                    text='0.173 Wh/txn electricity consumed per transaction'
                    boxStyling={{
                        boxShadow: 1,
                        height: { xl: '10rem', lg: '12rem' },
                        width: '33rem',
                        borderRadius: '10px',
                        padding: '2rem',
                        backgroundColor: 'highlightCards.primary',
                        cursor: 'pointer'
                    }}
                    textStyling={{ marginLeft: '2rem', marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                    text='$0.0000065'
                    boxStyling={{
                        boxShadow: 1,
                        height: { xl: '10rem', lg: '12rem' },
                        width: '33rem',
                        borderRadius: '10px',
                        padding: '2rem',
                        backgroundColor: 'highlightCards.primary',
                        cursor: 'pointer'
                    }}
                    textStyling={{ marginLeft: '2rem', marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                    ETH
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
                    title='Speed'
                    text='tx 12 seconds'
                    boxStyling={{
                        boxShadow: 1,
                        height: { xl: '10rem', lg: '12rem' },
                        width: '33rem',
                        borderRadius: '10px',
                        padding: '2rem',
                        backgroundColor: 'highlightCards.primary',
                        cursor: 'pointer'
                    }}
                    textStyling={{ marginLeft: '2rem', marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                    title='Energy'
                    text='30 Wh/txn electricity consumed per transaction'
                    boxStyling={{
                        boxShadow: 1,
                        height: { xl: '10rem', lg: '12rem' },
                        width: '33rem',
                        borderRadius: '10px',
                        padding: '2rem',
                        backgroundColor: 'highlightCards.primary',
                        cursor: 'pointer'
                    }}
                    textStyling={{ marginLeft: '2rem', marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
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
                    boxStyling={{
                        boxShadow: 1,
                        height: { xl: '10rem', lg: '12rem' },
                        width: '33rem',
                        borderRadius: '10px',
                        padding: '2rem',
                        backgroundColor: 'highlightCards.primary',
                        cursor: 'pointer'
                    }}
                    textStyling={{ marginLeft: '2rem', marginTop: '1rem', color: 'text.primary' }}
                    link='https://mui.com/material-ui/react-link/'
                />
            </Grid>

        </Grid>
    )
}
export default HightlightsGridBig