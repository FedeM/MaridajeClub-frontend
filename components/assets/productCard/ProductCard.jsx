import styles from './ProductCard.module.css';
import Link from 'next/link'

const ProductCard = ({name, description,price,img}) => {
    return (
        <div className={styles.product_card}>
            <div className={styles.product_imgBox}>
                <img src={img} alt=''/>
            </div>
            <div className={styles.product_content}>
                <div className={styles.title_price}>
                    <h2>{name}</h2>
                    <div className={styles.price}>${price}</div>
                </div>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
                <Link href="/">
                    <a>Agregar al carrito</a>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;