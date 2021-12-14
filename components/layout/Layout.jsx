import Nav from "./nav/Nav";
import Head from "next/head";
import { useEffect, useState } from "react";
import style from '../../styles/layout/Layout.module.css'

const Layout = ({children, home, title, description, setNavHeigth}) => {
    const [header, setHeader] = useState('')
    
    useEffect(()=>{
        setHeader(document.getElementById('header').clientHeight)
        setNavHeigth(header)
    })
    
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta 
                    name="desciption"
                    content={description}
                />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="true"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" crossOrigin="true"/>
                
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;600;700;800;900&display=swap" crossOrigin="true"/>
            </Head>
            <header id="header" className={style.header}>
                <Nav/>
            </header>

            <main>{children}</main>

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
        </>
    );
};

export default Layout;

