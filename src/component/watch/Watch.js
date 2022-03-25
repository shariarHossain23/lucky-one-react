import React, { useState } from 'react';
import Cart from '../cart/Cart';
import Watchcard from '../watchCard/Watchcard';
import './watch.css';

const Watch = () => {
    const [watches,setWatch] = useState([]);
    const [cart,setCart] = useState([])
    useState(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setWatch(data))
    },[])

    // add cart button
    const handleCart = (selectedWatch) => {
       let newCart = [...cart,selectedWatch]
       setCart(newCart)
    }
    return (
        <div className='watch-product'>
            <div className='watch-data'>
                <div className='watches'>
                    {
                        watches.map(watch => <Watchcard key={watch.id} watch ={watch} handlecart={handleCart}></Watchcard>)
                    }
                </div>
            </div>
            <div className='watch-order'>
                <h1>order</h1>
                <div>
                   {
                       cart.map(watch => <Cart key={watch.id} watch={watch}></Cart>)
                   }
                </div>
            </div>
        </div>
    );
};

export default Watch;