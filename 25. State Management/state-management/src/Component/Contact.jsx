import React, { useContext } from 'react'
import { themeContext } from '../App'

export default function Contact() {
    const value = useContext(themeContext)
    console.log(value)

    return (
        <div>
            <h1>Contact Page</h1>
            <div style={{ backgroundColor: value == 'dark' ? "white" : "orange" }}>Contact</div>
        </div>
    )
}
