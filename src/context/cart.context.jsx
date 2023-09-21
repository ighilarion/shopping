import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext({
    isCartOpen: false,
    toggleCart: () => { }
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, toggleCart] = useState(false)
    const value = { isCartOpen, toggleCart }



    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}