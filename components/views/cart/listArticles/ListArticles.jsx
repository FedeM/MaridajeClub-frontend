import style from './ListArticles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Article } from '../../../common';

const ListArticles = ({cartItems, priceTotal, deleteItemToCart, updateItem}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems, mounted])

    return mounted && (
        <div className={style.articles_desktop_container}>
            <div className={style.title}>
                <div className={style.title_img}>
                    <Image src="/assets/img/icon/cart.png" layout='fill' objectFit='contain' alt="icon cart"/>
                </div>
                <h3>Tu carrito</h3>
            </div>
            <div className={style.articles_container}>
            {
                cartItems.map((e,i)=>(
                    <Article
                        key={i}
                        item={e}
                        width={isMobile ? (95):(90) }
                        updateItem={updateItem}
                        deleteItemToCart={deleteItemToCart}
                    />
                ))
            }
            </div>
            <div className={style.articles_fotter_container}>
                <Link href={'/shopping'}>
                    <a className={style.fotter_link}><i className="fas fa-chevron-left"></i> Ir a la tienda</a>
                </Link>
                <div className={style.subtotal}>
                    <h5>Subtotal</h5>
                    <span>${priceTotal}</span>
                </div>
            </div>
        </div>
    );
};

export default ListArticles;