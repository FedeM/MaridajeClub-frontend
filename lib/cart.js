let cart = []   //Array donde se guardarán los productos del carrito
let priceTotal = 0;    //Precio total
let countCart = 0; //Contador de productos


//Agregar uno o varios
export const addProduct = (item)=>{
    console.log(item)
    let quantity;

    quantity = 1;
    
    //Extraemos todos los datos del producto que seleccionemos
    item = {...item, quantity}

    //Sumamos el precio total
    priceTotal = parseFloat(priceTotal) + (parseFloat(item.precio) * item.quantity)
    priceTotal = priceTotal.toFixed(2)

    //Comprobamos que el producto existe en el carrito
    const exist = cart.some(product => product.id === item.id);

    //En caso de que así sea sumamos 1 a la cantidad del producto, y si no es así agregamos el producto al render
    if (exist) {
        const pro = cart.map(product=>{
            if (product.id === item.id) {
                product.quantity+= item.quantity
                countCart+= item.quantity;
                return product
            }else{
                return product
            }
        })
        cart = [...pro]
    }else{
        cart = [...cart, item]
        countCart+= item.quantity;
    }

    //Añadimos el array al localStorage
    if (typeof window !== 'undefined') {
        localStorage.setItem("cartProduct", JSON.stringify(cart));
    }
}

export const deleteProduct = ()=>{
    //Eliminar todo el producto
}

export const deleteOneProduct = ()=>{
    //Eliminar un solo producto
}

export const getProducts = ()=>{
    return cart
}

export const getQuantity = ()=>{
    return countCart
}

export const getAmount = ()=>{
    return priceTotal
}

const fillCart = ()=>{
    if (typeof window !== 'undefined') {
        if (localStorage.getItem("cartProduct")) {
            //Nuestra variable carrito será igual a lo guardado en el local storage
            cart = JSON.parse(localStorage.getItem("cartProduct"));
            //Recorremos el carrito
            cart.map(product=>{
                //El precio total es igual al valor de precio total + precio del producto multiplicadp por la cantidad
                priceTotal = parseFloat(priceTotal) + parseFloat(product.sale_price) * parseFloat(product.quantity)
                priceTotal = priceTotal.toFixed(2)
                //El contador es igual al valor de contador + la cantidad del producto
                countCart = countCart + product.quantity
            })        
        }
    }
}

fillCart()


