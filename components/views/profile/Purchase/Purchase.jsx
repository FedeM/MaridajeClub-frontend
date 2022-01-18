import style from './Purchase.module.css'
import { ProductCard } from '../../../common';


const Purchase = () => {
    return (
        <section className={style.purchase_section}>
            <div className={style.purchase_title}>
                <h3>Compras</h3>
            </div>
            <div className={style.purchase_cards}>
                <ProductCard
                    name={'Vino 1'}
                    description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus veritatis vitae ullam dignissimos illo voluptatum doloremque placeat non possimus mollitia fugiat voluptas facilis, eos reprehenderit nesciunt fuga porro error.'}
                    price={'98.5'}
                    img={'/assets/img/products/wine2.jpg'}
                    cart={false}
                />
                <ProductCard
                    name={'Vino 1'}
                    description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus veritatis vitae ullam dignissimos illo voluptatum doloremque placeat non possimus mollitia fugiat voluptas facilis, eos reprehenderit nesciunt fuga porro error.'}
                    price={'98.5'}
                    img={'/assets/img/products/wine2.jpg'}
                    cart={false}
                />
                <ProductCard
                    name={'Vino 1'}
                    description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus veritatis vitae ullam dignissimos illo voluptatum doloremque placeat non possimus mollitia fugiat voluptas facilis, eos reprehenderit nesciunt fuga porro error.'}
                    price={'98.5'}
                    img={'/assets/img/products/wine2.jpg'}
                    cart={false}
                />
            </div>
        </section>
    );
};

export default Purchase;