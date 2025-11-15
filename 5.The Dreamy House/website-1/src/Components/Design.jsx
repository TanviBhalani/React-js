import React from 'react'
import Page7 from './Page7'

const design =[
  {id: 1, image: "/images/des1.jpg", title: "Residence"},
  {id: 2, image: "/images/des2.jpg", title: "Office"},
  {id: 3, image: "/images/des3.jpg", title: "Hotel"},
  {id: 4, image: "/images/des4.jpg", title: "Wall Cladding"},
  {id: 5, image: "/images/des6.jpg", title: "Showroom"},
  {id: 6, image: "/images/des5.jpg", title: "Exterior"},
]

export default function Design() {
  return (
    <div>
        <div className="flex flex-wrap gap-9 justify-between px-18 max-sm:w-[1000px] max-sm:flex-col">
            {design.map((item)=> (
                <Page7
                key={item.id}
                image={item.image}
                title={item.title}
                />
            ))}
        </div>
      
    </div>
  )
}
