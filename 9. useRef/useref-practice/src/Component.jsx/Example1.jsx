import React, { useRef } from 'react'

export default function Example1() {
    const inputRef = useRef()

    const handleFocus = () => {
        inputRef.current.focus();
    }
  return (
    <div>
      <h1>Focus Input</h1>
      <input ref={inputRef} type="text" placeholder='Enter your name' />
      <input ref={inputRef} type="text" placeholder='Enter your age' />
      <input ref={inputRef} type="text" placeholder='Enter your course...' />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}
