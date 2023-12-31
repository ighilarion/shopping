import React from 'react';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()
    const onCkeck = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartItems?.map((item) => (
                    <CartItem carItem={item} key={item?.id} />
                ))}
            </div>
            <Button onClick={onCkeck}>CHECKOUT</Button>
        </div>
    )
};

export default CartDropdown;