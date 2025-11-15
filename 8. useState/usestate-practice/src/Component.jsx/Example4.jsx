import React, { useState } from 'react'

export default function Example4() {
    const [like,setLike] = useState(0)

    const addLike = () => {
        setLike(like + 1 )
    }
  return (
    <div>
      <h1>Likes Counter</h1>
      <p>Likes : {like}</p>
      <button onClick={addLike}>like</button>
    </div>
  )
}
