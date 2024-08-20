import React from "react";

const Trusted: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-16 px-4 bg-white">
      <h1 className="text-4xl font-bold text-gray-200 sm:text-6xl absolute z-0">
        TRUSTED
      </h1>
      <div className="flex items-center space-x-6 z-10 mt-12 sm:mt-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/VisualEditor_-_Icon_-_Certification.svg/512px-VisualEditor_-_Icon_-_Certification.svg.png"
          alt="Trusted Art Seller"
          className="h-20 w-20 sm:h-24 sm:w-24"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Seal_of_the_United_States_Department_of_Commerce.svg/1200px-Seal_of_the_United_States_Department_of_Commerce.svg.png"
          alt="Verified Secure Website"
          className="h-20 w-20 sm:h-24 sm:w-24"
        />
      </div>
      <p className="text-sm text-orange-500 mt-8 sm:mt-0 sm:absolute sm:right-4 bottom-4 z-10">
        by artstorefronts
      </p>
    </div>
  );
};

export default Trusted;
