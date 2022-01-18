import { Footer } from "../";
import Head from "next/head";
import style from './Layout.module.css'


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
                        
                    </header>
                ) 
            }

            <main>{children}</main>
            {
                footer && (
                    <Footer/>
                )
            }
        </>
    );
};

export default Layout;

