import style from './ShopEvent.module.css'
import Image from 'next/image'

const ShopEventDesktop = ({open, setOpen}) => {
    return (
        <div className={style.side_shop} style={open.shop ? ({left: '-100%'}):({left: 0})}>
            <span className={style.close_shop} onClick={()=> setOpen({...open, shop: false})}><i className="fas fa-chevron-right"></i></span>
            <div className={style.shop_title}>
                <h3>Tienda</h3>
            </div>
            <div className={style.card_box}>
                <div className={style.card}>
                    <div className={style.card_image}>
                        <Image src={'/assets/img/products/wine1.jpg'} layout='fill' objectFit='cover' alt='Descripción de producto'/>
                    </div>
                    <div className={style.card_title}>
                        <h3>Vino 1</h3>
                    </div>
                    <div className={style.add_cart} title='Agregar al carrito'>
                        <i className="fas fa-cart-arrow-down"></i>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.card_image}>
                        <Image src={'/assets/img/products/wine1.jpg'} layout='fill' objectFit='cover' alt='Descripción de producto'/>
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

export default ShopEventDesktop;