import { Typography, Link, Stack } from "@mui/material";


const TopCard = ({ title, text, boxStyling, textStyling, link, image }) => {
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
                    <Typography sx={{ fontWeight: 600, fontSize: '20px', color: textStyling.color }}>
                        {title}
                    </Typography>

                    <Typography sx={textStyling}>
                        {text}
                    </Typography>
                </Stack>
                <img
                    src={image}
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
export default TopCard;