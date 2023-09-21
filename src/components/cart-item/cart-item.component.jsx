import React from 'react'
import './cart-item.styles.scss'

function CartItem({ carItem }) {
    const { name, price, quantity, imageUrl } = carItem
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span>{`${quantity} x $${price}`}</span>
            </div>
        </div>
    )
}

export default CartItem