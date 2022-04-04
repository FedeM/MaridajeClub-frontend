import style from './CartPoppup.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const CartPoppup = () => {
    return (
        <div className={style.container}>
            <div className={style.topCart}>
                <h6>Mi Carrito</h6>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className={style.emptyCart}>

            </div>
        </div>
    );
};

export default CartPoppup;