import style from './Orders.module.css'
import Image from 'next/image'


const Orders = () => {
    return (
        <div className={style.container}>
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
                    <tr>
                        <td>1</td>
                        <td>santillienzo</td>
                        <td>Enzo</td>
                        <td>Santilli</td>
                        <td>
                            <div className={style.img}>
                                <Image src={'/assets/img/products/wine1.jpg'} layout="fill" objectFit='cover'/>
                            </div>
                            Vino Malbec
                        </td>
                        <td>$300</td>
                        <td>02634786580</td>
                        <td>Argentina</td>
                        <td>Mendoza</td>
                        <td>Barrio San Pedro M20 c27 - San martín Mza</td>
                        <td>M5570</td>
                        <td>Mercado Pago</td>
                        <td>Aprobado</td>
                        <td>Andreani</td>
                        <td>$700</td>
                        <td>${300 + 700}</td>
                        <td>Por despachar</td>
                        <td>
                        <ion-icon name="create-outline" title="Editar"></ion-icon>
                            <ion-icon name="trash-outline" title="Eliminar"></ion-icon>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>santillienzo</td>
                        <td>Enzo</td>
                        <td>Santilli</td>
                        <td>
                            <div className={style.img}>
                                <Image src={'/assets/img/products/wine1.jpg'} layout="fill" objectFit='cover'/>
                            </div>
                            Vino Malbec
                        </td>
                        <td>$300</td>
                        <td>02634786580</td>
                        <td>Argentina</td>
                        <td>Mendoza</td>
                        <td>Barrio San Pedro M20 c27 - San martín Mza</td>
                        <td>M5570</td>
                        <td>Mercado Pago</td>
                        <td>Aprobado</td>
                        <td>Andreani</td>
                        <td>$700</td>
                        <td>${300 + 700}</td>
                        <td>Por despachar</td>
                        <td>
                            <ion-icon name="create-outline" title="Editar"></ion-icon>
                            <ion-icon name="trash-outline" title="Eliminar"></ion-icon>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Orders;