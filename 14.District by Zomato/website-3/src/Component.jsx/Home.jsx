// import React from "react";

// const cardinfo = [
//   { id: 1, image: "/images/card1.jpg", time: "Fri, 03 Oct, 9:00 PM", title: "Helena Hauff | New Delhi", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
//   { id: 2, image: "/images/card2.jpg", time: "Fri, 03 Oct, 9:00 PM", title: "Helena Hauff | New Delhi", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
//   { id: 3, image: "/images/card3.jpg", time: "Fri, 03 Oct, 9:00 PM", title: "Helena Hauff | New Delhi", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
//   { id: 4, image: "/images/card4.png", time: "Fri, 03 Oct, 9:00 PM", title: "Helena Hauff | New Delhi", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
//   { id: 5, image: "/images/card5.jpg", time: "Fri, 03 Oct, 9:00 PM", title: "Helena Hauff | New Delhi", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
//   { id: 6, image: "/images/card6.jpg", time: "Fri, 03 Oct, 9:00 PM", title: "Helena Hauff | New Delhi", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
//   { id: 7, image: "/images/card7.jpg", time: "Fri, 03 Oct, 9:00 PM", title: "Helena Hauff | New Delhi", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
//   { id: 8, image: "/images/card8.png", time: "Fri, 03 Oct, 9:00 PM", title: "Helena Hauff | New Delhi", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
//   { id: 9, image: "/images/card9.jpg", time: "Fri, 03 Oct, 9:00 PM", title: "Helena Hauff | New Delhi", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
//   { id: 10, image: "/images/card10.jpg", time: "Fri, 03 Oct, 9:00 PM", title: "Helena Hauff | New Delhi", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
// ];

// export default function Home() {
//   return (
//     <div className="w-full  bg-gradient-to-b from-[#9c1ac7]/10 via-[#af60e0]/5 to-[#af60e0]/5 pt-25 px-30">
//       <h1 className="text-2xl font-medium">Discover the best of Music Events</h1>

//       <div className="flex justify-between mt-6 overflow-x-auto space-x-4 scrollbar-hidden scroll-smooth">
//         {cardinfo.map((e) => (
//           <div key={e.id} className=" flex-shrink-0 w-75 h-140 border border-gray-300 rounded-xl shadow hover:shadow-lg transition">

//             <div className="top">
//               <img src={e.image} alt={e.title} className="rounded-t-xl w-full object-cover" />
//             </div>

//             <div className="info p-3 cursor-pointer">
//               <p className="text-gray-500 text-xs font-medium tracking-wider">{e.time}</p>
//               <h1 className="font-medium text-lg">{e.title}</h1>
//               <h5 className="font-medium text-sm text-gray-600">{e.location}</h5>
//               <p className="font-medium text-xs text-gray-500 mt-1">{e.price}</p>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }