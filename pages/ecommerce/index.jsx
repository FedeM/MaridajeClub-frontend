import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Ecommerce from "../../components/screens/ecommerce/Ecommerce";

const index = () => {
    const [navHeigth, setNavHeigth] = useState()

    return (
        <Layout
            title="Comprar"
            description="Compra de vinos y bebidas"
            setNavHeigth={setNavHeigth}
        >
        <article style={{paddingTop:`15vh`}}>
            <Ecommerce/>
        </article>
        </Layout>
    );
};

export default index;