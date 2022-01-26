import Router from 'next/router';
import { useState } from 'react';
import { Layout } from '../../components/layout'
import { ListArticles, Checkout } from '../../components/views';

import { user } from '../../lib/user'; 

import style from '../../styles/pages/Cart.module.css'
import Image from 'next/image'


const Index = () => {
    const [cart, setCart] = useState(user.cart)

    return (
        <Layout
            title={'Shopping cart'}
            description={'Carrito de compras'}
            nav
        >
            <article className={style.article}>
                <section className={style.cart_section}>
                {
                    cart.length > 0 ?(
                        <>
                            <div className={style.side}>
                                <ListArticles
                                    cart={cart}
                                    setCart={setCart}
                                />
                            </div>
                            <div className={style.side}>
                                <Checkout/>
                            </div>
                        </>
                    ):(
                        <div className={style.empty_cart}>
                            <div className={style.title}>
                                <div className={style.title_img}>
                                    <Image src="/assets/img/icon/cart.png" layout='fill' objectFit='contain' alt="icon cart"/>
                                </div>
                                <h3>Tu carrito</h3>
                            </div>
                            <div className={style.empty_cart_text}>
                                <h4>Tu <span>carrito</span> está vacío</h4>
                                <p>
                                    ¿Quiéres comprar algo? No hay problema. <span onClick={()=> Router.push('/shopping')}>Haz click aquí</span> y visita nuestra tienda!
                                </p>
                            </div>
                        </div>
                    )
                }
                </section>
            </article>
        </Layout>
    );
};

export default Index;