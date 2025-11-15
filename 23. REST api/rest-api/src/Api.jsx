// import React, { useEffect } from 'react'

// export default function Api() {
//     useEffect(()=> {
//         fetchApi()
//     },[])
//     const fetchApi = async ()=> {
//         const response = await fetch("https://fakestoreapi.com/products")
//         const res = await response.json()
//         console.log(res)
//     }
//   return (
//     <div>
//       <h1>API</h1>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'
import axios from "axios"; 

export default function App() {
  const [record, setRecord] = useState([]);

  useEffect(()=> {
    fetchApi()
  },[])

  const fetchApi = async ()=> {
    const response = await axios.get("https://fakestoreapi.com/products")
    
    setRecord(response.data)
  }
  return (
    <div>
      <h1>API</h1>
      {record ? (
        record.map((e, i) => (
          <ul key={i}>
            <li>{e.title}</li>
          </ul>
        ))
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  )
}
