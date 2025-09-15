// import React, { useState } from "react";

// export default function Home() {
//   const [openSearch, setOpenSearch] = useState(false);
//   const [query, setQuery] = useState("");
//   const [openMenu, setOpenMenu] = useState(null);

//   const toggleMenu = (menu) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//   };

//   return (
//     <div className="relative bg-[url('/images/hero1-bg.jpg')] bg-cover bg-center w-full h-224 mb-0  border-red-500 min-h-screen ">
//       {/* Navbar */}
//       <div className="nav flex justify-between items-center px-20 py-7 sm:px-20 sm:py-7">
//         {/* Left Logo */}
//         <div className="left flex">
//           <img src="/images/white-logo.png" alt="Logo" className="h-10 sm:h-10" />
//         </div>


//         {/* Navbar Middle */}
//         <div className="mid  sm:block">
//           <ul className="flex space-x-8 text-white font-medium text-lg">

//             {/* Home */}
//             <li className="relative">
//               <button onClick={() => toggleMenu("home")} className="flex items-center space-x-1">
//                 <span>Home</span>
//                 <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" /></svg></span>
//               </button>
//               {openMenu === "home" && (
//                 <ul className="absolute mt-2 w-40 bg-white text-black rounded shadow-md py-2">
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 1</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 2</a></li>
//                 </ul>
//               )}
//             </li>

//             {/* Portfolio */}
//             <li className="relative sm:space-x-4">
//               <button onClick={() => toggleMenu("portfolio")} className="flex items-center space-x-1">
//                 <span>Portfolio</span>
//                 <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" classname="sm:w-7 sm:h-7"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" /></svg></span>
//               </button>
//               {openMenu === "portfolio" && (
//                 <ul className="absolute mt-2 w-50 bg-white text-black rounded shadow-md py-2">
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Projects</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Gallery</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Portfolio</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Portfolio Details</a></li>
//                 </ul>
//               )}
//             </li>

//             {/* Service */}
//             <li className="relative">
//               <button onClick={() => toggleMenu("service")} className="flex items-center space-x-1">
//                 <span>Service</span>
//                 <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" /></svg></span>
//               </button>
//               {openMenu === "service" && (
//                 <ul className="absolute mt-2 w-40 bg-white text-black rounded shadow-md py-2">
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Web Design</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Development</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Single Service</a></li>
//                 </ul>
//               )}
//             </li>

//             {/* Page's */}
//             <li className="relative">
//               <button onClick={() => toggleMenu("pages")} className="flex items-center space-x-1">
//                 <span>Page's</span>
//                 <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" /></svg></span>
//               </button>
//               {openMenu === "pages" && (
//                 <ul className="absolute mt-2 w-40 bg-white text-black rounded shadow-md py-2">
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Our Team</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Testimonial</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">FAQ's</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Pricing</a></li>
//                 </ul>
//               )}
//             </li>

//             {/* Blogs */}
//             <li className="relative">
//               <button onClick={() => toggleMenu("blogs")} className="flex items-center space-x-1" >
//                 <span>Blogs</span>
//                 <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" /></svg></span>
//               </button>
//               {openMenu === "blogs" && (
//                 <ul className="absolute mt-2 w-40 bg-white text-black rounded shadow-md py-2">
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Latest</a></li>
//                   <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Categories</a></li>
//                 </ul>
//               )}
//             </li>

//           </ul>
//         </div>


//         {/* Right Section */}
//         <div className="right flex items-center space-x-4">
//           {/* Search Icon (SVG) */}
//           <button onClick={() => setOpenSearch(true)} className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
//           </button>
//           <button className="px-5 py-2 rounded-4xl bg-[#acff1c] text-black font-medium text-xl hover:animate-bounce transition cursor-pointer">Contact Us</button>
//         </div>



//       </div>



//       {/* Search Overlay */}
//       <div
//         className={`fixed z-100 inset-0 bg-black/40 backdrop-blur bg-opacity-40 flex items-start justify-center transition-transform duration-500 ease-in-out ${openSearch ? "translate-y-0" : "-translate-y-full"
//           }`}
//       >
//         <div className="w-full max-w-3xl px-6 mt-40 relative">
//           {/* Close Button (SVG) */}
//           <button onClick={() => setOpenSearch(false)} className="absolute top-[-50px] right-6 text-white hover:text-red-500">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           {/* Input Box */}
//           <div className="flex items-center border-b border-white">
//             <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type here to search..." className="w-full bg-transparent text-white text-2xl px-2 py-3 focus:outline-none" />

