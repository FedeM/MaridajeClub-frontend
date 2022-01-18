import styles from './ProductCard.module.css';
import Image from 'next/image'
import Router from 'next/router';

const ProductCard = ({id, name, description, price, img, cart = true}) => {

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
                    <h3>{name}</h3>
                    <div className={styles.price}>${price}</div>
                </div>
                <div className={styles.description} onClick={(e)=> openDescription(e)} onMouseLeave={(e)=> closeDescription(e)}>
                    <p>{description}</p>
                </div>
                {
                    cart &&(
                        <div className={styles.buttons}>
                            <div className={styles.button} onClick={()=> Router.push(`/shopping/${id}`)}>
                                <span>Ver más</span>
                            </div>
                            <div className={styles.button}>
                                <i className="fas fa-cart-arrow-down"></i>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ProductCard;