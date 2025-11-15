// import React from 'react'

// export default function ConditionalRendering() {
//     const choice = true
//   return (
//     <div>
//         <h1>Conditional Rendering</h1>
//         {choice==true ? <h1>Hello</h1> : <h1>Bye</h1>}
      
//     </div>
//   )
// }

import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [choice,setChoice] = useState(false)
  return (
    <div style={{backgroundColor:choice?"purple":"yellow"}}>
    {/*  <div style={{backgroundColor:choice&&"blue"}}> */}
      <h1>Conditional rendering</h1>
      <button onClick={()=> setChoice(!choice)}>Click</button>
      {choice && <h1>Hello</h1>}
    </div>
  )
}

