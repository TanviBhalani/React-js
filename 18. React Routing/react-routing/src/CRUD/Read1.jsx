import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export default function Read1() {
  const [record,setRecord] = useState([])

  const navigate = useNavigate()

  useEffect(()=> {
    const allData = JSON.parse(localStorage.getItem("record")) || []
    setRecord(allData)
  },[])

  const handleDelete = (id) => {
    let filteredData = record.filter((item)=> item.id != id)
    setRecord(filteredData)
    localStorage.setItem("record",JSON.stringify(filteredData))
    toast("Data Deleted Successfully!")
  }

  const handleEdit = (id) => {
    navigate("/add",{state:{id}})
    
  }

  return (
    <div>
      <ToastContainer/>
      
      <h1>Read</h1>
      <Link to={"/add"}>
         <button>Add Data</button>
      </Link>
      {
        record?
        record.map((e,i)=> {
          return <ul key={i}>
            <li>{i+1}</li>
            <li>{e.name}</li>
            <li>{e.age}</li>
            <li><button onClick={()=> handleEdit(e.id)}>Edit</button></li>
            <li><button onClick={()=> handleDelete(e.id)}>Delete</button></li>
          </ul>
        }):
        <p>No record</p>
      }
    </div>
  )
}
