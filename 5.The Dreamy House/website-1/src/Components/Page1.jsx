import React from 'react'

export default function Page1() {
  return (
    <div className='w-full px-15 py-12 flex max-sm:w-[1050px] max-sm:flex-col'>
       <div className="info flex flex-col gap-4 w-[45%] max-sm:w-[950px]">
           <h1 className='text-2xl text-[#f57e16] font-medium max-sm:text-5xl'>Welcome to Dreamy Home Trading</h1>
           <h1 className='text-5xl font-medium max-sm:text-6xl max-sm:mt-5'>Interior Design with Different Approach</h1>
           <p className='text-lg text-gray-500 mt-4 max-sm:text-4xl max-sm:leading-13'>At Dreamy House Trading, we bring elegance and durability to your interiors with high-quality SPC & HSPC flooring, stunning TV decorations, premium wall cladding, and PVC Marvel sheets. Whether you’re revamping your home or upgrading your commercial space, our expert solutions ensure beauty, functionality, and lasting value.</p>
           <button className=' w-30 py-3 px-2 bg-[#faa825] text-white rounded-md font-medium max-sm:py-5 max-sm:px-9 max-sm:text-3xl max-sm:w-70 max-sm:mt-5'>Learn More</button>


           <div className="flex flex-col mt-10">
               <label className='text-[#f57e16] text-xl max-sm:text-4xl'>Interior Design</label>
               <div className='flex flex-start overflow-hidden w-full rounded-full h-1.5 bg-[#faa825] mt-1 cursor-pointer max-sm:h-3 max-sm:mt-4'>
                  <div className='flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gray-600 w-[90%]'></div>
               </div>

               <label className='text-[#f57e16] text-xl mt-5 max-sm:text-4xl max-sm:mt-12'>Architecture</label>
               <div className='flex flex-start overflow-hidden w-full rounded-full h-1.5 bg-[#faa825] mt-1 cursor-pointer max-sm:h-3 max-sm:mt-4'>
                  <div className='flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gray-600 w-[94%]'></div>
               </div>

               <label className='text-[#f57e16] text-xl mt-5 max-sm:text-4xl max-sm:mt-12'>3D Design</label>
               <div className='flex flex-start overflow-hidden w-full rounded-full h-1.5 bg-[#faa825] mt-1 cursor-pointer max-sm:h-3 max-sm:mt-4'>
                  <div className='flex justify-center items-center h-full overflow-hidden break-all rounded-full bg-gray-600 w-[96%]'></div>
               </div>
           </div>
        </div>  

        <img src="/images/pic1.jpg" alt=""  className='w-[50%] h-150 ml-[5%] max-sm:w-[90%] max-sm:h-250 max-sm:mt-15'/>      
      
    </div>
  )
}
