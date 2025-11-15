import React from 'react'
import Page2 from './Page2'

const cardinfo = [
  { id: 1, image: "/images/icon1.png", title: "SPC & HSPC Flooring", description: "Waterproof, and stylish flooring options for indoor & outdoor use." },
  { id: 2, image: "/images/icon2.png", title: "TV Wall Decorations", description: "Custom-designed panels to enhance your entertainment space." },
  { id: 3, image: "/images/icon3.png", title: "Wall Cladding", description: "High-quality decorative wall panels for a sophisticated touch" },
  { id: 4, image: "/images/icon4.png", title: "PVC Marvel Sheets", description: "Modern and durable sheets for innovative home décor." },
  { id: 5, image: "/images/icon5.png", title: "Home Decoration Solutions", description: "Aesthetic and practical designs to enhance any space." },
]

export default function Card1() {
  return (
    <div className="my-10 mt-1 mx-15 py-15 shadow-md max-sm:w-[900px] max-sm:shadow-xs">
      {/* Heading (only once) */}
      <div className="flex flex-col items-center">
        <h3 className="text-[#f57e16] text-3xl font-medium max-sm:text-5xl">What we do</h3>
        <div className="line w-[12.5%] h-1 mt-1 rounded-full bg-[#faa825] max-sm:w-60 max-sm:h-1.5 max-sm:mt-2.5"></div>
        <h1 className="text-5xl mt-4 font-medium max-sm:text-6xl max-sm:mt-6">The Best Services We Provide</h1>
      </div>

      {/* Cards (repeated) */}
      <div className="flex flex-wrap gap-6 justify-center mt-12 max-sm:flex-col">
        {cardinfo.map((item) => (
          <Page2
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}  
