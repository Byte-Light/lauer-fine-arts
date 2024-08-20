// components/Hero.tsx

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 text-center md:text-left p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Lauer Fine Art</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Lauer Fine Art</h2>
          <p className="mb-4">
            Lauer Fine Arts is proud to provide customers with high quality, beautifully framed hand painted art at extremely attractive prices. We have a huge range of styles and sizes encompassing the major historical art movements allowing you to easily match your personal taste and display needs to any setting.
          </p>
          <p className="mb-4">
            You can select from paintings as large as 48 × 72 to as small as 7 × 5 with any other sizes in between to fit your space. Lauer Fine Art is your one-stop shop to find timeless art pieces at an unbeatable value.
          </p>
          <p>
            Our art business has been designated as a Trusted Art Seller with The Art Storefronts Organization, meaning you can shop with confidence, and know that we stand behind the quality and value of our products.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center p-4">
          <div className="relative w-full h-full">
            <Image
              src="/path-to-your-image.jpg"
              alt="Artwork"
              className="object-contain"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>

      {/* Trusted Seller Badge */}
      <div className="flex justify-center mt-8">
        <Image
          src="/path-to-your-badge-image.jpg"
          alt="Trusted Art Seller"
          className="w-24 h-24"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default Hero;
