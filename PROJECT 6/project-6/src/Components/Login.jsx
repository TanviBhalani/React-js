

import React, { useState } from 'react' 
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../FirebaseConfig'

export default function Login() {
  const [formData,setFormData] = useState({
    name: "",
    email: "",
    password : ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const navigate = useNavigate()

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth,formData.email,formData.password).then((res)=>{
      navigate("/dashboard")
    })
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden px-6">

      {/* BG SHAPES */}
      <div className="absolute top-0 right-0 w-52 h-52 bg-blue-500 rounded-full opacity-20 blur-2xl translate-x-1/4 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500 rounded-full opacity-20 blur-2xl -translate-x-1/3 translate-y-1/3"></div>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl grid grid-cols-1 md:grid-cols-2 p-10 gap-12 relative z-10">

        {/* LEFT SIDE – SMALLER, CLEANER ILLUSTRATION */}
        <div className="flex flex-col justify-center px-6">

          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Welcome Back!
          </h1>

          <p className="text-gray-500 leading-relaxed mb-8">
            Log in to access your dashboard, manage tasks, and explore new features.
          </p>

          <div className="flex justify-center">
            <div className="p-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg">
              <svg width="95" height="95" viewBox="0 0 24 24" fill="white">
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 
                2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 
                1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" />
              </svg>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE – LOGIN BOX */}
        <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">

          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            Login to Continue
          </h2>

          <div className="space-y-6">

            <input 
              type="text" 
              placeholder="Enter Email Address" 
              name="email" 
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-3 outline-none text-gray-700"
            />

            <input 
              type="password" 
              placeholder="Enter Password" 
              name="password" 
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-3 outline-none text-gray-700"
            />

            {/* BUTTON */}
            <button 
              onClick={handleLogin}
              className="w-full py-3 text-white font-semibold rounded-lg 
                         bg-linear-to-r from-purple-600 to-blue-500 
                         shadow-md hover:opacity-90 transition">
              Login
            </button>

          </div>

          <p className="text-center text-gray-600 mt-6 text-sm">
            Don’t have an account?
            <span 
              onClick={() => navigate('/register')} 
              className="text-blue-600 ml-1 font-semibold cursor-pointer"
            >
              Create Account
            </span>
          </p>

        </div>
      </div>
    </div>
  )
}
