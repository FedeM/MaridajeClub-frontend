import styles from './ProductCard.module.css';
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({name, description, price, img, cart = true}) => {

    const openDescription =(e)=>{
        e.target.parentNode.classList.add(`${styles.description_hidden}`)
    }

    const closeDescription = (e)=>{
        e.target.parentNode.classList.remove(`${styles.description_hidden}`)
    }

    return (
        <div className={styles.product_card}>
            <div className={styles.product_imgBox}>
                <Image src={img} alt={name} layout="fill"/>
            </div>
            <div className={styles.product_content}>
                <div className={styles.title_price}>
                    <h2>{name}</h2>
                    <div className={styles.price}>${price}</div>
                </div>
                <div className={styles.description} onClick={(e)=> openDescription(e)} onMouseLeave={(e)=> closeDescription(e)}>
                    <p>{description}</p>
                </div>
                {
                    cart &&(
                        <Link href="/">
                            <a>Agregar al carrito</a>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default ProductCard;