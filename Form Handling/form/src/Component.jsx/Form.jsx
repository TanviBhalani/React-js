import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    city: ""
  });

  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setSubmissions([...submissions, formData]);

    setFormData({
      name: "",
      age: "",
      gender: "",
      city: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  type="text" placeholder="Enter your Name" name="name" onChange={handleChange} value={formData.name}/>

        <input type="text" placeholder="Enter your Age" name="age" onChange={handleChange} value={formData.age}/>

        <input type="radio" name="gender" value="male" checked={formData.gender === "male" && true} onChange={handleChange} /> Male

        <input type="radio" name="gender" value="female" checked={formData.gender === "female" && true} onChange={handleChange} /> Female

        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="" hidden>Select City</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Surat">Surat</option>
          <option value="Ahmedabad">Ahmedabad</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      
      {submissions.map((e, i) => (
        <ul key={i}>
          <li>{e.name}</li>
          <li>{e.age}</li>
          <li>{e.gender}</li>
          <li>{e.city}</li>
        </ul>
      ))}
    </div>
  );
}


