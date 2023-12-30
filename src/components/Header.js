import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Grid, Box } from '@mui/material';

import logo from "../assets/logo.svg";

const HEIGHT = 92;


const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: HEIGHT,
    padding: theme.spacing(0, 5)
}));

const TextTypography = styled(Typography)(({ theme }) => ({
    color: "#000000",
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 600,
    lineHeight: theme.typography.h3.lineHeight,
    marginTop: '0.2rem'
}));


export default function Header() {

    return (
        <AppBar sx={{ boxShadow: 0, bgcolor: 'backgroundColor.main' }}>
            <ToolbarStyle disableGutters sx={{ height: '5em', padding: 0 }}>
                <Box
                    component="img"
                    src={logo}
                    alt=""
                    sx={{
                        maxWidth: 45,
                        marginRight: '0.7rem',
                        marginLeft: { xl: '8rem', lg: '4rem' }
                    }}
                />
                <TextTypography>SorobanPulse</TextTypography>
            </ToolbarStyle>
        </AppBar>
    );
}
