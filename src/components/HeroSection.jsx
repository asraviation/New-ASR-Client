import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import gsap from "gsap";
import Calendar from "./Calender";

// Using your existing icon imports
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
  const [showCalendar, setShowCalendar] = useState(false);

  const mainRef = useRef(null);
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const swapIconRef = useRef(null);
  const calendarRef = useRef(null);

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

    // Add click outside listener to close calendar
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      ctx.revert();
      tl.kill();
    };
  }, []);

  const handleSwap = () => {
    const tempFrom = fromValue;
    const tempTo = toValue;
    const tl = gsap.timeline();

    // Animate the swap icon with a continuous rotation
    tl.to(swapIconRef.current, {
      duration: 0.6,
      rotation: 180,
      ease: "power2.inOut",
    });

    // Animate the from input
    tl.to(
      fromInputRef.current.parentElement,
      {
        duration: 0.4,
        x: 20,
        opacity: 0,
        scale: 0.95,
        ease: "power2.inOut",
      },
      "-=0.5"
    );

    // Animate the to input
    tl.to(
      toInputRef.current.parentElement,
      {
        duration: 0.4,
        x: -20,
        opacity: 0,
        scale: 0.95,
        ease: "power2.inOut",
      },
      "-=0.4"
    );

    // Swap values
    tl.add(() => {
      setFromValue(tempTo);
      setToValue(tempFrom);
    });

    // Bring back the inputs with new values
    tl.to(
      [fromInputRef.current.parentElement, toInputRef.current.parentElement],
      {
        duration: 0.4,
        x: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        stagger: 0.1,
      }
    );

    // Reset the swap icon rotation smoothly
    tl.to(swapIconRef.current, {
      duration: 0,
      rotation: 0,
      delay: 0.1,
    });
  };

  const handleDateSelection = (year, month, day, formattedDate, isoDate) => {
    // Use the formatted date for display and the ISO date for data processing
    setDateValue(formattedDate);
    // You can store the ISO date in a separate state variable if needed for API calls
    // setIsoDateValue(isoDate);
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Image - Full private jet with mountains */}
      <img
        src={aircraftImage}
        alt="Private Jet with Mountain Backdrop"
        className="absolute w-full h-full object-cover"
      />

      {/* Content Container */}
      <div
        ref={mainRef}
        className="absolute inset-0 flex items-center justify-center px-4"
      >
        {/* Booking Panel */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-5xl">
          {/* Top Row: Charter/Seat Selection and Trip Type */}
          <div className="flex justify-between items-center mb-8">
            {/* Charter & Seat Selection */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    name="flightType"
                    value="charter"
                    checked={selectedOption === "charter"}
                    onChange={() => setSelectedOption("charter")}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border ${
                      selectedOption === "charter"
                        ? "border-blue-800 bg-blue-800"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedOption === "charter" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    )}
                  </div>
                </div>
                <img src={FlightIcon} alt="Charter" className="w-5 h-5" />
                <span
                  className={`text-sm font-medium ${
                    selectedOption === "charter"
                      ? "text-blue-800"
                      : "text-gray-600"
                  }`}
                >
                  Charter
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative flex items-center">
                  <input
                    type="radio"
                    name="flightType"
                    value="seat"
                    checked={selectedOption === "seat"}
                    onChange={() => setSelectedOption("seat")}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border ${
                      selectedOption === "seat"
                        ? "border-blue-800 bg-blue-800"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedOption === "seat" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    )}
                  </div>
                </div>
                <img src={SeatIcon} alt="Seat" className="w-5 h-5" />
                <span
                  className={`text-sm font-medium ${
                    selectedOption === "seat"
                      ? "text-blue-800"
                      : "text-gray-600"
                  }`}
                >
                  Seat
                </span>
              </label>
            </div>

            {/* Trip Type Selection */}
            <div className="bg-blue-50 rounded-full p-1 flex">
              {["One Way", "Round Trip", "Multi Trip"].map((option) => {
                const value = option.toLowerCase().replace(" ", "-");
                return (
                  <button
                    key={value}
                    className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                      tripType === value
                        ? "bg-blue-100 text-blue-800"
                        : "text-gray-600 hover:text-blue-800"
                    }`}
                    onClick={() => setTripType(value)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Input Fields and Button */}
          <div className="grid grid-cols-4 gap-12 relative">
            {/* Where from? */}
            <div className="relative group" style={{ zIndex: 20 }}>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                <img
                  src={WhereIcon}
                  alt="From"
                  className="w-5 h-5 text-gray-400 transition-all duration-200 group-focus-within:text-amber-500"
                />
              </div>
              <input
                ref={fromInputRef}
                type="text"
                placeholder="Where from?"
                className="w-full h-12 pl-12 pr-4 bg-gray-50 rounded-lg border-2 border-transparent 
                          focus:border-[rgba(246,226,150,1)] focus:ring-0 focus:outline-none focus:bg-white 
                          transition-all duration-200 hover:bg-gray-100"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
              />
            </div>

            {/* Swap Icon */}
            <div
              className="absolute left-52 top-1/2 -translate-y-1/2"
              style={{ zIndex: 30 }}
            >
              <button
                ref={swapIconRef}
                onClick={handleSwap}
                className="bg-white rounded-full p-2  transition-all duration-200 focus:outline-none"
                aria-label="Swap destinations"
              >
                <svg
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4262 17.8438L20.0625 12.6146H0.9375M6.57375 1.15625L0.9375 6.38542L20.0625 6.38542"
                    stroke="#D9C33D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Where to? */}
            <div className="relative group" style={{ zIndex: 20 }}>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                <img
                  src={ToIcon}
                  alt="To"
                  className="w-5 h-5 text-gray-400 transition-all duration-200 group-focus-within:text-amber-500"
                />
              </div>
              <input
                ref={toInputRef}
                type="text"
                placeholder="Where to?"
                className="w-full h-12 pl-12 pr-4 bg-gray-50 rounded-lg border-2 border-transparent 
                          focus:border-[rgba(246,226,150,1)] focus:ring-0 focus:outline-none focus:bg-white 
                          transition-all duration-200 hover:bg-gray-100"
                value={toValue}
                onChange={(e) => setToValue(e.target.value)}
              />
            </div>

            {/* Date */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                <img
                  src={DateIcon}
                  alt="Date"
                  className="w-5 h-5 text-gray-400 transition-all duration-200 group-focus-within:text-amber-500"
                />
              </div>
              <input
                type="text"
                placeholder="Select date"
                className="w-full h-12 pl-12 pr-4 bg-gray-50 rounded-lg border-2 border-transparent 
                          focus:border-[rgba(246,226,150,1)] focus:ring-0 focus:outline-none focus:bg-white 
                          transition-all duration-200 hover:bg-gray-100 cursor-pointer"
                value={dateValue}
                onClick={toggleCalendar}
                readOnly
              />
              {showCalendar && (
                <div
                  ref={calendarRef}
                  className="absolute top-full left-0 mt-2 z-50"
                  style={{ width: "280px" }}
                >
                  <CalendarWrapper onSelectDate={handleDateSelection} />
                </div>
              )}
            </div>

            {/* Book Now Button */}
            <Link to="/form" className="block">
              <button
                className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors 
                               shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrapper component to adapt Calendar component to our needs
const CalendarWrapper = ({ onSelectDate }) => {
  const handleDateSelected = (year, month, day) => {
    // Create a date object with the selected date
    const selectedDate = new Date(year, month, day);

    // Format the date in a more user-friendly way (e.g., "Jan 15, 2023")
    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    // Also create the ISO string format for data processing
    const isoDate = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD

    // Pass both formats to the parent component
    onSelectDate(year, month, day, formattedDate, isoDate);
  };

  return <Calendar onSelectDate={handleDateSelected} />;
};
CalendarWrapper.propTypes = {
  onSelectDate: PropTypes.func.isRequired,
};

export default HeroSection;
