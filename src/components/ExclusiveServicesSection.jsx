import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Image imports
import skyPartiesImage from "../images/party.png";
import airAmbulanceImage from "../images/ambulance.png";
import religiousTripImage from "../images/religious.png";
import airSurveyImage from "../images/survey.png";
import politicalCampaignImage from "../images/politics.png";
import weddingHelicopterImage from "../images/wedding.png";

gsap.registerPlugin(ScrollTrigger);

const ExclusiveServicesSection = () => {
  const services = [
    {
      title: "Sky Parties",
      image: skyPartiesImage,
      description:
        "Take your celebrations to the next level with our luxury private jet charter service. Whether it's a milestone birthday, anniversary, or corporate event, experience exclusive aircraft rentals for a seamless and unforgettable journey.",
    },
    {
      title: "Air Ambulance",
      image: airAmbulanceImage,
      description:
        "ASR Aviation upholds its commitment to excellence with our air ambulance service, ensuring swift, reliable, and life-saving medical transportation when every second counts.",
    },
    {
      title: "Religious Trip",
      image: religiousTripImage,
      description:
        "Embark on a sacred journey with ASR Chardham Yatra by helicopter. Enjoy VIP darshans, luxury spiritual stays, and exclusive charter flights. Experience India's divine heartlands with ASR Aviaiton-your trusted pilgrimage partner.",
    },
    {
      title: "Air Survey",
      image: airSurveyImage,
      description:
        "We offer comprehensive air survey solutions tailored to your needs. From aerial photography to mapping and data collection, our advanced aircraft and expert team ensure precision, efficiency, and accuracy.",
    },
    {
      title: "Political Campaigns",
      image: politicalCampaignImage,
      description:
        "Hire a helicopter for your election campaign with complete security, luxury, and safety tailored for politicians. Ensure seamless travel with VIP helicopter charters for rallies and events.",
    },
    {
      title: "Wedding Helicopter",
      image: weddingHelicopterImage,
      description:
        "ASR Helicopters offers premium helicopter services for marriage ceremonies across India. Make your wedding grand with our luxury helicopter rentals, ensuring a memorable and spectacular arrival on your special day.",
    },
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const currentService = services[currentServiceIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [services.length]);

  const servicesh1Ref = useRef(null);
  const servicesimgRef = useRef(null);
  const servicesdescRef = useRef(null);
  const servicesTitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.play();

    const ctx = gsap.context(() => {
      tl.from([servicesh1Ref.current], {
        opacity: 0,
        y: -10,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesh1Ref.current,
          start: "top 55%",
          end: "top 5%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      tl.from([servicesimgRef.current], {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesimgRef.current,
          start: "top 50%",
          end: "top 5%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      tl.from([servicesdescRef.current], {
        opacity: 0,
        y: -100,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesdescRef.current,
          start: "top 55%",
          end: "top 5%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      tl.from([servicesTitleRef.current], {
        opacity: 0,
        y: -100,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesTitleRef.current,
          start: "top 55%",
          end: "top 5%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ctx.revert();
      tl.kill();
    };
  }, []);

  return (
    <div className="bg-white py-10 px-10 mx-auto max-w-[1400px]">
      <h1
        className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-8"
        ref={servicesh1Ref}
      >
        Exclusive Services
      </h1>

      <div className="grid grid-cols-12 gap-6 items-center mt-15">
        {/* Left: Large Image */}
        <div className="col-span-5">
          <img
            src={currentService.image}
            alt={currentService.title}
            className="w-[500px] h-[300px] object-cover rounded-lg shadow-lg"
            ref={servicesimgRef}
          />
        </div>

        {/* Center Left: Description */}
        <div className="col-span-4">
          <p
            className="text-gray-700 text-lg leading-relaxed"
            ref={servicesdescRef}
          >
            {currentService.description}
          </p>
        </div>

        {/* Center Right: Golden Vertical Line */}
        <div className="col-span-1 flex justify-center items-center">
          <div className="w-[3px] bg-yellow-500 h-[80%]"></div>
        </div>

        {/* Right: Service Titles */}
        <div
          className="col-span-2 flex flex-col space-y-4"
          ref={servicesTitleRef}
        >
          {services.map((service, index) => (
            <div
              id="servicesTitle"
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
  );
};

export default ExclusiveServicesSection;
