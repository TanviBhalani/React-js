// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export default function SignUp() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [record, setRecord] = useState([]);

//   useEffect(() => {
//     fetchRecord();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);

//     await axios.post("http://localhost:5000/users", formData).then(() => {
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//       });
//     });

//     fetchRecord();
//   };

//   const fetchRecord = async () => {
//     await axios.get("http://localhost:5000/users").then((res) => {
//       setRecord(res.data);
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
//       <h1 className="text-3xl font-semibold text-[#e85154] mb-6">Sign Up</h1>

//       <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-8 w-full max-w-md">
//         <input type="text" placeholder="Enter Your Name" name="name" onChange={handleChange} value={formData.name} required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e85154]"/>
//         <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} value={formData.email} required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e85154]"/>
//         <input type="password" placeholder="Enter Your Password" name="password" onChange={handleChange} value={formData.password} required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e85154]"/>
//         <button type="submit" className="w-full bg-[#e85154] hover:bg-[#c53d45] text-white font-semibold py-3 rounded-md transition duration-300">Sign Up</button>
//       </form>

//       {/* Display Records */}
//       <div className="bg-white shadow-md rounded-2xl w-full max-w-md p-6">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">Registered Users</h2>
//         {record.length === 0 ? (
//           <p className="text-gray-500 text-sm">No users yet.</p>
//         ) : (
//           record.map((e, i) => (
//             <ul key={i} className="border-b border-gray-200 py-2">
//               <li><span className="font-semibold">Name:</span> {e.name}</li>
//               <li><span className="font-semibold">Email:</span> {e.email}</li>
//               <li><span className="font-semibold">Password:</span> {e.password}</li>
//             </ul>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }






import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetchRecord();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    await axios.post("http://localhost:5000/users", formData).then(() => {
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    });

    fetchRecord();
  };

  const fetchRecord = async () => {
    await axios.get("http://localhost:5000/users").then((res) => {
      setRecord(res.data);
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <h1 className="text-3xl font-semibold text-[#e85154] mb-6">Sign Up</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-6 w-full max-w-md">
        <input type="text" placeholder="Enter Your Name" name="name" onChange={handleChange} value={formData.name} required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e85154]"/>
        <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} value={formData.email} required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e85154]"/>
        <input type="password" placeholder="Enter Your Password" name="password" onChange={handleChange} value={formData.password} required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e85154]"/>
        <button type="submit" className="w-full bg-[#e85154] hover:bg-[#c53d45] text-white font-semibold py-3 rounded-md transition duration-300">Sign Up</button>

        <p className="text-center text-sm mt-4 text-gray-600"> Already have an account?{" "}
          <Link to="/login" className="text-[#e85154] hover:underline font-medium">Login</Link>
        </p>

      </form>

      {/* Display Users */}
      <div className="bg-white shadow-md rounded-2xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Registered Users
        </h2>
        {record.length === 0 ? 
           (<p className="text-gray-500 text-sm">No users yet.</p>) 
           : 
           (record.map((e, i) => (
            <ul key={i} className="border-b border-gray-200 py-2">
              <li><span className="font-semibold">Name:</span> {e.name}</li>
              <li><span className="font-semibold">Email:</span> {e.email}</li>
              <li><span className="font-semibold">Password:</span> {e.password}</li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
}
