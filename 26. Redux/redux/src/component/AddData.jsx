import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../features/AddSlice'

export default function AddData() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchData())
    },[])

    const response = useSelector((state) => {
        return state.ApiKey
    })

    if(response.loading == true){
        return <p>Loading...</p>
    }
  return (
    <div>
        <h1>ApiData</h1>
        {
            response.record &&
            response.record.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.title}</li>
                </ul>
            })
        }
      
    </div>
  )
}








// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData, addData, updateData, deleteData } from "../features/AddSlice";

// export default function AddData() {
//   const dispatch = useDispatch();
//   const response = useSelector((state) => state.ApiKey);
//   const [newTitle, setNewTitle] = useState("");
//   const [updateId, setUpdateId] = useState("");
//   const [updateTitle, setUpdateTitle] = useState("");

//   // Fetch data on mount
//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   if (response.loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//       <h1>🛒 Fake Store API (CRUD Example)</h1>

//       {/* ADD ITEM */}
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Enter new title"
//           value={newTitle}
//           onChange={(e) => setNewTitle(e.target.value)}
//         />
//         <button
//           onClick={() => {
//             dispatch(addData({ title: newTitle, price: 100 }));
//             setNewTitle("");
//           }}
//         >
//           ➕ Add
//         </button>
//       </div>

//       {/* UPDATE ITEM */}
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="number"
//           placeholder="ID to update"
//           value={updateId}
//           onChange={(e) => setUpdateId(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="New title"
//           value={updateTitle}
//           onChange={(e) => setUpdateTitle(e.target.value)}
//         />
//         <button
//           onClick={() => {
//             dispatch(updateData({ id: updateId, title: updateTitle }));
//             setUpdateId("");
//             setUpdateTitle("");
//           }}
//         >
//           ✏️ Update
//         </button>
//       </div>

//       {/* DELETE ITEM */}
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="number"
//           placeholder="ID to delete"
//           onChange={(e) => setUpdateId(e.target.value)}
//           value={updateId}
//         />
//         <button
//           onClick={() => {
//             dispatch(deleteData(updateId));
//             setUpdateId("");
//           }}
//         >
//           🗑️ Delete
//         </button>
//       </div>

//       {/* DISPLAY DATA */}
//       <h2>Products:</h2>
//       <ul>
//         {response.record &&
//           response.record.map((item) => (
//             <li key={item.id}>
//               <strong>{item.id}</strong> - {item.title}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }
