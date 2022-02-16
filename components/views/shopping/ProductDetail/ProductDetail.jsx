import React, { useState } from 'react';
import style from './ProductDetail.module.css'
import Image from 'next/image'
import { isDesktop, isMobile} from 'react-device-detect';
const ProductDetail = ({product}) => {
    console.log(product)
    const [quantity, setQuantity] = useState(1)
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
                            <Image src={product.img} layout='fill' objectFit='cover' priority alt="description"/>
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
                            <div className={style.price}>${product.price}</div>
                            <div className={style.addToCart}>
                                <div className={style.quantity}>
                                    <div>{quantity}</div>
                                    <div className={style.counters}>
                                        <i className="fas fa-chevron-circle-up" onClick={()=> setQuantity(quantity +1)}></i>
                                        <i className="fas fa-chevron-circle-down" onClick={()=> {
                                            quantity > 1 ?(
                                                setQuantity(quantity -1)
                                            ):(quantity)
                                        }}></i>
                                    </div>
                                </div>
                                <div className={style.add_button}>
                                    <span>
                                        Añadir al carrito <i className="fas fa-cart-arrow-down"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className={style.description_section}>
                    <div className={style.description_title}>
                        <h4>Descripción</h4>
                    </div>
                    <div className={style.table}>
                        <div className={style.table_side}>
                            <h5>Bodega</h5>
                            <h5>Marca</h5>
                            <h5>Linea</h5>
                            <h5>Variedad</h5>
                            <h5>Volumen de la unidad</h5>
                            <h5>Formato de venta</h5>
                        </div>
                        <div className={style.table_side}>
                            <p>La Rural</p>
                            <p>Rutini Wines</p>
                            <p>Bivarietal</p>
                            <p>Tinto</p>
                            <p>750 cc</p>
                            <p>Individual</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProductDetail;