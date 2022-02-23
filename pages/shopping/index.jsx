import { Layout } from '../../components/layout'

import {Shopping} from '../../components/views';

import { getAllCategories, getAllProducts } from '../../lib/service/products';


const Index = ({allProducts, categories}) => {
    

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
                products={allProducts}
                categories={categories}
            />
        </article>
        </Layout>
    );
};

export default Index;

export async function getServerSideProps (){
    let allProducts;
    let categories;

    try {
        allProducts = await getAllProducts()
        categories = await getAllCategories()
    } catch (error) {
        return{
            notFound: true
        };
    }

    return{
        props: {
            allProducts,
            categories
        }
    }
}