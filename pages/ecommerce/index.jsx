import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Ecommerce from "../../components/screens/ecommerce/Ecommerce";

const Index = () => {
    const [products, setProducts] = useState([
        {
            _id: 1,
            img: "/assets/img/products/wine1.jpg",
            name: "Vino 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 0,
        },
        {
            _id: 2,
            img: "/assets/img/products/wine2.jpg",
            name: "Vino 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 0,
        },
        {
            _id: 3,
            img: "/assets/img/products/wine3.jpg",
            name: "Vino 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 0,
        },
        {
            _id: 4,
            img: "/assets/img/products/wine4.jpg",
            name: "Vino 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 0,
        },
        {
            _id: 5,
            img: "/assets/img/products/whisky1.jpg",
            name: "Whisky 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 3,
        },
        {
            _id: 6,
            img: "/assets/img/products/whisky2.jpg",
            name: "Whisky 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 3,
        },
        {
            _id: 7,
            img: "/assets/img/products/tea1.jpg",
            name: "Té 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 5,
        },
        {
            _id: 8,
            img: "/assets/img/products/coffe1.jpg",
            name: "Café 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 5,
        },
        {
            _id: 9,
            img: "/assets/img/products/champagne1.jpg",
            name: "Champagne 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 4,
        },
        {
            _id: 10,
            img: "/assets/img/products/champagne2.jpg",
            name: "Champagne 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 4,
        },
        {
            _id: 11,
            img: "/assets/img/products/beer1.jpg",
            name: "Cerveza 1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 2,
        },
        {
            _id: 12,
            img: "/assets/img/products/beer2.jpg",
            name: "Cerveza 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 2,
        },
        {
            _id: 13,
            img: "/assets/img/products/beer3.jpg",
            name: "Cerveza 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum.",
            price: 99.75,
            category: 2,
        },
    ])

    return (
        <Layout
            title="Comprar"
            description="Compra de vinos y bebidas"
            nav
            footer
            cart
        >
        <article style={{paddingTop:`15vh`}}>
            <Ecommerce
                products={products}
            />
        </article>
        </Layout>
    );
};

export default Index;