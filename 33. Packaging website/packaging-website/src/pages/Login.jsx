import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
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

  const handleLogin = async (e) => {
    e.preventDefault(); // ✅ IMPORTANT

    const res = await axios.get("http://localhost:5000/users");

    const user = res.data.find(
      (item) => item.email === formData.email
    );

    if (!user) {
      alert("User not Found");
      return;
    }

    if (user.password === formData.password) {
      alert("User logged in successfully");

      localStorage.setItem("auth", "true");

       localStorage.setItem("user", JSON.stringify({
    email: user.email
  }));

      setTimeout(() => {
        navigate("/profile"); // ✅ works now
      }, 500);
    } else {
      alert("Your Password is Wrong");
    }
  };

  return (
    <div className="py-15 bg-[#fdf9f2] flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-40 px-30 w-full">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl font-semibold">Login to your account</h1>
          <p className="text-gray-600 mt-2">
            View your account details and more.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <input
              type="email"
              name="email"          // ✅ added
              placeholder="Username or email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-md"
              required
            />

            <input
              type="password"
              name="password"       // ✅ added
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-md"
              required
            />

            <div className="flex justify-between text-sm">
              <label className="flex gap-2">
                <input type="checkbox" /> Remember me
              </label>
              <span className="underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            <button
              type="submit"        // ✅ correct
              className="w-full bg-black text-white py-3 rounded-md"
            >
              Log in
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-4 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <button className="border py-3 rounded-md w-full">
            Login with Google
          </button>

          <p className="text-sm mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="underline cursor-pointer"
            >
              Register here
            </span>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block rounded-3xl overflow-hidden">
          <img
            src="/images/leaf.webp"
            className="h-130 w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}
