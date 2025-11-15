import React, { useState } from 'react'

export default function MapFilter() {
    const [search, setSearch] = useState("")

    const students = [
        {id:1, name: "Tanvi" },
        {id:2, name: "Tanya" },
        {id:3, name: "Tushar" },
        {id:4, name: "Rekha" },
        {id:5, name: "Rakesh" },
    ]

    const filterStudents = students.filter((s)=> 
        s.name.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div>
        <h2>Search Students</h2>
        <input type="text" placeholder='Search Name...'  value={search}  onChange={(e) => setSearch(e.target.value)}/>
      
        <ul>
            {
                filterStudents.map((e,i)=>(
                    <li key={i}>{e.name}</li>
                ))
            }
        </ul>
    </div>
  )
}
