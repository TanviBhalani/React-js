import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "/images/banner-1.jpg",
    title: "Woman In Golden Rings And Necklaces",
    subtitle: "Discover timeless beauty in every piece",
  },
  {
    url: "/images/banner-2.jpg",
    title: "Rubans Modern Minimal Ring Hoop Earrings",
    subtitle: "Handcrafted designs that sparkle with love",
  },
  
];

export default function Carousel1() {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full sm:h-64 max-sm:mt-10  max-sm:h-120 md:h-80 xl:h-[500px] overflow-hidden ">
      {/* Slides Wrapper */}
      <div
        ref={slideRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative "
          >
            {/* Image */}
            <img
              src={img.url}
              alt={img.title}
              className=" w-full h-auto bg-cover bg-no-repeat max-sm:h-35"
            />

            {/* Overlay text */}
            <div className="absolute inset-0 z-10  mt-50 ml-20 max-sm:ml-10 text-black px-4 max-sm:mt-40">
              <p className="text-lg text-gray-500 max-sm:text-sm">This week's highlight</p>
              <h2 className="text-3xl md:text-5xl font-semibold drop-shadow-lg w-150 max-sm:w-auto mt-3 mb-7">
                {img.title}
              </h2>
              <p className="text-sm md:text-lg max-w-lg drop-shadow-md text-gray-500">
                {img.subtitle}
              </p>
              <button className="bg-[#cf967e] text-white py-2 px-5 mt-4 cursor-pointer">Shop now</button>

            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full transition z-20"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full transition z-20"
      >
        <ChevronRight size={28} className="text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-[#cf967e]" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
