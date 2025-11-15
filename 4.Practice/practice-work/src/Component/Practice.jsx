import React from 'react'

export default function Practice() {

    
  //String
  let str = "Hey Tanvi !! What's up?";

  //Number
  let num = "50";

  //Boolean
  let boolean = "true";

  //Null
  let box = "null";

  //Undefined
  let letter = "undefined";

  //Array
  let arr = ["Tanvi", "Janvi", "Rekha"]

  //Array of Object
  let obj = [
    { name: "Tanvi", age: 21 },
    { name: "Janvi", age: 19 },
    { name: "Mili", age: 21 }
  ];

  //Function
  let greet = (name) => `Jay Maa Vishvambhari, ${name}`;

  // BigInt
  let big = 1234567890123456789012345678901234567890n;

  return (
    <div>
      <h2>String: {str}</h2>
      <h2>Number: {num}</h2>
      <h2>Boolean: {boolean}</h2>
      <h2>Null: {box}</h2>
      <h2>Undefined: {letter}</h2>

      <h2>Array:</h2>
      <ul>
        {
            arr.map((e,i)=> (
                <li key={i}><h1>{e}---{i}</h1></li>
            ))
        }
      </ul>





      <h2>Array of Objects :</h2>
      {
        obj.map((e, i) => {
          return (
            <ul key={i}>
              <li>Name: {e.name}</li>
              <li>Age: {e.age}</li>
            </ul>
          )
        })
      }







      <h2>Function: {greet("Tanvi")}</h2>
      <h2>BigInt: {big}</h2>
      
    </div>
  )
}
