import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const addCartItem = (producToAdd, cartItems) => {
    const existing = cartItems.find((item) => item.id === producToAdd.id)

    if (existing) {
        return cartItems.map((item) =>
            item.id === producToAdd.id ?
                { ...item, quantity: item.quantity + 1 }
                : { ...item }
        )
    }
    return [...cartItems, { ...producToAdd, quantity: 1 }]

}


export const CartContext = createContext({
    isCartOpen: false,
    toggleCart: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, toggleCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(productToAdd, cartItems))
    }

    useEffect(() => {
        const newCount = cartItems.reduce((total, item) => total + item.quantity, 0)
        setCartCount(newCount)
    }, [cartItems])


    const value = { isCartOpen, toggleCart, addItemsToCart, cartItems, cartCount }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

