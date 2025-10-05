// import React from "react";

// const cardinfo = [
//   { id: 1, image: "/images/small1.jpg",  title: "Jolly LLB 3", discription:"UA16+ | Hindi"  },
//   { id: 2, image: "/images/small2.jpg",  title: "Mirai", discription:"UA16+ | Hindi and 1 more" },
//   { id: 3, image: "/images/small3.jpg",  title: "Ajey: The untold of a Yogi", discription:"UA13+ | Hindi"  },
//   { id: 4, image: "/images/small4.jpg",  title: "The Bengal Files", discription:"A | Hindi" },
 
// ];

// export default function Small() {
//   return (
//     <div className="w-full pt-15 px-30 pb-20">
//       <h1 className="text-2xl font-medium">Top Hindi movies near you</h1>

//       <div className="flex justify-between w-[67%] mt-6 overflow-x-auto space-x-4 scrollbar-hidden scroll-smooth">
//         {cardinfo.map((e) => (
//           <div key={e.id} className=" flex-shrink-0 w-50 h-auto border border-gray-300 rounded-xl shadow hover:shadow-lg transition">

//             <div className="top">
//               <img src={e.image} alt={e.title} className="rounded-t-xl w-full object-cover" />
//             </div>

//             <div className="info p-3 cursor-pointer">
//               <p className="text-gray-500 text-xs font-medium tracking-wider">{e.time}</p>
//               <h1 className="font-medium text-lg">{e.title}</h1>
//               <h5 className="font-medium text-sm text-gray-600">{e.discription}</h5>
//             </div>
            
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
