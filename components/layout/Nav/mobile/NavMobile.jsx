import styles from './NavMobile.module.css'
import { useContext, useState } from 'react';
import Link from 'next/link'
import { isAuthenticate } from '../../../../lib/auth';
import Router from "next/router";
import Image from 'next/image'
import { CartPoppup } from '../../../common';
import CartContext from '../../../../context/CartContext';
import { useRouter } from 'next/router';


const NavMobile = ({logo, home, quantity, user}) => {
    const {pathname} = useRouter()

    const [openMenu, setOpenMenu] = useState(false);
    const [cartPoppup, setCartPoppup] = useState(false)
    const {countCart} = useContext(CartContext)



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
                <div className={styles.navMobile_logo_container} onClick={()=> Router.push('/')}>
                    <Image
                        src={logo}
                        className={styles.navMobile_logo}
                        alt={"logo de maridaje club"}
                        layout='fill'
                        priority
                    />
                </div>
                <div className={styles.navMobile_bar_content}>
                    <div className={styles.cart_icon} onClick={()=> setCartPoppup(true)}>
                        {
                            countCart > 0 &&(
                                <span className={styles.cart_marker}>{countCart}</span>
                            )
                        }
                        <Image src="/assets/img/icon/cart.png" alt="icono carrito" layout='fill' objectFit='contain'/>
                    </div>
                    <div className={`${styles.navMobile_menu} `} onClick={()=> displayMenu()} id="navMobile_menu">
                        <span></span>
                    </div>
                </div>
            </div>
            {
                openMenu ? 
                (
                <nav className={ `${styles.navMobile_nav} animate__animated animate__slideInDown animate__faster`} id="navMobile_nav">
                    <ul>
                        <>
                            <Link href={'/'} onClick={()=> displayMenu()}>
                                <a className={`${styles.navMobile_nav_li} ${pathname === "/" &&(styles.activeClass)}`}>
                                    Inicio
                                </a>
                            </Link>
                            <Link href={'/shopping'} onClick={()=> displayMenu()}>
                                <a className={`${styles.navMobile_nav_li } ${pathname.includes("/shopping") &&(styles.activeClass)}`}>
                                    Comprar
                                </a>
                            </Link>
                            {
                                isAuthenticate() ? (
                                    <>
                                        <Link href={'/profile/home'} onClick={()=> displayMenu()}>
                                            <a className={`${styles.navMobile_nav_li} ${pathname.includes("/profile") &&(styles.activeClass)}`}>
                                                Perfil
                                            </a>
                                        </Link>
                                    </>
                                ):(
                                    <Link href={'/session'} onClick={()=> displayMenu()}>
                                        <a className={`${styles.navMobile_nav_li} ${pathname === "/session" &&(styles.activeClass)}`}>
                                            Ingresar
                                        </a>
                                    </Link>
                                )
                            }
                        </>
                    </ul>
                </nav>
                ):("")
            }
            {
                cartPoppup &&(
                    <CartPoppup
                        close={()=> setCartPoppup(false)}
                    />
                )
            }
        </div>
    );
};

export default NavMobile;
