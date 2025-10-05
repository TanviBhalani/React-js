import React from 'react'

export default function Navbar({ dark, setDark }) {
  return (
    <div>
      
      <>
        <div className="flex bg-[#ffffff] w-full h-19 fixed max-sm:w-162 max-sm:-mt-19 max-sm:border-b-1 max-sm:border-dashed max-sm:border-0">
          <div className="left flex max-sm:hidden">
            <img src="/images/logo-dis.jpg" alt="" className='w-30 m-3' />
            <div className="h-8 w-0.25 mt-5 bg-gray-400"></div>
          </div>
          <div className="mid py-3.5 px-3 flex max-sm:py-2">
            <div className="left">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='mt-2.5 max-sm:w-10 max-sm:h-10'><g fill="none" stroke="#6c4ee6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" /></g></svg>
            </div>
            <div className="right ml-2 max-sm:w-40">
              <h4 className='font-medium max-sm:text-2xl'>Jivraj Park</h4>
              <p className='text-sm font-medium text-gray-500 max-sm:text-xl'>Rajkot</p>
            </div>
          </div>
          <ul className='py-5 mx-30 flex w-110 justify-between max-sm:hidden'>
            <li className='text-[#231269] bg-[#ebe6ff] px-3 py-1 rounded-full font-medium cursor-pointer'>For you</li>
            <li className='text-gray-500 font-medium mt-1.5 cursor-pointer'>Dining</li>
            <li className='text-gray-500 font-medium mt-1.5 cursor-pointer'>Events</li>
            <li className='text-gray-500 font-medium mt-1.5 cursor-pointer'>Movies</li>
            <li className='text-gray-500 font-medium mt-1.5 cursor-pointer'>Activities</li>
          </ul>
          <div className="right flex py-3 px-3 -mt-1 ml-20 max-sm:py-1">
            <div className="flex  border-2 rounded-xl border-gray-300 mt-2.5 max-sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='m-2'><path fill="none" stroke="#6c4ee6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" /></svg>
              <input type="text" placeholder='Search for events,movies and restaurants' className='w-80 outline-none' />
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full m-3 cursor-pointer max-sm:ml-60 max-sm:w-12 max-sm:h-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512" className='m-2 max-sm:w-8 max-sm:h-8'><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96" /><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z" /></svg>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="flex  border-2 rounded-xl border-gray-300 max-sm:mt-19 sm:hidden max-sm:w-120 max-sm:mx-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='m-2'><path fill="none" stroke="#6c4ee6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" /></svg>
          <input type="text" placeholder='Search for events,movies and restaurants' className='w-90 outline-none' />
        </div>
      </>

    </div>


  )
}

{/* <button onClick={()=>setDark(!dark)}>Light/Dark</button> */}
      {/* <div style={{backgroundColor : dark ? "black" : "white"}} className="flex dark:bg-[#ffffff] w-full h-19 fixed"> */}