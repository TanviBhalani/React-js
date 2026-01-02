import React, { useState } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";


export default function Footer() {

    const [hoveredCard, setHoveredCard] = useState(null);
  
  
  const industries = [
  {
    id: "food-service",
    title: "Food Service",
    image: "/images/service.jpg",
  },
  {
    id: "food-processing",
    title: "Food Processing",
    image: "/images/processing.jpg",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    image: "/images/a5.jpg",
  },
];
  return (
    <>

      <section className="relative bg-[#0f2a1f] text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 md:ml-25 py-20 sm:py-24 md:py-32 relative">

    {/* TOP CONTENT */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
      <div>
        <p
          className="text-xs sm:text-sm mb-4 sm:mb-6"
          data-aos="fade-down"
        >
          Custom Solutions
        </p>

        <h2
          className="text-3xl sm:text-4xl md:text-[50px] leading-tight font-light w-full md:w-203"
          data-aos="fade-right"
        >
          Brands that thrive invest in custom-designed packaging. Let us help
          bring your vision to life.
        </h2>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center md:block mt-10 md:mt-0">
        <img
          src="/images/b4.png"
          alt="Custom packaging"
          className="
            relative md:absolute
            top-auto md:top-1/2
            md:-translate-y-1/2
            w-102 sm:w-80 md:w-205
            opacity-80
            ml-0 md:ml-70 max-sm:-my-30
          "
        />
      </div>
    </div>
  </div>

  {/* MOVING STRIP */}
  <div className="relative border-t border-b border-white/40 overflow-hidden h-16 sm:h-20 md:h-22.5">
    <div className="absolute inset-0 flex items-center whitespace-nowrap animate-marquee">
      <div className="flex items-center gap-6 sm:gap-10 md:gap-16 text-lg sm:text-xl md:text-2xl px-6 sm:px-10">
        <span>Not sure what's possible? Get in touch to find out.</span>
        <span className="text-2xl sm:text-3xl md:text-4xl">↗</span>
        <span>Not sure what's possible? Get in touch to find out.</span>
        <span className="text-2xl sm:text-3xl md:text-4xl">↗</span>
        <span>Not sure what's possible? Get in touch to find out.</span>
      </div>
    </div>
  </div>

  {/* BOTTOM SPACE */}
  <div className="h-12 sm:h-16 md:h-20"></div>

  {/* ANIMATION */}
  <style>
    {`
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-marquee {
        animation: marquee 18s linear infinite;
      }
    `}
  </style>
</section>




      <section className="bg-[#ded9c4] px-6 sm:px-10 md:px-20 lg:px-32 py-12 sm:py-16 md:py-20 relative">

  {/* Heading */}
  <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-10 mb-12 sm:mb-16 md:mb-24">
    <h2
      className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1c2b1f]"
      data-aos="fade-down"
    >
      Innovated for Industry Leaders.
    </h2>

    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer border border-[#1c2b1f] rounded-xl flex items-center justify-center text-2xl sm:text-4xl"
    >
      ↑
    </button>
  </div>

  {/* Main Grid */}
  <div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 items-end"
    data-aos="fade-down"
    data-aos-delay="300"
  >

    {/* Logo */}
    <div className="flex justify-center">
      <img src="/images/logo2.svg" alt="Logo" className="w-40 sm:w-52 md:w-68" />
    </div>

    {/* Industry Cards */}
    {industries.map((item) => (
      <div
        key={item.id}
        onMouseEnter={() => setHoveredCard(item.id)}
        onMouseLeave={() => setHoveredCard(null)}
        className="relative h-52 sm:h-60 md:h-65 rounded-3xl hover:rounded-7xl hover:border-0 border border-[#1c2b1f] overflow-hidden flex items-center justify-center transition-all duration-600 cursor-pointer"
      >
        {hoveredCard === item.id ? (
          <>
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <span className="relative text-white text-lg sm:text-xl font-medium">
              {item.title}
            </span>
          </>
        ) : (
          <span className="text-lg sm:text-xl text-[#1c2b1f]">
            {item.title}
          </span>
        )}
      </div>
    ))}
  </div>

  {/* Footer Bar */}
  <div
    className="mt-12 sm:mt-16 md:mt-20 border border-[#1c2b1f] rounded-xl px-4 sm:px-6 py-4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start md:items-center"
    data-aos="fade-down"
    data-aos-delay="300"
  >
    <span className="text-xs sm:text-sm text-[#1c2b1f]">
      © Top Tech Packaging 2025. All Rights Reserved
    </span>

    <div className="flex gap-4 text-[#1c2b1f]">
      <FaFacebookF />
      <FaInstagram />
      <FaLinkedinIn />
    </div>

    <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-[#1c2b1f]">
      <a href="#">Contact Us</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
    </div>
  </div>

  {/* WhatsApp Floating */}
  <a
    href="#"
    className="fixed z-10 bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1c2b1f] flex items-center justify-center text-white text-lg sm:text-xl"
  >
    <FaWhatsapp />
  </a>

</section>

      
    </>
  )
}
