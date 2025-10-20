import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart'
import AnnouncementBar from './Components/AnnoucementBar'
import ProductDetails from './Pages/ProductDetails'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <AnnouncementBar/>
      <Navbar/>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/cart' Component={Cart}></Route>
          <Route path='/product/:id' Component={ProductDetails}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}
