import React from "react";

const Trusted: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-16 px-4 bg-white">
      {/* Background Text */}
      <h1 className="text-7xl sm:text-9xl font-bold text-gray-200 absolute inset-0 flex items-center justify-center">
        TRUSTED
      </h1>

      {/* Badge Logos */}
      <div className="flex items-center space-x-6 z-10">
        <img
          src="images/badge-1.jpg"
          alt="Trusted Art Seller"
          className="h-20 w-20 sm:h-24 sm:w-24"
        />
        <img
          src="images/badge-2.png"
          alt="Verified Secure Website"
          className="h-20 w-20 sm:h-24 sm:w-24"
        />
      </div>

      {/* Footer Text */}
      <p className="text-sm text-orange-500 mt-8 sm:absolute sm:right-4 sm:bottom-4 z-10">
        by artstorefronts
      </p>
    </div>
  );
};

export default Trusted;
