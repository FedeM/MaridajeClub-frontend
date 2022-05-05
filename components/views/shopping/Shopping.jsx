import { useEffect, useState } from "react";
import { BrowserView, MobileView} from 'react-device-detect';
import {useRouter} from 'next/router'

import { ProductGalery } from "../../common";
import CategoriesNav from "./categoriesNav/CategoriesNav";
import FilterResponsive from "./productFilter/Responsive/FilterResponsive";
import FilterDesktop from "./productFilter/Desktop/FilterDesktop";

import styles from './Ecommerce.module.css'

const Shopping = ({products, categories}) => {
    const [mounted, setMounted] = useState(false)
    const {query} = useRouter()


    useEffect(()=>{
        setMounted(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mounted])

    return mounted && (
        <section className={styles.section_ecommerce}>
            <CategoriesNav categories={categories}/>
            <MobileView>
                <FilterResponsive/>
                <ProductGalery
                    title="Todo"
                    activeTitle
                    products={products}
                    justifyContent="center"
                />
            </MobileView>
            <BrowserView>
                <div className={styles.browserView_container}>
                    <FilterDesktop 
                        name="Todo"
                    />
                    <ProductGalery
                        products={products}
                        justifyContent="flex-start"
                    />
                </div>
            </BrowserView>
        </section>
    );
};

export default Shopping;