import { Box, Tab, Tabs } from '@mui/material'
import { useTheme } from '@mui/material/styles';

export default function SorobanBox({ value, handleChange }) {
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
                    marginLeft: '4rem',
                    '& .MuiTabs-indicator': {
                        backgroundColor: theme.palette.tabsColors.selected,
                    },

                }}

            >
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
            </Tabs>
        </Box>
    )
}
