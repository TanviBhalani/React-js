import React, { useState } from "react";

export default function Simple() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const add = () => setResult(num1 + num2);
  const subtract = () => setResult(num1 - num2);
  const multiply = () => setResult(num1 * num2);
  const divide = () => {
    if (num2 === 0) {
      setResult("Cannot divide by 0");
    } else {
      setResult(num1 / num2);
    }
  };

  const reset = () => {
    setNum1(0);
    setNum2(0);
    setResult(null);
  };

  let displayResult;
    if (result !== null) {
        displayResult = result;
    } 
    else{
       displayResult = "—";
    }

  return (
    <div>
      <h1>Calculator</h1>

      {/* Num1 Controls */}
      <div>
        <p>Enter Number 1: {num1}</p>
        <button onClick={() => setNum1(num1 + 1)}>➕</button>
        <button onClick={() => setNum1(num1 - 1)}>➖</button>
      </div>

      {/* Num2 Controls */}
      <div>
        <p>Enter Number 2: {num2}</p>
        <button onClick={() => setNum2(num2 + 1)}>➕</button>
        <button onClick={() => setNum2(num2 - 1)}>➖</button>
      </div>

      {/* Operation Buttons */}
      <div>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
      </div>

      {/* Reset */}
      <div>
        <button onClick={reset}>Reset</button>
      </div>

      {/* Result */}
      <h2>Result: {displayResult}</h2>
    </div>
  );
}