import Layout from "../../components/layout/Layout";
import Ecommerce from "../../components/screens/ecommerce/Ecommerce";

const Index = () => {

    return (
        <Layout
            title="Comprar"
            description="Compra de vinos y bebidas"
            nav
            footer
        >
        <article style={{paddingTop:`15vh`}}>
            <Ecommerce/>
        </article>
        </Layout>
    );
};

export default Index;