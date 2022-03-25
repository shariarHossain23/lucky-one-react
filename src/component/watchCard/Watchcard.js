import React from 'react';
import './watchcart.css';

const Watchcard = ({watch}) => {
    console.log(watch)
    const {img,name,balance} = watch;
    return (
        <div className='card'>
            <div className='card-img'>
            <img src={img}  alt="" ></img>
            </div>
            <h2>Name:{name}</h2>
            <h2> price: ${balance}</h2>
            <button>Add to cart</button>
        </div>
    );
};

export default Watchcard;