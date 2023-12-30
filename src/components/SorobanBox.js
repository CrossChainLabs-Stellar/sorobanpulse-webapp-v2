import { Box, Tab, Tabs } from '@mui/material'

export default function SorobanBox({ value, handleChange }) {


    return (
        <Box
            sx={{
                marginTop: '5rem',
                height: '3rem',
                backgroundColor: "#2A2A2A",
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                boxShadow: 0,
            }}
        >
            <Tabs value={value} onChange={handleChange} sx={{ marginLeft: { xl: '8rem', lg: '4rem' } }}>
                <Tab label="DApps" sx={{ textTransform: 'none' }} />
                <Tab label="Stellar Highlights" sx={{ textTransform: 'none' }} />
                <Tab label="Soroban Metrics" sx={{ textTransform: 'none' }} />
            </Tabs>
        </Box>
    )
}
