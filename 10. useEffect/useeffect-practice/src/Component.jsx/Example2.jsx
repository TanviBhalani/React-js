//Updating

import React, { useEffect, useState } from 'react'

export default function Example2() {
    const [count,setCount] = useState(0)

    useEffect(()=> {
        console.log("Updating");
    })
  return (
    <div>
        <h1>Updating</h1>
      <h3>Count : {count}</h3>
      <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}
