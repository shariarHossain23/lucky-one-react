import React from 'react';
import './cart.css';
const Cart = ({cart}) => {
    const {img,name} = cart;
    return (
        <div className='cart-card'>
            <img src={img} alt=""></img>
            <h4>{name}</h4>
        </div>
    );
};

export default Cart;