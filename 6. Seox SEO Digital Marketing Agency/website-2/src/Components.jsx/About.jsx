import React from 'react'

export default function About() {
  return (
    <div className='flex  py-20 px-28 justify-between max-sm:py-5 max-sm:px-4 max-sm: gap-10 max-sm:w-full max-sm:flex-col max-sm:overflow-x-hidden'>
        <div className="part1 w-100 max-sm:w-[100%]">
            <div className="flex" data-aos="zoom-in-left" data-aos-duration="900">
                <img src="/images/mini.png" alt="" className='w-12 max-sm:w-8 max-sm:h-8 max-sm:mt-2'/>
                <p className='font-medium text-xl mt-2.5 max-sm:text-lg'>ABOUT US</p>
            </div>
            <h1 className='text-4xl font-bold py-3 max-sm:text-2xl'>The Results Speak for Themselves</h1>
            <p className='text-xl text-gray-600 mt-3' data-aos="fade-right" data-aos-duration="900">We’re not just an SEO agency — we’re your partner in achieving measurable growth. With our tailored strategies and cutting-edge tools, we’ve built a legacy of success.</p>
            <div className="card w-100 h-80 max-sm:h-55 max-sm:w-full bg-[url('/images/part1.jpg')] bg-center bg-cover rounded-2xl mt-10 p-5 flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
               <div className="flex flex-col">
                   <p className='text-white text-3xl font-bold w-70 max-sm:text-lg'>Clients Served Worldwide</p>
                   <p className='text-gray-300 font-medium text-xl mt-5 max-sm:text-sm'>Partnering with businesses across the globe to achieve outstanding results.</p>
               </div>
               <p className='font-bold text-5xl text-white mt-20 ml-55 max-sm:text-2xl max-sm:ml-50 max-sm:mt-10'>500 +</p>
            </div>
        </div>
        
        <div className="part2 w-full">  
          <div className="h-42 max-sm:hidden"></div>       
          <div className="card w-full h-97 max-sm:h-55 bg-[url('/images/part2.jpg')] bg-center bg-cover rounded-2xl sm:mt-20 p-5 sm:p-5 flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <div className="flex flex-col">
            <p className="text-white text-lg sm:text-3xl font-bold">Projects Successfully Completed</p>
            <p className="text-gray-300 font-medium text-xs sm:text-xl mt-2 sm:mt-5">Delivering customized campaigns that drive traffic and boost conversions.</p>
          </div>
          <p className="font-bold text-2xl sm:text-5xl text-white mt-5 sm:mt-20 ml-55 max-sm:ml-50"> 700 +</p>
        </div>
      </div>

        <div className="part3">
            <button className="px-5 py-3 ml-55 rounded-4xl bg-[#acff1c] text-black font-medium text-xl hover:animate-bounce transition cursor-pointer max-sm:hidden" data-aos="fade-left" data-aos-duration="1000">Work With Us</button>

            <div className="card w-100 h-127 max-sm:w-full max-sm:h-55 max-sm:-mt-1 bg-[url('/images/part3.jpg')] bg-center bg-cover rounded-2xl mt-19 p-5 max-sm:p-5 flex flex-col justify-between" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
               <div className="flex flex-col">
                   <p className='text-white text-3xl font-bold w-80 max-sm:text-lg'>Revenue Generated for Clients</p>
                   <p className='text-gray-300 font-medium text-xl mt-5 max-sm:text-sm'>Partnering with businesses across the globe to achieve outstanding results.</p>
               </div>
               <p className='font-bold text-5xl text-white mt-20 ml-40 max-sm:text-2xl max-sm:ml-45 max-sm:mt-10'>$200M+</p>
            </div>
        </div>
      
    </div>
  )
}
