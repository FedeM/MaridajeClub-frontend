import CategoriesNav from "./categoriesNav/CategoriesNav";
import styles from '../../../styles/screens/ecommerce/Ecommerce.module.css'

const Ecommerce = () => {
    return (
        <section className={styles.section_ecommerce}>
            <CategoriesNav/>
        </section>
    );
};

export default Ecommerce;