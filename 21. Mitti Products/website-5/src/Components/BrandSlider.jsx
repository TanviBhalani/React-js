import React from "react";

export default function BrandSlider() {
  const logos = [
    "/images/l1.webp",
    "/images/l2.webp",
    "/images/l3.webp",
    "/images/l4.webp",
    "/images/l5.webp",
    "/images/l6.webp",
    "/images/l7.webp",
    "/images/l8.webp",
    "/images/l9.webp",
    "/images/l10.webp",
  ];

  const texts1 = [
    "Shop Natural, Live Better",
    "Earth’s Best at Your Fingertips",
    "Sustainable Elegance",
    "Crafted with Love",
    "Eco-Luxury Living",
  ];

  const texts2 = [
    "Delivered to Your Doorstep",
    "Pure & Simple",
    "Tradition Meets Modern Serenity",
    "Nature in Every Detail",
    "Mindfully Made",
  ];

  return (
    <div className="bg-[#f5f3eb] py-10 overflow-hidden">
      <div className="space-y-12">
        {/* Row 1 — Serif Style (Right ➜ Left) */}
        <div className="slider overflow-hidden">
          <div className="slide-track-left flex space-x-20 text-[#5a4d32] text-[3.2rem] font-serif tracking-wide max-sm:text-2xl">
            {texts1.concat(texts1, texts1).map((text, i) => (
              <span key={`t1-${i}`} className="whitespace-nowrap">
                {text} ·
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — Sans Style (Left ➜ Right) */}
        <div className="slider overflow-hidden">
          <div className="slide-track-right flex space-x-16 text-[#3b3b3b] text-3xl font-sans font-medium tracking-wider max-sm:text-base">
            {texts2.concat(texts2, texts2).map((text, i) => (
              <span key={`t2-${i}`} className="whitespace-nowrap uppercase">
                {text} ·
              </span>
            ))}
          </div>
        </div>

        {/* Row 3 — Logos */}
        <div className="slider overflow-hidden">
          <div className="slide-track-left flex space-x-16 items-center">
            {logos.concat(logos, logos).map((src, i) => (
              <img
                key={`r3-${i}`}
                src={src}
                alt="brand"
                className="w-40 max-sm:w-24 object-contain opacity-80"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
