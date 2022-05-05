import styles from './Ecommerce.module.css'
import Link from 'next/link'
import { ProductGalery } from '../../../common';
import { style } from '@mui/system';


const Ecommerce = ({id, home, activeTitle,allProducts}) => {


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
                    activeTitle
                    title="Más vendidos"
                    products={allProducts}
                    justifyContent="center"
                />
                <Link href="/shopping">
                    <a  className={styles.viewMoreBtn}>Ver más</a>
                </Link>
            </div>
        </section>
    );
};

export default Ecommerce;