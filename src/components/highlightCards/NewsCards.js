import { Box, Stack, Typography } from "@mui/material"

import CardLogo from '../../assets/placeholderAppsLogos/CardLogo.svg';


const NewsCards = ({ titleShort, titleLong, text, mainColor, secondaryColor }) => {
    return (
        <Box
            sx={{
                backgroundColor: mainColor,
                padding: '2rem',
                width: '22rem',
                height: '25rem',
                borderRadius: '5px',
                boxShadow: 1
            }}
        >
            <Stack direction='row' alignItems='center'>
                <img src={CardLogo} alt='logo' style={{ width: '2rem' }} />
                <Typography sx={{ color: secondaryColor, marginLeft: '1rem' }}>
                    {titleShort}
                </Typography>
            </Stack>
            <Typography sx={{ color: secondaryColor, marginY: '1rem' }}>
                {titleLong}
            </Typography>
            <Box
                sx={{
                    backgroundColor: secondaryColor,
                    padding: '1rem',
                    boxShadow: 1
                }}
            >
                <Typography sx={{ color: mainColor }}>
                    {text}
                </Typography>
            </Box>
        </Box>
    )
}
export default NewsCards