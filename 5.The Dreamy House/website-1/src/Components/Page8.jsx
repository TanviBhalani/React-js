import React from 'react'

export default function Page8() {
  return (
    <div className="bg-[url('/images/testimonial.jpg')] bg-cover bg-center bg-no-repeat w-full  h-100 flex justify-between pt-10 mt-15 max-sm:w-[1053px] max-sm:flex-col max-sm:h-250 max-sm:justify-around">
      <div className="flex flex-col text-center justify-center max-sm:w-auto">
        <h1 className='flex flex-col gap-2 w-100 items-start ml-10 max-sm:items-center max-sm:gap-5 max-sm:ml-80'>
          <span className=' font-medium  text-3xl text-[#f57e16] max-sm:text-6xl'>Consultant</span>
          <div className="line w-40 h-1 bg-yellow-500"></div>
          <span className='w-120  text-white text-6xl -ml-10 max-sm:text-8xl max-sm:w-200'>GET 100% FREE CONSULTANCY</span>
        </h1>
      </div>
      <div className="flex flex-col mt-35 pr-70 max-sm:ml-48">
        <p className='text-3xl text-white max-sm:text-6xl max-sm:w-200'>Ready to start designing?</p>
        <div className="flex my-5 max-sm:flex-col">
          <button className='text-white bg-black px-5 py-2 rounded-md border-1 border-white cursor-pointer hover:bg-yellow-500 transition-all max-sm:text-4xl max-sm:py-5 max-sm:border-2 max-sm:ml-20 max-sm:mt-5'>Book an Appointment</button>
          <p className='text-xl text-gray-400 m-2 max-sm:text-center max-sm:ml-30 max-sm:text-6xl max-sm:my-5 max-sm:text-white'>OR</p>
          <button className='text-[#f57e16] bg-white px-5 py-2 rounded-md border-1 border-white cursor-pointer font-medium max-sm:text-4xl max-sm:py-5 max-sm:border-2 max-sm:ml-20 max-sm:mt-5'>Call Now - +971527787200</button>
        </div>
      </div>
    </div>
  )
}




