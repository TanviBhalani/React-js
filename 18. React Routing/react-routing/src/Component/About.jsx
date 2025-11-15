import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/",{replace:true,state:{"name":"Tanvi"}})
    }

    const param = useParams()
    console.log(param)
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleNavigate}>Go to Home</button>
    </div>
  )
}
