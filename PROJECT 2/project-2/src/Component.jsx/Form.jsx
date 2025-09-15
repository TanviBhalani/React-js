import React, { useRef, useState } from 'react';

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);

  const emailRef = useRef();

  const addStudent = () => {
    if (!name || !age || !email || !course) {
      alert("Please fill all fields");
      return;
    }

    if (!email.includes("@") || !email.endsWith(".com")) {
      alert("Please enter a valid email address (must include '@' and end with '.com')");
      setEmail("");
      emailRef.current.focus();
      return;
    }

    const student = { name, age, email, course };
    setStudents([...students, student]);

    // Clear form fields
    setName("");
    setAge("");
    setEmail("");
    setCourse("");
  };

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center p-5">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Student Registration</h1>

        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"/>
        <input type="text" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"/>
        <input type="email" placeholder="Enter your email" value={email} ref={emailRef} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"/>
        <input type="text" placeholder="Enter your course" value={course} onChange={(e) => setCourse(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"/>

        <button onClick={addStudent} className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-colors">Register</button>

        <h2 className="text-xl font-semibold text-gray-700 text-center mt-6">Registered Students</h2>
        {students.length === 0 ? (<p className="text-center text-gray-500 mt-2">No students registered yet.</p>) : 
          (students.map((e, i) => (
            <ul key={i} className="bg-gray-50 p-4 rounded-lg shadow-md mt-4">
              <li><span className="font-semibold">Name:</span> {e.name}</li>
              <li><span className="font-semibold">Age:</span> {e.age}</li>
              <li><span className="font-semibold">Email:</span> {e.email}</li>
              <li><span className="font-semibold">Course:</span> {e.course}</li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
}