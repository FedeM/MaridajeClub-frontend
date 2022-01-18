import styles from './NavDesktop.module.css'
import {
    Link as LinkScroll
} from 'react-scroll'
import Link from 'next/link'
import Router from "next/router";
import Image from 'next/image'
import {isAuthenticate} from '../../../../lib/auth'



const NavDesktop = ({logo, home,cart}) => {
    

    return (
        <div className={styles.navDesktop_container}>
            <div className={styles.navDesktop_logo_container} onClick={()=> Router.push('/')}>
                <Image
                    src={logo}
                    className={styles.navDesktop_logo}
                    alt={"logo de maridaje club"}
                    layout='fill'
                    priority
                    objectFit="contain"
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
                                        </>
                                    ):(
                                        <Link href={'/session'}>
                                            <a className={`${styles.navDesktop_nav_li}`}>
                                                Ingresar
                                            </a>
                                        </Link>
                                    )
                                }
                                {
                                    cart && isAuthenticate() &&(
                                        <div className={styles.cart_icon} onClick={()=> Router.push('/cart')}>
                                            <Image src="/assets/img/icon/cart.png" alt="icono carrito" layout='fill' objectFit='contain'/>
                                        </div>
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
                                {
                                    cart && (
                                        <div className={styles.cart_icon} onClick={()=> Router.push('/cart')}>
                                            <Image src="/assets/img/icon/cart.png" alt="icono carrito" layout='fill' objectFit='contain'/>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                </ul>
            </nav>
        </div>
    );
};

export default NavDesktop;