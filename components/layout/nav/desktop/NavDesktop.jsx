import styles from '../../../../styles/layout/nav/NavDesktop.module.css'
import {
    Link as LinkScroll
} from 'react-scroll'
import Link from 'next/link'
import { isAuthenticate } from '../../../../lib/auth'
import Router from "next/router";
import Image from 'next/image'



const NavDesktop = ({logo, home}) => {
    
    const selectMenuItem = (e) =>{
        const marker = document.querySelector("#marker")

        marker.style.left = e.offsetLeft+"px";
        marker.style.width = e.offsetWidth+"px";
    }

    

    return (
        <div className={styles.navDesktop_container}>
            <div className={styles.navDesktop_logo_container} onClick={()=> Router.push('/')}>
                <Image
                    src={logo}
                    className={styles.navDesktop_logo}
                    alt={"logo de maridaje club"}
                    layout='fill'
                    priority
                />
            </div>
            <nav className={styles.navDesktop_nav}>
                <ul>
                    <div className={styles.navDesktop_nav_marker} id="marker"></div>
                    {
                        home ?
                        (
                            <>
                                <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} activeClass={styles.activeClass} to="home"  spy={true}>Inicio</LinkScroll>
                                <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} activeClass={styles.activeClass} to={"about" || "winaries"}  spy={true}>Nosotros</LinkScroll>
                                <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} activeClass={styles.activeClass} to="commerce"  spy={true}>Comprar</LinkScroll>
                                {
                                    isAuthenticate() ? (
                                        <>
                                            <Link href={'/profile'}>
                                                <a className={`${styles.navDesktop_nav_li}`}>
                                                    Perfil
                                                </a>
                                            </Link>
                                            <div className={styles.cart_icon} onClick={()=> Router.push('/cart')}>
                                                <Image src="/assets/img/icon/cart.png" alt="icono carrito" layout='fill' objectFit='contain'/>
                                            </div>
                                        </>
                                    ):(
                                        <Link href={'/session'}>
                                            <a className={`${styles.navDesktop_nav_li}`}>
                                                Ingresar
                                            </a>
                                        </Link>
                                    )
                                }
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