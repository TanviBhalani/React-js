import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth, db} from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export default function Register() {

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

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth,formData.email,formData.password).then((res)=>{
      setDoc(doc(db,"User",res.user.uid),formData)
      navigate("/login")
    })
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-100 flex justify-center items-center px-4">
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl p-10 rounded-2xl w-full max-w-md border border-white/40">
        
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Student Registration
        </h1>

        <input type="text" placeholder="Enter your Name" name="name" onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input type="text" placeholder="Enter your Email" name="email" onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input type="password" placeholder="Enter your Password" name="password" onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all"
        >
          Register
        </button>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?
          <a href="/login" className="text-blue-600 ml-1 font-semibold hover:underline">Login</a>
        </p>
      </div>
    </div>
  )
}
