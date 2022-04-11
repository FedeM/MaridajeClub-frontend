import styles from './ProductCard.module.css';
import Image from 'next/image'
import Router from 'next/router';
import { useEffect } from 'react';
import { addProduct} from '../../../lib/cart';

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null


const ProductCard = ({product, cart = true}) => {

    const {id, name, description, sale_price, feature_img} = product;

    const openDescription =(e)=>{
        e.target.parentNode.classList.add(`${styles.description_hidden}`)
    }

    const closeDescription = (e)=>{
        e.target.parentNode.classList.remove(`${styles.description_hidden}`)
    }

    useEffect(()=>{
        new WOW().init()
    }, [])

    return (
        <div className={`${styles.product_card} wow animate__animated animate__flipInY`}>
            <div className={styles.product_imgBox}>
                <Image src={feature_img} alt={name} layout="fill"/>
            </div>
            <div className={styles.product_content}>
                <div className={styles.title_price}>
                    <h3>{name}</h3>
                    <div className={styles.price}>${sale_price}</div>
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
                            <div className={styles.button} onClick={()=> addProduct(product)}>
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