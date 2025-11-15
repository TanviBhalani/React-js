import React, { createContext } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'

export const themeContext = createContext()

export default function App() {
  return (
    <div>
      <h1>This is the Component Tree</h1>
      <BrowserRouter>
        <themeContext.Provider value={"light"}>
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/about' Component={About}></Route>
            <Route path='/contact' Component={Contact}></Route>
          </Routes>
        </themeContext.Provider>
      </BrowserRouter>

    </div>
  )
}

// State Management => 

  //Single Componenet stste management => useState()

  // two Component stste management => props
  // Props Drilling (The problem)

  // Managing state in whole component tree => Context api
  // Limitation of component tree (The problem)

  //Managing state globaly => Redux




  //Three steps of Context Api :
  //1. Create Context 
  //2. Provide Context 
  //3. Consume Context 









  //useMemo is a React Hook that memoizes a value, meaning it caches the result of a function and returns the cached 
  // value if its dependencies haven't changed. This optimization technique can improve the performance of React applications 
  // by preventing unnecessary recalculations of expensive values.