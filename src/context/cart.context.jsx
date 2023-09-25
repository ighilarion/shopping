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

const clearCartItem = (productToClear, cartItems) => {
    const newArray = cartItems.filter(cartItem => cartItem.id !== productToClear.id)
    return newArray
}

const removeCartItem = (productToClear, cartItems) => {
    const existingItem = cartItems.find(item => item.id === productToClear.id)

    if (existingItem.quantity === 1) {
        return clearCartItem(productToClear, cartItems)
    }

    return cartItems.map(item => (
        item.id === existingItem.id ?
            { ...item, quantity: item.quantity - 1 } :
            item
    ))
}


export const CartContext = createContext({
    isCartOpen: false,
    toggleCart: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    totalPrice: 0,
    clearItemFromCart: () => { },
    removeItemFromCart: () => { },
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, toggleCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)


    useEffect(() => {
        const newCount = cartItems.reduce((total, item) => total + item.quantity, 0)
        const newPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0)

        setCartCount(newCount)
        setTotalPrice(newPrice)
    }, [cartItems])

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(productToAdd, cartItems))
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(productToClear, cartItems))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(productToRemove, cartItems))
    }

    const value = {
        isCartOpen,
        toggleCart,
        addItemsToCart,
        cartItems,
        cartCount,
        totalPrice,
        clearItemFromCart,
        removeItemFromCart
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

