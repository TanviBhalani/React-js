import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

  const [userId, setUserId] = useState(null)
  const [userData , setUserData] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      setUserId(user.uid)
    })
  },[])

  useEffect(() => {
    if(userId) {
      fetchUser()
    }
  },[userId])

  const fetchUser = async () => {
    await getDoc(doc(db,"User", userId)).then ((res)=> {
      setUserData(res.data())
    })
  }

  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.signOut()
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-100 flex justify-center items-center px-4">
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl p-10 rounded-2xl w-full max-w-lg">

        <h1 className="text-4xl font-bold text-blue-700 text-center mb-4">
          Welcome Back 👋
        </h1>

        <h3 className="text-2xl font-semibold text-gray-700 text-center mb-10">
          {userData && userData.name}
        </h3>

        <div className="grid grid-cols-2 gap-6 mb-8">

          <div className="p-4 bg-white rounded-xl shadow hover:shadow-md cursor-pointer">
            <h4 className="font-bold text-gray-700">Attendance</h4>
            <p className="text-sm text-gray-500">View Details</p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow hover:shadow-md cursor-pointer">
            <h4 className="font-bold text-gray-700">Homework</h4>
            <p className="text-sm text-gray-500">See Assignments</p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow hover:shadow-md cursor-pointer">
            <h4 className="font-bold text-gray-700">Results</h4>
            <p className="text-sm text-gray-500">Exam Scores</p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow hover:shadow-md cursor-pointer">
            <h4 className="font-bold text-gray-700">Messages</h4>
            <p className="text-sm text-gray-500">Announcements</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl transition-all"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

