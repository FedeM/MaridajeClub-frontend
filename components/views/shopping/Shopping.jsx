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
        category: false,
        name : "Todo"
    })

    const [productsFilter, setProductsFilter] = useState(products)

    useEffect(()=>{
        setMounted(true)
        if(filterBy.category !== false){
            setProductsFilter(products.filter(product => product.category === filterBy.category))
        }else{
            setProductsFilter(products)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted, filterBy])

    return mounted && (
        <section className={styles.section_ecommerce}>
            <CategoriesNav setFilterBy={setFilterBy} filterBy={filterBy}/>
            <MobileView>
                <FilterResponsive/>
                <ProductGalery
                    title={filterBy.name} 
                    home
                    products={productsFilter}
                    justifyContent="center"
                />
            </MobileView>
            <BrowserView>
                <div className={styles.browserView_container}>
                    <FilterDesktop 
                        name={filterBy.name}
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