import React, { useState } from 'react'
import Page1 from './Component.jsx/Pages/Page1'
import Navbar from './Component.jsx/Navbar'
import Footer from './Component.jsx/Footer'

export default function App() {

  // const [dark,setDark] = useState(false)

  return (
    <div>
      {/* <Navbar dark={dark} setDark={setDark}/> */}
      <Navbar/>
      <Page1/>
      <Footer/>
    </div>
  )
}
