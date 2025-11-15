import React from 'react'

export default function Example1() {
    const handleClick = () => {
        alert("Button is Clicked!!")
    }
  return (
    <div>
      <h1>OnClick Function</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
