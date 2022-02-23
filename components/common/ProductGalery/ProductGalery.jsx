import { useEffect } from 'react';
import {ProductCard} from '../';
import styles from './ProductGalery.module.css'


const ProductGalery = ({title, home, products, justifyContent}) => {

    

    return (
        <div className={styles.product_section}>
        {
            home && (
                <div className={styles.product_section_title}>
                    <h4>{title}</h4>
                </div>
            )
        }
            <div className={styles.product_container} style={{justifyContent: justifyContent}}>
                {
                    products.length > 0 ? (
                        products.map((e,i)=>(
                            <ProductCard
                                key={i}
                                id={e.id}
                                name={e.name}
                                description={e.description}
                                sale_price={e.sale_price}
                                feature_img={e.feature_img}
                            />
                        ))
                    ):(
                        <div className={styles.empty_shopping}>
                            <h4>Ups! No hay resultados para esta búsqueda</h4>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ProductGalery;