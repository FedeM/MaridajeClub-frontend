import CategoriesNav from "./categoriesNav/CategoriesNav";
import styles from '../../../styles/screens/ecommerce/Ecommerce.module.css'
import { BrowserView, MobileView} from 'react-device-detect';
import ProductFilterResponsive from "./productFilter/Responsive/ProductFilterResponsive";
import CategoryProduct from './categoryProduct/CategoryProduct'
import { useEffect, useState } from "react";

const Ecommerce = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    }, [mounted])

    return mounted && (
        <section className={styles.section_ecommerce}>
            <CategoriesNav/>
            <MobileView>
                <ProductFilterResponsive/>
                <CategoryProduct title="Vinos"/>
            </MobileView>
            <BrowserView>

            </BrowserView>
        </section>
    );
};

export default Ecommerce;