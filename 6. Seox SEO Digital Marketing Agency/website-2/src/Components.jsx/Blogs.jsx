import React from "react";

export default function Blogs() {
  return (
    <div className="px-4 sm:px-25 py-10 sm:py-15 bg-[#f5f5f5] ">
      {/* Header */}
      <div className="flex items-center">
        <img src="/images/mini.png" alt="" className="w-10 sm:w-12" />
        <p className="font-medium text-lg sm:text-xl mt-2 sm:mt-2.5 ml-2" data-aos="zoom-in-left" data-aos-duration="900">OUR BLOG</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between mt-3 space-y-3 sm:space-y-0">
        <h1 className="text-2xl sm:text-4xl font-medium sm:w-150 w-full">Insights & Updates from the World of SEO Marketing Agency</h1>
        <button className="h-10 sm:h-12 w-full sm:w-65 sm:ml-55 rounded-3xl bg-[#acff1c] text-black font-medium text-lg sm:text-xl hover:animate-bounce transition cursor-pointer" data-aos="fade-left" data-aos-duration="900">Browse All Categories</button>
      </div>

      {/* First Blog */}
      <div className="flex flex-col sm:flex-row mt-10 sm:mt-15 items-center sm:items-start" data-aos="fade-up" data-aos-duration="1100">
        <img src="/images/blog1.png" alt="" className="w-[300px] sm:w-160 h-75 max-sm:h-full rounded-xl"/>

        <div className="first bg-[#ffffff] max-sm:h-full w-[300px] h-75 sm:w-160 rounded-2xl sm:ml-5 p-5 sm:p-7 mt-5 sm:mt-0">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center text-sm sm:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/></svg>
            <p className="font-medium ml-1">12/12/2024</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="ml-5"><g fill="#000" fillRule="evenodd" clipRule="evenodd"> <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" /><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" /></g></svg>
            <p className="font-medium ml-1">John Doe</p>
          </div>

          {/* Title */}
          <p className="font-bold text-lg sm:text-xl mt-4 hover:text-yellow-700 cursor-pointer leading-snug">Transform Your Online Presence with Expert SEO Strategies – DriveTraffic, Conversions & Business Growth with SEOX.</p>

          {/* Description */}
          <p className="text-base sm:text-xl mt-4 text-gray-600 leading-6">The digital age, simply having a website isn't enough. To stand outin a sea of competition, you need strategic search engineoptimization (SEO) that positions your brand.</p>

          {/* Read More */}
          <div className="flex mt-5 cursor-pointer">
            <p className="font-bold text-md">Read More</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mt-1 ml-2"><path fill="#000" d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38"/></svg>
          </div>
        </div>
      </div>

      {/* Second Blog */}
      <div className="flex flex-col sm:flex-row mt-5 max-sm:mt-15 items-center sm:items-start" data-aos="fade-up" data-aos-duration="1100">

        <div className="first bg-[#ffffff] max-sm:h-full w-[300px] h-75 sm:w-160 rounded-2xl  p-5 sm:p-7 mt-5 sm:mt-0">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center text-sm sm:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/></svg>
            <p className="font-medium ml-1">12/12/2024</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="ml-5"><g fill="#000" fillRule="evenodd" clipRule="evenodd"> <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" /><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" /></g></svg>
            <p className="font-medium ml-1">John Doe</p>
          </div>

          {/* Title */}
          <p className="font-bold text-lg sm:text-xl mt-4 hover:text-yellow-700 cursor-pointer leading-snug">Maximize Your Business Success with Tailored SEO Solutions – Partner with SEOX to Optimize Your Digital Growth.</p>

          {/* Description */}
          <p className="text-base sm:text-xl mt-4 text-gray-600 leading-6">Are you ready to unlock the full potential of your business online? With SEOX, achieving top rankings on search engines has never been easier, We combine innovative SEO techniques.</p>

          {/* Read More */}
          <div className="flex mt-5 cursor-pointer">
            <p className="font-bold text-md">Read More</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mt-1 ml-2"><path fill="#000" d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38"/></svg>
          </div>
        </div>

        <img src="/images/blog1.png" alt="" className="w-[300px] sm:w-160 h-75 max-sm:h-full sm:ml-5 rounded-xl max-sm: mt-5 sm:mt-0"/>

      </div>
      
    </div>
  );
}
