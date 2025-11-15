import React, { useContext } from 'react'
import { themeContext } from '../App'

export default function Home() {
    const value = useContext(themeContext)
    console.log(value)

  return (
    <div>
      <h1>This is Home page</h1>
      <div style={{backgroundColor : value == 'dark' ? "white" : "pink"}}>Home</div>
    </div>
  )
}