//             {/* Search Icon on Right */}
          
//             <button type="button" // prevents form submission/refresh
//               onClick={() => {
//                 setQuery("");        // clear input
//                 setOpenSearch(false); // close overlay
//               }} className="ml-3 text-white hover:text-green-400">

//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/>
//               </svg>
//             </button>

//           </div>
//         </div>

//       </div>


//       <div className="flex">
//         <div className="left py-40 pt-30 pl-25 pr-20 ">
//           <p className="text-[#acff1c] text-xl font-medium" data-aos="zoom-in-left" data-aos-duration="900">SEO MARKETING AGENCY</p>
//           <h1 className="text-6xl font-medium text-white w-130 mt-5 leading-17" data-aos="zoom-in-right" data-aos-duration="900">Boost Your Online Presence With SEO</h1>
//           <p className="text-white text-lg w-135 font-medium mt-10" data-aos="fade-right" data-aos-duration="900">Drive More Traffic, Increase Visibility, and Boost Revenue with SEOX – Your Trusted SEO & Digital Marketing Partner.</p>
//           <button className="different bg-white px-6 py-3 text-xl rounded-4xl font-medium hover:animate-bounce mt-5 hover:bg-[#acff1c] transition-all duration-500 cursor-pointer" data-aos="fade-right" data-aos-duration="1100">Audit</button>

//           <div className="flex w-120 justify-between" data-aos="fade-right" data-aos-duration="1300">
//             {/* svg-1 */}
//             <div className="text-xl">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288" class="w-22 h-22 mt-10">
//                 <defs>
//                   <linearGradient id="imagewave" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
//                     <stop stop-color="#3c3c3c" offset="0%" stop-opacity="1" />
//                     <stop stop-color="#434340" offset="100%" stop-opacity="1" />
//                   </linearGradient>
//                 </defs>

//                 <path fill="url(#imagewave)">
//                   <animate repeatCount="indefinite" attributeName="d" dur="10s" values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
//                  M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z;
//                  M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z" />
//                 </path>

//                 <text x="68%" y="70%" text-anchor="middle" dominant-baseline="middle" font-size="178" font-weight="700" fill="#ffffff" font-family="Arial, sans-serif">
//                   24
//                 </text>

//               </svg>
//               <p className="text-white">Countries</p>
//             </div>

//             {/* svg-2 */}
//             <div className="text-xl">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288" class="w-22 h-22 mt-10">
//                 <defs>
//                   <linearGradient id="imagewave" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
//                     <stop stop-color="#3c3c3c" offset="0%" stop-opacity="1" />
//                     <stop stop-color="#434340" offset="100%" stop-opacity="1" />
//                   </linearGradient>
//                 </defs>

//                 <path fill="url(#imagewave)">
//                   <animate repeatCount="indefinite" attributeName="d" dur="10s" values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
//                  M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z;
//                  M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z" />
//                 </path>

//                 <text x="61%" y="70%" text-anchor="middle" dominant-baseline="middle" font-size="148" font-weight="700" fill="#ffffff" font-family="Arial, sans-serif">
//                   11k
//                 </text>

//               </svg>
//               <p className="text-white">Websites Done</p>
//             </div>

//             {/* svg-3 */}
//             <div className="text-xl">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288" class="w-22 h-22 mt-10">
//                 <defs>
//                   <linearGradient id="imagewave" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
//                     <stop stop-color="#3c3c3c" offset="0%" stop-opacity="1" />
//                     <stop stop-color="#434340" offset="100%" stop-opacity="1" />
//                   </linearGradient>
//                 </defs>

//                 <path fill="url(#imagewave)">
//                   <animate repeatCount="indefinite" attributeName="d" dur="10s" values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
//                  M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z;
//                  M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z" />
//                 </path>

//                 <text x="59%" y="70%" text-anchor="middle" dominant-baseline="middle" font-size="148" font-weight="700" fill="#ffffff" font-family="Arial, sans-serif">
//                   10k
//                 </text>

//               </svg>
//               <p className="text-white">Satisfied Client</p>
//             </div>



//           </div>

//         </div>

