import { Layout } from '../../components/layout'

import { useState } from "react";
import {Shopping} from '../../components/views';

import {products as arrayProducts} from '../../lib/products'


const Index = () => {
    const [products, setProducts] = useState(arrayProducts)

    return (
        <Layout
            title="Comprar"
            description="Compra de vinos y bebidas"
            nav
            footer
            cart
        >
        <article style={{paddingTop:`15vh`}}>
            <Shopping
                products={products}
            />
        </article>
        </Layout>
    );
};

export default Index;