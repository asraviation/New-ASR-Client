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

// Carousel import
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MainPage = () => {
  const [selectedOption, setSelectedOption] = useState("charter");
  const [tripType, setTripType] = useState("one-way");

  
  // Rotating Images for Exclusive Services
  const services = [
    {
      title: "Sky Parties",
      image: skyPartiesImage,
      description: "Celebrate high above the clouds with exclusive sky parties.",
    },
    {
      title: "Air Ambulance",
      image: airAmbulanceImage,
      description: "Swift and safe medical transportation in emergencies.",
    },
    {
      title: "Religious Trip",
      image: religiousTripImage,
      description: "Experience peaceful journeys to sacred destinations with comfort.",
    },
    {
      title: "Air Survey",
      image: airSurveyImage,
      description: "Comprehensive aerial surveys for all industries.",
    },
    {
      title: "Political Campaigns",
      image: politicalCampaignImage,
      description: "Tailored aviation solutions for impactful political campaigns.",
    },
    {
      title: "Wedding Helicopter",
      image: weddingHelicopterImage,
      description: "Make your wedding day special with a grand helicopter ride.",
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
<div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 mt-38 w-full px-4">
  {/* Box 1: Charter & Trip Type Selection */}
  <div className="bg-gray-200 bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-3 flex flex-col space-y-3 w-full max-w-3xl">
    
    {/* Charter & Seat Selection */}
    <div className="flex justify-between items-center px-3">
      <div className="flex space-x-4 text-black">
        <button 
          className={`flex items-center space-x-2 px-2 py-1 rounded-lg ${
            selectedOption === "charter" ? "text-black font-semibold" : "text-gray-500"
          }`}
          onClick={() => setSelectedOption("charter")}
        >
          ✈️ <span>Charter</span>
        </button>
        <Link to="#">
        <button 
          className={`flex items-center space-x-2 px-2 py-1 rounded-lg ${
            selectedOption === "seat" ? "text-black font-semibold" : "text-gray-500"
          }`}
          onClick={() => setSelectedOption("seat")}
        >
          💺 <span>Seat</span>
        </button>
        </Link>
      </div>

      {/* Trip Type Selection */}
      <div className="flex space-x-3">
        {[
          { label: "One way", value: "one-way" },
          { label: "Round Trip", value: "round-trip" },
          { label: "Multi Trip", value: "multi-trip" },
        ].map((option) => (
          <button
            key={option.value}
            className={`text-sm font-medium transition ${
              tripType === option.value
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-700"
            }`}
            onClick={() => setTripType(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Box 2: Flight Search Inputs (Transparent & Wider) */}
  <div className="w-full max-w-3xl">
    <div className="flex space-x-3 p-3 rounded-lg bg-transparent">
      <input
        type="text"
        placeholder="✈️ Where from?"
        className="flex-1 p-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-gray-500"
      />
      <input
        type="text"
        placeholder="✈️ Where to?"
        className="flex-1 p-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-gray-500"
      />
      <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
        Search
      </button>
    </div>
  </div>
</div>
      </div>

      {/* Experience Section */}
      <div className="bg-white py-12 px-8 shadow-lg w-full ">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
          Experience the art of travel with ASR Aviation
        </h1>
        <p className="mt-8 text-lg text-gray-700 max-w-screen-lg mx-auto text-left">
          Indulge in the epitome of luxury travel with ASR AVIATION. Experience a
          world where opulence meets convenience as you embark on journeys
          tailored to exceed your every expectation. With our premium fleet of
          private jets and helicopters, every moment of your travel is adorned
          with sophistication and comfort.
        </p>
      </div>

      {/* Exclusive Services Section */}
      <div className="bg-white py-16 px-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-12">
          Exclusive Services
        </h1>
        <div className="flex items-center space-x-8">
          {/* Left Side: Rotating Image and Description */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-[450px] h-[300px] object-cover rounded-lg shadow-lg"
            />
            <p className="mt-4 text-center text-gray-700 text-lg max-w-md">
              {currentService.description}
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="w-1 bg-yellow-500 h-auto"></div>

          {/* Right Side: Service Titles */}
          <div className="flex-1 flex flex-col space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`text-lg font-semibold cursor-pointer transition-all ${
                  currentServiceIndex === index
                    ? "text-yellow-500 border-l-4 border-yellow-500 pl-4"
                    : "text-gray-700 pl-4"
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

        {/* Join Our Community Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://chat.whatsapp.com/KiOiQr6pVKf44DMu8vUe6X" // Replace with your WhatsApp community invite link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white py-3 px-8 rounded-lg hover:bg-yellow-600 transition mt-10"
          >
            Join Our Community
          </a>
        </div>
      </div>

      {/* Our Offers Section */}
      <div className="bg-white py-16 px-8">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-12">
          Our Offers
        </h1>
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
          ASR offers access to the most extensive fleet in the industry,
          featuring over 3000 aircraft — including super-midsize to ultra-long-range
          aircraft and the world-renowned Gulfstream and Global 7500 jets. Our offers
          cater to all your aviation needs with luxury and convenience at every step
          of your journey.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
