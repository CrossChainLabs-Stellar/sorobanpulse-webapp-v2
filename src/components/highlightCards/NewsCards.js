import { Box, Stack, Typography } from "@mui/material"

import CardLogo from '../../assets/placeholderAppsLogos/CardLogo.svg';


const NewsCards = ({ titleShort, titleLong, iconData, articleImageData, mainColor, secondaryColor }) => {
    return (
        <Box
            sx={{
                backgroundColor: mainColor,
                padding: '2rem',
                width: '23rem',
                height: '25rem',
                borderRadius: '5px',
                boxShadow: 12
            }}
        >
            <Stack direction='row' alignItems='center'>
                <img src={iconData} alt='logo' style={{ width: '2rem' }} />
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
                <img
                    src={articleImageData}
                    alt=''
                    className='newsImage'
                />
            </Box>
        </Box>
    )
}
export default NewsCards