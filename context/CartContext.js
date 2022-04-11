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
                console.log(_price)
                return _price
            }else{
                return 0.00
            }
        }
    }) 

    useEffect(()=>{
        localStorage.setItem('cartProducts', JSON.stringify(cartItems))
        console.log(cartItems)
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
                    return product
                }else{
                    return product
                }
            })
            setCartItems([...pro])
        }else{
            setCartItems([...cartItems, item])
        }
    }

    const deleteItemToCart = (product)=>{
        const exist = cartItems.find(item=>{ product.id === item.id})

        if (exist.quantity === 1) {
            setCartItems(cartItems.filter(item => item.id !== product.id))
        }else{
            setCartItems(item=>{
                if (item.id === product.id) {
                    return {...exist, quantity: exist.quantity -1}
                }else{
                    return item
                }
            })
        }
    }



    return (
        <CartContext.Provider value={{priceTotal, cartItems, addItemToCart, deleteItemToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;