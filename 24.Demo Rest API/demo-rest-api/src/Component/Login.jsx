// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await axios.get("http://localhost:5000/users");
//     const users = res.data;

//     const user = users.find((u) =>
//         u.email === formData.email && u.password === formData.password
//     );

//     if (user) {
//       alert(`Welcome ${user.name}! Login successful ✅`);
//       setFormData({ email: "", password: "" });
//     } else {
//       alert("Invalid email or password ❌");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
//       <h1 className="text-3xl font-semibold text-[#e85154] mb-6">Login</h1>

//       <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-6 w-full max-w-md">
//         <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} value={formData.email} required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e85154]"/>
//         <input type="password" placeholder="Enter Your Password" name="password" onChange={handleChange} value={formData.password} require className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e85154]"/>
//         <button type="submit" className="w-full bg-[#e85154] hover:bg-[#c53d45] text-white font-semibold py-3 rounded-md transition duration-300">Login</button>

//         <p className="text-center text-sm mt-4 text-gray-600">Don’t have an account?{" "}
//           <Link to="/signup" className="text-[#e85154] hover:underline font-medium">Sign Up</Link>
//         </p>
        
//       </form>

//     </div>
//   );
// }






import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get("http://localhost:5000/users");
    const users = res.data;

    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      alert(`Welcome ${user.name}! Login successful ✅`);
      localStorage.setItem("loggedUser", JSON.stringify(user)); // save user in localStorage
      navigate("/dashboard");
    } else {
      alert("Invalid email or password ❌");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <h1 className="text-3xl font-semibold text-[#e85154] mb-6">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-6 w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e85154]"
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e85154]"
        />
        <button
          type="submit"
          className="w-full bg-[#e85154] hover:bg-[#c53d45] text-white font-semibold py-3 rounded-md transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#e85154] hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
