// import React from 'react'

// const cardinfo = [
//     {id: 1, num : 1, title: "Proven Track Record", description: "Hundreds of successful campaigns and satisfied clients."},
//     {id: 2, num : 2, title: "Customized Strategies", description: "Tailored SEO and marketing plans that align with your unique."},
//     {id: 3, num : 3, title: "Expert Team", description: "Certified professionals with extensive industry experience."},
//     {id: 4, num : 4, title: "Transparent Reporting", description: "Clear, detailed reports to keep you informed every step of the way."},
// ]

// function Card({ num, title, description }) {
//   return (
//     <div className="bg-[#f5f5f5] h-40 w-80 py-4 px-5 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
//       <div className="flex items-center">
//         <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-xl font-medium hover:bg-[#acff1c] cursor-pointer">
//           {num}
//         </div>
//         <p className="font-medium text-xl ml-4 hover:text-yellow-900 cursor-pointer">
//           {title}
//         </p>
//       </div>
//       <p className="text-lg leading-6 text-gray-600 ml-12 mt-3 cursor-pointer">
//         {description}
//       </p>
//     </div>
//   );
// }

// export default function Choose() {
//   return (
//     <div className='py-15 px-25'>
//         <div className="flex" data-aos="zoom-in-left" data-aos-duration="900">
//             <img src="/images/mini.png" alt="" className='w-12'/>
//             <p className='font-medium text-xl mt-2.5'>WHY CHOOSE US</p>
//         </div>
//         <div className="flex justify-between mt-3">
//             <h1 className='text-4xl font-medium w-100'>Why We’re the Right Choice for Your Business</h1>
//             <button className=" h-12 w-50 ml-55 rounded-4xl bg-[#acff1c] text-black font-medium text-xl hover:animate-bounce transition cursor-pointer" data-aos="fade-left" data-aos-duration="800">Work With Us</button>
//         </div>
//         <div className="flex">
//             <div className="left">
//                 <img src="/images/choose.png" alt="" className='w-290 mt-10'/>
//             </div>
//             <div className="right">
//                 <div className="flex flex-wrap gap-6 ml-10 mt-12 ">
//                   {
//                    cardinfo.map((item)=> (
//                    <Card 
//                     key= {item.id}
//                     num = {item.num}
//                     title = {item.title}
//                     description = {item.description}
//                    />
//                    ))
//                 }
//                 </div>
//             </div>
//         </div>
      
//     </div>
//   )
// }



import React from 'react'

const cardinfo = [
  {
    id: 1,
    num: 1,
    title: "Proven Track Record",
    description: "Hundreds of successful campaigns and satisfied clients.",
  },
  {
    id: 2,
    num: 2,
    title: "Customized Strategies",
    description: "Tailored SEO and marketing plans that align with your unique needs.",
  },
  {
    id: 3,
    num: 3,
    title: "Expert Team",
    description: "Certified professionals with extensive industry experience.",
  },
  {
    id: 4,
    num: 4,
    title: "Transparent Reporting",
    description: "Clear, detailed reports to keep you informed every step of the way.",
  },
]

function Card({ num, title, description }) {
  return (
    <div className="bg-[#f5f5f5] w-80 h-40 max-sm:h-30 max-sm:w-full py-4 px-5 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm sm:text-xl font-medium hover:bg-[#acff1c] cursor-pointer">
          {num}
        </div>
        <p className="font-medium max-sm:text-base text-xl ml-3 sm:ml-4 hover:text-yellow-900 cursor-pointer">
          {title}
        </p>
      </div>
      <p className="max-sm:text-sm text-lg leading-5 sm:leading-6 text-gray-600 ml-10 mt-3 cursor-pointer">
        {description}
      </p>
    </div>
  )
}

export default function Choose() {
  return (
    <div className="max-sm:py-10 py-15 px-25 max-sm:px-5">
      
      {/* Heading */}
      <div className="flex items-center" data-aos="zoom-in-left" data-aos-duration="900">
        <img src="/images/mini.png" alt="" className="w-8 sm:w-12" />
        <p className="font-medium text-base sm:text-xl ml-2 sm:ml-3">WHY CHOOSE US</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 gap-4">
        <h1 className="text-xl sm:text-4xl font-medium max-w-full sm:max-w-[500px]"> Why We’re the Right Choice for Your Business</h1>
        <button className="px-4 sm:px-7 h-10 sm:h-12 w-fit sm:w-50 rounded-full bg-[#acff1c] text-black font-medium text-sm sm:text-xl hover:animate-bounce transition cursor-pointer self-start sm:self-auto" data-aos="fade-left" data-aos-duration="800">Work With Us</button>
      </div>

      {/* Content */}
      <div className="flex max-sm:flex-col flex-row items-center sm:items-start mt-8 sm:mt-12 gap-8">
        
        {/* Left Image */}
        <div className="left w-[85%] max-sm:w-full flex justify-center">
          <img src="/images/choose.png" alt="" className="w-full  max-sm:w-100"/>
        </div>

        {/* Right Cards */}
        <div className="right w-full max-sm:w-full ">
          <div className="flex max-sm:flex-col flex-wrap gap-6 max-sm:mt-5 ml-5 max-sm:ml-0">
            {cardinfo.map((item) => (
              <Card
                key={item.id}
                num={item.num}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
