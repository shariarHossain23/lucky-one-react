import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./cart.css";

const Cartproduct = ({cart}) => {
    const {img,name} = cart;
    return (
        <div>
             <div className='cart-card'>
            <img src={img} alt=""></img>
            <h6>{name}</h6>
            <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
        </div>
    </div>
    );
};

export default Cartproduct;