import style from './ShopEventRes.module.css'
import Image from 'next/image'
import { useContext, useState } from 'react';
import CartContext from '../../../../../../context/cartContext';


const ShopEventResponsive = ({close, products}) => {
    const [classContainer, setClassContainer] = useState('animate__slideInUp')
    const {addItemToCart} = useContext(CartContext)

    const hiddenTab = ()=>{
        setClassContainer('animate__slideOutDown')
        setTimeout(()=>{
            close()
        }, 500)
    }


    return (
        <div className={`${style.shop_container} animate__animated ${classContainer} animate__faster`}>
            <div className={style.shop_title}>
                <h3>Tienda</h3>
                <ion-icon name="close-outline" onClick={()=> hiddenTab()}></ion-icon>
            </div>
            <div className={style.card_box}>
            {
                products.map((e,i)=>(
                    <div className={style.card} key={i}>
                        <div className={style.card_image}>
                            <Image src={e.feature_img} layout='fill' objectFit='cover' alt='description'/>
                        </div>
                        <div className={style.card_title}>
                            <h3>{e.name}</h3>
                        </div>
                        <div className={style.add_cart} title='Agregar al carrito' onClick={()=> addItemToCart(e)}>
                            <i className="fas fa-cart-arrow-down"></i>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default ShopEventResponsive;
