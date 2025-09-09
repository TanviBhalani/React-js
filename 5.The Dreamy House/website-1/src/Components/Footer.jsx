import React from 'react'

export default function Footer() {
  return (
    <div className='w-full h-100 mt-15 bg-black  py-10 px-15 max-sm:w-[1053px] max-sm:h-215 '>
        <div className='flex max-sm:flex-wrap'>
       <div className="part1 w-[28%] max-sm:w-[88%] ">
          <div className="left flex">
            <img src="/images/logo.png" alt="" className='w-14 h-14 mt-1 max-sm:w-20 max-sm:h-20'/>
            <div className="half ml-4">
                <p className='text-yellow-400 text-xl mt-1.5 tracking-tighter max-sm:text-3xl max-sm:mt-3'>DREAMY HOUSE</p>
                <h4 className='text-yellow-400 text-xl tracking-widest -mt-1 max-sm:text-3xl'>TRADING</h4>
            </div>   
        </div>
        <p className='text-white text-lg mt-5 max-sm:text-4xl max-sm:leading-14 max-sm:mb-20'>We are passionate about creating exceptional interior spaces that inspire, delight, and enhance the lives of our clients.</p>
       </div>

      <div className="part2 ml-20 max-sm:ml-10">
        <ul className='text-gray-400 text-xl max-sm:text-3xl'>COMPANY
            <li className='text-white text-lg mt-6 font-light max-sm:text-3xl max-sm:mb-5'>About Us</li>
            <li className='text-white text-lg mt-2 font-light max-sm:text-3xl max-sm:mb-5'>Our Team</li>
            <li className='text-white text-lg mt-2 font-light max-sm:text-3xl max-sm:mb-5'>Projects</li>
            <li className='text-white text-lg mt-2 font-light max-sm:text-3xl max-sm:mb-5'>Contact</li>
        </ul>
      </div>

      <div className="part2 ml-55 max-sm:ml-35">
        <ul className='text-gray-400 text-xl max-sm:text-3xl'>Social Media
            <li className='text-white text-lg mt-6 font-light max-sm:text-3xl max-sm:mb-5'>Facebook</li>
            <li className='text-white text-lg mt-2 font-light max-sm:text-3xl max-sm:mb-5'>Messenger</li>
            <li className='text-white text-lg mt-2 font-light max-sm:text-3xl max-sm:mb-5'>Instagram</li>
            <li className='text-white text-lg mt-2 font-light max-sm:text-3xl max-sm:mb-5'>Youtube</li>
            <li className='text-white text-lg mt-2 font-light max-sm:text-3xl max-sm:mb-5'>WhatsApp</li>
        </ul>
      </div>

      <div className="part2 ml-55 max-sm:ml-35">
        <ul className='text-gray-400 text-xl max-sm:text-3xl'>Our Services
            <li className='text-white text-lg mt-6 font-light max-sm:text-3xl max-sm:mb-5'>SPC & HSPC Flooring</li>
            <li className='text-white text-lg mt-2 font-light max-sm:text-3xl max-sm:mb-5'>TV Wall Decorations</li>
            <li className='text-white text-lg mt-2 font-light max-sm:text-3xl max-sm:mb-5'>Home Decoration</li>
            <li className='text-white text-lg mt-2 font-light max-sm:text-3xl max-sm:mb-5'>Wall Cladding</li>
            <li className='text-white text-lg mt-2 font-light max-sm:text-3xl max-sm:mb-5'>PVC Marvel Sheets</li>
        </ul>
      </div>

    </div>

    <div className='flex flex-col items-center justify-center border-t border-gray-400 py-4 mt-15'>
        <p className='text-white max-sm:text-2xl'>© 2025 Dreamy House Trading. All Rights Reserved.</p>
    </div>

    <div className="fixed bottom-10 right-6 w-full">
        <div className="absolute bottom-0 right-0">
            <div className="group">
              
                <button className='relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-sm:w-[108px] h-12 max-sm:h-[108px] text-sm text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full bg-yellow-500'>
                   <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                   <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  aria-hidden="true"
  data-slot="icon"
  className="h-5 w-5 transition-transform group-hover:rotate-45 max-sm:w-[50px] max-sm:h-[50px]"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 4.5v15m7.5-7.5h-15"
  />
</svg>

                       {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className='max-sm:w-[20px] max-sm:h-[20px]' stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-5 w-5 transition-transform group-hover:rotate-45"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> */}
                   </span>
                </button>
            </div>
        </div>
    </div>
   </div>
  )
}

