import style from './Orders.module.css'
import Image from 'next/image'
import { orders as arrayOrders} from '../../../../lib/orders';
import { useState } from 'react';


import toast, { Toaster } from 'react-hot-toast';
const deleteSuccess = () => toast.success(`Eliminado correctamente`,{
    position: "bottom-center"
});


const Orders = () => {
    //Definir estados
    const [orders, setOrders] = useState(arrayOrders)

    //Eliminar Pedido
    const deleteOrders = (id)=>{
        setOrders(orders.filter(order=> order.id !== id))
        deleteSuccess()
    }
    return (
        <div className={style.container}>
            <Toaster/>
            <table className={style.table}>
                <caption className={style.title}>Pedidos</caption>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Usuario</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Apellido</th>
                        <th scope='col'>Producto</th>
                        <th scope='col'>Valor</th>
                        <th scope='col'>Número de teléfono</th>
                        <th scope='col'>País</th>
                        <th scope='col'>Provincia</th>
                        <th scope='col'>Dirección</th>
                        <th scope='col'>Código Postal</th>
                        <th scope='col'>Método de pago</th>
                        <th scope='col'>Estado del pago</th>
                        <th scope='col'>Método de envío</th>
                        <th scope='col'>Costo envío</th>
                        <th scope='col'>Valor total</th>
                        <th scope='col'>Estado</th>
                        <th scope='col'>Acción</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.length === 0 ?(
                        <tr className={style.emptyData}>
                            <td>-</td>
                            <td>No hay Datos</td>
                            <td>-</td>
                            <td>No hay Datos</td>
                            <td>-</td>
                            <td>No hay Datos</td>
                            <td>-</td>
                            <td>No hay Datos</td>
                            <td>-</td>
                            <td>No hay Datos</td>
                            <td>-</td>
                            <td>No hay Datos</td>
                            <td>-</td>
                            <td>No hay Datos</td>
                            <td>-</td>
                            <td>No hay Datos</td>
                            <td>-</td>
                            <td>No hay Datos</td>
                        </tr>
                    ):(
                        orders.map((e,i)=>(
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.user}</td>
                                <td>{e.first_name}</td>
                                <td>{e.last_name}</td>
                                <td>
                                    <div className={style.img}>
                                        <Image src={'/assets/img/products/wine1.jpg'} layout="fill" objectFit='cover' alt="asd"/>
                                    </div>
                                    {e.product}
                                </td>
                                <td>${e.payment_order}</td>
                                <td>${e.phone}</td>
                                <td>{e.country}</td>
                                <td>{e.province}</td>
                                <td>{e.direction}</td>
                                <td>{e.postal_code}</td>
                                <td>{e.payment_method}</td>
                                <td>{
                                    e.payment_status === 0 ?(
                                        <span className={style.desaproved}>Desaprobado</span>
                                    ): e.payment_status === 1 ?(
                                        <span className={style.wait}>En espera</span>
                                    ): e.payment_status === 2 ?(
                                        <span className={style.aproved}>Aprobado</span>
                                    ):('')
                                }</td>
                                <td>{e.shipping_method}</td>
                                <td>${e.shipping_cost}</td>
                                <td>${e.payment_order + e.shipping_cost}</td>
                                <td>Por despachar</td>
                                <td>
                                    {/* <ion-icon name="create-outline" title="Editar"></ion-icon> */}
                                    <ion-icon name="trash-outline" title="Eliminar" onClick={()=> deleteOrders(e.id)}></ion-icon>
                                </td>
                            </tr>
                        ))
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;