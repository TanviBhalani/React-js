// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux"
// import { deleteData, fetchData, updateData } from '../Features/ApiSlice';

// export default function Crud() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })

//     const [editIndex, setEditIndex] = useState(null);

//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(fetchData())
//     }, [])

//     const data = useSelector((state) => {
//         return state.ApiKey.record
//     })

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//        if (editIndex !== null) {
//             dispatch(updateData({ id: editIndex, ...formData }));
//             setEditIndex(null);
//         } 
//         else {
//             dispatch(addData({ ...formData, id: Date.now() }));
//         }


//          dispatch(fetchData());

//         setFormData({
//             name: "",
//             email: "",
//             password: ""
//         })
//     }


//     const handleDelete = (id) => {
//         dispatch(deleteData(id))
//     }

//     const handleEdit = (id) => {
//        let singleData = data.find((item) => item.id === id)
//        setFormData({
//         name: singleData.name,
//         email: singleData.email,
//         password: singleData.password,
//        })

//        setEditIndex(id)
//     }

//     return (
//         <div>
//             <h1>CRUD with Redux + JSON Server</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} value={formData.name} />
//                 <input type="text" placeholder='Enter your email' name='email' onChange={handleChange} value={formData.email} />
//                 <input type="password" placeholder='Enter your password' name='password' onChange={handleChange} value={formData.password} />
//                 <button type='submit'>{editIndex ? "Update Data" : "Add Data"}</button>
//             </form>


//             <h2>Users List</h2>
//             {
//                 data.map((e, i) => {
//                     return <ul key={i}>
//                         <li>{e.id}</li>
//                         <li>{e.name}</li>
//                         <li>{e.email}</li>
//                         <li>{e.password}</li>
//                         <li><button onClick={() => handleEdit(e.id)}>Edit</button></li>
//                         <li><button onClick={() => handleDelete(e.id)}>Delete</button></li>
//                     </ul>
//                 })
//             }

//         </div>
//     )
// }




import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { deleteData, fetchData, updateData } from '../Features/ApiSlice';

export default function Crud() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [editIndex, setEditIndex] = useState(null);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const data = useSelector((state) => {
        return state.ApiKey.record
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
       if (editIndex !== null) {
            dispatch(updateData({ id: editIndex, ...formData }));
            setEditIndex(null);
        } 
        else {
            dispatch(addData({ ...formData, id: Date.now() }));
        }

        dispatch(fetchData());

        setFormData({
            name: "",
            email: "",
            password: ""
        })
    }

    const handleDelete = (id) => {
        dispatch(deleteData(id))
    }

    const handleEdit = (id) => {
       let singleData = data.find((item) => item.id === id)
       setFormData({
        name: singleData.name,
        email: singleData.email,
        password: singleData.password,
       })

       setEditIndex(id)
    }

    return (
        <div className="max-w-3xl mx-auto p-6 shadow-lg bg-white rounded-xl mt-10">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                CRUD with Redux + JSON Server
            </h1>

            <form 
                onSubmit={handleSubmit} 
                className="flex flex-col gap-4 bg-gray-100 p-5 rounded-lg"
            >
                <input 
                    type="text" 
                    placeholder='Enter your name' 
                    name='name' 
                    onChange={handleChange} 
                    value={formData.name}
                    className="p-2 border rounded-md"
                />
                <input 
                    type="text" 
                    placeholder='Enter your email' 
                    name='email' 
                    onChange={handleChange} 
                    value={formData.email}
                    className="p-2 border rounded-md"
                />
                <input 
                    type="password" 
                    placeholder='Enter your password' 
                    name='password' 
                    onChange={handleChange} 
                    value={formData.password}
                    className="p-2 border rounded-md"
                />

                <button 
                    type='submit'
                    className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
                >
                    {editIndex ? "Update Data" : "Add Data"}
                </button>
            </form>

            <h2 className="text-2xl font-semibold mt-8 text-gray-800">
                Users List
            </h2>

            {
                data.map((e, i) => {
                    return (
                        <ul 
                            key={i} 
                            className="flex items-center justify-between bg-gray-50 mt-4 p-4 rounded-lg border"
                        >
                            <li className="font-semibold">{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.email}</li>
                            <li className="text-gray-600">{e.password}</li>

                            <li>
                                <button 
                                    onClick={() => handleEdit(e.id)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                >
                                    Edit
                                </button>
                            </li>

                            <li>
                                <button 
                                    onClick={() => handleDelete(e.id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </li>
                        </ul>
                    )
                })
            }

        </div>
    )
}
