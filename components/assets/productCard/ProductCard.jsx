import styles from './ProductCard.module.css';
import Link from 'next/link'

const ProductCard = () => {
    return (
        <div className={styles.product_card}>
            <div className={styles.product_imgBox}>
                <img src="/assets/img/products/wine1.jpg" alt=''/>
            </div>
            <div className={styles.product_content}>
                <div className={styles.title_price}>
                    <h2>Vino 1</h2>
                    <div className={styles.price}>$55.99</div>
                </div>
                <div className={styles.description}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. To</p>
                </div>
                <Link href="/">
                    <a>Agregar al carrito</a>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;