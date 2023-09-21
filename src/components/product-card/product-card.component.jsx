import React from 'react'
import Button from '../button/button.component'
import './product-card.styles.scss'

function ProductCard({ product }) {
    const { imageUrl, name, price } = product
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <Button buttonType='inverted' > Add to Cart </Button>
            <div className='footer'>
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default ProductCard