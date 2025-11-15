
// import React, { useEffect, useState } from 'react';

// export default function Product() {
//   const products = [
//     { 
//       id: 1, 
//       tag: "GOLD RING", 
//       title: "Erina Solitaire Ring Kisna White Gold Ring", 
//       price: "Rs.800", 
//       image: "/images/1-f.jpg", 
//       hoverImage: "/images/1-b.jpg"
//     },
//     { 
//       id: 2, 
//       tag: " Bellagio Jewelers", 
//       title: "Esra Floral Diamond Pendant Set White Gold", 
//       price: "Rs.500", 
//       image: "/images/2-f.webp", 
//       hoverImage: "/images/2-b.webp"
//     },
//     { 
//       id: 3, 
//       tag: "Miss Curious", 
//       title: "Latest Diamond Bangles Designs For Women", 
//       price: "Rs.700", 
//       image: "/images/3-f.webp", 
//       hoverImage: "/images/3-b.webp"
//     },
//     { 
//       id: 4, 
//       tag: "Florida Diamond", 
//       title: "Beautiful Lohan Pendant From Kisna Yellow Gold", 
//       price: "Rs.500", 
//       image: "/images/4-f.webp", 
//       hoverImage: "/images/4-b.webp"
//     }
//   ];

//   const [addCart, setAddCart] = useState([]);

//   useEffect(() => {
//     const allData = JSON.parse(localStorage.getItem("addCart")) || [];
//     setAddCart(allData);
//   }, []);

//   const handleAddToCart = (item) => {
//     const newItem = { ...item, uniqueId: Date.now().toString() };
//     const update = [...addCart, newItem];
//     setAddCart(update);
//     localStorage.setItem("addCart", JSON.stringify(update));
//     window.dispatchEvent(new Event("storage")); // Force Navbar update
//   };

//   return (
//     <div className="max-sm:w-[300px] max-sm:mx-auto">
//       <h1 className="text-4xl text-gray-700 text-center font-medium py-10 pb-3 max-sm:text-2xl">
//         Latest Products
//       </h1>
//       <p className="text-lg text-gray-400 text-center max-sm:text-xs">
//         There are many variations of passages of lorem Ipsum available
//       </p>

//       <div className="flex justify-between py-10 flex-wrap gap-2 mx-20 max-sm:mx-3 max-sm:flex-col max-sm:items-center max-sm:gap-6">
//         {products.map((item) => (
//           <div 
//             key={item.id} 
//             className="card w-80 h-100 rounded-lg text-center overflow-hidden group max-sm:w-full max-sm:h-auto "
//           >
//             <div className="relative w-full h-65 max-sm:h-[220px]">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-65 object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0 max-sm:h-full"
//               />
//               <img
//                 src={item.hoverImage}
//                 alt={item.title + ' hover'}
//                 className="absolute top-0 left-0 w-full h-65 object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 max-sm:h-full"
//               />
//             </div>

//             <div className="info transform transition-transform duration-300 hover:-translate-y-11 py-2 bg-white max-sm:py-4">
//               <p className="text-xs text-gray-500 mt-2 tracking-widest uppercase">
//                 {item.tag}
//               </p>
//               <h2 className="text-lg hover:text-[#cf967e] max-sm:text-base">{item.title}</h2>
//               <p className="text-xl text-[#cf967e] font-medium mt-2 max-sm:text-lg">{item.price}</p>
//               <button
//                 className="bg-[#cf967e] text-white px-4 py-1 mt-6 cursor-pointer max-sm:mt-4 max-sm:px-6"
//                 onClick={() => handleAddToCart(item)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





import React from 'react';
import { ChevronUp } from "lucide-react";
import Card1 from '../Cards/Card1';

