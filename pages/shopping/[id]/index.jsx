import { Layout } from '../../../components/layout'

import { useEffect, useState } from 'react';
import { ProductDetail } from '../../../components/views';

const Index = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
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
                <ProductDetail />
            </article>
        </Layout>
    );
};

export default Index;