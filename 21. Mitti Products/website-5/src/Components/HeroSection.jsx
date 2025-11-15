import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[#FDFBF7] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-10">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-serif font-medium text-[#333333] mb-6 leading-snug">
          The Finest Art For The <br /> Finest Furniture
        </h1>
        <p className="text-[#787774] text-base sm:text-lg leading-relaxed mb-8">
          Watch our latest videos showcasing our top furniture picks, design tips, and
          home decor inspiration. Get a closer look at our products and see how they
          can elevate your space.
        </p>
        <a href="#">
             <div className="flex my-4 justify-between border-b-1 w-38 max-sm:justify-center max-sm:my-2">
                <p className="text-xl text-[#333333] font-serif mb-1 cursor-pointer max-sm:text-base">Discover More ↗</p>
            </div>
         </a>
          <img src="/images/hero1.webp" alt="" className="rounded-[50%] mt-10" />
      </div>
     

      {/* Right Image */}
      <div className="relative lg:w-1/2 w-full flex justify-center ml-20 max-sm:ml-0">
        <div className="relative rounded-[50%] overflow-hidden w-[300px] sm:w-[400px] lg:w-[500px] aspect-[4/5]">
          <img
            src="/images/hero2.webp"
            alt="Decor Vase"
            className="object-cover w-full h-full"
          />
          {/* Play Button */}
          <button className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#6D6149] text-white text-lg italic rounded-full px-8 py-4 shadow-md hover:bg-[#5c523c] transition">
            Play <br /> Video
          </button>
        </div>
      </div>
    </section>
  );
}
