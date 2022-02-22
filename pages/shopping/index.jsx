import { Layout } from '../../components/layout'

import { useEffect, useState } from "react";
import {Shopping} from '../../components/views';

import { getAllProducts } from '../../lib/service/products';


const Index = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getAllProducts().then(data=>{
            if(data.error){
                console.log(error)
            }else{
                setProducts(data)
            }
        })

    }, [])

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