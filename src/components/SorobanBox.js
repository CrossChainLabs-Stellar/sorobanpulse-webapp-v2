import { Box, Tab, Tabs, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles';

import LightBtn from '../assets/LightBtn.svg';
import DarkBtn from '../assets/DarkBtn.svg';

export default function SorobanBox({ value, handleChange, mode, setMode }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                marginTop: '5rem',
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
                    marginLeft: {
                        xxl: '14rem',
                        xl: '7rem',
                        lg_xl: '7rem',
                        lg: '4rem',
                        md: '4rem',
                        sm: '4rem',
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: theme.palette.tabsColors.selected,
                    },

                }}

            >
                <Tab
                    label="Stellar Highlights"
                    sx={{
                        textTransform: 'none',
                        color: theme.palette.tabsColors.main,
                        '&.Mui-selected': {
                            color: theme.palette.tabsColors.selected,
                        }
                    }}
                />
                <Tab
                    label="Soroban Metrics"
                    sx={{
                        textTransform: 'none',
                        color: theme.palette.tabsColors.main,
                        '&.Mui-selected': {
                            color: theme.palette.tabsColors.selected,
                        }
                    }}
                />
                <Tab
                    label="DApps"
                    sx={{
                        textTransform: 'none',
                        color: theme.palette.tabsColors.main,
                        '&.Mui-selected': {
                            color: theme.palette.tabsColors.selected,
                        }
                    }}
                />
            </Tabs>
            <IconButton
                sx={{
                    padding: 0,
                    marginRight: {
                        xxl: '16rem',
                        xl: '8rem',
                        lg_xl: '8rem',
                        lg: '5rem',
                        md: '5rem',
                        sm: '5rem',
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
