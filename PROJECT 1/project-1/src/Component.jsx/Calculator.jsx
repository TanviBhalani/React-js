import React, { useState } from "react";

export default function Calculator() {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
        <div className="bg-black shadow-lg rounded-4xl p-8 text-center w-120">
      <h1 className="text-4xl font-bold mb-10 text-gray-200">Calculator</h1>

      {/* Num1 Controls */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl font-semibold text-gray-100">Number 1: {num1}</p>
        <div className="flex gap-2">
            <button onClick={() => setNum1(num1 + 1)} className="bg-green-500 text-white px-2.5 py-0.5 rounded hover:bg-green-700 text-2xl transition cursor-pointer">+</button>
            <button onClick={() => setNum1(num1 - 1)} className="bg-red-500 text-white px-3 py-0.5 rounded hover:bg-red-700 transition text-2xl cursor-pointer">-</button>
        </div>
      </div>

      {/* Num2 Controls */}
      <div className="flex items-center justify-between mb-10">
        <p className="text-xl font-semibold text-gray-100">Number 2: {num2}</p>
        <div className="flex gap-2">
            <button onClick={() => setNum2(num2 + 1)} className="bg-green-500 text-white px-2.5 py-0.5 rounded hover:bg-green-700 text-2xl transition cursor-pointer">+</button>
            <button onClick={() => setNum2(num2 - 1)} className="bg-red-500 text-white px-3 py-0.5 rounded hover:bg-red-700 transition text-2xl cursor-pointer">-</button>
        </div>
      </div>

      {/* Operation Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button onClick={add} className="bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition cursor-pointer text-xl">Add</button>
        <button onClick={subtract} className="bg-blue-500 text-white py-2 px-2 rounded-lg hover:bg-blue-600 transition cursor-pointer text-xl">Subtract</button>
        <button onClick={multiply} className="bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition text-xl cursor-pointer">Multiply</button>
        <button onClick={divide} className="bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-700 transition text-xl cursor-pointer">Divide</button>
      </div>

      {/* Reset */}
      <div>
        <button onClick={reset} className="w-full border-2 text-white border-yellow-500 text-xl py-2 rounded-lg hover:bg-yellow-500 transition">Reset</button>
      </div>

      {/* Result */}
      <h2 className="mt-16 text-3xl font-semibold text-gray-100">Result: {displayResult}</h2>
    </div>
    </div>
  );
}
