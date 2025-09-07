import React from 'react'

export default function Page3({image, title}) {
  return (
    <div className='box w-[28%] h-106 rounded-lg shadow-2xl max-sm:w-[95%] max-sm:h-250 max-sm:rounded-2xl max-sm:mb-20'>
      <img src={image} alt="" className='w-95 h-80 rounded-lg m-5 max-sm:w-[85%] max-sm:h-[78%] max-sm:ml-15 max-sm:mt-15 max-sm:rounded-2xl'/>
      <p className='text-2xl ml-7 hover:text-[#f57e16] cursor-pointer transition-all max-sm:text-6xl max-sm:ml-20 max-sm:mt-10'>{title}</p>
    </div>
  )
}
