import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo-asr.png";

const Navbar = () => {
  // State to manage the primary menu (for hamburger)
  const [menuOpen, setMenuOpen] = useState(false);

  // State to manage the secondary menu visibility
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2 text-gray-900">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto hover:text-gray-400"
          />
          <span className="font-sans font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">ASR Aviaiton</span>
        </div>

        {/* Primary Navigation Links (Visible on all screens) */}
        <div className="hidden md:flex items-center space-x-6 text-gray-900 font-thin">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <Link to="/fleet" className="hover:text-yellow-500">Fleet</Link>
          <Link to="/about-us" className="hover:text-yellow-500">About ASR Aviaiton</Link>
          <Link to="/contact-us" className="hover:text-yellow-500">Contact Us</Link>

          {/* Small Triangular Box to Toggle Secondary Menu */}
          <div
            className="cursor-pointer text-gray-900 ml-4"
            onClick={() => setSecondaryMenuOpen(!secondaryMenuOpen)} // Toggles visibility of secondary menu
          >
            <span className="block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></span>
          </div>
        </div>

        {/* Hamburger Menu Icon for mobile */}
        <button
          className="text-gray-900 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Secondary Links Inside Dropdown Menu (Visible only when triangle is clicked) */}
      {secondaryMenuOpen && (
        <div className="bg-white text-gray-900 p-4 space-y-4">
          {/* <Link to="/profile" className="block hover:text-yellow-500">Profile</Link>
          <Link to="/settings" className="block hover:text-yellow-500">Settings</Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;