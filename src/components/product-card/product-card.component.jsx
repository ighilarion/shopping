import React from 'react'
import Button from '../button/button.component'
import './product-card.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

function ProductCard({ product }) {
    const { imageUrl, name, price } = product
    const { addItemsToCart } = useContext(CartContext)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <Button buttonType='inverted' onClick={() => addItemsToCart(product)}> Add to Cart </Button>
            <div className='footer'>
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default ProductCard