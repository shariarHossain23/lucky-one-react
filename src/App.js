import { useEffect, useState } from 'react';
import './App.css';
import Cart from './component/cart/Cart';
import Watch from './component/watch/Watch';

function App() {
  const [watches,setWatch] = useState([]);
  const [cart,setCart] = useState([])
  useEffect(()=>
  fetch("data.json")
  .then(res => res.json())
  .then(data => setWatch(data))
  ,[])
  const handleCart = (selectedWatch) => {
    let newCart = [...cart,selectedWatch]
    setCart(newCart)
 }
  return (
    <div>
     <h1>Watch shop</h1>
     <div className='watch-product'>
      <div className='watches'>
          {
            watches.map(watch => <Watch key={watch.id} watch = {watch} handlecart={handleCart}></Watch> )
          }
      </div>
      <div className='order'>
        <h1>selected watch</h1>
        {
          cart.map(product => <Cart cart={product}></Cart>)
        }
        <div>
          <button>Choose one more</button> <br></br>
          <button>Choose Again</button>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
