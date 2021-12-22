import { useState } from "react";
import Layout from "../../components/layout/Layout";
import CategoriesNav from "../../components/screens/ecommerce/categoriesNav/CategoriesNav";

const index = () => {
    const [navHeigth, setNavHeigth] = useState()

    return (
        <Layout
            title="Comprar"
            description="Compra de vinos y bebidas"
            setNavHeigth={setNavHeigth}
        >
        <article style={{marginTop:`${navHeigth}px`}}>
            <section>
                <CategoriesNav/>
            </section>
        </article>
        </Layout>
    );
};

export default index;