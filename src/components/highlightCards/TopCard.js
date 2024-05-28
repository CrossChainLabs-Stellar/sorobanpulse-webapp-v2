import { Typography, Link, Stack } from "@mui/material"
import placeholder from '../../assets/affordable.svg'



const TopCard = ({ title, text, boxStyling, textStyling, link, }) => {
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
                    width: '100%'
                }}
            >
                <Stack
                    direction='column'
                >
                    <Typography sx={{ fontWeight: 600, fontSize: '20px', color: 'text.primary' }}>
                        {title}
                    </Typography>
                    <Typography sx={textStyling}>
                        {text}
                    </Typography>
                </Stack>
                <img
                    src={placeholder}
                    alt="img"
                    style={{
                        width: '5rem',
                        height: '5rem',
                        marginLeft: 'auto',
                        // marginRight: '1rem',
                        marginTop: 'auto',
                        marginBottom: 'auto'
                    }}
                />
            </Stack>
        </Link>
    )
}
export default TopCard