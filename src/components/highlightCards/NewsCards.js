import { Box, Stack, Typography, Link } from "@mui/material"

import CardLogo from '../../assets/placeholderAppsLogos/CardLogo.svg';


const NewsCards = ({ titleShort, titleLong, iconData, articleImageData, mainColor, secondaryColor, link }) => {
    return (
        <Link
            underline="none"
            sx={{
                backgroundColor: mainColor,
                padding: '2rem',
                width: '23rem',
                height: '25rem',
                borderRadius: '5px',
                boxShadow: 12,
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
            }}
            href={link}
            target="_blank"
            rel="noopener"
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
            <img
                src={articleImageData}
                alt=''
                className='newsImage'
                style={{
                    marginTop: 'auto',
                    width: '100%',
                    height: '10rem'
                }}
            />
        </Link>
    )
}
export default NewsCards