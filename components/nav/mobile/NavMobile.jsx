import styles from '../../../styles/nav/NavMobile.module.css'
import {
    Link as LinkScroll
} from 'react-scroll'
import { useState } from 'react';

const NavMobile = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const displayMenu = ()=>{
        const navMobile = document.getElementById('navMobile_nav')
        const navMobile_menu = document.getElementById('navMobile_menu')

        if (openMenu) {
            navMobile.classList.replace("animate__slideInDown", "animate__slideOutUp")
            navMobile_menu.classList.remove(`${styles.menuActive}`)
            setTimeout(()=>{
                navMobile.classList.replace("animate__slideOutUp", "animate__slideInDown")
                setOpenMenu(false)
            },500)
            
        }else{
            navMobile_menu.classList.add(`${styles.menuActive}`)
            setOpenMenu(true)
        }

    }

    return (
        <div className={styles.navMobile_container}>
            <div className={styles.navMobile_bar}>
                <div className={styles.navMobile_logo_container}>
                    <img
                        src="/logo/logo_blanco.png"
                        className={styles.navMobile_logo}
                        alt={"logo de maridaje club"}
                    />
                </div>
                <div className={`${styles.navMobile_menu} `} onClick={()=> displayMenu()} id="navMobile_menu">
                    <span></span>
                </div>
            </div>
            {
                openMenu ? 
                (
                <nav className={ `${styles.navMobile_nav} animate__animated animate__slideInDown animate__faster`} id="navMobile_nav">
                    <ul>
                        <LinkScroll className={`${styles.navMobile_nav_li} ${styles.activeMobileLink}`} activeClass="activeMobileLink"  to="home"  spy={true}>Inicio</LinkScroll>
                        <LinkScroll className={`${styles.navMobile_nav_li}`} activeClass="activeMobileLink"  to="home"  spy={true}>Eventos</LinkScroll>
                        <LinkScroll className={`${styles.navMobile_nav_li}`} activeClass="activeMobileLink"  to="home"  spy={true}>Nosotros</LinkScroll>
                        <LinkScroll className={`${styles.navMobile_nav_li}`} activeClass="activeMobileLink"  to="home"  spy={true}>Ingresar</LinkScroll>
                    </ul>
                </nav>
                ):("")
            }
        </div>
    );
};

export default NavMobile;