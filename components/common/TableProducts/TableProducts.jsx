import style from './TableProducts.module.css'
import Image from 'next/image'



const TableProducts = ({add, products, deleteProduct}) => {

    

    return (
        <>
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
            {
                products.map((e,i)=>(
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>
                            <div className={style.img}>
                                <Image src={e.img} layout="fill" objectFit='cover' alt="asd"/>
                            </div>
                            {e.name}
                        </td>
                        <td>{e.description}</td>
                        <td>{e.category}</td>
                        <td>{e.stock}</td>
                        <td>${e.regular_price}</td>
                        <td>${e.price}</td>
                        <td>
                            {
                                e.status ?(
                                    <span className={style.statusActivate}>Activado</span>
                                ):(
                                    <span className={style.statusDesactivate}>Desactivado</span>
                                )
                            }
                        </td>
                        <td>
                            <ion-icon name="create-outline"></ion-icon>
                            <ion-icon name="trash-outline" onClick={()=> deleteProduct(e.id, e.name)}></ion-icon>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </>
    );
};

export default TableProducts;