import React from 'react'

export default function Filter2() {
    const students = [
        {id: 1 , name : "Tanvi", marks : "99"},
        {id: 2 , name : "Yuva", marks : "46"},
        {id: 3 , name : "Janvi", marks : "70"},
        {id: 4 , name : "Mili", marks : "78"},
    ]

    const passStudents = students.filter((students)=> students.marks >= 50)
  return (
    <div>
        <h2>Passed Students</h2>
        <ul>
            {
                passStudents.map((e,i)=> (
                    <li key={i}>{e.name}-{e.marks}</li>
                ))
            }
        </ul>
      
    </div>
  )
}
