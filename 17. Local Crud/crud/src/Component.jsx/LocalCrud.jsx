import React, { useEffect, useState } from "react";

export default function LocalCrud() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: ""
  });

  const [record,setRecord] = useState([])

  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem("record")) || []
    setRecord(allData)
  },[])

  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      id:Date.now(),
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editIndex == null){
      setRecord([...record,formData])
      localStorage.setItem("record",JSON.stringify([...record,formData]))
    }
    else{
      let singleData = record.find((item)=> item.id == editIndex)
      singleData.name = formData.name
      singleData.age = formData.age
      singleData.city = formData.city
      localStorage.setItem("record",JSON.stringify([...record]))
    }

    setEditIndex(null)

    setFormData({
      name: "",
      age: "",
      city: ""
    });
  };

  const handleDelete = (id) => {
    // console.log(id)
    let newData = record.filter((item)=> item.id !=id)
    setRecord(newData)
    localStorage.setItem("record",JSON.stringify(newData))
  }

  const [editIndex, setEditIndex] = useState(null)

  const handleEdit = (id)=> {
    let singleData = record.find((item)=> item.id==id )
    setFormData({
      name : singleData.name,
      age : singleData.age,
      city : singleData.city,
    })
    setEditIndex(id)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  type="text" placeholder="Enter your Name" name="name" onChange={handleChange} value={formData.name}/>

        <input type="text" placeholder="Enter your Age" name="age" onChange={handleChange} value={formData.age}/>

        

        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="" hidden>Select City</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Surat">Surat</option>
          <option value="Ahmedabad">Ahmedabad</option>
        </select>

        <button type="submit">{editIndex==null? "Add Data" : "Update data"}</button>
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
            record.map((e,i)=> {
              return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.city}</td>
                <td>
                  <button onClick={()=> handleEdit(e.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={()=> handleDelete(e.id)}>Delete</button>
                </td>
              </tr> 
            }):
            <p>Loading...</p>
          }
        </tbody>
      </table>
    </div>
  );
}
