import React from 'react'

export default function Map2() {
    const students = [
        {id:1, name: "Tanvi", age: 21},
        {id:2, name: "Janvi", age: 16},
        {id:3, name: "Mili", age: 20}
    ]
  return (
    <div>
        <h2>Name and Age:</h2>
        <ul>
            {
                students.map((e,i)=> (
                    <li key={i}>{e.name}- {e.age}</li>
                ))
            }
        </ul>
      
    </div>
  )
}
