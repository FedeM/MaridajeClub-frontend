import react, { useEffect, useState } from 'react'

const CartContext = react.createContext({

})

export function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState(()=>{
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts')
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : []
        } catch (error) {
            return [];
        }
    })
    const [priceTotal, setPriceTotal] = useState(()=>{
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("cartProducts")) {
                let _price = 0;
                cartItems.map(item=>{
                    //El precio total es igual al valor de precio total + precio del producto multiplicadp por la cantidad
                    _price = _price + item.sale_price * item.quantity
                })
                return _price
            }else{
                return 0.00
            }
        }
    }) 
    const [countCart, setCountCart] = useState(()=>{
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("cartProducts")) {
                //Recorremos el carrito
                let _count = 0
                cartItems.map(item=>{
                    //El precio total es igual al valor de precio total + precio del producto multiplicadp por la cantidad
                    _count = _count + item.quantity
                })  
                return _count     
            }else{
                return 0
            }
        }
    })

    useEffect(()=>{
        localStorage.setItem('cartProducts', JSON.stringify(cartItems))
    }, [cartItems])

    const addItemToCart = (item)=>{
        let quantity = 1;
        //Extraemos todos los datos del producto que seleccionemos
        item = {...item, quantity}

        setPriceTotal(priceTotal + item.sale_price * item.quantity)
        
        const exist = cartItems.some(product => product.id === item.id);

         //En caso de que así sea sumamos 1 a la cantidad del producto, y si no es así agregamos el producto al render
        if (exist) {
            const pro = cartItems.map(product=>{
                if (product.id === item.id) {
                    product.quantity+= item.quantity
                    setCountCart(countCart + item.quantity)
                    return product
                }else{
                    return product
                }
            })
            setCartItems([...pro])
        }else{
            setCartItems([...cartItems, item])
            setCountCart(countCart + item.quantity)
        }
    }

    const deleteItemToCart = (idProduct)=>{
        cartItems.map(item=>{
            if (item.id === idProduct) {
                let priceReduce = item.sale_price * item.quantity
                setPriceTotal(priceTotal - priceReduce)
                setCountCart(countCart - item.quantity)
            }
        })
        setCartItems(cartItems.filter(item => item.id !== idProduct))
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    }

    const updateItem = (action, item)=>{


        if (action === "AUMENTAR") {
            const pro = cartItems.map(product=>{
                if (product.id === item.id) {
                    product.quantity+= 1
                    setPriceTotal(priceTotal + product.sale_price)
                    setCountCart(countCart + 1)
                    return product
                }else{
                    return product
                }
            })
            setCartItems([...pro])
        }else if(action === "REDUCIR"){
            if (item.quantity > 1) {
                const pro = cartItems.map(product=>{
                    if (product.id === item.id) {
                        product.quantity-= 1
                        setPriceTotal(priceTotal - product.sale_price)
                        setCountCart(countCart - 1)
                        return product
                    }else{
                        return product
                    }
                })
                setCartItems([...pro])
            }else{
                deleteItemToCart(item.id)
            }
        }
    }

    return (
        <CartContext.Provider value={{countCart, priceTotal, cartItems, addItemToCart, deleteItemToCart, updateItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;