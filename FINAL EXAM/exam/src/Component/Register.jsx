import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../FirebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate()

    const handleRegister = async () => {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        await axios.post("http://localhost:5000/tasks", {
            name: formData.name,
            email: formData.email,
            password: formData.password
        });

        navigate("/login");
    }

    return (
        <div className="min-h-screen flex">
            
            {/* LEFT SIDE */}
            <div className="w-1/2 bg-indigo-800 text-white flex flex-col items-center justify-center p-8">
                <div className="bg-white/20 rounded-full p-8 mb-6">
                    <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
                    </svg>
                </div>

                <h1 className="text-3xl font-bold">Student Registration System</h1>

                <div className="mt-10">
                    <p className="text-sm opacity-80 mb-2">Already have an account?</p>
                    <button className="w-40 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold">
                        <Link to="/login">Sign in</Link>
                    </button>
                </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="w-1/2 bg-white flex items-center justify-center">
                <div className="w-3/4 max-w-md">

                    <h1 className="text-3xl font-bold text-indigo-900 mb-2">Sign Up</h1>
                    <p className="text-gray-500 mb-6">Create an account to continue</p>

                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-700 font-semibold">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 font-semibold">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 font-semibold">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleRegister}
                        className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all"
                    >
                        Sign Up
                    </button>

                    <p className="text-center mt-4 text-gray-600">
                        Already registered?{" "}
                        <Link to="/login" className="text-indigo-700 font-semibold">Login</Link>
                    </p>
                </div>
            </div>

        </div>
    )
}
