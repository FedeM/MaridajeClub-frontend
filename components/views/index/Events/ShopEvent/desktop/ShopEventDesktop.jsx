import style from './ShopEvent.module.css'
import Image from 'next/image'

const ShopEventDesktop = ({open, setOpen, products}) => {

    console.log(products)
    return (
        <div className={style.side_shop} style={open.shop ? ({left: '-100%'}):({left: 0})}>
            <span className={style.close_shop} onClick={()=> setOpen({...open, shop: false})}><i className="fas fa-chevron-right"></i></span>
            <div className={style.shop_title}>
                <h3>Tienda</h3>
            </div>
            <div className={style.card_box}>
                {
                    products.map((e,i)=>(
                        <div className={style.card} key={i}>
                            <div className={style.card_image}>
                                <Image src={e.feature_img} layout='fill' objectFit='cover' alt='Descripción de producto'/>
                            </div>
                            <div className={style.card_title}>
                                <h3>{e.name}</h3>
                            </div>
                            <div className={style.add_cart} title='Agregar al carrito'>
                                <i className="fas fa-cart-arrow-down"></i>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ShopEventDesktop;