import React from 'react';
import './watchcart.css';

const Watchcard = ({watch}) => {
    console.log(watch)
    const {img,name,price} = watch;
    return (
        <div className='card'>
            <div className='card-img'>
            <img src={img}  alt="" ></img>
            </div>
        </div>
    );
};

export default Watchcard;