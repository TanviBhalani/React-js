import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addData, deleteData, updateData} from '../features/TodoSlice' 


export default function Crud() {
  const [formData, setFormData] = useState({})

  const [editIndex , setEditIndex] = useState(null)

  const dispatch = useDispatch()

  const data = useSelector((state)=> {
    return state.TodoKey.record
  })

  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
      id:Date.now()
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   if(editIndex == null){
     dispatch(addData(formData))
   }
   else{
    dispatch(updateData({id:editIndex , data:formData}))
   }

    setFormData({
      name: "",
      age: "",
      city: ""
    })

    setEditIndex(null)
  }

  const handleDelete = (id) => {
     dispatch(deleteData(id))
  }


  const handleEdit = (id) => {
    let singleData = data.find((item) => item.id == id)
    setFormData({
      name: singleData.name,
      age : singleData.age,
      city : singleData.city
    })

    setEditIndex(id)
  }

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter youe Name' name='name' onChange={handlechange} value={formData.name}/>
        <input type="text" placeholder='Enter youe Age' name='age' onChange={handlechange} value={formData.age}/>
        <input type="text" placeholder='Enter youe city' name='city' onChange={handlechange} value={formData.city}/>
        <button type='submit'>{editIndex ? "Update" : "AddData"}</button>
      </form>
      {
        data.map((e,i)=>{
            return <ul>
                <li>{e.id}</li>
                <li>{e.name}</li>
                <li>{e.age}</li>
                <li>{e.city}</li>
                <li><button onClick={() => handleEdit(e.id)}>Edit</button></li>
                <li><button onClick={() => handleDelete(e.id)}>Delete</button></li>
            </ul>
        })
      }
    </div>
  )
}
