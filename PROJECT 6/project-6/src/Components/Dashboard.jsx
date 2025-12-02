import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../FirebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)

  const [task, setTask] = useState("")
  const [priority, setPriority] = useState("")

  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid)
    })
  }, [])

  useEffect(() => {
    if (userId) {
      fetchUser()
      fetchData()
    }
  }, [userId])

  const fetchUser = async () => {
    await getDoc(doc(db, "User", userId)).then((res) => {
      setUserData(res.data())
    })
  }

  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.signOut()
    navigate("/")
  }

  const fetchData = async () => {
    let allData = await getDocs(collection(db, "Todos"))
    let newData = allData.docs.map((data) => ({
      docId: data.id,
      ...data.data(),
    }))
    setRecord(newData)
  }

  const handleTask = async () => {
    let obj = { uid: userId, task, priority }

    if (editIndex == null) {
      await addDoc(collection(db, "Todos"), obj).then((docRef) => {
        setRecord([...record, { docId: docRef.id, ...obj }])
      })
    } else {
      await updateDoc(doc(db, "Todos", editIndex), {
        task,
        priority,
      })
      fetchData()
    }

    setTask("")
    setPriority("")
    setEditIndex(null)
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id))
    fetchData()
  }

  let handleEdit = (id) => {
    let singleData = record.find((item) => item.docId == id)
    setTask(singleData.task)
    setPriority(singleData.priority)
    setEditIndex(id)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">Dashboard</h1>

          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-700">{userData && userData.name}</h3>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-5 py-2 rounded-xl shadow-lg hover:bg-red-600 transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* INPUT CARD */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mb-12 backdrop-blur-xl">

          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add New Task</h2>

          <div className="flex flex-col md:flex-row gap-5">

            <input
              type="text"
              placeholder="Enter your Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full px-5 py-3 rounded-xl shadow-md outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />

            <input
              type="text"
              placeholder="Priority (High/Low)"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-5 py-3 rounded-xl shadow-md outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50"
            />

            <button
              onClick={handleTask}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
            >
              {editIndex ? "Update" : "Add Task"}
            </button>

          </div>
        </div>

        {/* TASK LIST SECTION */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Your Tasks</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {record.map((e, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl p-7 hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-bold text-gray-800">{e.task}</h3>

              <p className="text-gray-500 mt-2">
                Priority:
                <span className="ml-2 font-semibold text-purple-600">{e.priority}</span>
              </p>

              <div className="flex gap-4 mt-6">

                <button
                  onClick={() => handleEdit(e.docId)}
                  className="px-5 py-2 bg-yellow-400 text-white rounded-xl shadow hover:bg-yellow-500 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(e.docId)}
                  className="px-5 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}
