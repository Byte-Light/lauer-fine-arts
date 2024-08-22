"use client"
import React, { useState } from "react";
import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href}  className="text-lg text-gray-300 hover:text-white transition-colors duration-300 ease-in-out">
        {children}

    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl font-extrabold tracking-widest">
          LAUER FINE ART
        </div>

        {/* Burger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <NavLink href="/shop-art">Shop Art</NavLink>
            <NavLink href="/about">About Lauer Fine Art</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/faqs">FAQs</NavLink>
            <NavLink href="/sacred-art">Sacred Art</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
