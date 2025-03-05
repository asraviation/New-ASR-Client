import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import aircraftImage from "../images/air.png";
import FlightIcon from "../images/plane.png";
import SeatIcon from "../images/seat1.png";
import WhereIcon from "../images/planeoff.png";
import ToIcon from "../images/planeon.png";
import DateIcon from "../images/calendar.png";

const HeroSection = () => {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("charter");
  const [tripType, setTripType] = useState("one-way");

  const mainRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.play();

    const ctx = gsap.context(() => {
      tl.from([mainRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
      });
    });

    return () => {
      ctx.revert();
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full h-auto relative">
      <img
        src={aircraftImage}
        alt="Aircraft"
        className="w-full h-auto object-contain objecct-right"
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-start w-screen px-4 mt-102"
        ref={mainRef}
      >
        <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl p-6 w-260 h-auto">
          {/* Charter & Seat Selection */}
          <div className="flex justify-between items-center px-4">
            <div className="flex space-x-6 text-ƒblack">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="flightType"
                  value="charter"
                  checked={selectedOption === "charter"}
                  onChange={() => setSelectedOption("charter")}
                  className="w-5 h-5 accent-gray-500"
                />
                <img
                  src={FlightIcon}
                  alt="Charter Icon"
                  className="w-6 h-auto"
                />
                <span
                  className={`text-base ${
                    selectedOption === "charter"
                      ? "font-semibold text-black"
                      : "text-gray-500"
                  }`}
                >
                  Charter
                </span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="flightType"
                  value="seat"
                  checked={selectedOption === "seat"}
                  onChange={() => setSelectedOption("seat")}
                  className="w-5 h-5 accent-gray-500"
                />
                <img src={SeatIcon} alt="Seat Icon" className="w-6 h-auto" />
                <span
                  className={`text-base ${
                    selectedOption === "seat"
                      ? "font-semibold text-black"
                      : "text-gray-500"
                  }`}
                >
                  Seat
                </span>
              </label>
            </div>

            {/* Trip Type Selection */}
            <div className="flex bg-gray-100 p-1 rounded-full">
              {[
                { label: "One Way", value: "one-way" },
                { label: "Round Trip", value: "round-trip" },
                { label: "Multi Trip", value: "multi-trip" },
              ].map((option) => (
                <button
                  key={option.value}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition ${
                    tripType === option.value
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setTripType(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Fields (Now in One Row) */}
          <div className="grid grid-cols-4 gap-3 mt-6 px-4">
            {/* Where From Input with Image */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-3 flex items-center space-x-2 pointer-events-none">
                <img
                  src={WhereIcon}
                  alt="Profile"
                  className="w-5 h-5 rounded-full"
                />
                <span
                  className={`text-gray-500 text-sm absolute left-10 transition-all ${
                    fromValue ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Where from?
                </span>
              </div>
              <input
                type="text"
                className="rounded-lg pl-24 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
              />
            </div>

            {/* Where To Input with Image */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-3 flex items-center space-x-2 pointer-events-none">
                <img src={ToIcon} alt="To" className="w-5 h-5 rounded-full" />
                <span
                  className={`text-gray-500 text-sm absolute left-10 transition-all ${
                    toValue ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Where to?
                </span>
              </div>
              <input
                type="text"
                className="rounded-lg pl-24 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={toValue}
                onChange={(e) => setToValue(e.target.value)}
              />
            </div>

            {/* Date Input with Icon and Placeholder "Today" */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-3 flex items-center space-x-2 pointer-events-none">
                <img src={DateIcon} alt="Calendar" className="w-5 h-5" />
                <span
                  className={`text-gray-500 text-sm absolute left-10 transition-all ${
                    dateValue ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Today
                </span>
              </div>
              <input
                type="date"
                className="rounded-lg pl-24 pr-4 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
              />
            </div>

            <Link to="/form">
              <button className="bg-yellow-500 text-white font-semibold py-2 rounded-lg w-full hover:bg-yellow-600 transition">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
