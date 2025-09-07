import React from 'react'
import Page3 from './Page3'

const projects =[
    {id: 1, image: "/images/pro1.jpg", title: "D-Orex Home Interior"},
    {id: 2, image: "/images/pro2.jpg", title: "Modern Living Space"},
    {id: 3, image: "/images/pro3.jpg", title: "Minimalist Design"},
    {id: 4, image: "/images/pro4.jpg", title: "Contemporary Style"},
    {id: 5, image: "/images/pro5.jpg", title: "Elegant Workspace"},
    {id: 5, image: "/images/pro6.jpg", title: "Elegant Workarea"}
]

export default function Project() {
  return (
    <div className='max-sm:w-[1000px]'>
        {/* Heading (only once) */}
      <div className="flex flex-col items-center mt-18 ">
        <h3 className="text-[#f57e16] text-3xl font-medium max-sm:text-5xl">Latest Projects</h3>
        <div className="line w-[12.5%] h-1 mt-1 rounded-full bg-[#faa825] max-sm:mt-3 max-sm:w-70 max-sm:h-1.5"></div>
        <h1 className="text-5xl mt-4 font-medium max-sm:text-6xl max-sm:px-50 max-sm:text-center">Our Latest Project Designs</h1>
      </div>

      <div className="flex flex-wrap gap-9 justify-center my-10 max-sm:flex-col max-sm: ml-20 ">
        {projects.map((item)=> (
            <Page3
              key={item.id}
              image={item.image}
              title={item.title}
            />
        ))}
      </div>

      <div className="flex flex-col items-center">
        <button className=' py-2 px-3 text-white bg-black w-30 text-center rounded-md mb-10 max-sm:py-5 max-sm:px-10 max-sm:w-70 max-sm:rounded-lg max-sm:text-3xl'>Show More</button>
      </div>

    </div>
  )
}
