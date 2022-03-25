import React, { useState } from 'react';
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
                <div>
                    {
                        watches.map(watch => console.log(watch))
                    }
                </div>
            </div>
            <div className='watch-order'>hello</div>
        </div>
    );
};

export default Watch;