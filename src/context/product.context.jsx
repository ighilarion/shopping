import { useState } from "react";
import { createContext } from "react";

import PRODUCT_DATA from '../shop.json'

export const ProductContext = createContext({
    products: [],
})

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCT_DATA)
    const value = { products }



    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}