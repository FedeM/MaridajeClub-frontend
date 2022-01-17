import CategoriesNav from "./categoriesNav/CategoriesNav";
import styles from '../../../styles/screens/ecommerce/Ecommerce.module.css'
import { BrowserView, MobileView} from 'react-device-detect';
import ProductFilterResponsive from "./productFilter/Responsive/ProductFilterResponsive";
import CategoryProduct from './categoryProduct/CategoryProduct'
import { useEffect, useState } from "react";
import FilterDesktop from "./productFilter/Desktop/FilterDesktop";

const Ecommerce = ({products}) => {
    const [mounted, setMounted] = useState(false)
    const [filterBy, setFilterBy] = useState({
        category: false
    })
    console.log(filterBy.category)

    const [productsFilter, setProductsFilter] = useState([])
    useEffect(()=>{
        setMounted(true)

        setProductsFilter(products.filter(product => product.category === filterBy.category))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted, filterBy])

    return mounted && (
        <section className={styles.section_ecommerce}>
            <CategoriesNav setFilterBy={setFilterBy} filterBy={filterBy}/>
            <MobileView>
                <ProductFilterResponsive/>
                <CategoryProduct 
                    title="Vinos" 
                    home
                    products={products}
                    justifyContent="center"
                />
            </MobileView>
            <BrowserView>
                <div className={styles.browserView_container}>
                    <FilterDesktop 
                        name={'Vinos'}
                    />
                    <CategoryProduct
                        products={productsFilter}
                        justifyContent="flex-start"
                    />
                </div>
            </BrowserView>
        </section>
    );
};

export default Ecommerce;