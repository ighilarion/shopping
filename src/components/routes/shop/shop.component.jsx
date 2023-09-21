import './shop.styles.scss'

import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../../context/product.context'
import ProductCard from '../../product-card/product-card.component'

function Shop() {

    const { products } = useContext(ProductContext)

    return (
        <div className='products-container'>
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    )
}

export default Shop