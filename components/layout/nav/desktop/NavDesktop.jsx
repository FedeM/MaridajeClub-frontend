import styles from '../../../../styles/layout/nav/NavDesktop.module.css'
import {
    Link as LinkScroll
} from 'react-scroll'
import Link from 'next/link'
import { useState } from 'react/cjs/react.development';


const NavDesktop = ({logo, home}) => {

    
    const selectMenuItem = (e) =>{
        const marker = document.querySelector("#marker")

        marker.style.left = e.offsetLeft+"px";
        marker.style.width = e.offsetWidth+"px";
    }

    

    return (
        <div className={styles.navDesktop_container}>
            <div className={styles.navDesktop_logo_container}>
                <img
                    src={logo}
                    className={styles.navDesktop_logo}
                    alt={"logo de maridaje club"}
                />
            </div>
            <nav className={styles.navDesktop_nav}>
                <ul>
                    <div className={styles.navDesktop_nav_marker} id="marker"></div>
                    {
                        home ?
                        (
                            <>
                                <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} to="home"  spy={true} onClick={(e)=> selectMenuItem(e.target)}>Inicio</LinkScroll>
                                <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} to="about"  spy={true} onClick={(e)=> selectMenuItem(e.target)}>Nosotros</LinkScroll>
                                <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} to="commerce"  spy={true} onClick={(e)=> selectMenuItem(e.target)}>Comprar</LinkScroll>
                                <Link href={'/session'}>
                                    <a className={`${styles.navDesktop_nav_li}`}>
                                        Ingresar
                                    </a>
                                </Link>
                            </>
                        )
                        :
                        (
                            <>
                                <Link  onClick={()=> displayMenu()} href={'/'}>
                                    <a className={`${styles.navDesktop_nav_li}`}>
                                        Inicio
                                    </a>
                                </Link>
                            </>
                        )
                    }
                </ul>
            </nav>
        </div>
    );
};

export default NavDesktop;