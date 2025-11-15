import React, { useState } from 'react'

export default function Form() {
    const [formData,setFormData] = useState({
        name:"",
            age: "",
            gender: "",
            city : "",
            password: ""
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })

    }

    const [submission, setSubmission] = useState([])
    const [error,setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        

        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(!formData.password){
            setError("Password is required")
        }
        else if(!passRegex.test(formData.password)){
            setError("Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.")
        }
        else{
            setError("")
        }

        console.log(formData)

        setSubmission([...submission,formData])

        setFormData({
            name:"",
            age: "",
            gender: "",
            city : "",
            password: ""
    })
    }
   
    return (
        <div>
            <h1>Form validation</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your Name' name='name' onChange={handleChange} value={formData.name}/>
                <input type="text" placeholder='Enter your Age ' name='age' onChange={handleChange} value={formData.age}/>
                <input type="radio" value="male" name='gender' checked={formData.gender == "male" && true } onChange={handleChange}/>Male
                <input type="radio" value="female" name='gender' checked={formData.gender == "female" && true} onChange={handleChange}/>Female
                <select name="city" onChange={handleChange} value={formData.city}>
                    <option value="" hidden>Select City</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Surat">Surat</option>
                    <option value="Vadodra">Vadodra</option>
                </select>
                <input type="password" placeholder='Enter your Password' name='password' onChange={handleChange} value={formData.password}/>
                <span>{error}</span>
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
