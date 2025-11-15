import React, { useState } from 'react'

export default function Practice() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    city: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const [submission, setSubmission] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)

    setSubmission([...submission, formData])

    setFormData({
      name: "",
      age: "",
      gender: "",
      city: ""
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your Name: ' name='name' onChange={handleChange} value={formData.name} />
        <input type="text" placeholder='Enter Your Age: ' name='age' onChange={handleChange} value={formData.age} />

        <input type="radio" value="male" name='gender' onChange={handleChange} checked={formData.gender === "male" && true} />Male
        <input type="radio" value="female" name='gender' onChange={handleChange} checked={formData.gender === "female" && true} />Female

        <select name="city" onChange={handleChange} value={formData.city}>
          <option value="" hidden>Select your City</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Surat">Surat</option>
          <option value="Vadodara">Vadodara</option>
        </select>

        <button type='submit'>Submit</button>
      </form>

      {
        submission.map((e, i) => (
          <ul key={i}>
            <li>{e.name}</li>
            <li>{e.age}</li>
            <li>{e.gender}</li>
            <li>{e.city}</li>
          </ul>
        ))
      }
    </div>
  )
}
