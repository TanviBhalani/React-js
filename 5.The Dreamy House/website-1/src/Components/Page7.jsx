import React from 'react'

export default function Page7({image, title}) {
  return (
    <div className='box w-[31%] h-106 rounded-lg shadow-2xl max-sm:w-[105%] max-sm:h-215'>
      <img src={image} alt="" className='w-95 h-80 rounded-lg m-5 max-sm:h-[78%] max-sm:w-[90%] max-sm:m-10'/>
      <div className="flex justify-between px-8 max-sm:px-15">
           <p className='text-2xl hover:text-[#f57e16] cursor-pointer transition-all max-sm:text-5xl'>{title}</p>
           <button className='px-10 py-2 border-1 border-[#f57e16] text-[#f57e16] rounded-md cursor-pointer hover:bg-yellow-500 hover:text-white hover:border-yellow-500 max-sm:text-3xl max-sm:px-18 max-sm:py-3 max-sm:rounded-lg max-sm:border-2'>See More</button>
      </div>
      
    </div>
  )
}
