import React, { useEffect, useState } from 'react'
import { data, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function Add1() {
  const [formData,setFormData] = useState({})

  const navigate = useNavigate()

  const location = useLocation ()

  useEffect(()=> {
    if(location.state && location.state.id){
      let allData = JSON.parse(localStorage.getItem("record")) || []
      let singleData = allData.find((item)=> item.id === location.state.id)
      if(singleData){
        setFormData(singleData)
      }
    }
  },[])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    let allData = JSON.parse(localStorage.getItem("record")) || []
    if(formData.id){
      allData = allData.map(item => item.id === formData.id ? formData : item)
    }
    else{
      formData.id = Date.now()
      allData.push(formData)
    }
    localStorage.setItem("record", JSON.stringify(allData))
    toast("Data Edited Successfully!")
    setTimeout(() => {
      navigate("/")
    }, 2000);
  }
  return (
    <div>
      <ToastContainer/>
      
      <h1>Add</h1>
      <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} value={formData.name}/>
      <input type="text" placeholder='Enter your name' name='age' onChange={handleChange} value={formData.age}/>
      <button onClick={handleSubmit}>{location.state ? "Update Data" : "Add Data"}</button>
    </div>
  )
}
