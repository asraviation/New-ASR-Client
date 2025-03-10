import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../images/logo.png";
import homeIcon from "../images/home.png";
import fleetIcon from "../images/fleet.png";
import aboutIcon from "../images/about.png";
import contactIcon from "../images/contact.png";
import logoasr from "../images/logo-asr.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Refs for animations
  const navRef = useRef(null);
  const navBgRef = useRef(null);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const homeIconRef = useRef(null);
  const fleetIconRef = useRef(null);
  const aboutIconRef = useRef(null);
  const contactIconRef = useRef(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10 && !scrolled) {
        setScrolled(true);
        // Animate navbar background appearing
        gsap.to(navBgRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      } else if (scrollPosition <= 10 && scrolled) {
        setScrolled(false);
        // Animate navbar background disappearing
        gsap.to(navBgRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Initial animations for nav elements
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

  // Toggle secondary menu with animation
  useEffect(() => {
    if (dropdownRef.current) {
      if (secondaryMenuOpen) {
        gsap.to(dropdownRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          display: "block",
          ease: "power2.out",
        });
      } else {
        gsap.to(dropdownRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            if (dropdownRef.current) dropdownRef.current.style.display = "none";
          },
        });
      }
    }
  }, [secondaryMenuOpen]);

  // Mobile menu toggle with animation
  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(menuRef.current, {
          x: "100%",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    }
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 transition-all duration-300"
    >
      {/* Glassomorphic background - starts invisible */}
      <div
        ref={navBgRef}
        className="absolute inset-0 backdrop-blur-md bg-white/70 shadow-md opacity-0"
      ></div>

      <div className="container mx-auto flex justify-between items-center p-4 relative z-10">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 text-gray-900"
          ref={logoRef}
        >
          <img src={logoasr} alt="Logo" className="h-10 w-auto" />
          <h3 className="text-yellow-500">ASR AVIATION</h3>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-gray-900 font-thin">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:text-yellow-500 transition-colors duration-300"
            ref={homeIconRef}
          >
            <img src={homeIcon} alt="Home" className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/fleet"
            className="flex items-center space-x-2 hover:text-yellow-500 transition-colors duration-300"
            ref={fleetIconRef}
          >
            <img src={fleetIcon} alt="Fleet" className="h-5 w-5" />
            <span>Fleet</span>
          </Link>
          <Link
            to="/about-us"
            className="flex items-center space-x-2 hover:text-yellow-500 transition-colors duration-300"
            ref={aboutIconRef}
          >
            <img src={aboutIcon} alt="About ASR" className="h-5 w-5" />
            <span>About ASR</span>
          </Link>
          <Link
            to="/contact-us"
            className="flex items-center space-x-2 hover:text-yellow-500 transition-colors duration-300"
            ref={contactIconRef}
          >
            <img src={contactIcon} alt="Contact Us" className="h-5 w-5" />
            <span>Contact Us</span>
          </Link>

          {/* Dropdown Trigger */}
          <div className="relative">
            <button
              className="cursor-pointer text-gray-900 ml-4 transition-transform duration-300 hover:scale-110"
              onClick={() => setSecondaryMenuOpen(!secondaryMenuOpen)}
            >
              <span
                className={`block w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900 transition-transform duration-300 ${
                  secondaryMenuOpen ? "rotate-180" : ""
                }`}
              ></span>
            </button>

            {/* Dropdown Menu */}
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 bg-white/80 backdrop-blur-md shadow-lg p-4 space-y-2 rounded-lg opacity-0 hidden"
            >
              <Link
                to="/services"
                className="block text-gray-900 hover:text-yellow-500 transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                to="/careers"
                className="block text-gray-900 hover:text-yellow-500 transition-colors duration-300"
              >
                Careers
              </Link>
              <Link
                to="/blog"
                className="block text-gray-900 hover:text-yellow-500 transition-colors duration-300"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-gray-900 md:hidden transition-transform duration-300 hover:scale-110"
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
        className="fixed top-0 right-0 h-full w-64 bg-white/90 backdrop-blur-md shadow-lg p-6 space-y-4 transform translate-x-full opacity-0 z-50"
      >
        <button
          className="absolute top-4 right-4 text-gray-900 transition-transform duration-300 hover:scale-110 hover:rotate-90"
          onClick={() => setMenuOpen(false)}
        >
          ✖
        </button>
        <Link
          to="/"
          className="block text-gray-900 hover:text-yellow-500 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/fleet"
          className="block text-gray-900 hover:text-yellow-500 transition-colors duration-300"
        >
          Fleet
        </Link>
        <Link
          to="/about-us"
          className="block text-gray-900 hover:text-yellow-500 transition-colors duration-300"
        >
          About ASR
        </Link>
        <Link
          to="/contact-us"
          className="block text-gray-900 hover:text-yellow-500 transition-colors duration-300"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
