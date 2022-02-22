import Link from 'next/link';
import style from './Footer.module.css'


const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.links}>
                <Link href="/help/terms-and-conditions">
                    <a>Terminos y condiciones</a>
                </Link>
                <Link href="/help">
                    <a>Ayuda</a>
                </Link>
                <Link href="/help/consumer-defense">
                    <a>Defensa al consumidor</a>
                </Link>
                <Link href="/">
                    <a>Contáctanos</a>
                </Link>
            </div>
            <div className={style.copyright}>
                <p>Copyright 2021 © Maridaje Club</p>
            </div>
        </footer>
    );
};

export default Footer;