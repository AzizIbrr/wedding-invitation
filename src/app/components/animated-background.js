"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AnimatedBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/Slideshow-Cover-1.jpg?height=1920&width=1080",
    "/Slideshow-Cover-2.jpg?height=1920&width=1080",
    "/Slideshow-Cover-3.jpg?height=1920&width=1080",
    "/Slideshow-Cover-4.jpg?height=1920&width=1080",
    "/Slideshow-Cover-5.jpg?height=1920&width=1080",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Wedding background ${index + 1}`}
            fill
            className="animate-ken-burns object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="hero-overlay" />
    </div>
  );
}
