import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Practice() {
    const [formData, setFormData] = useState({
        name:"",
        age:"",
        city:""
    })

    const [record, setRecord] = useState([])

    const [editIndex ,setEditIndex] = useState(null)

    useEffect(()=> {
        fetchRecord()
    },[])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        if(editIndex == null){
            await axios.post("http://localhost:5000/users" , formData).then((res)=> {
               setRecord([...record,formData])
            })
        }
        else{
            await axios.put(`http://localhost:5000/users/${editIndex}`, formData).then (()=> {
                const singleData = record.filter((item)=> item.id == editIndex)

                singleData.name = formData.name
                singleData.age = formData.age
                singleData.city = formData.city
                setRecord([...record])
            })
        }

         setFormData({
            name: "",
            age: "",
            city : ""
         })

    }

    const fetchRecord = async () => {
        await axios.get("http://localhost:5000/users").then((res)=>{
            setRecord(res.data)
        })
    }

    const handleDelete = async (id) => {
       await axios.delete(`http://localhost:5000/users/${id}`).then((res)=> {
        let newData = record.filter((item)=> item.id != id)
        setRecord(newData)
       })
    }

    const handleEdit = (id) => {
        const singleData = record.find((item) => item.id==id)

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
                <input type="text" placeholder='Enter Your Name' name='name'  onChange={handleChange} value={formData.name}/>
                <input type="text" placeholder='Enter Your Age' name='age' onChange={handleChange} value={formData.age}/>
                <input type="text" placeholder='Enter Your City' name='city' onChange={handleChange} value={formData.city}/>
                <button type='submit'>{editIndex === null ? "AddData" : "UpdateData"}</button>
            </form>
            {
                record.map((e,i)=> {
                    return <ul key={i}>
                        <li>{e.name}</li>
                        <li>{e.age}</li>
                        <li>{e.city}</li>
                        <li><button onClick={()=> handleEdit(e.id)}>Edit</button></li>
                        <li><button onClick={()=> handleDelete(e.id)}>Delete</button></li>
                    </ul>
                })
            }
        </div>
    )
}
