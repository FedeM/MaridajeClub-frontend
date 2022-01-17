import styles from '../../../../styles/screens/index/ecommerce/Ecommerce.module.css'
import Link from 'next/link'
import CategoryProduct from '../../ecommerce/categoryProduct/CategoryProduct';
import { useState } from 'react';


const Ecommerce = ({id, home}) => {
    const [products, setProducts] = useState([
        {
            _id: 1,
            img: "/assets/img/products/wine1.jpg",
            name: "Vino 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75
        },
        {
            _id: 2,
            img: "/assets/img/products/wine2.jpg",
            name: "Vino 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75
        },
        {
            _id: 3,
            img: "/assets/img/products/wine3.jpg",
            name: "Vino 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 110.75
        },
        {
            _id: 4,
            img: "/assets/img/products/wine1.jpg",
            name: "Vino 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 90.60
        },
        {
            _id: 5,
            img: "/assets/img/products/wine3.jpg",
            name: "Vino 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 100.50
        },
    ])

    return (
        <section id={id} className={styles.ecommerce_section}>
            <div className={styles.ecommerce_title}>
                <i className="fas fa-shopping-bag"></i>
                <h3>eCommerce</h3>
            </div>
            <div className={styles.ecommerce_text}>
                <p>Aquí podrás comprar las mejores bebidas al mejor precio.</p>
                <Link href="/ecommerce">
                    <a>Ir a la tienda</a>
                </Link>
            </div>
            <div className={styles.ecommerce_container}>
                <CategoryProduct
                    home={home}
                    title="Más vendidos"
                    products={products}
                    justifyContent="center"
                />
            </div>
        </section>
    );
};

export default Ecommerce;