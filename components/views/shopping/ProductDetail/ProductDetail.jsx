import React, { useContext, useState } from 'react';
import style from './ProductDetail.module.css'
import Image from 'next/image'
import { isDesktop, isMobile} from 'react-device-detect';
import CartContext from '../../../../context/CartContext';
import Router from 'next/router';


const ProductDetail = ({product}) => {
    const {addItemToCart, setShowAlert} = useContext(CartContext)

    return (
        <>
            <div className={style.productDetail_container}>                
                <div className={style.first_box}>
                    <section className={style.image_section}>
                        {
                            isMobile &&(
                                <div className={style.title}>
                                    <h2>{product.name}</h2>
                                </div>
                            )
                        }
                        <div className={style.viewImage}>
                            <Image src={product.feature_img} layout='fill' objectFit='cover' priority alt="description"/>
                        </div>
                    </section>
                    <section className={style.agregate_section}>
                        <div className={style.payment_info}>
                            {
                                isDesktop &&(
                                    <h2>{product.name}</h2>
                                )
                            }
                            <div className={style.description}>
                                <p>{product.description}</p>
                            </div>
                            <div className={style.price}>${product.sale_price}</div>
                            <div className={style.add_button} onClick={()=> {
                                    addItemToCart(product)
                                    Router.push('/shopping')
                                    setShowAlert(true)
                                }}
                            >
                                <span>
                                    Añadir al carrito <i className="fas fa-cart-arrow-down"></i>
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
