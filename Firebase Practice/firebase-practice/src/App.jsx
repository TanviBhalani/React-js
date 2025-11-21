import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Component/Register'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
import Home from './Component/Home'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
