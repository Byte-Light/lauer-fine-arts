"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Trusted: React.FC = () => {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);

  const handleMouseEnter = (badgeIndex: number) => {
    setHoveredBadge(badgeIndex);
  };

  const handleMouseLeave = () => {
    setHoveredBadge(null);
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center py-16 px-4 bg-white"
      initial={{ height: "auto" }}
      animate={{ height: "auto" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ overflow: "hidden" }} // Ensures smooth transition without content overflow
    >
      {/* Background Text */}
      <h1 className="text-8xl sm:text-[15rem] font-bold text-gray-100 absolute inset-0 flex items-center justify-center">
        TRUSTED
      </h1>

      {/* Badge Logos */}
      <div className="flex items-center space-x-8 z-10">
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          style={{ height: "150px", width: "150px" }}
        >
          <img
            src="images/badge-1.jpeg"
            alt="Trusted Art Seller"
            className="h-20 w-20 sm:h-24 sm:w-24"
          />
          <AnimatePresence>
            {hoveredBadge === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mt-4 text-center w-64 p-2 bg-white rounded-lg shadow-lg"
                style={{ zIndex: 10 }}
              >
                <h1 className="text-lg font-bold text-gray-900">
                  TRUSTED ART SELLER
                </h1>
                <p className="text-sm text-gray-700 break-words">
                  The presence of this badge signifies that this business has
                  officially registered with the Art.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          style={{ height: "150px", width: "150px" }}
        >
          <img
            src="images/badge-2.png"
            alt="Verified Secure Website"
            className="h-20 w-20 sm:h-24 sm:w-24"
          />
          <AnimatePresence>
            {hoveredBadge === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mt-4 text-center w-64 p-2 bg-white rounded-lg shadow-lg"
                style={{ zIndex: 10 }}
              >
                <h1 className="text-lg font-bold text-gray-900">
                  VERIFIED SECURE WEBSITE
                </h1>
                <p className="text-sm text-gray-700 break-words">
                  This website provides a secure checkout with SSL encryption.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-orange-500 mt-8 sm:absolute sm:right-4 sm:bottom-4 z-10">
        by artstorefronts
      </p>
    </motion.div>
  );
};

export default Trusted;
