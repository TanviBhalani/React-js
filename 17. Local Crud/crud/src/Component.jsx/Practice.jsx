import React, { useEffect, useState } from 'react'

export default function Practice() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        city:""
    })

    const [record,setRecord] = useState([])

    useEffect(() => {
        let allData = JSON.parse(localStorage.getItem("record")) || []
        setRecord(allData)
    },[])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            id:Date.now(),
            [e.target.name]:e.target.value
        })
    }

    const [submission,setSubmission] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setRecord([...record,formData])
        localStorage.setItem("record",JSON.stringify([...record,formData]))

        setSubmission([...submission,formData])

        setFormData({
            name: "",
            age: "",
            city: ""
        })
    }

    const handleDelete = (id) => {
        let newData = record.filter((item) => item.id !=id)
        setRecord(newData);
        localStorage.setItem("record",JSON.stringify(newData))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your Name:' name='name' onChange={handleChange} value={formData.name}/>
        <input type="text" placeholder='Enter Your Age:' name='age' onChange={handleChange} value={formData.age}/>
        <select name="city" onChange={handleChange} value={formData.city}>
            <option value="" hidden>Select your City</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Surat">Surat</option>
            <option value="Morbi">Morbi</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
      <table border={"1"} width={"100%"}>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>City</td>
                <td colSpan={"2"}>Actions</td>
            </tr>
        </thead>
        <tbody>
            {
                record?
                record.map((e,i)=>(
                    <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.city}</td>
                        <td>
                            <button>Edit</button>
                        </td>
                        <td>
                            <button onClick={()=> handleDelete(e.id)}>Delete</button>
                        </td>
                    </tr>
                )):
                <p>Loading...</p>
            }
        </tbody>
      </table>
    </div>
  )
}