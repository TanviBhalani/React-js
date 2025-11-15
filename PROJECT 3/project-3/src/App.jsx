import React from 'react'
import Navbar from './Component/Navbar'
import Swipper from './Component/Swipper'
import RecipeCard from './Component/RecipeCard'
import Auto from './Component/Auto'
import SnackBar from './Component/SnackBar'
import Bars from './Component/Bars'
import Drawers from './Component/Drawers'
import Accordions from './Component/Accordians'
import Blogs from './Component/Blogs'
import Footer from './Component/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Swipper/>
      <Auto/>
      <RecipeCard/>
      <SnackBar/>
      <Bars/>
      <Drawers/>
      <Accordions/>
      <Blogs/>
      <Footer/>
    </div>
  )
}