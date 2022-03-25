import React, { useState } from 'react';
import Watchcard from '../watchCard/Watchcard';
import './watch.css';

const Watch = () => {
    const [watches,setWatch] = useState([]);
    useState(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setWatch(data))
    },[])
    return (
        <div className='watch-product'>
            <div className='watch-data'>
                <div className='watches'>
                    {
                        watches.map(watch => <Watchcard key={watch.id} watch ={watch}></Watchcard>)
                    }
                </div>
            </div>
            <div className='watch-order'>hello</div>
        </div>
    );
};

export default Watch;