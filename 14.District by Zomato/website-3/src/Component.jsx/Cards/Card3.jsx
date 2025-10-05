import React from 'react'

export default function Card3({obj}) {
  return (
    <div className='flex-shrink-0 w-46 h-55 cursor-pointer'>
      <img src={obj.image} alt={obj.title} className='rounded-full w-46 h-46' />
      <p className='font-medium text-lg mt-1 text-center max-sm:text-xl max-sm:mt-3'>{obj.name}</p>
    </div>
  )
}
