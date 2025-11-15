import React, { useRef, useState } from 'react'

export default function Example3() {
    const inputRef = useRef()
    const [text,setText] = useState("")

    const handleFocus = () => {
        inputRef.current.focus();
    }

    const handleClear = () => {
        inputRef.current.value = ""
    }

    const handleShow = () => {
        setText(inputRef.current.value)
    }
  return (
    <div>
      <h1>Focus , Clear & Show</h1>
      <input ref={inputRef} type="text" placeholder='Write Something here.....' />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleShow}>Show</button>
      <p onClick={()=> setText(inputRef.current.value)}>{text}</p>
    </div>
  )
}
