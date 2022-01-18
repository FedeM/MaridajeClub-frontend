import { Layout } from '../../components/layout'
import { ListArticles, Checkout } from '../../components/views';

import style from '../../styles/pages/Cart.module.css'

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
                        <ListArticles/>
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