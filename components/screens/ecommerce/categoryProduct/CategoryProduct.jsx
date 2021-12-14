import ProductCard from '../../../assets/productCard/ProductCard';
import styles from './CategoryProduct.module.css'

const CategoryProduct = ({title}) => {
    return (
        <div className={styles.product_section}>
            <div className={styles.product_section_title}>
                <h4>{title}</h4>
            </div>
            <div className={styles.product_container}>
                <ProductCard
                    name="Vino 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum. "
                    price="99.75"
                    img="/assets/img/products/wine1.jpg"
                />
                <ProductCard
                    name="Vino 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum. "
                    price="90.75"
                    img="/assets/img/products/wine2.jpg"
                />
                <ProductCard
                    name="Vino 3"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum. "
                    price="108.99"
                    img="/assets/img/products/wine3.jpg"
                />
                <ProductCard
                    name="Vino 4"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum. "
                    price="56.50"
                    img="/assets/img/products/wine1.jpg"
                />
                <ProductCard
                    name="Vino 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed aliquet quis urna ut cursus. Integer et augue ut arcu condimentum rhoncus non et nibh. Sed interdum et neque quis fermentum. "
                    price="99.75"
                    img="/assets/img/products/wine2.jpg"
                />
            </div>
        </div>
    );
};

export default CategoryProduct;