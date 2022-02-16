import { useEffect } from 'react';
import { useState } from 'react';
import { AddProduct, EditProduct, EditTitle } from '../..';
import { FeaturedInfo, TableProducts } from '../../../common';
import style from './MyShop.module.css'
import { products as arrayProducts } from '../../../../lib/products';

import toast, { Toaster } from 'react-hot-toast';
const deleteSuccess = (name) => toast.success(`${name.toUpperCase()} eliminado correctamente`,{
    position: "bottom-center"
});
const updateSuccess = () => toast.success('Actualizado correctamente');

const MyShop = () => {
    //Declarar los estados (Abrir Pestaña Añadir - Abrir Pestaña Editar - Productos - Editar título) 
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState({
        activate: false,
        product: {}
    })
    const [products, setProducts] = useState(arrayProducts)
    const [isEditTitle, setIsEditTitle] = useState({
        activate: false,
        title: "Los Haroldos"
    })

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

    //Editar el título de la tienda
    const editTitle = (value)=>{
        setIsEditTitle({activate: false, title: value})
        updateSuccess()
    }

    useEffect(()=>{
        //Bloqueamos el scroll cuando las pestañas de editar y añadir están abiertas
        if (add || edit.activate || isEditTitle.activate) {
            document.querySelector('body').style.overflowY="hidden"
        }else{
            document.querySelector('body').style.overflowY="auto"
        }

    }, [add, edit, isEditTitle])

    return (
        <div className={style.container}>
            <Toaster/>
            <div className={style.titleContainer}>
                <h4>{isEditTitle.title}</h4>
                <ion-icon name="create-outline" title="Editar" onClick={()=> setIsEditTitle({...isEditTitle, activate:true})}></ion-icon>
            </div>
            <FeaturedInfo
                cards={[
                    {
                        title: "Pedidos pendientes",
                        value: "0",
                        icon: <ion-icon name="cart-outline"></ion-icon>
                    },
                    {
                        title: "Dinero recaudado",
                        value: "$0",
                        icon: <ion-icon name="cash-outline"></ion-icon>
                    },
                    {
                        title: "Mis productos",
                        value: "0",
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
            {
                isEditTitle.activate &&(
                    <EditTitle close={()=> setIsEditTitle({...isEditTitle, activate:false})} title={isEditTitle.title} editTitle={editTitle}/>
                )
            }
        </div>
    );
};

export default MyShop;