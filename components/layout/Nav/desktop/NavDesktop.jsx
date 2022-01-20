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
                                <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} activeClass={styles.activeClass} to="home"  spy={true} title='Inicio'><i className="fas fa-home"></i></LinkScroll>
                                <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} activeClass={styles.activeClass} to="slider"  spy={true} title='Volver a ver'><i className="fas fa-redo"></i></LinkScroll>
                                <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} activeClass={styles.activeClass} to="commerce"  spy={true} title='Comprar'><i className="fas fa-shopping-bag"></i></LinkScroll>
                                {
                                    isAuthenticate() ? (
                                        <>
                                            <Link href={'/profile'}>
                                                <a className={`${styles.navDesktop_nav_li}`} title='Perfil'>
                                                    <i className="fas fa-user"></i>
                                                </a>
                                            </Link>
                                        </>
                                    ):(
                                        <Link href={'/session'}>
                                            <a className={`${styles.navDesktop_nav_li}`} title='Iniciar sesión'>
                                                <i class="fas fa-sign-in-alt"></i>
                                            </a>
                                        </Link>
                                    )
                                }
                                {
                                    cart && isAuthenticate() &&(
                                        <Link href={'/shopping'}>
                                            <a className={`${styles.navDesktop_nav_li}`} title='Carrito'>
                                                <i class="fas fa-shopping-cart"></i>
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
                                    <a className={`${styles.navDesktop_nav_li}`} title='Inicio'>
                                        <i className="fas fa-home"></i>
                                    </a>
                                </Link>
                                {
                                    cart && isAuthenticate() &&(
                                        <Link href={'/shopping'}>
                                            <a className={`${styles.navDesktop_nav_li}`} title='Carrito'>
                                                <i class="fas fa-shopping-cart"></i>
                                            </a>
                                        </Link>
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