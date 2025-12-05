import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebaseConfig';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    nav("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white w-80 p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-semibold">Register</h2>

        <input className="w-full mt-4 p-2 border rounded-xl" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input className="w-full mt-3 p-2 border rounded-xl" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />

        <button className="w-full bg-purple-900 text-white mt-4 py-2 rounded-xl cursor-pointer" onClick={register}>
          Create Account
        </button>

        <p className="text-xs text-center mt-3 cursor-pointer">
          Already have an account? <Link className="text-purple-700" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
