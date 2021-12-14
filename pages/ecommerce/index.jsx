import { useState } from "react";
import Layout from "../../components/layout/Layout";

const index = () => {
    const [navHeigth, setNavHeigth] = useState()

    return (
        <Layout
            title="Comprar"
            description="Compra de vinos y bebidas"
            setNavHeigth={setNavHeigth}
        >
        <article style={{marginTop:`${navHeigth}px`}}>
            
        </article>
        </Layout>
    );
};

export default index;