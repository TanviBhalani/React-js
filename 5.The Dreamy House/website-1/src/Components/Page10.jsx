import React from 'react'

export default function Page10() {
  return (
    <div className='max-sm:w-[1050px]'>
        <div className="flex flex-col items-center pt-18 pb-15">
           <h3 className="text-[#f57e16] text-2xl font-normal max-sm:text-4xl">What we offer</h3>
           <h1 className="text-4xl mt-1 font-medium max-sm:text-6xl max-sm:mt-5">We Are Experts In</h1>
        </div>

        <div className="flex mx-18 mb-20 justify-between max-sm:flex-col">
            <div className="card w-80 h-85 rounded-lg shadow-xl border-1 border-gray-200 max-sm:w-[100%] max-sm:h-200 max-sm:rounded-2xl max-sm:mb-20">
                <div className="top w-full h-60 rounded-lg max-sm:h-150">
                    <img src="/images/we1.jpg" alt="" className='h-60 w-full bg-contain bg-center rounded-lg max-sm:h-150 max-sm:rounded-2xl'/>
                </div>
                <p className='text-gray-500 text-lg mx-4 mt-4 font-normal max-sm:text-4xl max-sm:ml-8'>Furniture</p>
                <p className='mt-1 text-xl font-medium ml-4 max-sm:text-6xl max-sm:font-normal max-sm:ml-8 max-sm:mt-5'>Wall Panel</p>
            </div>
            <div className="card w-80 h-85 rounded-lg shadow-xl border-1 border-gray-200 max-sm:w-[100%] max-sm:h-200 max-sm:rounded-2xl max-sm:mb-20">
                <div className="top w-full h-60 rounded-lg max-sm:h-150">
                    <img src="/images/we2.webp" alt="" className='h-60 w-full bg-contain bg-center rounded-lg max-sm:h-150 max-sm:rounded-2xl'/>
                </div>
                <p className='text-gray-500 text-lg mx-4 mt-4 font-normal max-sm:text-4xl max-sm:ml-8'>Architecture</p>
                <p className='mt-1 text-xl font-medium ml-4 max-sm:text-6xl max-sm:font-normal max-sm:ml-8 max-sm:mt-5'>Wpc daking</p>
            </div>
            <div className="card w-80 h-85 rounded-lg shadow-xl border-1 border-gray-200 max-sm:w-[100%] max-sm:h-200 max-sm:rounded-2xl max-sm:mb-20">
                <div className="top w-full h-60 rounded-lg max-sm:h-150">
                    <img src="/images/we3.jpg" alt="" className='h-60 w-full bg-contain bg-center rounded-lg max-sm:h-150 max-sm:rounded-2xl'/>
                </div>
                <p className='text-gray-500 text-lg mx-4 mt-4 font-normal max-sm:text-4xl max-sm:ml-8'>Architecture</p>
                <p className='mt-1 text-xl font-medium ml-4 max-sm:text-6xl max-sm:font-normal max-sm:ml-8 max-sm:mt-5'>Pvc Sheet</p>
            </div>
            <div className="card w-80 h-85 rounded-lg shadow-xl border-1 border-gray-200 max-sm:w-[100%] max-sm:h-200 max-sm:rounded-2xl max-sm:mb-20">
                <div className="top w-full h-60 rounded-lg max-sm:h-150">
                    <img src="/images/we4.jpg" alt="" className='h-60 w-full bg-contain bg-center rounded-lg max-sm:h-150 max-sm:rounded-2xl'/>
                </div>
                <p className='text-gray-500 text-lg mx-4 mt-4 font-normal max-sm:text-4xl max-sm:ml-8'>Interior Design</p>
                <p className='mt-1 text-xl font-medium ml-4 max-sm:text-6xl max-sm:font-normal max-sm:ml-8 max-sm:mt-5'>Carpet Tiles</p>
            </div>
        </div>
    </div>
  )
}
