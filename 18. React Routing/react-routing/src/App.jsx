import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Read1 from './CRUD/Read1'
import Add1 from './CRUD/Add1'

export default function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route path='/' Component={Read1}></Route>
           <Route path='/add' Component={Add1}></Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}
