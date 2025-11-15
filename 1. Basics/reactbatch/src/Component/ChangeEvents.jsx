import React, { use, useState } from 'react'

export default function ChangeEvents() {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")

    const [record,setRecord] = useState([])

    const addData = ()=> {
        let obj = {"name" : name, "age": age}
        setRecord ([...record,obj])
    }
  return (
    <div>
        <h1>Events</h1>
        <input type="text" placeholder='Enter your name' onChange={(e)=> setName(e.target.value)} />
        <input type="text" placeholder='Enter your age' onChange={(e)=> setAge(e.target.value)} />

        <button onClick={addData}>Add Data</button>

        {
          record.map((e,i)=>{
            return <ul key={i}>
                <li>{e.name}</li>
                <li>{e.age}</li>
            </ul>
          })
        }

    </div>
  )
}


// import React, { useRef, useState } from 'react';

// export default function ChangeEvents() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [course, setCourse] = useState("");

//   const [students, setStudents] = useState([]);



//   //focus on email box
//   const emailRef = useRef();

//   const addStudent = () => {
//     if (!name || !age || !email || !course) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (!email.includes("@") || !email.endsWith(".com")) {
//       alert("Please enter a valid email address (must include '@' and end with '.com')");
//       setEmail("");
//       emailRef.current.focus();
//       return;
//     }

//     let student = { name, age, email, course };
//     setStudents([...students, student]);

//     // Clear inputs
//     setName("");
//     setAge("");
//     setEmail("");
//     setCourse("");
//   }

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Student Registration Form</h1>

//       <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} style={{ margin: '5px' }} />
//       <input type="text" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} style={{ margin: '5px' }} />
//       <input type="email" placeholder="Enter your email" value={email} ref={emailRef} onChange={(e) => setEmail(e.target.value)} style={{ margin: '5px' }} />
//       <input type="text" placeholder="Enter your course" value={course} onChange={(e) => setCourse(e.target.value)} style={{ margin: '5px' }} />

//       <br />
//       <button onClick={addStudent} style={{ marginTop: '10px' }}> Register</button>

//       <h2>Registered Students</h2>
//       {students.length === 0 ? <p>No students registered yet.</p> :
//         students.map((e, i) => (
//           <ul key={i} style={{ listStyle: 'none', padding: '10px', border: '1px solid #ccc', width: '300px', margin: '10px auto' }}>
//             <li><strong>Name:</strong> {e.name}</li>
//             <li><strong>Age:</strong> {e.age}</li>
//             <li><strong>Email:</strong> {e.email}</li>
//             <li><strong>Course:</strong> {e.course}</li>
//           </ul>
//         ))
//       }
//     </div>
//   );
// }

