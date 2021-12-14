import ProductCard from '../assets/productCard/ProductCard';
import styles from './CategoryProduct.module.css'

const CategoryProduct = () => {
    return (
        <div className={styles.product_section}>
            <div className={styles.product_section_title}>
                <h4>Más vendidos</h4>
            </div>
            <div className={styles.product_container}>
                <ProductCard/>
            </div>
        </div>
    );
};

export default CategoryProduct;