import React from "react";

const Trusted: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 sm:flex-row sm:justify-between bg-white">
      <h1 className="text-4xl font-bold text-gray-200 absolute sm:static sm:text-6xl">
        TRUSTED
      </h1>
      <div className="flex items-center space-x-6 z-10 mt-12 sm:mt-0">
        <img src="/path-to-your-first-badge.png" alt="Trusted Art Seller" className="h-20 w-20 sm:h-24 sm:w-24" />
        <img src="/path-to-your-second-badge.png" alt="Verified Secure Website" className="h-20 w-20 sm:h-24 sm:w-24" />
      </div>
      <p className="text-sm text-orange-500 mt-4 sm:mt-0 sm:absolute sm:right-4">
        by artstorefronts
      </p>
    </div>
  );
};

export default Trusted;
