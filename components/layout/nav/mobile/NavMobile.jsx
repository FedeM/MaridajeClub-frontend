import styles from '../../../../styles/layout/nav/NavMobile.module.css'
import {
    Link as LinkScroll
} from 'react-scroll'
import { useState } from 'react';
import Link from 'next/link'

const NavMobile = ({logo, home}) => {
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
            <div className={styles.navMobile_bar} style={openMenu ? ({backgroundColor:"var(--global-primary-color)"}):({})}>
                <div className={styles.navMobile_logo_container}>
                    <img
                        src={logo}
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
                    {
                        home ? 
                        (
                            <>
                                <LinkScroll className={`${styles.navMobile_nav_li} ${styles.activeMobileLink}`} activeClass="activeMobileLink"  to="home"  spy={true} onClick={()=> displayMenu()}>Inicio</LinkScroll>
                                <LinkScroll className={`${styles.navMobile_nav_li}`} activeClass="activeMobileLink"  to="about"  spy={true} onClick={()=> displayMenu()}>Nostros</LinkScroll>
                                <LinkScroll className={`${styles.navMobile_nav_li}`} activeClass="activeMobileLink"  to="commerce"  spy={true} onClick={()=> displayMenu()}>Comprar</LinkScroll>
                                <Link  onClick={()=> displayMenu()} href={'/session'}>
                                    <a className={`${styles.navMobile_nav_li}`}>
                                        Ingresar
                                    </a>
                                </Link>
                            </>
                        )
                        :
                        (
                            <>
                                <Link  onClick={()=> displayMenu()} href={'/'}>
                                    <a className={`${styles.navMobile_nav_li}`}>
                                        Inicio
                                    </a>
                                </Link>
                            </>
                        )
                    }
                    </ul>
                </nav>
                ):("")
            }
        </div>
    );
};

export default NavMobile;