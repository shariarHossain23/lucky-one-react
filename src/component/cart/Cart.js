import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './cart.css';

const Cart = ({product}) => {
    console.log(product)
    const {name,img} = product;
    return (
        <div className='cart-card'>
            <h3>{name}</h3>
            <img src={img} alt=""></img>
            <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default Cart;