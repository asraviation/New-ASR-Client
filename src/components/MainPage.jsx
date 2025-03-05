import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import ExclusiveServicesSection from "./ExclusiveServicesSection";

gsap.registerPlugin(ScrollTrigger);
// Image imports
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
  const carouselImages = [
    { src: offer1, alt: "Aircraft 1" },
    { src: offer2, alt: "Aircraft 2" },
    { src: offer3, alt: "Aircraft 3" },
  ];

  // Keeping only refs used in remaining sections
  const featureDealsTitleRef = useRef(null);
  const featureCardsRef = useRef(null);
  const communityyRef = useRef(null);
  const communityparaRef = useRef(null);
  const communityButtonRef = useRef(null);
  const offerRef1 = useRef(null);
  const offerRef2 = useRef(null);
  const offerRef3 = useRef(null);
  const offerparaRef = useRef(null);

  useEffect(() => {
    const tl4 = gsap.timeline();
    tl4.play();

    const ctx1 = gsap.context(() => {
      // Removed Experience Section and Exclusive Services animations

      tl4.from([featureDealsTitleRef.current], {
        opacity: 0,
        y: -100,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: featureDealsTitleRef.current,
          start: "top 55%",
          end: "top 5%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      tl4.from([featureCardsRef.current], {
        opacity: 0,
        y: -100,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: featureCardsRef.current,
          start: "top 55%",
          end: "top 5%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      tl4.from([communityyRef.current], {
        opacity: 0,
        x: -1000,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: communityyRef.current,
          start: "top 70%",
          end: "top 35%",
          scrub: 1,
          scale: 1.5,
          toggleActions: "play none none reverse",
        },
      });

      tl4.from([communityparaRef.current], {
        opacity: 0,
        x: -800,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: communityparaRef.current,
          start: "top 70%",
          end: "top 35%",
          scrub: 1,
          scale: 1.5,
          toggleActions: "play none none reverse",
        },
      });

      tl4.from([communityButtonRef.current], {
        opacity: 0,
        x: -800,
        duration: 0.5,
        ease: "sine.out",
        scrollTrigger: {
          trigger: communityButtonRef.current,
          start: "top 70%",
          end: "top 35%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      tl4.from([offerRef1.current], {
        opacity: 0,
        x: -100,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: offerRef1.current,
          start: "top 50%",
          end: "top 5%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      tl4.from([offerRef2.current], {
        opacity: 0,
        x: -100,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: offerRef2.current,
          start: "top 50%",
          end: "top 5%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      tl4.from([offerRef3.current], {
        opacity: 0,
        x: -100,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: offerRef3.current,
          start: "top 50%",
          end: "top 5%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      tl4.from([offerparaRef.current], {
        opacity: 0,
        x: -400,
        duration: 0.5,
        ease: "sine.out",
        scrollTrigger: {
          trigger: offerparaRef.current,
          start: "top 100%",
          end: "top 35%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
    }, []);

    return () => {
      ctx1.revert();
      tl4.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Exclusive Services Section */}
      <ExclusiveServicesSection />

      {/* Featured Deals Section */}
      <div className="bg-gray-50 py-16 px-8">
        <h1
          className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-12"
          ref={featureDealsTitleRef}
        >
          Featured Deals
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          ref={featureCardsRef}
        >
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
          <h2
            className="text-3xl font-semibold mt-5 text-center bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent"
            ref={communityyRef}
          >
            ASR Community
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mt-4 max-w-2xl" ref={communityparaRef}>
            Join our ASR community to get the best Flight and Airplane Joyride
            deals and be the first one to grab them. Our community offers
            exclusive access to limited offers and discounts you won't find
            anywhere else. Don't miss out - Join the ASR Community Now!
          </p>

          {/* Join Button */}
          <a
            href="https://chat.whatsapp.com/KiOiQr6pVKf44DMu8vUe6X" // Replace with your WhatsApp community invite link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-yellow-500 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-yellow-600 transition"
            ref={communityButtonRef}
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
              ref={offerRef1}
              src={offer1}
              alt="Offer 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[300px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              ref={offerRef2}
              src={offer2}
              alt="Offer 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[300px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              ref={offerRef3}
              src={offer3}
              alt="Offer 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p
          className="mt-8 text-lg text-center text-gray-700 max-w-screen-lg mx-auto"
          ref={offerparaRef}
        >
          ASR offers access to 3,000+ aircraft, including super-midsize,
          ultra-long-range jets, Gulfstream, and Global 7500. We provide luxury,
          comfort, and seamless private jet travel, ensuring a premium
          experience tailored to your needs. Elevate your journey with
          world-class aviation services designed for efficiency, convenience,
          and exclusivity at every step.{" "}
        </p>
      </div>
    </div>
  );
};

export default MainPage;
