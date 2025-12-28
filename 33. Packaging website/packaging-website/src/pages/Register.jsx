import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle, registerUser } from "../services/auth";

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
    e.preventDefault();

    try {
      await registerUser(formData.email, formData.password);
      alert("User registered successfully!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await loginWithGoogle();
      const user = result.user;

      localStorage.setItem("auth", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          uid: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        })
      );

      alert("Logged in with Google successfully");
      navigate("/profile");
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    // <div className="py-15 bg-[#fdf9f2] flex items-center justify-center px-10">
    //   <div className="grid md:grid-cols-2 gap-40 px-20 w-full">

    //     <div>
    //       <h1 className="text-3xl font-semibold">Create your account</h1>
    //       <p className="text-gray-600 mt-2">
    //         Register to access your account and benefits.
    //       </p>

    //       <form onSubmit={handleRegister} className="mt-8 space-y-4">
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Email address"
    //           value={formData.email}
    //           onChange={handleChange}
    //           className="w-full border px-4 py-3 rounded-md bg-transparent"
    //           required
    //         />

    //         <input
    //           type="password"
    //           name="password"
    //           placeholder="Password"
    //           value={formData.password}
    //           onChange={handleChange}
    //           className="w-full border px-4 py-3 rounded-md bg-transparent"
    //           required
    //         />

    //         <button
    //           type="submit"
    //           className="w-full bg-black text-white py-3 rounded-md cursor-pointer"
    //         >
    //           Create account
    //         </button>
    //       </form>

    //       <div className="flex items-center my-6">
    //         <div className="flex-1 h-px bg-gray-300" />
    //         <span className="px-4 text-sm">or</span>
    //         <div className="flex-1 h-px bg-gray-300" />
    //       </div>

    //       <button
    //         onClick={handleGoogleLogin}
    //         className="border py-3 rounded-md w-full cursor-pointer"
    //       >
    //         Continue with Google
    //       </button>


    //       <p className="text-sm mt-4">
    //         Already have an account?{" "}
    //         <span
    //           onClick={() => navigate("/login")}
    //           className="underline cursor-pointer"
    //         >
    //           Login here
    //         </span>
    //       </p>
    //     </div>

    //     <div className="hidden md:block rounded-3xl overflow-hidden">
    //       <img
    //         src="/images/leaf.webp"
    //         alt="Register"
    //         className="h-130 w-180 object-cover"
    //       />
    //     </div>

    //   </div>
    // </div>

    <div className="py-10 bg-[#fdf9f2] flex items-center justify-center px-4 sm:px-6 md:px-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40 w-full max-w-7xl">

    {/* LEFT */}
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Create your account
      </h1>

      <p className="text-gray-600 mt-2 text-sm sm:text-base">
        Register to access your account and benefits.
      </p>

      <form onSubmit={handleRegister} className="mt-6 sm:mt-8 space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-md bg-transparent text-sm sm:text-base"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-md bg-transparent text-sm sm:text-base"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md cursor-pointer"
        >
          Create account
        </button>
      </form>

      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="px-4 text-sm">or</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <button
        onClick={handleGoogleLogin}
        className="border py-3 rounded-md w-full cursor-pointer text-sm sm:text-base"
      >
        Continue with Google
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
        className="h-full w-full object-cover"
      />
    </div>

  </div>
</div>

  );
}
