import { NavBar, Footer } from "../";
import Head from "next/head";
import style from './Layout.module.css'
import { CartContextProvider } from "../../../context/cartContext";


const Layout = ({children, title, description, home, cart, nav, footer}) => { 
    
    return (
        <CartContextProvider>
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
                        <NavBar
                            home={home}
                            cart={cart}
                        />
                    </header>
                ) 
            }

            <main>{children}</main>
            {
                footer && (
                    <Footer/>
                )
            }
        </CartContextProvider>
    );
};

export default Layout;

