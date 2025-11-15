import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Navbar from './Component/Navbar'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
           <Route path='/' Component={Home}></Route>
           <Route path='/shop' Component={Shop}></Route>
           <Route path='/cart' Component={Cart}></Route>
           <Route path='/product/:id' Component={ProductDetails}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
