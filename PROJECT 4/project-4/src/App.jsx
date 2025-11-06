import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Component/SignUp'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path='/' Component={SignUp}></Route>
        <Route path='/signup' Component={SignUp}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
