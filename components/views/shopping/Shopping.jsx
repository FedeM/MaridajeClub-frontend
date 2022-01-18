import { useEffect, useState } from "react";
import { BrowserView, MobileView} from 'react-device-detect';

import { ProductGalery } from "../../common";
import CategoriesNav from "./categoriesNav/CategoriesNav";
import FilterResponsive from "./productFilter/Responsive/FilterResponsive";
import FilterDesktop from "./productFilter/Desktop/FilterDesktop";

import styles from './Ecommerce.module.css'

const Shopping = ({products}) => {
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
                <FilterResponsive/>
                <ProductGalery
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
                    <ProductGalery
                        products={productsFilter}
                        justifyContent="flex-start"
                    />
                </div>
            </BrowserView>
        </section>
    );
};

export default Shopping;