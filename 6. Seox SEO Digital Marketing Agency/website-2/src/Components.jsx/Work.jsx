// import React, { useState } from "react";

// const slides = [
//   {
//     id: 1,
//     title: "Monitoring & Optimization",
//     description:
//       "Continuous Monitoring And Regular Optimizations To Keep Your Campaigns Effective And Aligned With Your Goals.",
//     points: [
//       "In-Depth Research",
//       "Implementation with Precision",
//       "Transparent Reporting",
//     ],
//     image: "/images/work1.png", // replace with your actual image path
//   },
//   {
//     id: 2,
//     title: "Strategy & Planning",
//     description:
//       "Develop strategies aligned with your goals to ensure long-term success and sustainability.",
//     points: ["Market Analysis", "Competitor Research", "Actionable Roadmaps"],
//     image: "/images/work2.png",
//   },
//   {
//     id: 3,
//     title: "Execution & Delivery",
//     description:
//       "Seamless execution of plans with precision and efficiency to deliver tangible results.",
//     points: ["Team Collaboration", "On-Time Delivery", "Quality Assurance"],
//     image: "/images/work3.png",
//   },
// ];

// export default function Work() {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="px-25 py-15 bg-[#f5f5f5]">
//       <div className="flex">
//         <img src="/images/mini.png" alt="" className="w-12" />
//         <p className="font-medium text-xl mt-2.5" data-aos="zoom-in-left" data-aos-duration="900">OUR WORK PROCESS</p>
//       </div>
//       <div className="flex justify-between mt-3">
//         <h1 className="text-4xl font-medium w-100"> Our Proven Process for Delivering Success</h1>
//         <button className="h-12 w-50 ml-55 rounded-4xl bg-[#acff1c] text-black font-medium text-xl hover:animate-bounce transition cursor-pointer" data-aos="fade-left" data-aos-duration="800" >Get in Touch</button>
//       </div>

//       {/* Slider */}
//       <div className="relative mt-10 flex items-center justify-center" data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
//         {/* Left Arrow */}
//         <button onClick={prevSlide} className="absolute left-4 bg-white p-3 rounded-full shadow-md hover:scale-110 transition hover:bg-[#acff1c] cursor-pointer" >
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
//           </svg>
//         </button>

//         {/* Slide Content */}
//         <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center max-w-4xl w-full p-5 pr-10 transition-all duration-500">
//           {/* Image Section */}
//           <div className="w-full md:w-1/2 flex justify-center">
//             <img
//               src={slides[current].image}
//               alt={slides[current].title}
//               className="rounded-full w-80 h-80"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
//             <span className="bg-[#acff1c] font-medium text-md text-black rounded-full px-2">
//               {slides[current].id}
//             </span>
//             <h2 className="text-2xl font-bold mb-3">{slides[current].title}</h2>
//             <p className="text-gray-600 mb-4">{slides[current].description}</p>
//             <ul className="space-y-2">
//               {slides[current].points.map((point, idx) => (
//                 <li key={idx} className="flex items-center">
//                   <span className="text-black mr-2">✔</span> {point}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button onClick={nextSlide} className="absolute right-4 bg-white p-3 rounded-full shadow-md hover:scale-110 transition hover:bg-[#acff1c] cursor-pointer">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Monitoring & Optimization",
    description:
      "Continuous Monitoring And Regular Optimizations To Keep Your Campaigns Effective And Aligned With Your Goals.",
    points: [
      "In-Depth Research",
      "Implementation with Precision",
      "Transparent Reporting",
    ],
    image: "/images/work1.png",
  },
  {
    id: 2,
    title: "Strategy & Planning",
    description:
      "Develop strategies aligned with your goals to ensure long-term success and sustainability.",
    points: ["Market Analysis", "Competitor Research", "Actionable Roadmaps"],
    image: "/images/work2.png",
  },
  {
    id: 3,
    title: "Execution & Delivery",
    description:
      "Seamless execution of plans with precision and efficiency to deliver tangible results.",
    points: ["Team Collaboration", "On-Time Delivery", "Quality Assurance"],
    image: "/images/work3.png",
  },
];

export default function Work() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="px-5 sm:px-25 py-15 bg-[#f5f5f5]">
      {/* Header */}
      <div className="flex items-center" data-aos="zoom-in-left" data-aos-duration="900">
        <img src="/images/mini.png" alt="" className="w-12" />
        <p className="font-medium text-xl mt-2.5">OUR WORK PROCESS</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-3 gap-4 sm:gap-0">
        <h1 className="text-2xl sm:text-4xl font-medium sm:w-100">Our Proven Process for Delivering Success</h1>
        <button
          className="h-12 w-full sm:w-50 rounded-4xl bg-[#acff1c] text-black font-medium text-lg sm:text-xl hover:animate-bounce transition cursor-pointer"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          Get in Touch
        </button>
      </div>

      {/* Slider */}
      <div
        className="relative mt-10 flex items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
      >
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 bg-white p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition hover:bg-[#acff1c] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slide Content */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center max-w-4xl w-full sm:w-[700px] md:w-full p-5 sm:pr-10 transition-all duration-500 max-sm:w-[300px]">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="rounded-full w-52 h-52 sm:w-80 sm:h-80"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center sm:text-left">
            <span className="bg-[#acff1c] font-medium text-md text-black rounded-full px-2">
              {slides[current].id}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">{slides[current].title}</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">{slides[current].description}</p>
            <ul className="space-y-2">
              {slides[current].points.map((point, idx) => (
                <li key={idx} className="flex items-center justify-center sm:justify-start text-sm sm:text-base">
                  <span className="text-black mr-2">✔</span> {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 bg-white p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition hover:bg-[#acff1c] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
