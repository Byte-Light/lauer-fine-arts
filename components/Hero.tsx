"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero: React.FC = () => {
  const images = [
    "/images/lauer-badge.png",
    "/images/lauer-hero-cover.png",
    "/images/lauer-badge.png",
    "/images/lauer-hero-cover.png",
    "/images/lauer-badge.png",
  ];

  const settings = {
    dots: true,
    fade: true, // Enable fade-in effect
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section className="relative bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative h-72 md:h-[500px]">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Optional: Add an overlay with text */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h2 className="text-2xl md:text-4xl font-bold">
                    Slide {index + 1}
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
