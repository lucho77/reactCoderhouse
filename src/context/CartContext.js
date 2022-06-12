import { createContext, useState } from "react"

const CartContext = createContext()
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addProduct= (productToAdd) => {
        if(!isPresent(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newProducts = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        cantidad: productToAdd.cantidad
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setCart(newProducts)
        }
    }

 
    const isPresent = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const limpiaCarrito = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
  
    }

    const getTotal = ()=>{
        let acu = 0;
        cart.forEach(element => {
          acu+=element.cantidad;
        });
        return acu;
      }
      const getCantidadByProd = (id) => {
        return cart.find(prod => prod.id === id)?.cantidad;
       
    }
    return(
        <CartContext.Provider value={{
            cart,
            addProduct,
            isPresent,
            limpiaCarrito,
            removeItem,
            getTotal,
            getCantidadByProd
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext