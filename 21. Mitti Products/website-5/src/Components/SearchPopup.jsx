// import React from "react";
// import { X, Search } from "lucide-react";

// export default function SearchPopup({ onClose }) {
//   const popularSearches = [
//     "Chair",
//     "Light",
//     "Oak",
//     "Paper Cord",
//     "Pendant Light",
//     "Planter",
//     "Stoneware Plate",
//     "Theme Mitti (Password: 1)",
//   ];

//   return (
//     <div className="absolute top-0 left-0 w-full bg-[#f9f6ef] z-40 p-8 shadow-md">
//       <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
//         <div className="flex items-center gap-2 w-full">
//           <Search size={20} className="text-gray-600" />
//           <input
//             type="text"
//             placeholder="Search for..."
//             className="w-full bg-transparent outline-none text-lg text-gray-700"
//           />
//         </div>
//         <button onClick={onClose}>
//           <X size={24} />
//         </button>
//       </div>

//       <p className="font-medium text-gray-700 mb-2">Popular Search:</p>
//       <div className="flex flex-wrap gap-3">
//         {popularSearches.map((term, i) => (
//           <span
//             key={i}
//             className="border border-gray-400 px-3 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer"
//           >
//             {term}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
