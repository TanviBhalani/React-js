import React, { useState } from 'react'

export default function Example2() {
    const [count,setCount] = useState(0);

  return (
    <div>
        <h1>Counter</h1>
        <p>Value : {count}</p>
        <button onClick={() => setCount(count +1)}>Increase (+)</button>
        <button onClick={() => setCount (count -1)}>Decerease (-)</button>
        <button onClick={() => setCount(0)}>Reset</button>
      
    </div>
  )
}
