import React from 'react'

export default function Filter1() {
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    
    const evenNumbrs = numbers.filter((num)=> num % 2 === 0)
  return (
    <div>
        <h2>Even Numbers</h2>
        <ul>
            {
                evenNumbrs.map((e, i)=> (
                    <li key={i}>{e}</li>
                ))
            }
        </ul>

      
    </div>
  )
}
