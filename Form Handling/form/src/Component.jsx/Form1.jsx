import React, { useState } from 'react'

export default function Form1() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        city: "",
    });

    const [submissions, setSubmissions] = useState([]);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        // Clear error for this field as user types
        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.age) {
            newErrors.age = "Age is required";
        } else if (isNaN(formData.age) || formData.age <= 0) {
            newErrors.age = "Age must be a positive number";
        }

        if (!formData.gender) {
            newErrors.gender = "Gender is required";
        }

        if (!formData.city) {
            newErrors.city = "City is required";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmissions([...submissions, formData]);

        setFormData({
            name: "",
            age: "",
            gender: "",
            city: "",
        });

        setErrors({});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Enter your age"
                        name="age"
                        onChange={handleChange}
                        value={formData.age}
                    />
                    {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
                </div>

                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                    />
                    Female
                    {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
                </div>

                <div>
                    <select
                        name="city"
                        onChange={handleChange}
                        value={formData.city}
                    >
                        <option value="" hidden>
                            Select city
                        </option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Surat">Surat</option>
                        <option value="Vadodara">Vadodara</option>
                    </select>
                    {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
                </div>

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