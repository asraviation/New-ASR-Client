import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import homeIcon from "../images/home.png";
import fleetIcon from "../images/fleet.png";
import aboutIcon from "../images/about.png";
import contactIcon from "../images/contact.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-gray-900">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
          {/* <span className="font-sans font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
            ASR Aviation
          </span> */}
        </div>

        {/* Primary Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-gray-900 font-thin">
          <Link to="/" className="flex items-center space-x-2 hover:text-yellow-500">
            <img src={homeIcon} alt="Home" className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/fleet" className="flex items-center space-x-2 hover:text-yellow-500">
            <img src={fleetIcon} alt="Fleet" className="h-5 w-5" />
            <span>Fleet</span>
          </Link>
          <Link to="/about-us" className="flex items-center space-x-2 hover:text-yellow-500">
            <img src={aboutIcon} alt="About ASR" className="h-5 w-5" />
            <span>About ASR</span>
          </Link>
          <Link to="/contact-us" className="flex items-center space-x-2 hover:text-yellow-500">
            <img src={contactIcon} alt="Contact Us" className="h-5 w-5" />
            <span>Contact Us</span>
          </Link>

          {/* Dropdown Trigger */}
          <div className="cursor-pointer text-gray-900 ml-4" onClick={() => setSecondaryMenuOpen(!secondaryMenuOpen)}>
            <span className="block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></span>
          </div>
        </div>

        {/* Hamburger Menu */}
        <button className="text-gray-900 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Secondary Menu */}
      {secondaryMenuOpen && (
        <div className="bg-white text-gray-900 p-4 space-y-4"></div>
      )}
    </nav>
  );
};

export default Navbar;
