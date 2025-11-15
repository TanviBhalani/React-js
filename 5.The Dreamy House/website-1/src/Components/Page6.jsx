import React from 'react'

export default function Page6() {
  return (
    <div className='h-100 w-full mt-100 mb-150 max-sm:w-[1050px] max-sm:h-720'>
      <div className="flex flex-col items-center pt-18 pb-15 ">
        <div className="w-[100%] h-20 bg-[#f5f5f5]"></div>
        <h3 className="text-[#f57e16] text-3xl font-medium mt-10 max-sm:text-5xl">Working Process</h3>
        <div className="line w-[12.5%] h-1 mt-1 rounded-full bg-[#faa825] max-sm:w-80 max-sm:h-1.5 max-sm:mt-4"></div>
        <h1 className="text-5xl mt-4 font-medium max-sm:text-6xl">Our Working Process</h1>
      </div>

      <div className="flex px-15 pb-20 gap-10 max-sm:flex-col">
        <div className="flex p-5 shadow-md flex-col gap-3 rounded-lg justify-center items-center border-1 border-gray-200 group transition duration-300 hover:shadow-lg hover:border-yellow-500 max-sm:py-15 max-sm:boder-gray-300 max-sm:border-2">
          <div className="relative p-3 border-dashed border-gray-300 flex justify-center border-2 w-24 h-24 rounded-full items-center group-hover:border-yellow-500 transition duration-300 max-sm:w-48 max-sm:h-48 max-sm:border-4">
            <img src="/images/first.gif" alt="" className='object-cover h-12 w-12 group-hover:scale-110 transition-transform duration-300 max-sm:h-28 max-sm:w-32'/>
            <span className='w-6 h-6 rounded-full flex justify-center items-center absolute top-0 left-0 bg-yellow-500 text-white group-hover:bg-yellow-600 transition duration-300 max-sm:w-12 max-sm:h-13 max-sm:text-2xl'>1</span>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h1 className='text-2xl  mx-auto font-medium text-yellow-500 group-hover:text-[#ee9649] transition duration-300 max-sm:text-6xl max-sm:font-normal max-sm:mt-3'>Consultation</h1>
            <p className='text-lg leading-5.5 mt-2 text-gray-500 group-hover:text-gray-900 transition duration-300 max-sm:text-5xl max-sm:leading-13 max-sm:font-light max-sm:text-center max-sm:mt-7'>Discuss your needs and get expert recommendations.</p>
          </div>
        </div>

        
        <div className="flex p-5 shadow-md flex-col gap-3 rounded-lg justify-center items-center border-1 border-gray-200 group transition duration-300 hover:shadow-lg hover:border-yellow-500 max-sm:py-15 max-sm:boder-gray-300 max-sm:border-2">
          <div className="relative p-3 border-dashed border-gray-300 flex justify-center border-2 w-24 h-24 rounded-full items-center group-hover:border-yellow-500 transition duration-300 max-sm:w-48 max-sm:h-48 max-sm:border-4">
            <img src="/images/second.gif" alt="" className='object-cover h-12 w-12 group-hover:scale-110 transition-transform duration-300 max-sm:h-28 max-sm:w-32'/>
            <span className='w-6 h-6 rounded-full flex justify-center items-center absolute top-0 left-0 bg-yellow-500 text-white group-hover:bg-yellow-600 transition duration-300 max-sm:w-12 max-sm:h-13 max-sm:text-2xl'>2</span>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h1 className='text-2xl  mx-auto font-medium text-yellow-500 group-hover:text-[#ee9649] transition duration-300 max-sm:text-6xl max-sm:font-normal max-sm:mt-3'>Installation</h1>
            <p className='text-lg leading-5.5 mt-2 text-gray-600 group-hover:text-gray-900 transition duration-300 max-sm:text-5xl max-sm:leading-13 max-sm:font-light max-sm:text-center max-sm:mt-7 max-sm:px-15'>Our skilled team ensures a perfect, hassle-free setup.</p>
          </div>
        </div>

        <div className="flex p-5 shadow-md flex-col gap-3 rounded-lg justify-center items-center border-1 border-gray-200 group transition duration-300 hover:shadow-lg hover:border-yellow-500 max-sm:py-15 max-sm:boder-gray-300 max-sm:border-2">
          <div className="relative p-3 border-dashed border-gray-300 flex justify-center border-2 w-24 h-24 rounded-full items-center group-hover:border-yellow-500 transition duration-300 max-sm:w-48 max-sm:h-48 max-sm:border-4">
            <img src="/images/third.gif" alt="" className='object-cover h-12 w-12 group-hover:scale-110 transition-transform duration-300 max-sm:h-28 max-sm:w-32'/>
            <span className='w-6 h-6 rounded-full flex justify-center items-center absolute top-0 left-0 bg-yellow-500 text-white group-hover:bg-yellow-600 transition duration-300 max-sm:w-12 max-sm:h-13 max-sm:text-2xl'>3</span>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h1 className='text-2xl  mx-auto font-medium text-yellow-500 group-hover:text-[#ee9649] transition duration-300 max-sm:text-6xl max-sm:font-normal max-sm:mt-3'>Final Touch & Handover</h1>
            <p className='text-lg leading-5.5 mt-2 text-gray-600 group-hover:text-gray-900 transition duration-300 max-sm:text-5xl max-sm:leading-13 max-sm:font-light max-sm:text-center max-sm:mt-7 max-sm:px-15'>A thorough inspection to ensure perfection before completion.</p>
          </div>
        </div>

        <div className="flex p-5 shadow-md flex-col gap-3 rounded-lg justify-center items-center border-1 border-gray-200 group transition duration-300 hover:shadow-lg hover:border-yellow-500 max-sm:py-15 max-sm:boder-gray-300 max-sm:border-2">
          <div className="relative p-3 border-dashed border-gray-300 flex justify-center border-2 w-24 h-24 rounded-full items-center group-hover:border-yellow-500 transition duration-300 max-sm:w-48 max-sm:h-48 max-sm:border-4">
            <img src="/images/fourth.gif" alt="" className='object-cover h-12 w-12 group-hover:scale-110 transition-transform duration-300 max-sm:h-28 max-sm:w-32'/>
            <span className='w-6 h-6 rounded-full flex justify-center items-center absolute top-0 left-0 bg-yellow-500 text-white group-hover:bg-yellow-600 transition duration-300 max-sm:w-12 max-sm:h-13 max-sm:text-2xl'>4</span>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h1 className='text-2xl  mx-auto font-medium text-yellow-500 group-hover:text-[#ee9649] transition duration-300 max-sm:text-6xl max-sm:font-normal max-sm:mt-3'>Final Touch & Handover</h1>
            <p className='text-lg leading-5.5 mt-2 text-gray-600 group-hover:text-gray-900 transition duration-300 max-sm:text-5xl max-sm:leading-13 max-sm:font-light max-sm:text-center max-sm:mt-7 max-sm:px-15'>A thorough inspection to ensure perfection before completion.</p>
          </div>
        </div>

      </div>

      <div className='bg-[#f5f5f5] w-[100%] h-70 flex flex-col items-center py-10 max-sm:h-auto'>
        <p className='uppercase text-[#ef9c54] text-2xl max-sm:text-4xl'>Spaces Reimagined</p>
        <h1 className='text-5xl mt-5 max-sm:text-7xl max-sm:px-14 max-sm:text-center'>Comprehensive Architectural Design</h1>
        <p className='text-center mt-7 text-lg text-gray-600 font-normal w-190 max-sm:text-5xl max-sm:leading-16 max-sm:mt-10'>Transforming spaces with innovative designs that blend style and functionality— perfect for wallcas, hotels, offices, residences, showrooms, and exteriors.</p>
      </div>
      
    </div>
  )
}


