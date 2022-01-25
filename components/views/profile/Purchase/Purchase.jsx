import style from './Purchase.module.css'
import { ProductCard } from '../../../common';
import { user } from '../../../../lib/user';
import { useEffect, useState } from 'react';


const Purchase = () => {
    const [mounted, setMounted] = useState(false)
    const [historyProducts, setHistoryProducts] = useState(user.history)

    useEffect(()=>{
        setMounted(true)
    }, [mounted])

    return mounted &&(
        <section className={style.purchase_section}>
            <div className={style.purchase_title}>
                <h3>Compras</h3>
            </div>
            <div className={style.purchase_cards}>
            {
                historyProducts.map((e,i)=>(
                    <ProductCard
                        key={i}
                        name={e.name}
                        description={e.description}
                        price={e.price}
                        img={e.img}
                        cart={false}
                    />
                ))
            }
            </div>
        </section>
    );
};

export default Purchase;