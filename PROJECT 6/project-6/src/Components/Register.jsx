

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../FirebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

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
    await createUserWithEmailAndPassword(auth, formData.email, formData.password).then((res) => {
      setDoc(doc(db, "User", res.user.uid), formData)
      navigate("/login")
    })
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">

      {/* MAIN WRAPPER */}
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 relative overflow-hidden">

        {/* BG SHAPES */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-400 rounded-full opacity-30 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500 rounded-full opacity-30 -translate-x-1/3 translate-y-1/3"></div>

        {/* LEFT SECTION */}
        <div className="relative z-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">LOREM IPSUM</h1>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
          </p>

          <img
            src="https://ouch-cdn2.icons8.com/DPNgm6kKIhxX3sI5OGucs5cjox96D65gis-1wVdVb6M/rs:fit:680:456/webp/illustrations/aspirin.png"
            className="w-80 mx-auto"
            alt="illustration"
          />
        </div>

        {/* RIGHT SECTION - REGISTER FORM */}
        <div className="relative z-10 bg-white rounded-xl shadow-lg p-10">

          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Admin Sign Up
          </h2>

          <div className="space-y-6">

            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 outline-none text-gray-700"
              />
            </div>

            <div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 outline-none text-gray-700"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-3 outline-none text-gray-700"
              />
            </div>

            {/* GRADIENT BUTTON */}
            <button
              onClick={handleRegister}
              className="w-full py-3 text-white font-semibold rounded-lg 
                         bg-linear-to-r from-pink-500 to-blue-500 
                         shadow-md hover:opacity-90 transition">
              Create Account
            </button>

          </div>

          {/* FOOTER */}
          <p className="text-gray-600 text-center mt-6 text-sm">
            Already a member?
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 font-semibold cursor-pointer ml-1"
            >
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  )
}
