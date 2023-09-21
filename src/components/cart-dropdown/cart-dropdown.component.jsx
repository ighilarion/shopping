import React from 'react';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartItems?.map((item) => (
                    <CartItem carItem={item} key={item?.id} />
                ))}
            </div>
            <Button>CHECKOUT</Button>
        </div>
    )
};

export default CartDropdown;