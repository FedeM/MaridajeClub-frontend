import style from './Orders.module.css'
import Image from 'next/image'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';


import toast, { Toaster } from 'react-hot-toast';
const deleteSuccess = () => toast.success(`Eliminado correctamente`,{
    position: "bottom-center"
});


const Orders = () => {
    //Definir estados
    const [orders, setOrders] = useState([])
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    //Eliminamos la fila que hayamos escogido
    const handleDelete = (id) => {
        setOrders(orders.filter((item) => item.id !== id));
        deleteOrder(id)
        toast.promise(
            deleteOrder(id),
            {
                loading: "Eliminando...",
                success: "Pedido eliminado correctamente",
                error: "No se pudo eliminar el pedido"
            }
        );
    };

    //Mostrar usuarios
    const viewUser = (id)=>{
        let user ={
            name: "",
            photo: ""
        }
        users.map(e=>{
            if (e.id === id) {
                user={
                    name: e.name,
                    photo: e.photo
                }
            }
        })
        
        return user
    }

    //Mostrar producto
    const viewProduct = (id)=>{
        let product ={
            name: "",
            photo: ""
        }

        products.map(e=>{
            if (e.id === id) {
                product={
                    name: e.name,
                    photo: e.feature_img
                }
            }
        })

        return product
    }

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { 
            field: "user_id", 
            headerName: "Usuario", 
            width: 200,
            renderCell: (params)=>{
                return(
                    <div className="userListUser">
                        <img className="userListImg" src={viewUser(params.row.user_id).photo} alt="" />
                        {viewUser(params.row.user_id).name}
                    </div>
                )
            }
        },
        { field: "first_name", headerName: "Nombre", width: 200,},
        { field: "last_name", headerName: "Apellido", width: 200,},
        { 
            field: "product_id", 
            headerName: "Producto", 
            width: 200,
            renderCell: (params)=>{
                return(
                    <div className="productListItem">
                        <img className="productListImg" src={viewProduct(params.row.product_id).photo} alt="" />
                        {viewProduct(params.row.product_id).name}
                    </div>
                )
            }
        },
        { field: "phone_number", headerName: "Phone", width: 160,},
        { field: "address", headerName: "Dirección", width: 160,},
        { field: "country", headerName: "País", width: 160,},
        { field: "province", headerName: "Provincia", width: 160,},
        { field: "location", headerName: "Ciudad", width: 160,},
        { field: "postal_code", headerName: "Código Postal", width: 160,},
        { field: "payment_method", headerName: "Método de pago", width: 160,},
        { field: "payment_order", headerName: "Valor compra", width: 160,},
        { field: "payment_status", headerName: "Estado del pago", width: 160,},
        { field: "shipping_method", headerName: "Método de envío", width: 160,},
        { field: "shipping_cost", headerName: "Costo envío", width: 160,},
        {
            field: "action",
            headerName: "Acción",
            width: 150,
            renderCell: (params) => {
            return (
                <>
                <div className="orderListDelete" >
                    <ion-icon 
                    name="trash-outline"
                    onClick={() => handleDelete(params.row.id)}
                    ></ion-icon>
                </div>
                </>
            );
            },
        },
    ];

    return (
        <div className={style.container}>
            <Toaster/>
            <h2 className={style.title}>Pedidos</h2>
            <DataGrid
                rows={orders}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                // checkboxSelection
            />
        </div>
    );
};

export default Orders;

