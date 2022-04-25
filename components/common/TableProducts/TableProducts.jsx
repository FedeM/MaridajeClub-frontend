import style from './TableProducts.module.css'
import Image from 'next/image'
import { DataGrid } from "@material-ui/data-grid";




const TableProducts = ({add, products, deleteProduct, edit}) => {

    //Mostramos la categoría que coincida con el category_id del producto
    const viewCategory=(id)=>{
        let name
        categories.map((e)=>{
            if (e.id === id) {
                name= e.name
            }
        })
        return name
    }

    //Mostramos la tienda que coincida con el shop_id del producto
    const viewShop=(id)=>{
        let name
        shops.map((e)=>{
            if (e.id === id) {
                name= e.name
            }
        })
        return name
    }

    //Mostramos el evento al cual pertenece el event_id del producto
    const viewEvent =(id)=>{
        let name
        if (id === 0) {
            name="Ninguno"
        }else{
            events.map((e)=>{
            if (e.id === id) {
                name= e.name
            }
            })
        }
    
        return name
    }

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Producto",
            width: 200,
            renderCell: (params) => {
                return (
                <div className="productListItem">
                    <img className="productListImg" src={params.row.feature_img} alt="" />
                    {params.row.name}
                </div>
                );
            },
        },
        { field: "category_id", 
            headerName: "Category", 
            width: 300, 
            renderCell: (params)=>{
                return(
                <div className="productListItem">
                    {viewCategory(params.row.category_id)}
                </div>
            )
            }
        },
        { field: "description", headerName: "Descripción", width: 300 },
        { 
            field: "shop_id", 
            headerName: "Tienda", 
            width: 200,
            renderCell: (params)=>{
                return(
                <div className="productListItem">
                    {viewShop(params.row.shop_id)}
                </div>
                )
            }
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "regular_price",
            headerName: "Precio Compra",
            width: 160,
        },
        {
            field: "sale_price",
            headerName: "Precio Venta",
            width: 160,
        },
        { 
            field: "event_id", 
            headerName: "Evento", 
            width: 200,
            renderCell: (params)=>{
                return(
                <div className="productListItem">
                    {viewEvent(params.row.event_id)}
                </div>
                )
            }
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                <>
                    <div>
                        <button className="productListEdit">Editar</button>
                    </div>
                    <div className="productListDelete" >
                    <ion-icon 
                        name="trash-outline"
                        onClick={() => deleteProduct(params.row.id, params.row.name)}
                    ></ion-icon>
                    </div>
                </>
                );
            },
        },
    ];

    return (
        <>
        <div className={style.title}>
            <span>Productos</span>
            <div className={style.addBtn} onClick={add}>
                Añadir
            </div>
        </div>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
        </>
    );
};

export default TableProducts;