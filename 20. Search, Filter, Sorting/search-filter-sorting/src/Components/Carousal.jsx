import React from 'react'

import 'flowbite';

export default function Carousal() {
  return (
    <div className="mt-0">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-46 overflow-hidden md:h-140">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/pic6.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/pic2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/pic3.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/pic4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/images/pic5.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to="2"></button>
          <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to="3"></button>
          <button type="button" className="w-3 h-3 rounded-full" data-carousel-slide-to="4"></button>
        </div>
        {/* Navigation */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}
