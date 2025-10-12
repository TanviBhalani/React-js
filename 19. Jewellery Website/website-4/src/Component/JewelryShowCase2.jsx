// import React from "react";

// const items = [
//   {
//     id: 1,
//     subtitle: "Stylish Necklace",
//     title: "Women's Rose Gold Necklace",
//     button: "Shop Now",
//     image: "/images/cms-banner-1.webp", // ✅ Place in 'public' folder
//   },
//   {
//     id: 2,
//     subtitle: "Best Wedding Ring",
//     title: "Rose Gold Ring For Women",
//     button: "Shop Now",
//     image: "/images/cms-banner-2.webp",
//   },
// ];

// export default function JewelryShowCase2() {
//   return (
//     <div className=" py-10 px-8 flex  justify-center gap-8">
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className="relative group overflow-hidden w-full max-w-2xl rounded-md shadow-md"
//         >
//           {/* Image */}
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-[350px] object-cover transform transition-transform duration-700 group-hover:scale-110"
//           />

//           {/* Overlay (text area) */}
//           <div className="absolute inset-0 flex flex-col justify-center px-10  text-left">
//             <p className="text-sm uppercase tracking-widest text-gray-800">
//               {item.subtitle}
//             </p>
//             <h2 className="text-3xl w-75 font-semibold text-gray-900 my-3 max-w-[70%]">
//               {item.title}
//             </h2>
//             <button className="bg-[#cf967e] text-white uppercase text-sm px-6 py-2 mt-3  w-fit hover:bg-gray-800 transition">
//               {item.button}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React from "react";

const items = [
  {
    id: 1,
    subtitle: "Stylish Necklace",
    title: "Women's Rose Gold Necklace",
    button: "Shop Now",
    image: "/images/cms-banner-1.webp", // ✅ Place in 'public' folder
  },
  {
    id: 2,
    subtitle: "Best Wedding Ring",
    title: "Rose Gold Ring For Women",
    button: "Shop Now",
    image: "/images/cms-banner-2.webp",
  },
];

export default function JewelryShowCase2() {
  return (
    <div className="py-10 px-8 flex flex-wrap justify-center gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group overflow-hidden w-full max-w-2xl sm:w-auto max-sm:w-[300px] rounded-md shadow-md"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[350px] max-sm:h-40 object-cover transform transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay (text area) */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 text-left max-sm:px-5">
            <p className="text-sm uppercase tracking-widest text-gray-800 max-sm:text-[0.7rem]">
              {item.subtitle}
            </p>
            <h2 className="text-3xl w-70 font-semibold text-gray-900 my-3 max-sm:w-[65%] max-sm:text-sm">
              {item.title}
            </h2>
            <button className="bg-[#cf967e] text-white uppercase text-sm px-6 py-2 mt-3 w-fit hover:bg-gray-800 transition max-sm:text-[0.6rem] max-sm:mt-1 max-sm:px-3 max-sm:py-1">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

