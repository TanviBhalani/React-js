import React, { useEffect, useState } from 'react'

export default function Practice1() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        subject: "",
        city: ""
    })

    const [record,setRecord] = useState([])

    useEffect(()=> {
        let allData = JSON.parse(localStorage.getItem("record")) || []
        setRecord(allData)
    },[])
   
    const handleChange = (e) => {
        setFormData ({
            ...formData,
            id:Date.now(),
            [e.target.name]: e.target.value
        })
    }

    const [submission,setSubmission] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(editIndex == null){
            setRecord([...record,formData])
            localStorage.setItem("record",JSON.stringify([...record,formData]))  
        }
        else{
            let singleData = record.find((item)=> item = editIndex)
            singleData.name = formData.name
            singleData.age = formData.age
            singleData.subject = formData.subject
            singleData.city = formData.city
            localStorage.setItem("record",JSON.stringify([...record]))
        }

        setEditIndex(null)

        setFormData({
            name: "",
            age: "",
            subject: "",
            city:""
        })
    }

    const handleDelete = (id) => {
        let newData = record.filter((item) => item.id != id)
        setRecord(newData)
        localStorage.setItem("record",JSON.stringify(newData))
    }

    const[editIndex , setEditIndex] = useState(null)

    const handleEdit = (id) => {
        let singleData = record.find ((item) => item.id == id)
        setFormData({
            name:singleData.name,
            age: singleData.age,
            subject: singleData.subject,
            city: singleData.city
        })
        setEditIndex(id)
    }

    return (
        <div>
            <h1>Local CRUD</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Name' name='name' onChange={handleChange} value={formData.name}/>
                <input type="text" placeholder='Enter Your Age' name='age' onChange={handleChange} value={formData.age}/>
                <input type="text" placeholder='Enter Your Subject' name='subject' onChange={handleChange} value={formData.subject}/>
                <select name="city" onChange={handleChange} value={formData.city}>
                    <option value="" hidden>Select your city</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Surat">Surat</option>
                    <option value="Amreli">Amreli</option>
                </select>
                <button type='submit'>{editIndex== null ? "Add" : "Update" }</button>
            </form>
            <table width={"100%"} border={"1"}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Subject</th>
                        <th>City</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((e,i)=> (
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.subject}</td>
                                <td>{e.city}</td>
                                <td>
                                    <button onClick={()=> handleEdit(e.id)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(e.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
