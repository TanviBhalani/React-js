import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../FirebaseConfig'

export default function Register() {
    const [formData, setFormData] = useState({
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

    const handleLogin = async () => {
        await signInWithEmailAndPassword(auth, formData.email, formData.password).then((res) => {
            navigate("/dashboard")
        })
    }

    return (
        <div className="min-h-screen flex">

            {/* LEFT PANEL */}
            <div className="w-1/2 bg-indigo-800 text-white flex flex-col items-center justify-center p-10">
                <div className="bg-white/20 rounded-full p-8 mb-6">
                    <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
                    </svg>
                </div>

                <h1 className="text-3xl font-bold mb-10">Student Registration System</h1>

                <p className="text-sm mb-2 opacity-80">Don't have an account?</p>

                <button className="w-44 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold">
                    <Link to="/register">Sign up</Link>
                </button>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-1/2 bg-white flex items-center justify-center">
                <div className="w-3/4 max-w-md">

                    <h1 className="text-3xl font-bold text-indigo-900 mb-2">Login Account</h1>
                    <p className="text-gray-500 mb-6">Sign in to continue your progress</p>

                    <h1 className="hidden">Login page</h1> {/* keeping your code unchanged */}

                    <input
                        type="text"
                        placeholder="Enter your email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-500 mb-4"
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-500 mb-6"
                    />

                    <button
                        onClick={handleLogin}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all"
                    >
                        AddData
                    </button>

                    <p className="text-center mt-4 text-gray-600">
                        <Link to="/register" className="text-indigo-700 font-semibold">Register ?</Link>
                    </p>

                </div>
            </div>

        </div>
    )
}
