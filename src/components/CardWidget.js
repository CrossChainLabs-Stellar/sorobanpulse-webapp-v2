import { Box, Card, Typography, } from '@mui/material';


const CardWidget = ({ name, value, subtitle }) => {
    return (
        <Card sx={{ display: 'flex', alignItems: 'center', p: 3, backgroundColor: "#BDB8FF" }}>
            <Box sx={{ flexGrow: 1, marginLeft: '1em' }}>
                <Typography align="left" variant="h6">{name}</Typography>
                <Typography align="left" variant="subtitle2">{subtitle}</Typography>
            </Box>
            <Typography align="right" variant="h3">{value}</Typography>
        </Card>
    )
}
export default CardWidget