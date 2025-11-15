import React, { useState } from 'react'

export default function Counter() {
    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [result,setResult] = useState(null)

    const add = ()=> {
        setResult(num1 + num2)
    }

    const subtract = () => {
        setResult(num1 - num2)
    }

    const multiply = () => {
        setResult (num1 * num2)
    }

    const division = () => {
        if(num2 === 0){
            setResult("Cannot divide by 0")
        }
        else{
            setResult(num1 / num2)
        }
    }

    const reset = () => {
        setNum1(0)
        setNum2(0)
        setResult(null)
    }

    const displayResult = result !== null ? result : "--"

  return (
    <div>
      <h1>Counter</h1>
      <p>Num1: {num1}</p>
      <button onClick={()=> setNum1(num1 + 1) }>+</button>
      <button onClick={()=> setNum1(num1 - 1) }>-</button>
      <br />

      <p>Num2: {num2}</p>
      <button onClick={()=> setNum2(num2 + 1) }>+</button>
      <button onClick={()=> setNum2(num2 - 1) }>-</button>

      <br />
      <br />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={division}>Division</button>
      <button onClick={reset}>Reset</button>
      <br />
      <h2>Result : {displayResult}</h2>
    </div>
  )
}

