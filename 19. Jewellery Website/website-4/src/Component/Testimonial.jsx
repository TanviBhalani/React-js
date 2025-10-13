// import React, { useState, useEffect } from "react";

// const testimonials = [
//   {
//     text: "Reliable product, consistently delivers.",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. There are many variations of passages of lorem Ipsum available.",
//     name: "Stefanie Rashford",
//     role: "Founder",
//     image: "https://randomuser.me/api/portraits/women/45.jpg",
//   },
//   {
//     text: "Excellent product, A+ customer service.",
//     desc: "Lorem Ipsum many variations of passages of there are available but the have alteration in some form by injected humour or randomised words.",
//     name: "Augusta Wind",
//     role: "Web Designer",
//     image: "https://randomuser.me/api/portraits/men/31.jpg",
//   },
//   {
//     text: "Impressive quality, durable and reliable.",
//     desc: "There are many variations of passages of lorem Ipsum more available but the have alteration in some type scrambled it to make a type.",
//     name: "Reema Ghurde",
//     role: "Manager",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
  
  
// ];

// const Testimonials = () => {
//   const cardsPerSlide = 3;
//   const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [totalSlides]);

//   const groupedTestimonials = [];
//   for (let i = 0; i < testimonials.length; i += cardsPerSlide) {
//     groupedTestimonials.push(testimonials.slice(i, i + cardsPerSlide));
//   }

//   return (
//     <section className="bg-white py-16 px-15 overflow-hidden max-sm:mx-0">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-semibold text-gray-900">
//           What Our Clients Say
//         </h2>
//         <p className="text-gray-500 mt-2">
//           There are many variations of passages of lorem Ipsum available
//         </p>
//       </div>

//       {/* Carousel */}
//      <div className="w-[100%] px-0 overflow-hidden max-sm:-mx-10 max-sm:border-2 max-sm:w-full">
//          <div className="relative w-370 mx-0 overflow-hidden">
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${currentSlide * 100}%)`,
//             width: `${groupedTestimonials.length * 100}%`,
//           }}
//         >
//           {groupedTestimonials.map((group, groupIndex) => (
//             <div
//               key={groupIndex}
//               className="w-350 flex-shrink-0 flex flex-col md:flex-row justify-center max-sm:w-full"
//             >
//               {group.map((item, index) => (
//                 <div
//                   key={index}
//                   className="w-250 md:w-1/3 p-4 flex justify-center"
//                 >
//                   <div className="bg-[#f7f7f7] p-8 rounded-lg shadow-sm w-full h-full">
//                     <p className="text-lg font-semibold text-gray-900 mb-4">
//                       “{item.text}”
//                     </p>
//                     <p className="text-gray-600 mb-6">{item.desc}</p>
//                     <div className="flex items-center gap-4">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-16 h-16 rounded-full object-cover"
//                       />
//                       <div>
//                         <h4 className="font-semibold text-gray-900">
//                           {item.name}
//                         </h4>
//                         <p className="text-gray-500 text-sm">{item.role}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Dots
//         <div className="flex justify-center mt-8 space-x-2">
//           {groupedTestimonials.map((_, index) => (
//             <button
//               key={index}
//               className={`h-2 w-2 rounded-full ${
//                 currentSlide === index ? "bg-gray-800" : "bg-gray-300"
//               }`}
//               onClick={() => setCurrentSlide(index)}
//             ></button>
//           ))}
//         </div> */}
//       </div>
//      </div>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Reliable product, consistently delivers.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. There are many variations of passages of lorem Ipsum available.",
    name: "Stefanie Rashford",
    role: "Founder",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    text: "Excellent product, A+ customer service.",
    desc: "Lorem Ipsum many variations of passages of there are available but the have alteration in some form by injected humour or randomised words.",
    name: "Augusta Wind",
    role: "Web Designer",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    text: "Impressive quality, durable and reliable.",
    desc: "There are many variations of passages of lorem Ipsum more available but the have alteration in some type scrambled it to make a type.",
    name: "Reema Ghurde",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += cardsPerSlide) {
    groupedTestimonials.push(testimonials.slice(i, i + cardsPerSlide));
  }

  return (
    <section className="bg-white py-16 px-15 overflow-hidden max-sm:mx-0">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 mt-2">
          There are many variations of passages of lorem Ipsum available
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-hidden  max-sm:w-full">
        <div className="relative w-full max-sm:w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${groupedTestimonials.length * 100}%`,
            }}
          >
            {groupedTestimonials.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="w-full flex-shrink-0 flex flex-col md:flex-row justify-center items-center"
              >
                {group.map((item, index) => (
                  <div
                    key={index}
                    className="w-80 md:w-1/3 max-sm:w-[300px] p-4 flex justify-center"
                  >
                    <div className="bg-[#f7f7f7] p-8 rounded-lg shadow-sm w-full h-full">
                      <p className="text-lg font-semibold text-gray-900 mb-4">
                        “{item.text}”
                      </p>
                      <p className="text-gray-600 mb-6">{item.desc}</p>
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {item.name}
                          </h4>
                          <p className="text-gray-500 text-sm">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
