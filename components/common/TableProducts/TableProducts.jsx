import style from './TableProducts.module.css'
import Image from 'next/image'
import Link from 'next/link';

const TableProducts = ({add}) => {
    return (
        <table className={style.table}>
            <caption className={style.title}>
                <span>Productos</span>
                <div className={style.addBtn} onClick={add}>
                    Añadir
                </div>
            </caption>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Producto</th>
                    <th scope='col'>Descripción</th>
                    <th scope='col'>Categoría</th>
                    <th scope='col'>Stock</th>
                    <th scope='col'>Precio compra</th>
                    <th scope='col'>Precio venta</th>
                    <th scope='col'>Estado</th>
                    <th scope='col'>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <div className={style.img}>
                            <Image src={'/assets/img/products/wine1.jpg'} layout="fill" objectFit='cover'/>
                        </div>
                        Vino Malbec
                    </td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed</td>
                    <td>Vino</td>
                    <td>12</td>
                    <td>$105.00</td>
                    <td>$200.00</td>
                    <td><span className={style.statusActivate}>Activado</span></td>
                    <td>
                        <ion-icon name="create-outline"></ion-icon>
                        <ion-icon name="trash-outline"></ion-icon>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        <div className={style.img}>
                            <Image src={'/assets/img/products/wine1.jpg'} layout="fill" objectFit='cover'/>
                        </div>
                        Vino Malbec
                    </td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ultrices libero, et tincidunt justo aliquam vel. Sed</td>
                    <td>Vino</td>
                    <td>12</td>
                    <td>$105.00</td>
                    <td>$200.00</td>
                    <td><span className={style.statusDesactivate}>Desactivado</span></td>
                    <td>
                        <ion-icon name="create-outline"></ion-icon>
                        <ion-icon name="trash-outline"></ion-icon>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableProducts;