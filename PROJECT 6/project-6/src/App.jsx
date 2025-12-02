import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Register}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}
