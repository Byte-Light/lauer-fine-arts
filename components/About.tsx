import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
            About Lauer Fine Art
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Lauer Fine Art
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Lauer Fine Arts is proud to provide customers with high quality, beautifully framed hand-painted art at extremely attractive prices. We have a huge range of styles and sizes encompassing the major historical art movements, allowing you to easily match your personal taste and display needs to any setting.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            You can select from paintings as large as 48 × 72 to as small as 7 × 5 with any other sizes in between to fit your space. Lauer Fine Art is your one-stop shop to find timeless art pieces at an unbeatable value.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our art business has been designated as a Trusted Art Seller with The Art Storefronts Organization, meaning you can shop with confidence, and know that we stand behind the quality and value of our products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
