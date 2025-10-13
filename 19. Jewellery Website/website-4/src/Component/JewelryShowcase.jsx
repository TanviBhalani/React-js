import React from "react";

const jewelryItems = [
  {
    image: "/images/sub-banner-1.webp",
    category: "DIAMOND RING",
    title: "Yellow Gold & Diamond Ring",
    link: "#",
  },
  {
    image: "/images/sub-banner-22.jpg",
    category: "DIAMOND BRACELETS",
    title: "Infinity Diamond Bracelet",
    link: "#",
  },
  {
    image: "/images/sub-banner-3.webp",
    category: "DIAMOND PENDANT",
    title: "Teardrop Diamond Pendant",
    link: "#",
  },
];

export default function JewelryShowcase() {
  return (
    <div className="w-full bg-white py-12 h-160 max-sm:w-full max-sm:mx-0 max-sm:h-195 max-sm:-mt-10 max-sm:flex max-sm:justify-center">
      {/* 💎 Responsive Grid */}
      <div className="max-w-8xl grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 mx-15 h-150 max-sm:mx-5 max-sm:w-70 max-sm:grid-cols-1 max-sm:h-auto max-sm:gap-5">
        
        {/* 🧩 Left Column (2 stacked small cards) */}
        <div className="grid grid-rows-2 gap-75 max-sm:grid-rows-none max-sm:gap-6">
          {jewelryItems.slice(1).map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group w-150 h-70 max-sm:w-[100%]  max-sm:h-[220px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-70 object-cover transition-transform duration-500 group-hover:scale-105 max-sm:h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-6 bg-gradient-to-r from-white/0 via-white/10 to-transparent">
                <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                  {item.category}
                </p>
                <h3 className="text-3xl font-semibold text-gray-900 mt-1 w-80 max-sm:text-xl max-sm:w-full">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="mt-5 text-sm font-semibold text-gray-800 underline underline-offset-4 hover:text-gray-600"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 🖼️ Right Column (Large image spanning 2 rows) */}
        <div className="relative overflow-hidden rounded-lg row-span-2 group w-191 h-145 ml-40 max-sm:w-full max-sm:h-[250px] max-sm:ml-0">
          <img
            src={jewelryItems[0].image}
            alt={jewelryItems[0].title}
            className="w-[100%] h-full bg-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-6 bg-gradient-to-l from-white/0 via-white/10 to-transparent items-center ml-90 -mt-20 max-sm:ml-26 max-sm:-mt-15">
            <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">
              {jewelryItems[0].category}
            </p>
            <h3 className="text-4xl font-semibold text-gray-900 mt-1 text-center max-sm:text-2xl">
              {jewelryItems[0].title}
            </h3>
            <a
              href={jewelryItems[0].link}
              className="mt-5 text-sm font-semibold text-gray-800 underline underline-offset-4 hover:text-gray-600 max-sm:ml-12"
            >
              SHOP NOW
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}


