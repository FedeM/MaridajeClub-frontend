import style from './Footer.module.css'
const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.links}>
                <a href="">Terminos y condiciones</a>
                <a href="">Ayuda</a>
                <a href="">Defensa del consumidor</a>
                <a href="">Contáctanos</a>
            </div>
            <div className={style.copyright}>
                <p>Copyright 2021 © Maridaje Club</p>
            </div>
        </footer>
    );
};

export default Footer;