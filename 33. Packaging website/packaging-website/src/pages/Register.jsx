// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();



// const handleRegister = async (e) => {
//   e.preventDefault();
//   registerUser();
// };

// const registerUser = async () => {
//   const check = await axios.get("http://localhost:5000/users?email=" + email);

//   if (check.data.length > 0) {
//     alert("Email already registered");
//     return;
//   }

//   await axios.post("http://localhost:5000/users", {email: email, password: password,});

//   navigate("/login");
// };

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl mb-4">Register</h1>

//       <form onSubmit={handleRegister} className="space-y-4 max-w-sm">
//         <input type="email" placeholder="Email" className="border p-2 w-full" onChange={(e) => setEmail(e.target.value)} required/>
//         <input type="password" placeholder="Password" className="border p-2 w-full" onChange={(e) => setPassword(e.target.value)} required/>
//         <button className="bg-black text-white px-4 py-2 w-full">Register</button>
//       </form>
//     </div>
//   );
// }




  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const handleRegister = async (e) => {
  //   e.preventDefault();

  //   const check = await axios.get(
  //     "http://localhost:5000/users?email=" + email
  //   );

  //   if (check.data.length > 0) {
  //     alert("Email already registered");
  //     return;
  //   }

  //   await axios.post("http://localhost:5000/users", {
  //     email: email,
  //     password: password,
  //   });

  //   navigate("/login");
  // };



import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // ✅ IMPORTANT

    await axios.post("http://localhost:5000/users", formData);

    alert("User Registered successfully");

    setTimeout(() => {
      navigate("/login"); // ✅ now works
    }, 500);
  };

  return (
    <div className="py-15 bg-[#fdf9f2] flex items-center justify-center px-10">
      <div className="grid md:grid-cols-2 gap-40 px-20 w-full">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl font-semibold">Create your account</h1>
          <p className="text-gray-600 mt-2">
            Register to access your account and benefits.
          </p>

          <form onSubmit={handleRegister} className="mt-8 space-y-4">
            <input
              type="email"
              name="email"            // ✅ added
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-md bg-transparent"
              required
            />

            <input
              type="password"
              name="password"         // ✅ added
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-md bg-transparent"
              required
            />

            <button
              type="submit"           // ✅ correct
              className="w-full bg-black text-white py-3 rounded-md"
            >
              Create account
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-4 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <button className="border py-3 rounded-md w-full">
            Register with Google
          </button>

          <p className="text-sm mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block rounded-3xl overflow-hidden">
          <img
            src="/images/leaf.webp"
            alt="Register"
            className="h-130 w-180 object-cover"
          />
        </div>

      </div>
    </div>
  );
}
