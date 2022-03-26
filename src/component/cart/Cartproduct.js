import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./cart.css";

const Cartproduct = ({carts}) => {
    const {img,name} = carts;
    return (
        <div>
             <div className='cart-card'>
            <img src={img} alt=""></img>
            <h3>{name}</h3>
            <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
        </div>
    </div>
    );
};

export default Cartproduct;