import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../FirebaseConfig'
import { addData, deleteData, fetchData, updateData } from '../Features/CrudSlice'

export default function Dashboard() {

  const [userData, setUserData] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [editId, setEditId] = useState(null)

  const dispatch = useDispatch()

  const data = useSelector((state) => state.CrudKey.record)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const info = {
          email: user.email,
          uid: user.uid
        }
        setUserData(info)
      }
    })
  }, [])

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editId === null) {
      dispatch(addData(formData))
    } else {
      dispatch(updateData({ id: editId, ...formData }))
    }

    setEditId(null)
    setFormData({ name: "", email: "", password: "" })

    dispatch(fetchData())
  }

  const handleEdit = (id) => {
    const single = data.find((item) => item.id === id)
    setFormData({
      name: single.name,
      email: single.email,
      password: single.password
    })
    setEditId(id)
  }

  const handleDelete = (id) => {
    dispatch(deleteData(id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Dashboard Header */}
      <h1 className="text-4xl font-bold text-indigo-700 mb-2">Dashboard</h1>
      <h3 className="text-gray-700 mb-6 text-lg">
        Logged in as: <span className="font-semibold">{userData && userData.email}</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* --- Left Side: Add/Edit Form --- */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Add / Edit User</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              {editId ? "Update" : "Add"} Data
            </button>

          </form>
        </div>

        {/* --- Right Side: User List --- */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">User List</h2>

          {data.length === 0 ? (
            <p className="text-gray-500">No users found.</p>
          ) : (
            <div className="space-y-4">
              {data.map((item) => (
                <ul
                  key={item.id}
                  className="bg-gray-50 border rounded-lg p-4 flex justify-between items-center shadow-sm"
                >
                  <div>
                    <li><span className="font-semibold">ID:</span> {item.id}</li>
                    <li><span className="font-semibold">Name:</span> {item.name}</li>
                    <li><span className="font-semibold">Email:</span> {item.email}</li>
                    <li><span className="font-semibold">Password:</span> {item.password}</li>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </ul>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
