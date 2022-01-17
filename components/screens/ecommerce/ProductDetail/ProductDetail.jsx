import React from 'react';
import style from '../../../../styles/screens/ecommerce/ProductDetail/ProductDetail.module.css'
import Image from 'next/image'
import { isDesktop, isMobile} from 'react-device-detect';
const ProductDetail = () => {
    return (
        <>
            <div className={style.productDetail_container}>                
                <div className={style.first_box}>
                    <section className={style.image_section}>
                        {
                            isMobile &&(
                                <div className={style.title}>
                                    <h2>Vino 1</h2>
                                </div>
                            )
                        }
                        <div className={style.carrousel_container}>
                            <div className={style.viewImage}>
                                <Image src={'/assets/img/products/wine1.jpg'} layout='fill' objectFit='contain' priority alt="description"/>
                            </div>
                            <div className={style.slider_container}>
                                <div className={style.img}>
                                    <Image src={'/assets/img/products/wine1.jpg'} layout='fill' objectFit='cover' alt="description"/>
                                </div>
                                <div className={style.img}>
                                    <Image src={'/assets/img/products/wine1.jpg'} layout='fill' objectFit='cover' alt="description"/>
                                </div>
                                <div className={style.img}>
                                    <Image src={'/assets/img/products/wine1.jpg'} layout='fill' objectFit='cover' alt="description"/>
                                </div>
                                <div className={style.img}>
                                    <Image src={'/assets/img/products/wine1.jpg'} layout='fill' objectFit='cover' alt="description"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={style.agregate_section}>
                        <div className={style.payment_info}>
                            {
                                isDesktop &&(
                                    <h2>Vino 1</h2>
                                )
                            }
                            <div className={style.description}>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est magnam iste dolorum reprehenderit dignissimos at nesciunt soluta sed doloribus, dicta accusantium quos asperiores molestias ducimus, ipsum id labore quo placeat.
                                </p>
                            </div>
                            <div className={style.price}>$130.70</div>
                            <div className={style.addToCart}>
                                <div className={style.quantity}>
                                    <div>1</div>
                                    <div className={style.counters}>
                                        <i className="fas fa-chevron-circle-up"></i>
                                        <i className="fas fa-chevron-circle-down" ></i>
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