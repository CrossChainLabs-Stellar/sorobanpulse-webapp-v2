import { Box, Typography } from "@mui/material"



const TopCard = ({ title, text, boxStyling, textStyling }) => {
    return (
        <Box sx={boxStyling}>
            <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>
                {title}
            </Typography>
            <Typography sx={textStyling}>
                {text}
            </Typography>
        </Box>
    )
}
export default TopCard