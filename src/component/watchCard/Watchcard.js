
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import React from 'react';
import './watchcard.css';

const Watchcard = ({watch}) => {
    console.log(watch)
    const {img,name,balance} = watch;
    return (
        <div className='card'>
            <div className='card-img'>
            <img src={img}  alt="" ></img>
            </div>
            <div className="card-text">
            <h2>Name:{name}</h2>
            <h2> price: ${balance}</h2>
            </div>
            <button className="card-btn">Add to cart <FaShoppingCart className="icon"></FaShoppingCart></button>
        </div>
    );
};

export default Watchcard;