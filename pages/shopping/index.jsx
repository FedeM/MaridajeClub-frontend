import { Layout } from '../../components/layout'

import {Shopping} from '../../components/views';

import { getAllCategories, getAllProducts } from '../../lib/service/products';

import {useRouter} from 'next/router'

const Index = ({allProducts, categories}) => {
    

    return (
        <Layout
            title="Comprar"
            description="Compra de vinos y bebidas"
            nav
            footer
            cart
        >
        <article>
            <Shopping
                products={allProducts}
                categories={categories}
            />
        </article>
        </Layout>
    );
};

export default Index;

export async function getServerSideProps ({params}){
    let allProducts;
    let categories;

    console.log(params)

    try {
        allProducts = await getAllProducts({
            _page: 1,
            _limit: 50
        })
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