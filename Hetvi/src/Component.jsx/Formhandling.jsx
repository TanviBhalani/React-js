import React, { useState } from 'react'

export default function Formhandling() {

    const [formdata, setFormdata]=useState([])

    const [record, setRecord]=useState([])

    const handleChange=(e)=>{
      setFormdata({
        ...formdata,
        [e.target.name]:e.target.value
      })

   
    }

    const handleSubmit=(e)=>{
       e.preventDefault()

       setRecord([...record, formdata])

       setFormdata({
        name : "",
        age : "",
        subject : "",
        gender : "",
        city : ""
       })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your Name' name='name' onChange={handleChange} value={formdata.name}/>
        <input type="text" placeholder='Enter Your Age' name='age' onChange={handleChange} value={formdata.age}/>
        <input type="text" placeholder='Enter Your Subject' name='subject' onChange={handleChange} value={formdata.subject}/>
        <input type="radio" name="gender" onChange={handleChange} value={formdata.gender == "male" && true}/>Male
        <input type="radio" name="gender" onChange={handleChange} value={formdata.gender == "female" && false } />Female

        <select name="city" onChange={handleChange} value={formdata.city}>
            <option hidden>Select your City</option>
            <option value="Rajkot">Rajkot</option>
            <option value="surat">Surat</option>
            <option value="Vadodara">Vadodra</option>
            <option value="Ahemdabad">Ahemdabad</option>
        </select>

        <button type='submit'>Submit</button>
      </form>

      {
        record.map((e,i)=>{
            return <ul key={i}>
                <li>{e.name}</li>
                <li>{e.age}</li>
                <li>{e.subject}</li>
                <li>{e.gender}</li>
                <li>{e.city}</li>
            </ul>
        })
      }
      
    </div>
  )
}
