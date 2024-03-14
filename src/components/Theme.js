import { createTheme } from '@mui/material/styles';
import { pixelToRem, fontSizes } from '../utils/font';


const FONT_PRIMARY = 'Public Sans, sans-serif';

const getPallete = (mode) => {
    return mode === 'light' ? {
        // light theme
        primary: {
            main: '#fff'
        },
        secondary: {
            main: "#000"
        },
        text: {
            primary: '#000',
            secondary: '#888585'
        },
        blue: {
            main: '#006691',
        },
        tabsColors: {
            main: '#6d6d6d',
            selected: '#fff',
        },
        tableColor: {
            main: '#fff',
            border: '#C8C8C8',
            headerText: '#002E5D',
            card: '#fff',
        },
        linkColors: {
            logo: '#fff',
            main: '#000',
            secondary: '#3f3f3f',
            bold: '#5b5b5b',
        },
        searchBox: {
            main: '#fff',
        },
        backgroundColor: {
            main: '#f0f0f0',
        },
        chart: {
            stroke: '#fff',
            primary: '#FDDA24',
            secondary: '#3E3385',
        },
        highlightCards: {
            primary: '#fff'
        },
    } : {
        // dark theme
        primary: {
            main: '#1e1e1e'
        },
        secondary: {
            main: '#000'
        },
        text: {
            primary: '#fff',
            secondary: '#888585'
        },
        blue: {
            main: '#4ea0c2'
        },
        tabsColors: {
            main: '#aaa',
            selected: '#fff',
        },
        tableColor: {
            main: '#333333',
            border: '#000',
            headerText: '#000',
            card: '#121212',
        },
        linkColors: {
            logo: '#2e2e2e',
            main: '#d4d4d4',
            secondary: '#a7a7a7',
            bold: '#c1c1c1',
        },
        searchBox: {
            main: '#e1e1e1',
        },
        backgroundColor: {
            main: '#000',
        },
        chart: {
            stroke: 'transparent',
            primary: '#FDDA24',
            secondary: '#3E3385',
        },
        highlightCards: {
            primary: '#000'
        },
    }
}
export default function giveTheme(mode) {
    const usePallete = getPallete(mode);

    const defaultPallete = {
        success: {
            main: "#00AB55"
        },
        error: {
            main: '#EB5757'
        },
    };

    return createTheme({
        palette: { mode: mode, ...defaultPallete, ...usePallete },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1400,
                lg_xl: 1650,
                xl: 1900,
                xxl: 2560,
            },
        },
        typography: {
            fontFamily: FONT_PRIMARY,
            h3: {
                fontWeight: 700,
                lineHeight: 1.5,
                fontSize: pixelToRem(30),
                ...fontSizes({ sm: 26, md: 30, lg: 32 }),
            },
            h6: {
                fontWeight: 700,
                lineHeight: 28 / 18,
                fontSize: pixelToRem(17),
                ...fontSizes({ sm: 18, md: 18, lg: 18 }),
            },
            subtitle: {
                fontWeight: 600,
                lineHeight: 22 / 14,
                fontSize: pixelToRem(14),
            },
            body: {
                lineHeight: 22 / 14,
                fontSize: pixelToRem(14),
            },
        },
    })
};