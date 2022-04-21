import styles from './NavDesktop.module.css'
import {
    Link as LinkScroll
} from 'react-scroll'
import Link from 'next/link'
import Router from "next/router";
import Image from 'next/image'
import {isAuthenticate} from '../../../../lib/auth'
import {CartPoppup } from '../../../common';
import { useState, useContext } from 'react';
import CartContext from '../../../../context/cartContext';

import { useRouter } from 'next/router';


const NavDesktop = ({logo}) => {
    //Buscamos la dirección del path
    const {pathname} = useRouter()
    const [cartPoppup, setCartPoppup] = useState(false)
    const {countCart} = useContext(CartContext)


    const displayCart = ()=>{
        if (cartPoppup) {
            setCartPoppup(false)
        }else{
            setCartPoppup(true)
        }
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
                    objectFit="contain"
                />
            </div>
            <nav className={styles.navDesktop_nav}>
                <ul>
                    <Link href={'/'}>
                        <a className={`${styles.navDesktop_nav_li} ${pathname === "/" &&(styles.activeClass)}`} title='Home'>
                            <i className="fas fa-home"></i>
                        </a>
                    </Link>
                    <Link href={'/shopping '}>
                        <a className={`${styles.navDesktop_nav_li} ${pathname.includes("/shopping") &&(styles.activeClass)}`} title='Comprar'>
                            <i className="fas fa-shopping-bag"></i>
                        </a>
                    </Link>
                    {

                        isAuthenticate() ? (
                            <>
                                <Link href={'/profile/home'}>
                                    <a className={`${styles.navDesktop_nav_li} ${pathname.includes("/profile") &&(styles.activeClass)}`} title='Perfil'>
                                        <i className="fas fa-user"></i>
                                    </a>
                                </Link>
                            </>
                        ):(
                            <Link href={'/session'}>
                                <a className={`${styles.navDesktop_nav_li} ${pathname === "/session" &&(styles.activeClass)}`} title='Iniciar sesión'>
                                    <i className="fas fa-sign-in-alt"></i>
                                </a>
                            </Link>
                        )
                    }
                    <div onClick={()=> displayCart()}>
                        <div className={`${styles.navDesktop_nav_li} ${pathname === "/cart" &&(styles.activeClass)}`} title='Carrito'>
                            {
                                countCart > 0 &&(
                                    <span className={styles.cart_marker}>{countCart}</span>
                                )
                            }
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                </ul>
            </nav>
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

export default NavDesktop;

{/* <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} activeClass={styles.activeClass} to="home"  spy={true} title='Inicio'><i className="fas fa-home"></i></LinkScroll>
                    <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} activeClass={styles.activeClass} to="slider"  spy={true} title='Volver a ver'><i className="fas fa-redo"></i></LinkScroll>
                    <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} activeClass={styles.activeClass} to="commerce"  spy={true} title='Comprar'><i className="fas fa-shopping-bag"></i></LinkScroll> */}