"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function Carousel() {
  const images = [
    "/Slideshow-Cover-1.jpg?height=1080&width=1920",
    "/Slideshow-Cover-2.jpg?height=1080&width=1920",
    "/Slideshow-Cover-3.jpg?height=1080&width=1920",
    "/Slideshow-Cover-4.jpg?height=1080&width=1920",
    "/Slideshow-Cover-5.jpg?height=1080&width=1920",
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="w-full max-w-lg"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`Wedding image ${index + 1}`}
              width={1080}
              height={1920}
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
