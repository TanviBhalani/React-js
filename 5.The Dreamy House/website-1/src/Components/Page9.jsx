import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "JOHN DOE",
    role: "HOMEOWNER",
    review:
      "Dream House Trading transformed my living space into a modern paradise. Their attention to detail and design expertise are unmatched!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    name: "JOHN DOE",
    role: "HOMEOWNER",
    review:
      "Dream House Trading transformed my living space into a modern paradise. Their attention to detail and design expertise are unmatched!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
  },
  {
    name: "JANE SMITH",
    role: "BUSINESS OWNER",
    review:
      "I hired them for my office redesign, and they exceeded my expectations. My workspace is now functional and stylish!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
  },
  {
    name: "MARK LEE",
    role: "INVESTOR",
    review:
      "Excellent work. The team brought creativity and efficiency together. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  return (
    <div className="bg-[#f5f5f5] py-20 px-4 md:px-20 max-sm:w-[1050px]">
      {/* Header */}
      <div className=" flex flex-col items-center text-center mb-12">
        <h3 className="text-[#f57e16] text-3xl font-medium max-sm:text-5xl">Client Reviews</h3>
        <div className="w-32 h-1 mt-2 rounded-full bg-[#faa825] max-sm:mt-3 max-sm:w-70"></div>
        <h1 className="text-4xl md:text-5xl mt-4 font-semibold max-sm:text-6xl">What our Clients Say</h1>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="border-1 border-[#f57e16] p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full hover:scale-98 transition-transform duration-300 max-sm:mx-10">
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#f57e16] mb-4 max-sm:w-44 max-sm:h-44"
              />
              <h3 className="text-[#f57e16] text-xl font-semibold max-sm:text-5xl">{t.name}</h3>
              <p className="text-gray-600 text-sm mb-4 max-sm:text-3xl max-sm:mt-3">{t.role}</p>
              <p className="text-gray-600 mb-4 max-sm:text-4xl max-sm:leading-13 max-sm:mx-13 max-sm:my-6">"{t.review}"</p>
              <div className="text-yellow-400 text-lg max-sm:text-5xl max-sm:mb-10">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
