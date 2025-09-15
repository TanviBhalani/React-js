import React from 'react'

export default function Clients() {
  return (
    <div className="px-5 sm:px-25 py-15 max-sm:overflow-x-hidden max-sm:w-full">
      {/* Header */}
      <div className="flex items-center" data-aos="zoom-in-left" data-aos-duration="900">
        <img src="/images/mini.png" alt="" className="w-10 sm:w-12" />
        <p className="font-medium text-lg sm:text-xl mt-2.5">TESTIMONIALS</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-3 gap-4 sm:gap-0">
        <h1 className="text-2xl sm:text-4xl font-medium sm:w-100">
          Proven Success Through Our Clients’ Words
        </h1>
        <button
          className="h-10 sm:h-12 w-full sm:w-50 rounded-4xl bg-[#acff1c] text-black font-medium text-lg sm:text-xl hover:animate-bounce transition cursor-pointer"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          View All Review
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row mt-8 gap-6 sm:gap-0 max-sm:w-full">
        {/* Reviews */}
        <div className="review flex flex-col gap-5 w-full max-sm:items-center">
          {/* Card 1 */}
          <div className="flex bg-[#e3e2e2] max-sm:w-[300px] sm:w-150 h-auto sm:h-40 rounded-xl p-4 sm:p-0 max-sm:flex-col max-sm:items-center" data-aos="fade-right" data-aos-duration="900" data-aos-delay="400">
            <div className="left bg-[#415eb5] rounded-full h-20 w-20 sm:h-28 sm:w-28 flex-shrink-0 m-2 sm:m-5 overflow-hidden max-sm:m-0">
              <img src="/images/test1.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="right flex-1 p-5 max-sm:text-center">
              <div className="flex justify-between max-sm:flex-col">
                <div className="flex flex-col">
                  <p className="text-lg sm:text-xl font-medium">Sarah M</p>
                  <p className="text-sm sm:text-base font-light -mt-1">E-commerce Owner</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-[45px] sm:h-[45px]" viewBox="0 0 32 32">
                  <path fill="#000" d="M12 15H6.11A9 9 0 0 1 10 8.86l1.79-1.2L10.69 6L8.9 7.2A11 11 0 0 0 4 16.35V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m14 0h-5.89A9 9 0 0 1 24 8.86l1.79-1.2L24.7 6l-1.8 1.2a11 11 0 0 0-4.9 9.15V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2" />
                </svg>
              </div>
              <p className="text-sm sm:text-lg text-gray-600 mt-2">SEOX transformed our online presence. We saw a 300% increase in website traffic within months!</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex bg-[url('/images/test-bg.jpg')] bg-cover max-sm:w-[300px] sm:w-150 h-auto sm:h-40 rounded-xl p-4 sm:p-0 ml-0 sm:ml-14 max-sm:flex-col max-sm:items-center" data-aos="fade-right" data-aos-duration="900" data-aos-delay="400">
            <div className="left bg-[#415eb5] rounded-full h-20 w-20 sm:h-28 sm:w-28 flex-shrink-0 m-2 sm:m-5 overflow-hidden ">
              <img src="/images/test2.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="right flex-1 p-5 max-sm:text-center">
              <div className="flex justify-between max-sm:flex-col">
                <div className="flex flex-col">
                  <p className="text-lg sm:text-xl font-medium text-white">John D</p>
                  <p className="text-sm sm:text-base font-light text-white -mt-1">Marketing Manager</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-[45px] sm:h-[45px]" viewBox="0 0 32 32">
                  <path fill="#fff" d="M12 15H6.11A9 9 0 0 1 10 8.86l1.79-1.2L10.69 6L8.9 7.2A11 11 0 0 0 4 16.35V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m14 0h-5.89A9 9 0 0 1 24 8.86l1.79-1.2L24.7 6l-1.8 1.2a11 11 0 0 0-4.9 9.15V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2" />
                </svg>
              </div>
              <p className="text-sm sm:text-lg text-white mt-2">Team is proactive, professional, and results-driven. Highly recommend their services!</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex bg-[#e3e2e2] max-sm:w-[300px] sm:w-150 h-auto sm:h-40 rounded-xl p-4 sm:p-0 max-sm:flex-col max-sm:items-center" data-aos="fade-right" data-aos-duration="900" data-aos-delay="400">
            <div className="left bg-[#415eb5] rounded-full h-20 w-20 sm:h-28 sm:w-28 flex-shrink-0 m-2 sm:m-5 overflow-hidden">
              <img src="/images/test3.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="right flex-1 p-5 max-sm:text-center">
              <div className="flex justify-between max-sm:flex-col">
                <div className="flex flex-col">
                  <p className="text-lg sm:text-xl font-medium">Alex Hales</p>
                  <p className="text-sm sm:text-base font-light -mt-1">E-commerce Owner</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-[45px] sm:h-[45px]" viewBox="0 0 32 32">
                  <path fill="#000" d="M12 15H6.11A9 9 0 0 1 10 8.86l1.79-1.2L10.69 6L8.9 7.2A11 11 0 0 0 4 16.35V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m14 0h-5.89A9 9 0 0 1 24 8.86l1.79-1.2L24.7 6l-1.8 1.2a11 11 0 0 0-4.9 9.15V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2" />
                </svg>
              </div>
              <p className="text-sm sm:text-lg text-gray-600 mt-2">Thanks to SEOX, our revenue doubled last year. They’re truly the best in the industry.</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="rightimg hidden sm:flex flex-col items-center justify-center ml-10">
          <img
            src="/images/shape1.png"
            alt=""
            className="max-sm:w-28 max-sm:h-28 w-40 h-40 mt-70 -ml-130 animate-bounce [animation-duration:5s]"
          />
          <img src="/images/testrg.png" alt="" className="ml-10 sm:-mt-135 w-250" />
        </div>
      </div>
    </div>
  )
}

