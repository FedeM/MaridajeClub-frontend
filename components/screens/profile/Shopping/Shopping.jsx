import style from '../../../../styles/screens/profile/shopping/Shopping.module.css'

import ProductCard from '../../../assets/productCard/ProductCard'

const Shopping = () => {
    return (
        <section className={style.shopping_section}>
            <div className={style.shopping_title}>
                <h3>Compras</h3>
            </div>
            <div className={style.shopping_cards}>
                <ProductCard
                    name={'Vino 1'}
                    description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus veritatis vitae ullam dignissimos illo voluptatum doloremque placeat non possimus mollitia fugiat voluptas facilis, eos reprehenderit nesciunt fuga porro error.'}
                    price={'98.5'}
                    img={'/assets/img/products/wine2.jpg'}
                />
                <ProductCard
                    name={'Vino 1'}
                    description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus veritatis vitae ullam dignissimos illo voluptatum doloremque placeat non possimus mollitia fugiat voluptas facilis, eos reprehenderit nesciunt fuga porro error.'}
                    price={'98.5'}
                    img={'/assets/img/products/wine2.jpg'}
                />
                <ProductCard
                    name={'Vino 1'}
                    description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus veritatis vitae ullam dignissimos illo voluptatum doloremque placeat non possimus mollitia fugiat voluptas facilis, eos reprehenderit nesciunt fuga porro error.'}
                    price={'98.5'}
                    img={'/assets/img/products/wine2.jpg'}
                />
            </div>
        </section>
    );
};

export default Shopping;