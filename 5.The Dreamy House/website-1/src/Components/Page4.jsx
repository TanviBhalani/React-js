import React from 'react'

export default function Page4() {
  return (
    <div className="w-full h-[300px] bg-[url('/images/back2.jpg')] bg-center bg-cover bg-fixed mt-[10px] max-sm:w-[1052px] max-sm:h-115">
        <div className="flex justify-between py-10 px-50 max-sm:px-20 max-sm:py-20">
            <div className="part1 flex flex-col items-center">
                <img src="/images/one.gif" alt="" className='w-25'/>
                <p className='text-white text-xl font-medium max-sm:text-3xl max-sm:w-50 max-sm:text-center max-sm:mt-5'>Total Project No</p>
                <div className="w-38 h-1 bg-[#faa825] my-5"></div>
                <p className='text-white text-5xl font-medium'>300+</p>
            </div>
            <div className="part1 flex flex-col items-center">
                <img src="/images/two.gif" alt="" className='w-25'/>
                <p className='text-white text-xl font-medium max-sm:text-3xl max-sm:w-70 max-sm:text-center max-sm:mt-5'>Total Complete Project</p>
                <div className="w-38 h-1 bg-[#faa825] my-5"></div>
                <p className='text-white text-5xl font-medium'>300+</p>
            </div>
            <div className="part1 flex flex-col items-center">
                <img src="/images/three.gif" alt="" className='w-25'/>
                <p className='text-white text-xl font-medium max-sm:text-3xl max-sm:w-50 max-sm:text-center max-sm:mt-5'>Work Average Ratings</p>
                <div className="w-38 h-1 bg-[#faa825] my-5"></div>
                <p className='text-white text-5xl font-medium'>4.9</p>
            </div>
        </div>
      
    </div>
  )
}
