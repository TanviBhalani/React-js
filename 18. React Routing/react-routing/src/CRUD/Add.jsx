import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Add() {
  const [formData,setFormData] = useState({})
  const navigate = useNavigate()
  const location = useLocation()

  // Prefill form if editing
  useEffect(()=> {
    if(location.state && location.state.id){
      const allData = JSON.parse(localStorage.getItem("record")) || []
      const singleData = allData.find(item => item.id === location.state.id)
      if(singleData) {
        setFormData(singleData)
      }
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value  // keep original id
    })
  }

  const handleSubmit = () => {
    let allData = JSON.parse(localStorage.getItem("record")) || []

    if(formData.id){ 
      // Update existing record
      allData = allData.map(item => item.id === formData.id ? formData : item)
    } else {
      // Add new record
      formData.id = Date.now()
      allData.push(formData)
    }

    localStorage.setItem("record", JSON.stringify(allData))

    navigate("/")
  }

  return (
    <div>
      <h1>Add</h1>
      <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} value={formData.name}/>
      <input type="text" placeholder='Enter your age' name='age' onChange={handleChange} value={formData.age}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
