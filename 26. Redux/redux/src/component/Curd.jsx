import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../features/ToDoSlice'

export default function Curd() {
    const [formData , setFormData] = useState({})

    const [editIndex , setEditIndex] = useState(null)

    const dispatch = useDispatch()

    const data = useSelector((state)=>{
        return state.TodoKey.record
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            id : Date.now(),
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editIndex == null){
          dispatch(addData(formData))
        }
        else{
          dispatch(updateData({id: editIndex, data : formData}))
        }

        setFormData({
            name: "",
            age:"",
            city:""
        })
        setEditIndex(null)
    }

    const handleDelete = (id) => {
      dispatch(deleteData(id));
    };


    const handleEdit = (id) => {
       let singleData = data.find((item) => item.id == id)
       setFormData({
        name: singleData.name,
        age: singleData.age,
        city: singleData.city,
       })

       setEditIndex(id)
    }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} value={formData.name}/>
        <input type="text" placeholder='Enter your age' name='age' onChange={handleChange} value={formData.age}/>
        <input type="text" placeholder='Enter your city' name='city'onChange={handleChange} value={formData.city}/>
        <button type='submit'>{editIndex ? "Update" : "Add Data"}</button>
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
