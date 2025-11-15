import React, { useState } from 'react'

export default function Example3() {
    const[floor, setFloor] = useState(0)
  return (
    <div>
      <h1>Elevator</h1>
      <p>Floor : {floor}</p>
      <button onClick={() => setFloor(floor + 1)}>Go Up</button>
      <button onClick={() => setFloor(floor > 0 ? floor - 1 : 0)}>Go Down</button>
    </div>
  )
}


