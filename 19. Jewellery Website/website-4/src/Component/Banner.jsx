import React from "react";

export default function BraceletBanner() {
  return (
    <div className="relative max-sm:mx-auto h-85 bg-[url('/images/off-1.webp')] max-sm:h-45 bg-[#f5f5f5] mx-20 mb-20 bg-contain bg-no-repeat shadow-md text-left text-black flex max-sm:p-3 justify-center max-sm:w-[290px]  p-6 sm:p-12 overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 h-85"></div>

      {/* Text Content */}
      <div className="relative max-sm:w-[290px] max-sm:-py-4 w-310">
        <p className="text-sm tracking-widest text-gray-600 font-medium mb-2 uppercase max-sm:text-[0.5rem]">
          Diamond Bracelets
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-snug mb-4 max-sm:text-lg">
          Rose Gold With Diamond <br /> Hotsell Bracelet
        </h2>
        <button className="text-sm font-semibold border-b-2 border-black hover:text-gray-600">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}


