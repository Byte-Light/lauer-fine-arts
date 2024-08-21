"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Hero: React.FC = () => {
  const images = [
    "/images/lauer-badge.png",
    "/images/lauer-hero-cover.png",
    "/images/lauer-badge.png",
    "/images/lauer-hero-cover.png",
    "/images/lauer-badge.png",
  ];

  // Custom Arrow Components
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-20"
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-20"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div style={{ padding: "10px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        className="w-4 h-4 bg-gray-400 rounded-full inline-block"
        style={{
          border: "1px solid #fff",
        }}
      ></div>
    ),
  };

  return (
    <section className="relative bg-gray-800 text-white py-12">
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900 flex items-center justify-center">
                  {/* <h2 className="text-3xl md:text-5xl font-extrabold text-white animate-fadeIn">
                    Beautiful Slide {index + 1}
                  </h2> */}
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
