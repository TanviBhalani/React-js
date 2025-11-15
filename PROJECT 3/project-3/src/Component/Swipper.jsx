import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Swipper() {
  return (
    <div className="w-full h-150">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/landscape-with-lake-sunset_395237-259.jpg?semt=ais_hybrid&w=740&q=80')",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* Text Overlay */}
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Slide 1
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/mountain-landscape-cloudy-sky_181624-15652.jpg?semt=ais_hybrid&w=740&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Slide 2
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6676.jpg?semt=ais_hybrid&w=740&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Slide 3
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
