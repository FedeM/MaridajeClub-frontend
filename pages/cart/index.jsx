import React from 'react';
import Layout from '../../components/layout/Layout'
import style from '../.../../../styles/screens/cart/Cart.module.css'
import ArticlesDesktop from '../../components/screens/cart/articles/ArticlesDesktop';
import Checkout from '../../components/screens/cart/checkout/Checkout';

const Index = () => {
    return (
        <Layout
            title={'Shopping cart'}
            description={'Carrito de compras'}
            nav
        >
            <article className={style.article}>
                <section className={style.cart_section}>
                    <div className={style.side}>
                        <ArticlesDesktop/>
                    </div>
                    <div className={style.side}>
                        <Checkout/>
                    </div>
                </section>
            </article>
        </Layout>
    );
};

export default Index;