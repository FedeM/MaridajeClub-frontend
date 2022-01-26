import styles from './Ecommerce.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { ProductGalery } from '../../../common';
import {products as arrayProducts} from '../../../../lib/products.js'


const Ecommerce = ({id, home}) => {
    const [products, setProducts] = useState(arrayProducts.filter(product => product.is_BestSeller === true))


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
                    products={products}
                    justifyContent="center"
                />
            </div>
        </section>
    );
};

export default Ecommerce;