import s from './s.module.css';
import { Link } from '@mui/material';
import DiscordLogo from '../assets/discord-mark-blue.svg'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function Footer() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'));
    const responsivePadding = matches ? '4rem' : '6rem';

    return (
        <footer className={s.footer} style={{ paddingLeft: responsivePadding, paddingRight: responsivePadding }}>
            <Link
                className={s.item}
                href="https://www.crosschainlabs.tech/"
                target="_blank"
                rel="noopener"

            >
                Powered by CrossChain Labs
            </Link>
            <img src={DiscordLogo} alt='discord' style={{ width: '1.5rem' }} />
        </footer>
    );
}
