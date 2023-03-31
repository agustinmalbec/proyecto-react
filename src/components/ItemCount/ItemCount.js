import { useState } from 'react';

function ItemCount({initial, stock, onAddToCart}) {

  const [count, setCount] = useState(initial);

  const decrease = ()=>{
    if(count > initial){
      setCount(count - 1);
    }
  }
  const increase = ()=>{
    if(count < stock){
      setCount(count + 1);
    }
  }

  return (
    <div>
      <button className='' onClick={decrease}>-</button>
      <span>{count}</span>
      <button className='' onClick={increase}>+</button>
      <button className='' onClick={()=> onAddToCart(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;