import React from 'react'

export default function Page2({image, title, description}) {
  return (
    <div className="card1 flex w-[31%] p-7 border-1 border-gray-300 max-sm:w-[98%] max-sm:ml-5 max-sm:flex-col max-sm:mb-10">
      <div className="left">
        <img src={image} alt={title} className="w-20 border-1 border-gray-200 max-sm:w-35" />
      </div>
      <div className="right ml-7">
        <p className="text-2xl text-[#f57e16] font-medium max-sm:mt-5 max-sm:text-5xl">{title}</p>
        <p className="text-xl font-light text-gray-500 mt-5 max-sm:text-4xl">{description}</p>
        <button className="p-5 py-2 mt-7 rounded-lg border border-[#fbbb84] text-gray-600 cursor-pointer hover:shadow-xl max-sm:text-4xl max-sm:py-6 max-sm:px-17 max-sm:border-3">
          Learn More
        </button>
      </div>
    </div>
  )
}
