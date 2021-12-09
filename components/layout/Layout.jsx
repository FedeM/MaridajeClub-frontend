import Nav from "../nav/Nav";
import Head from "next/head";
import { useEffect, useState } from "react";
import style from '../../styles/Layout.module.css'

const Layout = ({children, home, title, description, setNavHeigth}) => {
    const [menuHeight, setMenuHeight] = useState({
        menu: "",
        heigth: 0
    })


    
    useEffect(()=>{
        if (menuHeight.menu === ''|| typeof menuHeight.heigth === 'undefined'|| menuHeight.heigth <= 70) {
            setMenuHeight({
                menu: document.getElementById('header'),
                heigth: menuHeight.menu.clientHeight
            })
        }
        setNavHeigth(menuHeight.heigth)
    }, [menuHeight])

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta 
                    name="desciption"
                    content={description}
                />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;600;700;800;900&display=swap" />
            </Head>
            <header id="header" className={style.header}>
                <Nav/>
            </header>

            <main>{children}</main>

            <footer>
            </footer>
        </>
    );
};

export default Layout;