export default function Product() {
  const products = [
    {
      id: 1,
      tag: "GOLD RING",
      title: "Erina Solitaire Ring Kisna White Gold Ring",
      price: "Rs.800",
      image: "/images/1-f.jpg",
      hoverImage: "/images/1-b.jpg"
    },
    {
      id: 2,
      tag: " Bellagio Jewelers",
      title: "Esra Floral Diamond Pendant Set White Gold",
      price: "Rs.500",
      image: "/images/2-f.webp",
      hoverImage: "/images/2-b.webp"
    },
    {
      id: 3,
      tag: "Miss Curious",
      title: "Latest Diamond Bangles Designs For Women",
      price: "Rs.700",
      image: "/images/3-f.webp",
      hoverImage: "/images/3-b.webp"
    },
    {
      id: 4,
      tag: "Florida Diamond",
      title: "Beautiful Lohan Pendant From Kisna Yellow Gold",
      price: "Rs.500",
      image: "/images/4-f.webp",
      hoverImage: "/images/4-b.webp"
    }
  ];
  const products1 = [
    {
      id: 1,
      tag: "Florida Diamond",
      title: "The Tepo 18kt Diamond Yellow Gold Ring",
      price: "Rs.750",
      image: "/images/5-f.jpg",
      hoverImage: "/images/5-b.jpg"
    },
    {
      id: 2,
      tag: "Gold RIng",
      title: "Trending Ring Diamond Taneka Diamond Ring",
      price: "Rs.700",
      image: "/images/6-f.jpg",
      hoverImage: "/images/6-b.jpg"
    },
    {
      id: 3,
      tag: "Gold RIng",
      title: "Transdesigns Cubic Zirconia Crystals Cluster",
      price: "Rs.600",
      image: "/images/7-f.jpg",
      hoverImage: "/images/7-b.jpg"
    },
    {
      id: 4,
      tag: "Miss Curious",
      title: "Latest Diamond Bangles Designs For Women",
      price: "Rs.0",
      image: "/images/8-f.jpg",
      hoverImage: "/images/8-b.jpg"
    }
  ];


  const items = [
    {
      title: "Flower Necklace",
      image: "/images/pic1.jpg",
      count: "4 Items",
    },
    {
      title: "Rose Gold Ring",
      image: "/images/pic2.jpg",
      count: "5 Items",
    },
    {
      title: "Drops Earring",
      image: "/images/pic3.jpg",
      count: "5 Items",
    },
    {
      title: "Butterfly Pendant",
      image: "/images/pic4.jpg",
      count: "3 Items",
    },
    {
      title: "Diamond Ring",
      image: "/images/pic5.jpg",
      count: "3 Items",
    },
  ];

  return (
    <>
      {/* Products */}
      <div className="max-sm:w-[300px] max-sm:mx-auto">
        <h1 className="text-4xl text-gray-700 text-center font-medium py-10 pb-3 max-sm:text-2xl">
          Latest Products
        </h1>
        <p className="text-lg text-gray-400 text-center max-sm:text-xs">
          There are many variations of passages of lorem Ipsum available
        </p>

        <div className="flex justify-between py-10 flex-wrap gap-2 mx-20 max-sm:mx-3 max-sm:flex-col max-sm:items-center max-sm:gap-6">
          {products.map((e, i) => (
            <Card1 key={i} item={e}></Card1>
          ))}
        </div>
      </div>

      {/* Jewellery gallery */}
      <div className="w-full bg-white py-10 px-6">
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-64 overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-85 object-cover "
              />
              <div className="absolute bottom-0 left-0 bg-white p-4 w-[80%] mx-auto mb-4  shadow">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.count}</p>
              </div>
            </div>
          ))}
        </div>

      </div>


      {/* Products */}
      <div className="max-sm:w-[300px] max-sm:mx-auto">
        <h1 className="text-4xl text-gray-700 text-center font-medium py-10 pb-3 max-sm:text-2xl">
          Featured Products
        </h1>
        <p className="text-lg text-gray-400 text-center max-sm:text-xs">
          There are many variations of passages of lorem Ipsum available
        </p>

        <div className="flex justify-between py-10 flex-wrap gap-2 mx-20 max-sm:mx-3 max-sm:flex-col max-sm:items-center max-sm:gap-6">
          {products1.map((e, i) => (
            <Card1 key={i} item={e}></Card1>
          ))}
        </div>
      </div>


      {/* cards */}
      


     
    </>
  );
}

