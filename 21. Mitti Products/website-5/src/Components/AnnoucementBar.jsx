import React from "react";
import "../index.css"; // make sure index.css has the animation

export default function AnnouncementBar() {
  return (
    <div className="bg-[#6e623a] text-white py-2 overflow-hidden relative">
      {/* Wrapper for smooth infinite scroll */}
      <div className="flex whitespace-nowrap animate-marquee cursor-pointer">
        {/* Duplicate content for continuous looping */}
        <div className="flex">
          <span className="mx-5 mr-20">FREE DELIVERY TO HOME From $100.00</span>
          <span className="mx-0">•</span>
          <span className="mx-5 mr-20">Instant Discount Code 50% Off Mitti50</span>
          <span className="mx-0">•</span>
          <span className="mx-5 mr-20">Limited Time Offer! Hurry Up!</span>
          <span className="mx-0">•</span>
        </div>

        {/* duplicate content again for seamless loop */}
        <div className="flex cursor-pointer">
          <span className="mx-5 mr-20">FREE DELIVERY TO HOME From $100.00</span>
          <span className="mx-0">•</span>
          <span className="mx-5 mr-20">Instant Discount Code 50% Off Mitti50</span>
          <span className="mx-0">•</span>
          <span className="mx-5 mr-20">Limited Time Offer! Hurry Up!</span>
          <span className="mx-0">•</span>
        </div>
      </div>
    </div>
  );
}

