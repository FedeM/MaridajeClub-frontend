import { useEffect } from 'react';
import { useState } from 'react';
import { AddProduct } from '../..';
import { FeaturedInfo, TableProducts } from '../../../common';
import style from './MyShop.module.css'
import { products as arrayProducts } from '../../../../lib/products';

import toast, { Toaster } from 'react-hot-toast';
const deleteSuccess = (name) => toast.success(`${name.toUpperCase()} eliminado correctamente`,{
    position: "bottom-center"
});

const MyShop = () => {
    const [add, setAdd] = useState(false)
    const [products, setProducts] = useState(arrayProducts)

    const deleteProduct = (id,name)=>{
        setProducts(products.filter(product=> product.id !== id))
        deleteSuccess(name)
    }

    useEffect(()=>{
        if (add) {
            document.querySelector('body').style.overflowY="hidden"
        }else{
            document.querySelector('body').style.overflowY="auto"
        }

    }, [add])

    return (
        <div className={style.container}>
            <Toaster/>
            <div className={style.titleContainer}>
                <h4>Los Haroldos</h4>
                <ion-icon name="create-outline"></ion-icon>
            </div>
            <FeaturedInfo
                cards={[
                    {
                        title: "Pedidos pendientes",
                        value: "2",
                        icon: <ion-icon name="cart-outline"></ion-icon>
                    },
                    {
                        title: "Dinero recaudado",
                        value: "$2,000",
                        icon: <ion-icon name="cash-outline"></ion-icon>
                    },
                    {
                        title: "Mis productos",
                        value: "15",
                        icon: <ion-icon name="cube-outline"></ion-icon>
                    },
                ]}
            />
            <TableProducts add={()=> setAdd(true)} products={products} deleteProduct={deleteProduct}/>
            {
                add &&(
                    <AddProduct close={()=> setAdd(false)} setProducts={setProducts} products={products}/>
                )
            }
        </div>
    );
};

export default MyShop;