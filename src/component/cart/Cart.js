import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './cart.css';

const Cart = ({cart,trashcart}) => {
    const {img,name,id} = cart;
    return (
        <div className='cart-card'>
            <img src={img} alt=""></img>
            <h4>{name}</h4>
            <FontAwesomeIcon onClick={()=> trashcart(id)} icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default Cart;