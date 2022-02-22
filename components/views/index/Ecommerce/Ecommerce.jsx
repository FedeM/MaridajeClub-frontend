import styles from './Ecommerce.module.css'
import Link from 'next/link'
import { ProductGalery } from '../../../common';


const Ecommerce = ({id, home, allProducts}) => {


    return (
        <section id={id} className={styles.ecommerce_section}>
            <div className={styles.ecommerce_title}>
                <i className="fas fa-shopping-bag"></i>
                <h3>eCommerce</h3>
            </div>
            <div className={styles.ecommerce_text}>
                <p>Aquí podrás comprar las mejores bebidas al mejor precio.</p>
                <Link href="/shopping">
                    <a>Ir a la tienda</a>
                </Link>
            </div>
            <div className={styles.ecommerce_container}>
                <ProductGalery
                    home={home}
                    title="Más vendidos"
                    products={allProducts}
                    justifyContent="center"
                />
            </div>
        </section>
    );
};

export default Ecommerce;