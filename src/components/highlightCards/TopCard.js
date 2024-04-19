import { Box, Typography, Link, Stack } from "@mui/material"
import placeholder from '../../assets/box-placeholder.png'



const TopCard = ({ title, text, boxStyling, textStyling, link, isRightImage = false }) => {
    return (
        <Link
            sx={boxStyling}
            href={link}
            target="_blank"
            rel="noopener"
            underline="none"
        >
            <Stack
                direction='row'
                sx={{
                    alignItems: 'center'
                }}
            >
                <Typography sx={{ fontWeight: '600', fontSize: '20px', color: 'text.primary' }}>
                    {title}
                </Typography>
                {isRightImage &&
                    <img
                        src={placeholder}
                        alt="img"
                        style={{
                            width: '5rem',
                            marginLeft: 'auto',
                            marginRight: '1rem'
                        }}
                    />
                }

            </Stack>
            <Stack direction='row' sx={{ marginTop: '0.5rem' }}>
                {!isRightImage &&
                    <img
                        src={placeholder}
                        alt="img"
                        style={{
                            width: '5rem',
                            marginLeft: '2rem',
                        }}
                    />
                }
                <Typography sx={textStyling}>
                    {text}
                </Typography>
            </Stack>
        </Link>
    )
}
export default TopCard