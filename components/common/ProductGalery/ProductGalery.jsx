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
                    products.map((e,i)=>(
                        <ProductCard
                            key={i}
                            id={e._id}
                            name={e.name}
                            description={e.description}
                            price={e.price}
                            img={e.img}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductGalery;