import { Box, Stack, Typography, Link } from "@mui/material"

import TimeAgo from "../../utils/TimeAgo";


const NewsCards = ({ titleShort, titleLong, iconData, articleImageData, mainColor, secondaryColor, link, pubDate }) => {

    function truncateLine(line, maxLength, addDots = true) {
        if (line.length > maxLength) {
            const words = line.split(' ');
            let truncatedLine = '';

            for (let i = 0; i < words.length; i++) {
                const word = words[i];
                if ((truncatedLine + ' ' + word).length <= maxLength) {
                    truncatedLine += (truncatedLine === '' ? '' : ' ') + word;
                } else {
                    break;
                }
            }

            if (addDots) {
                line = truncatedLine + ' ...';
            } else {
                line = truncatedLine + ' ...';
            }
        }

        return line;
    }


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
                <Typography sx={{ color: secondaryColor, marginLeft: '1rem', fontSize: '12px' }}>
                    {titleShort}
                </Typography>
                <Box
                    // render a black circle
                    component='div'
                    sx={{
                        marginLeft: '0.5rem',
                        marginRight: '0.5rem',
                        fontSize: '5px',
                        color: secondaryColor,
                    }}
                >
                    {`\u2B24`}
                </Box>
                <Typography sx={{ color: secondaryColor, fontSize: '12px' }}>
                    {truncateLine(`${TimeAgo(pubDate)}`, 12)}
                </Typography>
            </Stack>
            <Typography sx={{ color: secondaryColor, marginY: '1rem', fontWeight: 600, }}>
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
export default NewsCards;