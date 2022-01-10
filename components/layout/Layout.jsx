import Nav from "./nav/Nav";
import Head from "next/head";
import { useEffect, useState } from "react";
import style from '../../styles/layout/Layout.module.css'

const Layout = ({children, title, description, home, cart, nav, footer}) => { 
    
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta 
                    name="desciption"
                    content={description}
                />
            </Head>
            {
                nav &&(
                    <header id="header" className={style.header}>
                        <Nav
                            home={home}
                            cart={cart}
                        />
                    </header>
                ) 
            }

            <main>{children}</main>
            {
                footer && (
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
                )
            }
        </>
    );
};

export default Layout;

