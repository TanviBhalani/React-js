import React, { useState } from 'react'

export default function UseState() {

    const [count,setCount] = useState(0)

    const increment = ()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
      if(count > 0){
        setCount(count-1)
      }
    }

  return (
    <div>
      <h1>UseState</h1>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}







// import React, { useState } from "react";

// export default function UseState() {
//   const [likes, setLikes] = useState(0);

//   const increment = () => {
//     setLikes(likes + 1);
//   };

//   const decrement = () => {
//     if (likes > 0) {
//       setLikes(likes - 1);
//     }
//   };

//   const reset = () => {
//     setLikes(0);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>❤️ Like Counter</h1>
//       <h2>{likes} Likes</h2>
//       <div>
//         <button onClick={increment}>👍 Like</button>
//         <button onClick={decrement} disabled={likes === 0}>
//           👎 Unlike
//         </button>
//         <button onClick={reset}>🔄 Reset</button>
//       </div>
//     </div>
//   );
// }
