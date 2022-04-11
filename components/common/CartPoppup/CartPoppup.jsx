import style from './CartPoppup.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import ActionButtons from '../ActionButtons/ActionButtons';
import Router from 'next/router';


const CartPoppup = ({close}) => {
    return (
        <div className={style.container}>
            <div className={style.topCart}>
                <h6>Mi Carrito</h6>
                <FontAwesomeIcon icon={faXmark} className={style.close} onClick={()=> close()}/>
            </div>
            <div className={style.productsContainer}>
                <div className={style.product}>
                    <div className={style.productImg}>
                        <Image 
                            src="https://previews.123rf.com/images/keltmd/keltmd1710/keltmd171000287/87877994-icono-de-botellas-ilustraci%C3%B3n-de-la-silueta-de-icono-de-vector-de-botellas-para-web-sobre-fondo-blan.jpg" 
                            alt="" 
                            layout='fill'
                        />
                    </div>
                    <div className={style.productInfo}>
                        <h5>Vino Malbec</h5>
                        <div className={style.quantityContainer}>
                            <span>1</span>
                            <div className={style.quantityArrows}>
                                <FontAwesomeIcon icon={faChevronUp} className={style.arrow}/>
                                <FontAwesomeIcon icon={faChevronDown} className={style.arrow}/>
                            </div>
                        </div>
                        <span>$300</span>
                    </div>
                </div>
                <div className={style.totalPrice}>
                    <h5>Total</h5>
                    <span>$300</span>
                </div>
                <ActionButtons
                    style={{marginTop: "15px"}}
                    textClose={"Cerrar"}
                    close={()=> close()}
                    textAction={"Comprar"}
                    action={()=> Router.push('/cart')}
                />
            </div>
            {/* <div className={style.emptyCart}>
                El carrito está vacío!
                <CloseButton
                    text="Cerrar"
                    action={()=> close()}
                    style={{marginTop: "10px"}}
                />
            </div> */}
        </div>
    );
};

export default CartPoppup;