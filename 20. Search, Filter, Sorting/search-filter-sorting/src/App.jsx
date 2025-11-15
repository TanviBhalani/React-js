import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'

export default function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
       <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/cart' Component={Cart}></Route>
       </Routes>
    </BrowserRouter>
   </>
  )
}

