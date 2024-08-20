// components/Navbar.tsx

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Brand Name */}
        <div className="text-lg font-bold tracking-widest">
          LAUER FINE ART
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 md:space-x-8">
          <Link href="/shop-art" className="hover:text-gray-400 transition duration-300">
            Shop Art
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition duration-300">
            About Lauer Fine Art
          </Link>
          <Link href="/contact" className="hover:text-gray-400 transition duration-300">
            Contact
          </Link>
          <Link href="/faqs" className="hover:text-gray-400 transition duration-300">
            FAQs
          </Link>
          <Link href="/sacred-art" className="hover:text-gray-400 transition duration-300">
            Sacred Art
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
