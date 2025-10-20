import React from "react";
import "../index.css";

const messages = [
  "Earthy Essentials for Every Home",
  "Pure, Simple, and Sustainable",
  "Bringing Nature to Your Doorstep",
];

export default function AnnouncementBar() {
  return (
 
       <div className="relative  overflow-hidden  py-20 w-full bg-[#f5f3eb] h-40">
      {/* Top ribbon */}
      <div className="absolute top-0 -left-1 w-full overflow-hidden -rotate-[5deg] translate-y-[155%] max-sm:-rotate-[12deg]">
        <Marquee
          messages={messages}
          bgColor="bg-[#ebe5d5]"
          textColor="text-[#4b4326]"
          direction="left"
          speed="slow"
        />
      </div>

      {/* Bottom ribbon */}
      <div className="absolute bottom-0 -left-0.5 w-full overflow-hidden rotate-[4deg] translate-y-[-110%] max-sm:rotate-[8deg]">
        <Marquee
          messages={messages}
          bgColor="bg-[#5b5028]"
          textColor="text-[#f8f5ee]"
          direction="right"
          speed="fast"
        />
      </div>
    </div>
  );
}

function Marquee({ messages, bgColor, textColor, direction, speed }) {
  const marqueeClass =
    direction === "left"
      ? speed === "slow"
        ? "marquee-left-slow"
        : "marquee-left-fast"
      : speed === "slow"
      ? "marquee-right-slow"
      : "marquee-right-fast";

  return (
    <div className={`flex whitespace-nowrap ${bgColor} py-2`}>
      <div className={`flex ${marqueeClass}`}>
        {[...Array(2)].map((_, i) =>
          messages.map((msg, idx) => (
            <span
              key={`${i}-${idx}`}
              className={`mx-8 ${textColor} text-lg md:text-xl font-serif`}
            >
              {msg} •
            </span>
          ))
        )}
      </div>
    </div>
  );
}
