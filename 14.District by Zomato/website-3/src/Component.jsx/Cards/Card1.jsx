import React from 'react'

export default function Card1({ obj }) {
  return (
    <div className="flex-shrink-0 w-75 h-140 border border-gray-300 rounded-xl shadow hover:shadow-lg transition max-sm:w-95 max-sm:h-180">
      <div className="top">
        <img src={obj.image} alt={obj.title} className="rounded-t-xl w-full object-cover"/>
      </div>

      <div className="info p-3 cursor-pointer">
        <p className="text-gray-500 text-xs font-medium tracking-wider max-sm:text-lg">{obj.time}</p>
        <h1 className="font-medium text-lg max-sm:text-2xl">{obj.title}</h1>
        <h5 className="font-medium text-sm text-gray-600 max-sm:text-xl">{obj.location}</h5>
        <p className="font-medium text-xs text-gray-500 mt-1 max-sm:text-xl">{obj.price}</p>
      </div>
    </div>
  )
}