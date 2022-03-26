import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './cart.css';

const Cart = ({cart}) => {
    const {name,img} = cart;
    return (
        <div className='cart-card' data-aos="fade-left">
            <img src={img} alt=""></img>
            <h3>{name}</h3>
            <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default Cart;