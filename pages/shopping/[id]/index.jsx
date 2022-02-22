import { Layout } from '../../../components/layout'

import { useEffect, useState } from 'react';
import { ProductDetail } from '../../../components/views';
// import { products as arrayProducts } from '../../../lib/products';

const Index = ({success, id, error}) => {
    const [mounted, setMounted] = useState(false)
    const [product, setProduct] = useState([])
    

    console.log(product)

    useEffect(()=>{
        setMounted(true)
        // setProduct(arrayProducts.filter(e=> e.id == id))

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
            <article style={{marginTop: "15vh"}}>
                <ProductDetail product={product[0]}/>
            </article>
        </Layout>
    );
};

export default Index;



export async function getServerSideProps({params}){
    try {
        
        return {
            props:{
                success: true,
                id: params.id
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props:{
                success: false,
                error: "Error de server"
            }
        }
    }
}