// import React, { useRef } from 'react'

// export default function UseRef() {
//     const userRef = useRef()

//     const handleClick = ()=>{
//         console.log(userRef.current.value);
//     } 
//   return (
//     <div>
//         <input type="text" ref={userRef} />
//         <button onClick={handleClick}>Click</button>

//     </div>
//   )
// }


import React, { useRef, useState } from "react";

export default function UseRef() {
  const inputRef = useRef();
  const [text, setText] = useState ("");

  const handleFocus = () => inputRef.current.focus();

  const haldleShow = () => {
    setText(inputRef.current.value)
  };

  const handleClear = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Focus & Clear Input</h1>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <br /><br />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={haldleShow}>Show</button>
      <button onClick={handleClear}>Clear</button>

      {text && <h2>You typed: <b>{text}</b></h2>}
    </div>
  );
}
