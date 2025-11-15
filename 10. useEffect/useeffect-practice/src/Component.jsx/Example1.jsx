//Mounting

import React, { useEffect } from 'react'

export default function Example1() {
    useEffect(()=> {
        console.log("Component mounted!")
    },[])
  return (
    <div>
        <h1>Mounting</h1>
      <p>Hello Tanvi</p>
      <br />
    </div>
  )
}
