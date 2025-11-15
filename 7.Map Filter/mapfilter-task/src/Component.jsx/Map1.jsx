import React from 'react'

export default function Map1() {
    const names =["Tanvi", "Janvi" ,"Dhara", "Meera" ,"Dhriya", "Princi"]
  return (
    <div>
      <h2>Name list:</h2>
      <ul>
        {
            names.map((e,i)=> (
                <li key={i}>{e}</li>
            ))
        }
      </ul>

    </div>
  )
}
