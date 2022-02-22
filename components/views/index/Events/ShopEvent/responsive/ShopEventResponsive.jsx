import style from './ShopEventRes.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';


const ShopEventResponsive = ({close}) => {
    const [classContainer, setClassContainer] = useState('animate__slideInUp')

    const hiddenTab = ()=>{
        setClassContainer('animate__slideOutDown')
        setTimeout(()=>{
            close()
        }, 500)
    }


    return (
        <div className={`${style.shop_container} animate__animated ${classContainer} animate__faster`}>
            <span className={style.move_tab} onClick={()=> hiddenTab()}></span>
            <div className={style.shop_title}>
                <h3>Tienda</h3>
            </div>
            <div className={style.card_box}>
                <div className={style.card}>
                    <div className={style.card_image}>
                        <Image src={'/assets/img/products/wine1.jpg'} layout='fill' objectFit='cover' alt='description'/>
                    </div>
                    <div className={style.card_title}>
                        <h3>Vino 1</h3>
                    </div>
                    <div className={style.add_cart} title='Agregar al carrito'>
                        <i className="fas fa-cart-arrow-down"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopEventResponsive;