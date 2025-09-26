import React from 'react'

const cardinfo = [
  {
    id: 1,
    num: 1,
    title: "Search Engine Optimization (SEO)",
    description:
      "Enhance your website’s visibility on search engines with comprehensive SEO strategies including research.",
  },
  {
    id: 2,
    num: 2,
    title: "Content Marketing",
    description:
      "Engage your audience with high-quality, relevant content that drives traffic and fosters customer trust.",
  },
  {
    id: 3,
    num: 3,
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Maximize your ROI with targeted PPC campaigns designed to attract the right audience.",
  },
  {
    id: 4,
    num: 4,
    title: "Social Media Marketing",
    description:
      "Build a strong social media presence to connect with your audience and grow engagement.",
  },
  {
    id: 5,
    num: 5,
    title: "Website Design & Development",
    description:
      "Create a user-friendly, responsive website that not only looks great but also performs exceptionally.",
  },
  {
    id: 6,
    num: 6,
    title: "Analytics & Reporting",
    description:
      "Gain insights into your digital performance with detailed reporting to inform your strategy.",
  },
]

function Card({ num, title, description }) {
  return (
    <div className="bg-white w-105 h-40 max-sm:w-full  py-4 px-5 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-duration="900" data-aos-delay="300">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm sm:text-xl font-medium hover:bg-[#acff1c] cursor-pointer">
          {num}
        </div>
        <p className="font-medium text-sm sm:text-xl ml-3 sm:ml-4 hover:text-yellow-900 cursor-pointer">
          {title}
        </p>
      </div>
      <p className="text-lg max-sm:text-sm leading-5 sm:leading-6 text-gray-600 ml-10 mt-3 cursor-pointer">
        {description}
      </p>
    </div>
  )
}

export default function Services() {
  return (
    <div className="bg-[#f5f5f5] w-full py-15 max-sm:py-5 px-25 max-sm:px-5">
      
      {/* Top Section */}
      <div className="flex  max-sm:flex-col sm:flex-row  sm:items-start  sm:gap-10 mb-12">
        
        <div className="left w-full sm:w-1/2">
          <div className="flex items-center" data-aos="zoom-in-left" data-aos-duration="900">
            <img src="/images/mini.png" alt="" className="w-12 sm:w-12" />
            <p className="font-medium text-base sm:text-xl ml-2">OUR SERVICES</p>
          </div>

          <h1 className="text-5xl max-sm:text-xl font-medium mt-3"> Results-Driven SEO & Digital Marketing Services</h1>

          <p className="text-xl max-sm:text-sm font-normal mt-5 text-gray-700" data-aos="fade-right" data-aos-duration="900"> At SEOX, we provide tailored SEO and digital marketing solutions designed to boost your online visibility, drive targeted traffic, and maximize conversions.</p>

          <button className="px-4 sm:px-7 py-2 sm:py-3 mt-5 rounded-full bg-[#acff1c] text-black font-medium text-sm sm:text-xl hover:animate-bounce transition cursor-pointer" data-aos="fade-right" data-aos-duration="1000"> View All Services</button>
        </div>

        <div className="right w-full sm:w-1/2 flex justify-center">
          <img src="/images/service.png" alt="" className="w-150 max-sm:max-w-80 max-sm:m-5"/>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex max-sm:flex-col  flex-wrap gap-6 ">
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
  )
}