//         <div className="right flex" data-aos="zoom-in-left" data-aos-duration="900">
//           <img src="/images/new.png" alt="" className="w-150 h-165 mt-10" />
//           <img src="/images/hero1-image-shape1.png" alt="" className="w-40 h-40 mt-20 animate-bounce [animation-duration:5s] -ml-10" />
//         </div>

//       </div>


//     </div>
//   );
// }


import React, { useState } from "react";

export default function Home() {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="relative bg-[url('/images/hero1-bg.jpg')] bg-cover bg-center w-full min-h-screen sm:h-[900px] max-sm:overflow-x-hidden max-sm:w-full">
      {/* Navbar */}
      <div className="nav flex justify-between items-center px-4 sm:px-20 py-4 sm:py-7">
        {/* Left Logo */}
        <div className="left flex">
          <img src="/images/white-logo.png" alt="Logo" className="h-8 sm:h-10" />
        </div>

        

         {/* Navbar Middle */}
         <div className="mid max-sm:hidden">
           <ul className="flex space-x-8 text-white font-medium text-lg">

             {/* Home */}
             <li className="relative">
               <button onClick={() => toggleMenu("home")} className="flex items-center space-x-1">
                 <span>Home</span>
                 <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" /></svg></span>
               </button>
               {openMenu === "home" && (
                <ul className="absolute mt-2 w-40 bg-white text-black rounded shadow-md py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 1</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 2</a></li>
                </ul>
              )}
            </li>

            {/* Portfolio */}
            <li className="relative sm:space-x-4">
              <button onClick={() => toggleMenu("portfolio")} className="flex items-center space-x-1">
                <span>Portfolio</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" classname="sm:w-7 sm:h-7"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" /></svg></span>
              </button>
              {openMenu === "portfolio" && (
                <ul className="absolute mt-2 w-50 bg-white text-black rounded shadow-md py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Projects</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Gallery</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Portfolio</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Portfolio Details</a></li>
                </ul>
              )}
            </li>

            {/* Service */}
            <li className="relative">
              <button onClick={() => toggleMenu("service")} className="flex items-center space-x-1">
                <span>Service</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" /></svg></span>
              </button>
              {openMenu === "service" && (
                <ul className="absolute mt-2 w-40 bg-white text-black rounded shadow-md py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Web Design</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Development</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Single Service</a></li>
                </ul>
              )}
            </li>

            {/* Page's */}
            <li className="relative">
              <button onClick={() => toggleMenu("pages")} className="flex items-center space-x-1">
                <span>Page's</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" /></svg></span>
              </button>
              {openMenu === "pages" && (
                <ul className="absolute mt-2 w-40 bg-white text-black rounded shadow-md py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Our Team</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Testimonial</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">FAQ's</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Pricing</a></li>
                </ul>
              )}
            </li>

            {/* Blogs */}
            <li className="relative">
              <button onClick={() => toggleMenu("blogs")} className="flex items-center space-x-1" >
                <span>Blogs</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" /></svg></span>
              </button>
              {openMenu === "blogs" && (
                <ul className="absolute mt-2 w-40 bg-white text-black rounded shadow-md py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Latest</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Categories</a></li>
                </ul>
              )}
            </li>

          </ul>
        </div>

        {/* Right Section */}
        <div className="right flex items-center space-x-2 sm:space-x-4">
          {/* Search Icon */}
          <button
            onClick={() => setOpenSearch(true)}
            className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </button>
          <button className="px-3 sm:px-5 py-2 rounded-full bg-[#acff1c] text-black font-medium text-sm sm:text-xl hover:animate-bounce transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={`fixed z-50 inset-0 bg-black/60 backdrop-blur flex items-start justify-center transition-transform duration-500 ease-in-out ${
          openSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full max-w-[300px] sm:max-w-3xl px-4 sm:px-6 mt-20 sm:mt-40 relative">
          {/* Close Button */}
          <button onClick={() => setOpenSearch(false)} className="absolute -top-10 right-4 text-white hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Input Box */}
          <div className="flex items-center border-b border-white">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type here to search..."
              className="w-full bg-transparent text-white text-lg sm:text-2xl px-2 py-2 sm:py-3 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setOpenSearch(false);
              }}
              className="ml-2 sm:ml-3 text-white hover:text-green-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row px-4 sm:px-20 py-10 sm:py-20">
        {/* Left Content */}
        <div className="left sm:w-1/2">
          <p className="text-[#acff1c] text-sm sm:text-xl font-medium " data-aos="zoom-in-left" data-aos-duration="900">SEO MARKETING AGENCY</p>
          <h1 className="text-2xl sm:text-6xl font-medium text-white mt-4 leading-snug sm:leading-[4rem]" data-aos="zoom-in-right" data-aos-duration="900">
            Boost Your Online Presence With SEO
          </h1>
          <p className="text-white text-sm sm:text-lg font-medium mt-6 sm:mt-10" data-aos="fade-right" data-aos-duration="900">
            Drive More Traffic, Increase Visibility, and Boost Revenue with SEOX – Your Trusted SEO & Digital Marketing Partner.
          </p>
          <button className="bg-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-xl rounded-full font-medium hover:animate-bounce mt-5 hover:bg-[#acff1c] transition" data-aos="fade-right" data-aos-duration="1100">
            Audit
          </button>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-15 mt-8 sm:mt-10 max-sm:gap-6" data-aos="fade-right" data-aos-duration="1300">
            
             <div className="text-xl text-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288" class="w-22 h-22 mt-10 max-sm:w-12 max-sm:h-12">
                 <defs>
                   <linearGradient id="imagewave" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                     <stop stop-color="#3c3c3c" offset="0%" stop-opacity="1" />
                     <stop stop-color="#434340" offset="100%" stop-opacity="1" />
                   </linearGradient>
                 </defs>

                 <path fill="url(#imagewave)">
                   <animate repeatCount="indefinite" attributeName="d" dur="10s" values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                  M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z;
                  M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z" />
                 </path>

                <text x="68%" y="70%" text-anchor="middle" dominant-baseline="middle" font-size="178" font-weight="700" fill="#ffffff" font-family="Arial, sans-serif" className="text-9xl">
                   24
                 </text>

               </svg>
               <p className="text-white max-sm:text-sm">Countries</p>
             </div>


            {/* SVG-2 */}
            <div className="text-xl text-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288" class="w-22 h-22 mt-10 max-sm:w-12 max-sm:h-12 ml-5">
                 <defs>
                   <linearGradient id="imagewave" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                     <stop stop-color="#3c3c3c" offset="0%" stop-opacity="1" />
                     <stop stop-color="#434340" offset="100%" stop-opacity="1" />
                   </linearGradient>
                 </defs>

                 <path fill="url(#imagewave)">
                   <animate repeatCount="indefinite" attributeName="d" dur="10s" values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                  M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z;
                  M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z" />
                 </path>

                <text x="61%" y="70%" text-anchor="middle" dominant-baseline="middle" font-size="148" font-weight="700" fill="#ffffff" font-family="Arial, sans-serif" className="text-9xl">
                   11k
                 </text>

               </svg>
               <p className="text-white max-sm:text-sm">Websites Done</p>
             </div>

            {/* SVG-3 */}
            <div className="text-xl">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288" class="w-22 h-22 mt-10 max-sm:w-12 max-sm:h-12">
                 <defs>
                   <linearGradient id="imagewave" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                     <stop stop-color="#3c3c3c" offset="0%" stop-opacity="1" />
                     <stop stop-color="#434340" offset="100%" stop-opacity="1" />
                   </linearGradient>
                 </defs>

                 <path fill="url(#imagewave)">
                   <animate repeatCount="indefinite" attributeName="d" dur="10s" values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                  M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z;
                  M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z" />
                 </path>

                <text x="59%" y="70%" text-anchor="middle" dominant-baseline="middle" font-size="148" font-weight="700" fill="#ffffff" font-family="Arial, sans-serif" className="text-9xl">
                   10k
                 </text>

               </svg>
               <p className="text-white max-sm:text-sm">Satisfied Client</p>
             </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="right flex justify-center sm:w-1/2 mt-10 sm:mt-0 ml-20" data-aos="zoom-in-left" data-aos-duration="900">
          <div className="relative">
            <img src="/images/new.png" alt="" className="w-[250px] sm:w-[500px]" />
            <img src="/images/hero1-image-shape1.png" alt="" className="w-40 h-40 max-sm:w-20 max-sm:h-20 max-sm:-ml-15 -mt-25 animate-bounce [animation-duration:5s] -ml-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
