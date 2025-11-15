import React, { useRef } from "react";

export default function Example2() {
  const inputRef = useRef(null);

  const handleClear = () => {
    inputRef.current.value = ""; 
    inputRef.current.focus(); 
  };

  return (
    <div >
      <h1>Focus and Clear input</h1>
      <input ref={inputRef} type="text"  placeholder="Write Something..." />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

