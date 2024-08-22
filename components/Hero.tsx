"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Hero: React.FC = () => {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ];

  // Custom Arrow Components
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-20 hover:bg-opacity-75 transition-all duration-300"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 cursor-pointer z-20 hover:bg-opacity-75 transition-all duration-300"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div style={{ padding: "10px" }}>
        <ul style={{ margin: "0px", display: "flex", justifyContent: "center", gap: "8px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        className="w-3 h-3 bg-white rounded-full"
        style={{
          border: "2px solid #4A90E2",
        }}
      ></div>
    ),
  };

  return (
    <section className="relative bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="slider-container relative">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative h-72 md:h-[500px]">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Modern Overlay with Animated Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black flex items-center justify-center">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white animate-fadeIn opacity-0 transition-opacity duration-1000 delay-300">
                    Stunning Art {index + 1}
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
