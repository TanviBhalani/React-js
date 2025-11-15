import React, { useState } from 'react'

export default function Form1() {
    const [formData,setFormData] = useState({
          name: "",
            age: "",
            gender: "",
            city: "",
            password: ""
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const [submission,setSubmission] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        setSubmission([...submission,formData])

        setFormData({
            name: "",
            age: "",
            gender: "",
            city: "",
            password: ""
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} value={formData.name} />
                <input type="text" placeholder='Enter your age' name='age' onChange={handleChange} value={formData.age}/>
                <input type="radio" name='gender' value="male" onChange={handleChange} checked={formData.gender == "male" && true} />Male
                <input type="radio" name='gender' value="female" onChange={handleChange} checked={formData.gender == "female" && true}/>Female
                <select name="city" onChange={handleChange} value={formData.city}>
                    <option value="" hidden>Select city</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Morbi">Morbi</option>
                    <option value="Surat">Surat</option>
                </select>
                <input type="password" placeholder='Enter your Password' name='password' onChange={handleChange} value={formData.password}/>
                <span></span>
                <button type='submit'>Submit</button>
            </form>

         

            {
            submission.map((e,i) => {
                return <ul key={i}>
                    <li>{e.name}</li>
                    <li>{e.age}</li>
                    <li>{e.gender}</li>
                    <li>{e.city}</li>
                    <li>{e.password}</li>
                </ul>
            })
          }
        </div>
    )
}
