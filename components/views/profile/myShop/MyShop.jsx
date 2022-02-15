import { useEffect } from 'react';
import { useState } from 'react';
import { AddProduct, EditProduct } from '../..';
import { FeaturedInfo, TableProducts } from '../../../common';
import style from './MyShop.module.css'
import { products as arrayProducts } from '../../../../lib/products';

import toast, { Toaster } from 'react-hot-toast';
const deleteSuccess = (name) => toast.success(`${name.toUpperCase()} eliminado correctamente`,{
    position: "bottom-center"
});

const MyShop = () => {
    //Declarar los estados (Abrir Pestaña Añadir - Abrir Pestaña Editar - Productos) 
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState({
        activate: false,
        product: {}
    })
    const [products, setProducts] = useState(arrayProducts)

    //Borrar productos
    const deleteProduct = (id,name)=>{
        setProducts(products.filter(product=> product.id !== id))
        deleteSuccess(name)
    }

    //Editar productos
    const editProduct = (id, data)=>{
        const newProducts = products.map(product=>{
            if (product.id === id) {
                return {
                    ...product,
                    name: data.name,
                    description: data.description,
                    category: data.category,
                    stock: data.stock,
                    regular_price: data.regular_price,
                    price: data.price,
                    status: data.status
                }
            }
            return product
        })

        setProducts(newProducts)
    }

    useEffect(()=>{
        //Bloqueamos el scroll cuando las pestañas de editar y añadir están abiertas
        if (add || edit.activate) {
            document.querySelector('body').style.overflowY="hidden"
        }else{
            document.querySelector('body').style.overflowY="auto"
        }

    }, [add, edit])

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
            <TableProducts add={()=> setAdd(true)} products={products} deleteProduct={deleteProduct} edit={setEdit}/>
            {
                add &&(
                    <AddProduct close={()=> setAdd(false)} setProducts={setProducts} products={products}/>
                )
            }
            {
                edit.activate &&(
                    <EditProduct close={()=> setEdit({activate: false, product: {}})} edit={edit} editProduct={editProduct}/>
                )
            }
        </div>
    );
};

export default MyShop;