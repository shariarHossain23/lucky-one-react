import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './cart.css';

const Cart = ({cart}) => {
    const {img,name} = cart;
    return (
        <div className='cart-card'>
            <img src={img} alt=""></img>
            <h4>{name}</h4>
            <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </div>
    );
};

export default Cart;