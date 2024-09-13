import s from './s.module.css';
import { Link } from '@mui/material';
// import DiscordLogo from '../assets/discord-mark-blue.svg';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
// import XLogoDark from '../assets/XLogoDark.svg';

export default function Footer() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'));
    const responsivePadding = matches ? '4rem' : '8rem';

    return (
        <footer
            className={s.footer}
        // style={{ paddingLeft: responsivePadding, paddingRight: responsivePadding }}
        >
            <Link
                className={s.item}
                href="https://www.crosschainlabs.tech/meet-the-team/"
                target="_blank"
                rel="noopener"
                sx={{
                    marginRight: {
                        xxl: '4.5rem',
                        xl: '8rem',
                        lg_xl: '8rem',
                        lg: '4rem',
                        md: '4rem',
                        sm: '2rem',
                        xs: '2rem'
                    },
                }}
            >
                Powered by CrossChain Labs
            </Link>
            {/* <img src={XLogoDark} alt='discord' style={{ width: '1.5rem' }} /> */}
        </footer>
    );
}
