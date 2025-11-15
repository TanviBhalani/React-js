import React, { useState } from 'react'

export default function MapFilter2() {
  const [tasks,setTasks] = useState([
    {id:1, task:"Wake up early", done:true},
    {id:2, task:"Study react", done: true},
    {id:3, task:"Go for a Walk", done:false} 
  ])

  const [newTask, setNewTask] = useState("")

  const addNewTask = () => {
    if(newTask.trim() === "") return;

    const newTaskObj = {id: tasks.length +1 , task: newTask, done:false}

    setTasks([...tasks,newTaskObj])
    setNewTask("");
    console.log(newTaskObj)
  }

  const completed = tasks.filter((t) => t.done)
  const pending = tasks.filter((t) => !t.done)

  return (
    <div>
      <h2>Tasks</h2>
      <input type="text" placeholder='Enter new tasks...' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
      <button onClick={addNewTask}>Add Task</button>

      <h2>Completed Tasks:</h2>
      <ul>
        {
          completed.map((e,i)=> (
            <li key={i}>{e.task}</li>
          ))
        }
      </ul>

      <h2>Pending Tasks:</h2>
      <ul>
        {
          pending.map((e,i)=> (
            <li key={i}>{e.task}</li>
          ))
        }
      </ul>
    </div>
  )
}

