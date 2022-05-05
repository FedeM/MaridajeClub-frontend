import { Layout } from '../../../components/layout'

import { useEffect, useState } from 'react';
import { ProductDetail } from '../../../components/views';
import { getProduct } from '../../../lib/service/products';
// import { products as arrayProducts } from '../../../lib/products';

const Index = ({success, product, error}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted])


    return mounted &&(
        <Layout
            nav
            cart
            title={"Producto"}
            description={"Descripción"}
            footer
        >
            <article>
            {
                success &&(
                    <ProductDetail product={product}/>
                )
            }
            </article>
        </Layout>
    );
};

export default Index;



export async function getServerSideProps({params}){
    let product;

    try {
        product = await getProduct(params.id)

        //Comprobamos que el objeto esté vacio, de ser así devolvemos un error
        if (Object.keys(product).length === 0) {
            return {
                props:{
                    success: false,
                    error: "No se encontró el producto",
                    product: null
                }
            }
        }
    
    } catch (error) {
        return {
            props:{
                success: false,
                error: "Error de server",
                product: null
            }
        }
    }


    return {
        props:{
            success: true,
            product
        }
    }
}