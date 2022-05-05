import { useContext } from 'react';
import { isDesktop} from 'react-device-detect';
import Router from 'next/router';
import style from './ProductAgregateSection.module.css'
import CartContext from '../../../context/cartContext';


const ProductAgregateSection = ({product}) => {
    const {addItemToCart, setShowAlert} = useContext(CartContext)

    return (
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
    );
};

export default ProductAgregateSection;