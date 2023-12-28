import s from './s.module.css';
import { Link } from '@mui/material';
import DiscordLogo from '../assets/discord-mark-blue.svg'

export default function Footer() {
    return (
        <footer className={s.footer}>
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
