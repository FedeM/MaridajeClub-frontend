import style from '../../../../styles/screens/cart/articles/ArticlesDesktop.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Article from '../../../assets/article/Article';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const ArticlesDesktop = () => {
    const [mounted, setMounted] = useState(false)
    const [priceTotal, setPriceTotal] = useState()
    const [cart, setCart] = useState([
        {
            _id: 1,
            img: '/assets/img/products/wine1.jpg',
            name: 'Vino Malbec',
            price: 98.50,
            quantity: 1,
        },
        {
            _id: 2,
            img: '/assets/img/products/wine2.jpg',
            name: 'Vino Chandon',
            price: 105.75,
            quantity: 1,
        },
        {
            _id: 3,
            img: '/assets/img/products/wine3.jpg',
            name: 'Champagne',
            price: 100.50,
            quantity: 1,
        },
        {
            _id: 4,
            img: '/assets/img/products/wine4.jpg',
            name: 'Vino Sidra',
            price: 98.50,
            quantity: 1,
        },
    ])

    const updateQuantity = (id, type)=>{
        const newCart = cart.map(product =>{
            if (product._id === id) {
                if (type) {
                    return {
                        ...product,
                        quantity: product.quantity +1
                    }
                }else{
                    if (product.quantity > 1) {
                        return {
                            ...product,
                            quantity: product.quantity -1
                        }
                    }
                }
            }
            return product
        })

        setCart(newCart)
    }

    const removeProduct = (id)=>{
        const newCart = cart.filter(product => product._id !== id);
        setCart(newCart);
    }

    const updatePrice = ()=>{
        let price = 0;
        cart.map(product=>{
            price += product.price * product.quantity
        })

        return price;
    }

    useEffect(()=>{
        setPriceTotal(updatePrice())
        setMounted(true)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, mounted])

    return mounted && (
        <div className={style.articles_desktop_container}>
            <div className={style.title}>
                <div className={style.title_img}>
                    <Image src="/assets/img/icon/cart.png" layout='fill' objectFit='contain' alt="icon cart"/>
                </div>
                <h3>Tu carrito</h3>
            </div>
            <div className={style.articles_container}>
            {
                cart.map((e,i)=>(
                    <Article
                        key={i}
                        id={e._id}
                        width={isMobile ? (95):(90) }
                        img={e.img}
                        name={e.name}
                        price={e.price}
                        quantity={e.quantity}
                        updateQuantity={updateQuantity}
                        removeProduct={removeProduct}
                    />
                ))
            }
            </div>
            <div className={style.articles_fotter_container}>
                <Link href={'/ecommerce'}>
                    <a className={style.fotter_link}><i className="fas fa-chevron-left"></i> Ir a la tienda</a>
                </Link>
                <div className={style.subtotal}>
                    <h5>Subtotal</h5>
                    <span>${priceTotal}</span>
                </div>
            </div>
        </div>
    );
};

export default ArticlesDesktop;