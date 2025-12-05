import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../../firebaseConfig';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    nav("/dashboard");
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
    nav("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white w-80 p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-semibold">Login</h2>

        <input className="w-full mt-4 p-2 border rounded-xl" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input className="w-full mt-3 p-2 border rounded-xl" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />

        <button className="w-full bg-purple-900 text-white mt-4 py-2 rounded-xl cursor-pointer" onClick={loginUser}>
          Login
        </button>

        <button className="w-full bg-black text-white mt-3 py-2 rounded-xl cursor-pointer" onClick={googleLogin}>
          Login with Google
        </button>

        <p className="text-xs text-center mt-3 cursor-pointer">
          No account? <Link className="text-purple-700" to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
