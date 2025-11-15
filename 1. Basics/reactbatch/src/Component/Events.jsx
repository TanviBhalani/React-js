// import React from 'react'

// export default function Events() {
//     const greet = (name) => {
//         console.log("Hello", name);
//     }
//   return (
//     <div>
//         <h1>Events</h1>
//         <input type="text" onChange={()=> greet("Mr. Manoj Bhalani")} />
//         <button onClick={()=> greet("Tanvi")}>Click</button>
      
//     </div>
//   )
// }


import React, { useState } from 'react'

export default function Events() {
    const [name,setname] = useState("")
   const greet = () => {
        console.log("Hello", name);
    }
  return (
    <div>
        <h1>Events</h1>
        <input type="text" placeholder='Enter your name' onChange={(e)=> setname(e.target.value)} />
        {/* <button onClick={()=> greet("Tanvi")}>Click</button> */}
        <h1>{name}</h1>
      
    </div>
  )
}
