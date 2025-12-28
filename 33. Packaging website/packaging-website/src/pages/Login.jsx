import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, loginWithGoogle } from "../services/auth";

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
    e.preventDefault();

    try {
      const userCredential = await loginUser(
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      alert("User logged in successfully");

      localStorage.setItem("auth", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({ email: user.email, uid: user.uid })
      );

      navigate("/profile");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("User not found");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password");
      } else {
        alert(error.message);
      }
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
    // <div className="py-15 bg-[#fdf9f2] flex items-center justify-center">
    //   <div className="grid md:grid-cols-2 gap-40 px-30 w-full">

    //     <div>
    //       <h1 className="text-3xl font-semibold">Login to your account</h1>
    //       <p className="text-gray-600 mt-2">
    //         View your account details and more.
    //       </p>

    //       <form onSubmit={handleLogin} className="mt-8 space-y-4">
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Username or email address"
    //           value={formData.email}
    //           onChange={handleChange}
    //           className="w-full border px-4 py-3 rounded-md"
    //           required
    //         />

    //         <input
    //           type="password"
    //           name="password"
    //           placeholder="Password"
    //           value={formData.password}
    //           onChange={handleChange}
    //           className="w-full border px-4 py-3 rounded-md"
    //           required
    //         />

    //         <div className="flex justify-between text-sm">
    //           <label className="flex gap-2">
    //             <input type="checkbox" /> Remember me
    //           </label>
    //           <span className="underline cursor-pointer">
    //             Forgot password?
    //           </span>
    //         </div>

    //         <button
    //           type="submit"
    //           className="w-full bg-black text-white py-3 rounded-md cursor-pointer"
    //         >
    //           Log in
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
    //         Login with Google
    //       </button>


    //       <p className="text-sm mt-4">
    //         Don’t have an account?{" "}
    //         <span
    //           onClick={() => navigate("/register")}
    //           className="underline cursor-pointer"
    //         >
    //           Register here
    //         </span>
    //       </p>
    //     </div>

    //     <div className="hidden md:block rounded-3xl overflow-hidden">
    //       <img
    //         src="/images/leaf.webp"
    //         className="h-130 w-full object-cover"
    //         alt="Login"
    //       />
    //     </div>

    //   </div>
    // </div>

    <div className="py-10 bg-[#fdf9f2] flex items-center justify-center px-4 sm:px-6 md:px-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40 w-full max-w-7xl">

    {/* LEFT */}
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Login to your account
      </h1>

      <p className="text-gray-600 mt-2 text-sm sm:text-base">
        View your account details and more.
      </p>

      <form onSubmit={handleLogin} className="mt-6 sm:mt-8 space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Username or email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-md text-sm sm:text-base"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-md text-sm sm:text-base"
          required
        />

        <div className="flex justify-between text-xs sm:text-sm">
          <label className="flex gap-2">
            <input type="checkbox" /> Remember me
          </label>
          <span className="underline cursor-pointer">
            Forgot password?
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md cursor-pointer"
        >
          Log in
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
        className="h-full w-full object-cover"
        alt="Login"
      />
    </div>

  </div>
</div>

  );
}

