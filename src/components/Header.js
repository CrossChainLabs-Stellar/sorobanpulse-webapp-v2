import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

import SorobanBox from './SorobanBox';

import logo from "../assets/logo.svg";

const HEIGHT = 92;


const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: HEIGHT,
    padding: theme.spacing(0, 5)
}));

const TextTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 600,
    lineHeight: theme.typography.h3.lineHeight,
    marginTop: '0.2rem'
}));


export default function Header({ value, handleChange, mode, setMode }) {

    return (
        <AppBar sx={{ boxShadow: 0, bgcolor: 'backgroundColor.main', }}>
            <ToolbarStyle disableGutters sx={{ height: '5em', padding: 0 }}>
                <Box
                    component="img"
                    src={logo}
                    alt=""
                    sx={{
                        maxWidth: 45,
                        marginRight: '0.7rem',
                        // marginLeft: {
                        //     xxl: '15.5rem',
                        //     xl: '8rem',
                        //     lg_xl: '8rem',
                        //     lg: '5.5rem',
                        //     md: '5.5rem',
                        //     sm: '5.5rem',
                        //     xs: '2rem',
                        // },
                        marginLeft: {
                            xxl: '24rem',
                            xl: '24rem',
                            lg_xl: '24rem',
                            lg: '4rem',
                            md: '4rem',
                            sm: '2rem',
                            xs: '2rem'
                        }
                    }}
                />
                <TextTypography>SorobanPulse</TextTypography>
            </ToolbarStyle>
            <SorobanBox value={value} handleChange={handleChange} mode={mode} setMode={setMode} />
        </AppBar>
    );
}
