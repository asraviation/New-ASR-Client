import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../images/logo.png";
import homeIcon from "../images/home.png";
import fleetIcon from "../images/fleet.png";
import aboutIcon from "../images/about.png";
import contactIcon from "../images/contact.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);

  // Refs for animations
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const homeIconRef = useRef(null);
  const fleetIconRef = useRef(null);
  const aboutIconRef = useRef(null);
  const contactIconRef = useRef(null);

  useEffect(() => {
    const tl6 = gsap.timeline();
    tl6.play();
    const ctx = gsap.context(() => {
      tl6.from(
        [
          logoRef.current,
          homeIconRef.current,
          fleetIconRef.current,
          aboutIconRef.current,
          contactIconRef.current,
        ],
        {
          opacity: 0,
          y: -20,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 text-gray-900"
          ref={logoRef}
        >
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-gray-900 font-thin">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:text-yellow-500"
            ref={homeIconRef}
          >
            <img src={homeIcon} alt="Home" className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/fleet"
            className="flex items-center space-x-2 hover:text-yellow-500"
            ref={fleetIconRef}
          >
            <img src={fleetIcon} alt="Fleet" className="h-5 w-5" />
            <span>Fleet</span>
          </Link>
          <Link
            to="/about-us"
            className="flex items-center space-x-2 hover:text-yellow-500"
            ref={aboutIconRef}
          >
            <img src={aboutIcon} alt="About ASR" className="h-5 w-5" />
            <span>About ASR</span>
          </Link>
          <Link
            to="/contact-us"
            className="flex items-center space-x-2 hover:text-yellow-500"
            ref={contactIconRef}
          >
            <img src={contactIcon} alt="Contact Us" className="h-5 w-5" />
            <span>Contact Us</span>
          </Link>

          {/* Dropdown Trigger */}
          <div className="relative">
            <button
              className="cursor-pointer text-gray-900 ml-4"
              onClick={() => setSecondaryMenuOpen(!secondaryMenuOpen)}
            >
              <span className="block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></span>
            </button>

            {/* Dropdown Menu */}
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 bg-white shadow-lg p-4 space-y-2 rounded-lg opacity-0 hidden"
            >
              <Link
                to="/services"
                className="block text-gray-900 hover:text-yellow-500"
              >
                Services
              </Link>
              <Link
                to="/careers"
                className="block text-gray-900 hover:text-yellow-500"
              >
                Careers
              </Link>
              <Link
                to="/blog"
                className="block text-gray-900 hover:text-yellow-500"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
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

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 space-y-4 transform translate-x-full opacity-0"
      >
        <button
          className="absolute top-4 right-4 text-gray-900"
          onClick={() => setMenuOpen(false)}
        >
          ✖
        </button>
        <Link to="/" className="block text-gray-900 hover:text-yellow-500">
          Home
        </Link>
        <Link to="/fleet" className="block text-gray-900 hover:text-yellow-500">
          Fleet
        </Link>
        <Link
          to="/about-us"
          className="block text-gray-900 hover:text-yellow-500"
        >
          About ASR
        </Link>
        <Link
          to="/contact-us"
          className="block text-gray-900 hover:text-yellow-500"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
