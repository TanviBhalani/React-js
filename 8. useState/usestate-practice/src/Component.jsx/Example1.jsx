import React, { useState } from 'react'

export default function Example1() {
    const [cart,setCart] = useState([]);

    const addItem = () => {
        setCart([...cart,addItem])
    }
  return (
    <div>
        <h1>Add to Cart</h1>
      <p>Cart has {cart.length} items</p>
      <button onClick={addItem}>Add to Cart</button>
    </div>
  )
}
