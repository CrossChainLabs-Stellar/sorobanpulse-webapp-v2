import { Box, Tab, Tabs, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles';

import LightBtn from '../assets/LightBtn.svg';
import DarkBtn from '../assets/DarkBtn.svg';

export default function SorobanBox({ value, handleChange, mode, setMode }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                // marginTop: {
                //     xs: '5.75rem',
                //     sm: '5rem',
                //     md: '5rem',
                //     lg: '5rem',
                //     lg_xl: '5rem',
                //     xl: '5rem',
                //     xxl: '5rem'
                // },
                height: '3rem',
                backgroundColor: "#2A2A2A",
                // width: '100%',
                display: 'flex',
                alignItems: 'center',
                boxShadow: 0,
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                    // marginLeft: {
                    //     xxl: '14rem',
                    //     xl: '7rem',
                    //     lg_xl: '7rem',
                    //     lg: '4rem',
                    //     md: '4rem',
                    //     sm: '4rem',
                    //     xs: '1rem',
                    // },
                    marginLeft: {
                        xxl: '24rem',
                        xl: '20rem',
                        lg_xl: '16rem',
                        lg: '4rem',
                        md: '4rem',
                        sm: '2rem',
                        xs: '2rem'
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: theme.palette.tabsColors.selected,
                    },

                }}

            >
                <Tab
                    label="dApps"
                    sx={{
                        textTransform: 'none',
                        color: theme.palette.tabsColors.main,
                        '&.Mui-selected': {
                            color: theme.palette.tabsColors.selected,
                        },
                        fontSize: '16px'
                    }}
                />
                <Tab
                    label="Soroban Metrics"
                    sx={{
                        textTransform: 'none',
                        color: theme.palette.tabsColors.main,
                        '&.Mui-selected': {
                            color: theme.palette.tabsColors.selected,
                        },
                        fontSize: '16px'
                    }}
                />
                {/* <Tab
                    label="Stellar Metrics"
                    sx={{
                        textTransform: 'none',
                        color: theme.palette.tabsColors.main,
                        '&.Mui-selected': {
                            color: theme.palette.tabsColors.selected,
                        },
                        fontSize: '16px'
                    }}
                /> */}
                <Tab
                    label="Highlights"
                    sx={{
                        textTransform: 'none',
                        color: theme.palette.tabsColors.main,
                        '&.Mui-selected': {
                            color: theme.palette.tabsColors.selected,
                        },
                        fontSize: '16px'
                    }}
                />

            </Tabs>
            <IconButton
                sx={{
                    padding: 0,
                    // marginRight: {
                    //     xxl: '16rem',
                    //     xl: '8rem',
                    //     lg_xl: '8rem',
                    //     lg: '5rem',
                    //     md: '5rem',
                    //     sm: '5rem',
                    //     xs: '1rem'
                    // },
                    marginRight: {
                        xxl: '24rem',
                        xl: '20rem',
                        lg_xl: '16rem',
                        lg: '4rem',
                        md: '4rem',
                        sm: '2rem',
                        xs: '2rem'
                    },
                    marginLeft: 'auto'
                }}
                onClick={() => setMode((prevState) => {
                    if (prevState === 'light') {
                        return 'dark';
                    }
                    return 'light';
                })}
            >
                <img
                    src={mode === 'light' ? DarkBtn : LightBtn}
                    style={{
                        width: '1.3rem',
                        height: '1.3rem',
                    }}
                    alt='switchTheme'
                />
            </IconButton>
        </Box>
    )
}
