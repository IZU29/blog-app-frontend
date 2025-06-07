// components/SwiperSlideshow.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../public/index.css"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/05.jpg",
  "/images/4.jpg",
  "/images/mm.jpg",
];

export default function SwiperSlideshow() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-2xl shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 hover:bg-black/40 rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
