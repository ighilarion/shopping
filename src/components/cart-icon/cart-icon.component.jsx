import React from 'react'
import { ReactComponent as ShopingBagIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

function CartIcon() {

    const { isCartOpen, toggleCart } = useContext(CartContext)

    const toggleCartOpen = () => toggleCart(!isCartOpen)
    return (
        <div className='cart-icon-container' onClick={toggleCartOpen}>
            <span className='item-count'>0</span>
            <ShopingBagIcon className='shopping-icon' />
        </div>
    )
}

export default CartIcon