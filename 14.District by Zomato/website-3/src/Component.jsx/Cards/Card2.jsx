import React from 'react'

export default function Card2({obj}) {
    return (
        <div key={obj.id} className=" flex-shrink-0 w-50 h-auto border border-gray-300 rounded-xl shadow hover:shadow-lg transition max-sm:w-68">

            <div className="top">
                <img src={obj.image} alt={obj.title} className="rounded-t-xl w-full object-cover" />
            </div>

            <div className="info p-3 cursor-pointer">
                <p className="text-gray-500 text-xs font-medium tracking-wider">{obj.time}</p>
                <h1 className="font-medium text-lg max-sm:text-2xl">{obj.title}</h1>
                <h5 className="font-medium text-sm text-gray-600 max-sm:text-lg">{obj.discription}</h5>
            </div>

        </div>
    )
}
