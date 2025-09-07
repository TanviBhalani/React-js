import React from 'react'

export default function Page5() {
  return (
    <div>
        <div className="flex flex-col items-center pt-18 pb-15 bg-[#f5f5f5] max-sm:w-[1051px]">
           <h3 className="text-[#f57e16] text-3xl font-medium max-sm:text-5xl">Why Choose Us</h3>
           <div className="line w-[12.5%] h-1 mt-1 rounded-full bg-[#faa825] max-sm:w-70 max-sm:h-1.5 max-sm:mt-3"></div>
           <h1 className="text-5xl mt-4 font-medium max-sm:text-6xl max-sm: text-center max-sm:px-20">Why Choose Dreamy House Trading</h1>

        </div>

        <div className="quality h-20 bg-[#ffffff] flex max-sm:h-370 max-sm:flex-col max-sm:w-[1050px]">
            <div className="left m-15 w-[40%] max-sm:w-[90%]">
                <div className="one flex m-2 max-sm:mb-20">
                    <div className="w-18 h-18 shadow-2xl rounded-full flex items-center justify-center max-sm:w-[150px] max-sm:h-[150px] max-sm:mt-5">
                        <div className="w-13 h-13 bg-[#fac02d] rounded-full py-3 font-medium px-5 text-xl max-sm:w-[100px] max-sm:h-[100px] max-sm:text-5xl max-sm:py-6 max-sm:px-10">1</div>
                    </div>
                    <div className="m-4 max-sm:ml-10 max-sm:w-170">
                        <p className='text-xl font-medium max-sm:text-5xl max-sm:font-normal'>Premium Quality Materials</p>
                        <p className='text-gray-500 max-sm:text-5xl max-sm:mt-4 max-sm:font-light'>We source only the finest materials for long-lasting beauty</p>
                    </div>
                </div>
                <div className="one flex m-2 max-sm:mb-20">
                    <div className="w-18 h-18 shadow-2xl rounded-full flex items-center justify-center max-sm:w-[150px] max-sm:h-[150px] max-sm:mt-5">
                        <div className="w-13 h-13 bg-[#fac02d] rounded-full py-3 font-medium px-5 text-xl max-sm:w-[100px] max-sm:h-[100px] max-sm:text-5xl max-sm:py-6 max-sm:px-10">2</div>
                    </div>
                    <div className="m-4 max-sm:ml-10 max-sm:w-170">
                        <p className='text-xl font-medium max-sm:text-5xl max-sm:font-normal'>Innovative Designs</p>
                        <p className='text-gray-500 max-sm:text-5xl max-sm:mt-4 max-sm:font-light'>Modern, elegant, and customized solutions for every style</p>
                    </div>
                </div>
                <div className="one flex m-2 max-sm:mb-20">
                    <div className="w-18 h-18 shadow-2xl rounded-full flex items-center justify-center max-sm:w-[150px] max-sm:h-[150px] max-sm:mt-5">
                        <div className="w-13 h-13 bg-[#fac02d] rounded-full py-3 font-medium px-5 text-xl max-sm:w-[100px] max-sm:h-[100px] max-sm:text-5xl max-sm:py-6 max-sm:px-10">3</div>
                    </div>
                    <div className="m-4 max-sm:ml-10 max-sm:w-170">
                        <p className='text-xl font-medium max-sm:text-5xl max-sm:font-normal'>Professional Installation</p>
                        <p className='text-gray-500 max-sm:text-5xl max-sm:mt-4 max-sm:font-light'>Skilled experts ensuring seamless application.</p>
                    </div>
                </div>
                <div className="one flex m-2 max-sm:mb-20">
                    <div className="w-18 h-18 shadow-2xl rounded-full flex items-center justify-center max-sm:w-[150px] max-sm:h-[150px] max-sm:mt-5">
                        <div className="w-13 h-13 bg-[#fac02d] rounded-full py-3 font-medium px-5 text-xl max-sm:w-[100px] max-sm:h-[100px] max-sm:text-5xl max-sm:py-6 max-sm:px-10">4</div>
                    </div>
                    <div className="m-4 max-sm:ml-10 max-sm:w-170">
                        <p className='text-xl font-medium max-sm:text-5xl max-sm:font-normal'>Customer Satisfaction</p>
                        <p className='text-gray-500 max-sm:text-5xl max-sm:mt-4 max-sm:font-light'>Your vision, our priority</p>
                    </div>
                </div>

            </div>
            <div className="right flex">
                <div className="w-90 h-85 shadow-xl rounded-lg mt-20 border-1 border-gray-200 max-sm:w-120 max-sm:h-155 max-sm:ml-10 max-sm:rounded-2xl">
                    <img src="/images/in1.jpg" alt="" className="h-84 w-full p-5 rounded-tl-[70px] rounded-br-[70px] rounded-tr-[30px] rounded-bl-[30px] max-sm:h-[100%] max-sm:bg-contain"/>
                </div>
                <div className="w-90 h-85 shadow-2xl rounded-lg mt-20 border-1 border-gray-200 ml-5 max-sm:w-115 max-sm:h-155">
                    <img src="/images/in2.jpg" alt="" className='h-35 w-80 m-5  rounded-tl-[50px] rounded-b-lg rounded-tr-lg max-sm:h-70 max-sm:w-105' />
                    <img src="/images/in3.jpg" alt="" className='h-35 w-80 m-5  rounded-br-[50px] rounded-t-lg  rounded-bl-lg max-sm:h-70 max-sm:w-105' />
                </div>
            </div>
        </div>
  
    </div>
  )
}