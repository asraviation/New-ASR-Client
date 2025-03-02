import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Image imports
import aircraftImage from "../images/air.png";
import skyPartiesImage from "../images/party.png";
import airAmbulanceImage from "../images/ambulance.png";
import religiousTripImage from "../images/religious.png";
import airSurveyImage from "../images/survey.png";
import politicalCampaignImage from "../images/politics.png";
import weddingHelicopterImage from "../images/wedding.png";
import bombardierImage from "../images/planes/bombardier.jpg";
import citationImage from "../images/planes/citation.jpg";
import falconImage from "../images/planes/falcon.jpeg";
import hawerImage from "../images/planes/hawker.jpeg";
import offer1 from "../images/planes/falcon.jpeg";
import offer2 from "../images/offer2.png";
import offer3 from "../images/offer3.png";
import SeatIcon from "../images/seat1.png";
import FlightIcon from "../images/plane.png";
import WhereIcon from "../images/planeoff.png";
import ToIcon from "../images/planeon.png";
import DateIcon from "../images/calendar.png";
// Carousel import
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MainPage = () => {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const [selectedOption, setSelectedOption] = useState("charter");
  const [tripType, setTripType] = useState("one-way");
  // Rotating Images for Exclusive Services
  const services = [
    {
      title: "Sky Parties",
      image: skyPartiesImage,
      description: "Take your celebrations to the next level with our luxury private jet charter service. Whether it's a milestone birthday, anniversary, or corporate event, experience exclusive aircraft rentals for a seamless and unforgettable journey.",
    },
    {
      title: "Air Ambulance",
      image: airAmbulanceImage,
      description: "ASR Aviation upholds its commitment to excellence with our air ambulance service, ensuring swift, reliable, and life-saving medical transportation when every second counts.",
    },
    {
      title: "Religious Trip",
      image: religiousTripImage,
      description: "Embark on a sacred journey with ASR Chardham Yatra by helicopter. Enjoy VIP darshans, luxury spiritual stays, and exclusive charter flights. Experience India's divine heartlands with ASR Aviaiton-your trusted pilgrimage partner.",
    },
    {
      title: "Air Survey",
      image: airSurveyImage,
      description: "We offer comprehensive air survey solutions tailored to your needs. From aerial photography to mapping and data collection, our advanced aircraft and expert team ensure precision, efficiency, and accuracy.",
    },
    {
      title: "Political Campaigns",
      image: politicalCampaignImage,
      description: "Hire a helicopter for your election campaign with complete security, luxury, and safety tailored for politicians. Ensure seamless travel with VIP helicopter charters for rallies and events.",
    },
    {
      title: "Wedding Helicopter",
      image: weddingHelicopterImage,
      description: "ASR Helicopters offers premium helicopter services for marriage ceremonies across India. Make your wedding grand with our luxury helicopter rentals, ensuring a memorable and spectacular arrival on your special day.",
    },
  ];
  const carouselImages = [
    { src: offer1, alt: "Aircraft 1" },
    { src: offer2, alt: "Aircraft 2" },
    { src: offer3, alt: "Aircraft 3" },
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentServiceIndex];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full h-auto relative">
        <img
          src={aircraftImage}
          alt="Aircraft"
          className="w-full h-auto object-contain objecct-right"
        />

<div className="absolute inset-0 flex flex-col items-center justify-start w-screen px-4 mt-102">
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
          <img src={FlightIcon} alt="Charter Icon" className="w-6 h-auto" />
          <span className={`text-base ${selectedOption === "charter" ? "font-semibold text-black" : "text-gray-500"}`}>
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
          <span className={`text-base ${selectedOption === "seat" ? "font-semibold text-black" : "text-gray-500"}`}>
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
    <img src={WhereIcon} alt="Profile" className="w-5 h-5 rounded-full" />
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
      {/* Experience Section */}
      <div className="bg-white py-8 px-8 shadow-lg w-full ">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
          Experience the art of travel with ASR Aviation
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-screen-lg mx-auto text-left">
        Experience ultimate luxury travel with ASR Aviation, where opulence meets convenience. Our premium fleet of private jets and helicopters ensures a journey tailored to exceed expectations. From sophisticated comfort to seamless service, every moment is designed for an exclusive, first-class experience that redefines private aviation.        </p>
      </div>

{/* Exclusive Services Section */}
<div className="bg-white py-10 px-10 mx-auto max-w-[1400px]"> 
  <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-8">
    Exclusive Services
  </h1>

  <div className="grid grid-cols-12 gap-6 items-center mt-15">
    {/* Left: Large Image */}
    <div className="col-span-5">
      <img
        src={currentService.image}
        alt={currentService.title}
        className="w-[500px] h-[300px] object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Center Left: Description */}
    <div className="col-span-4">
      <p className="text-gray-700 text-lg leading-relaxed">
        {currentService.description}
      </p>
    </div>

    {/* Center Right: Golden Vertical Line */}
    <div className="col-span-1 flex justify-center items-center">
      <div className="w-[3px] bg-yellow-500 h-[80%]"></div>
    </div>

    {/* Right: Service Titles */}
    <div className="col-span-2 flex flex-col space-y-4">
      {services.map((service, index) => (
        <div
          key={index}
          className={`text-lg font-semibold cursor-pointer transition-all ${
            currentServiceIndex === index
              ? "text-yellow-500 font-bold"
              : "text-gray-700"
          }`}
          onClick={() => setCurrentServiceIndex(index)}
        >
          {service.title}
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Featured Deals Section */}
      <div className="bg-gray-50 py-16 px-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-12">
          Featured Deals
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              date: "17 March '25",
              route: "Banglore to Mumbai",
              aircraft: "Bombardier",
              price: "Rs. 1,10,000",
              image: bombardierImage,
            },
            {
              date: "28 March '25",
              route: "Mumbai to Jodhpur",
              aircraft: "Citation XLS",
              price: "Rs. 60,000",
              image: citationImage,
            },
            {
              date: "17 March '25",
              route: "Mumbai to Banglore",
              aircraft: "Falcon 2000",
              price: "Rs. 57,999",
              image: falconImage,
            },
            {
              date: "15 March '25",
              route: "Delhi to Mumbai",
              aircraft: "Hawker Beechcraft",
              price: "Rs. 78,000",
              image: hawerImage,
            },
          ].map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={deal.image}
                alt={deal.route}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="text-gray-600 text-sm flex items-center">
                  <span className="mr-2">✈️</span>
                  {deal.date}
                </div>
                <h3 className="text-lg font-bold mt-2 text-gray-800">
                  {deal.route}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{deal.aircraft}</p>
                <div className="mt-4">
                  <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
                    {deal.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* Join Our Community Section */}
<div className="flex flex-col items-center text-center mt-8">
  {/* Heading */}
  <h2 className="text-3xl font-semibold mt-5 text-center bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">ASR Community</h2>

  {/* Paragraph */}
  <p className="text-gray-600 mt-4 max-w-2xl">
    Join our ASR community to get the best Flight and Airplane Joyride deals and be the first one to grab them. 
    Our community offers exclusive access to limited offers and discounts you won't find anywhere else. 
    Don't miss out - Join the ASR Community Now!
  </p>

  {/* Join Button */}
  <a
    href="https://chat.whatsapp.com/KiOiQr6pVKf44DMu8vUe6X" // Replace with your WhatsApp community invite link
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 bg-yellow-500 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-yellow-600 transition"
  >
    JOIN ASR COMMUNITY NOW
  </a>
</div>

      </div>

      {/* Our Offers Section */}
      <div className="bg-white py-16 px-8">
        
        <div className="flex justify-center space-x-8">
          <div className="w-[300px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              src={offer1}
              alt="Offer 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[300px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              src={offer2}
              alt="Offer 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[300px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              src={offer3}
              alt="Offer 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="mt-8 text-lg text-center text-gray-700 max-w-screen-lg mx-auto">
        ASR offers access to 3,000+ aircraft, including super-midsize, ultra-long-range jets, Gulfstream, and Global 7500. We provide luxury, comfort, and seamless private jet travel, ensuring a premium experience tailored to your needs. Elevate your journey with world-class aviation services designed for efficiency, convenience, and exclusivity at every step.        </p>
      </div>
    </div>
  );
};

export default MainPage;
