import styles from '../../styles/ecommerce/Ecommerce.module.css'
import Link from 'next/link'
import CategoryProduct from '../categoryProduct/CategoryProduct';


const Ecommerce = ({id}) => {
    return (
        <section id={id} className={styles.ecommerce_section}>
            <div className={styles.ecommerce_title}>
                <i className="fas fa-shopping-bag"></i>
                <h3>eCommerce</h3>
            </div>
            <div className={styles.ecommerce_text}>
                <p>Aquí podrás comprar las mejores bebidas al mejor precio.</p>
                <Link href="/ecommerce">
                    <a>Ir a la tienda</a>
                </Link>
            </div>
            <CategoryProduct
            
            />
        </section>
    );
};

export default Ecommerce;