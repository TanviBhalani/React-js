import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-[600px] bg-[url('/images/heroBanner.jpg')] bg-center bg-cover bg-fixed max-sm:w-[1052px] max-sm:h-[900px]">
       <h1 className='text-white text-8xl pt-35 font-medium max-sm:pt-80'>Stylish Solutions</h1>
       <h1 className='text-white text-8xl font-medium'>for Every Space</h1>
       <p className='text-2xl text-white mt-10 max-sm:text-4xl'>Welcome to <span className='text-yellow-500'>Dreamy House Trading</span></p>
       <p className='text-2xl text-white max-sm:text-4xl'>Discover a world where design meets emotion.</p>
       <button className='text-center bg-[#f8ae38] mt-8 py-2.5 px-5 text-white text-2xl border-1 rounded-md cursor-pointer hover:bg-black 	transition-duration: 100ms; max-sm:py-5 max-sm:px-14 max-sm:text-4xl max-sm:mt-15'>About Us</button>
    </div>
  )
}
