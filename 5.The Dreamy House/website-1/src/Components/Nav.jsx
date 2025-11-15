import React from 'react'

export default function Nav() {
  return (
    <div className="w-[100%] flex bg-[#383530] h-[70px] px-15 justify-between fixed z-99 max-sm:h-35">
        <div className="left flex">
            <img src="/images/logo.png" alt="" className='w-14 h-14 mt-1 max-sm:h-30 max-sm:w-30 max-sm:mt-3'/>
            <div className="half ml-4">
                <p className='text-yellow-400 text-xl mt-1.5 tracking-tighter max-sm:text-5xl max-sm:mt-3'>DREAMY HOUSE</p>
                <h4 className='text-yellow-400 text-xl tracking-widest -mt-1 max-sm:text-6xl max-sm:mt-1'>TRADING</h4>
            </div>
        </div>
        <div className="mid w-150 mt-5 max-sm:hidden">
            <ul className='flex text-yellow-400 justify-between'>
                <li><a href="">Services & ShowCase</a></li>
                <li className='-ml-5'><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fcc600" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5"/></svg></a></li>
                <li><a href="">Latest Project</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">About Us</a></li>
            </ul>
        </div>
        <div className="right">
            <div className="box w-11.5 h-9 rounded-lg bg-[#ffffff] cursor-pointer border-0 mt-4 max-sm:w-25 max-sm:h-20 max-sm:mt-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='m-2 pt-1 max-sm:w-18 max-sm:h-18 max-sm:pl-3'><path fill="#000" d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 5.033a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2z"/></svg>
            </div>
        </div>

      
    </div>
  )
}
