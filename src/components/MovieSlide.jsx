import React, { useState } from "react";
import m1 from "../assets/img/m1.jpeg";
import m2 from "../assets/img/m2.jpeg";
import m3 from "../assets/img/m3.jpeg";
import m4 from "../assets/img/m4.jpeg";
const images = [m1, m2, m3, m4, m1, m2, m3, m4, m1, m2, m3, m4, m1, m2, m3];
const MovieSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(images.length)) % Math.ceil(images.length)
    );
  };

  return (
    <div className="relative w-full">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="w-1/2 p-2" key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ›
      </button>
      <div className="flex justify-center mt-2">
        {Array.from({ length: Math.ceil(images.length / 4) }).map(
          (_, index) => (
            <span
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></span>
          )
        )}
      </div>
    </div>
  );
};

export default MovieSlide;
