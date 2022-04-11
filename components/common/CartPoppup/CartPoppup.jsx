import style from './CartPoppup.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import ActionButtons from '../ActionButtons/ActionButtons';
import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../context/cartContext';


const CartPoppup = ({close}) => {
    const {cartItems, priceTotal} = useContext(CartContext)


    return (
        <div className={style.container}>
            <div className={style.topCart}>
                <h6>Mi Carrito</h6>
                <FontAwesomeIcon icon={faXmark} className={style.close} onClick={()=> close()}/>
            </div>
            {
                cartItems.length > 0 ? (
                    <div className={style.productsContainer}>
                        {
                            cartItems.map((e, i)=>(
                                <div className={style.product} key={i}>
                                    <div className={style.productImg}>
                                        <Image 
                                            src={e.feature_img}
                                            alt="" 
                                            layout='fill'
                                        />
                                    </div>
                                    <div className={style.productInfo}>
                                        <h5>{e.name}</h5>
                                        <div className={style.quantityContainer}>
                                            <span>{e.quantity}</span>
                                            <div className={style.quantityArrows}>
                                                <FontAwesomeIcon icon={faChevronUp} className={style.arrow}/>
                                                <FontAwesomeIcon icon={faChevronDown} className={style.arrow}/>
                                            </div>
                                        </div>
                                        <span>${e.sale_price}</span>
                                    </div>
                                    <FontAwesomeIcon icon={faTrash} className={style.trash}/>
                                </div>
                            ))
                        }
                        <div className={style.totalPrice}>
                            <h5>Total</h5>
                            <span>${priceTotal}</span>
                        </div>
                        <ActionButtons
                            style={{marginTop: "15px"}}
                            textClose={"Cerrar"}
                            close={()=> close()}
                            textAction={"Comprar"}
                            action={()=> Router.push('/cart')}
                        />
                    </div>
                ):(
                    <div className={style.emptyCart}>
                        El carrito está vacío!
                        <CloseButton
                            text="Cerrar"
                            action={()=> close()}
                            style={{marginTop: "10px"}}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default CartPoppup;