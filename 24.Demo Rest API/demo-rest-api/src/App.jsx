import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import SignUp from './Component/SignUp'
import Dashboard from './Component/Dashboard'
import ApiCrud from './Component/ApiCrud'
import Practice from './Component/Practice'

export default function App() {
  return (
    <div>
      {/* <Practice/> */}
      {/* <ApiCrud/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={SignUp}></Route>
        <Route path='/signup' Component={SignUp}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}
