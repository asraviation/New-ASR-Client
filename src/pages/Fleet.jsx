import { useState, useEffect, useRef } from "react";
import { images } from "../image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Fleet = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const loadingRef = useRef(null);
  const modalRef = useRef(null);
  const modalOverlayRef = useRef(null);
  const modalContentRef = useRef(null);
  const carouselRef = useRef(null);

  const handleCardClick = (id) => {
    setExpandedCard(id);
    setCurrentImageIndex(0);
    setModalOpen(true);
    document.body.style.overflow = "hidden"; 
  };

  // Close modal
  const handleCloseModal = () => {
    // Animate modal closing
    const tl = gsap.timeline();
    tl.to(modalContentRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    }).to(
      modalOverlayRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setModalOpen(false);
          setExpandedCard(null);
          document.body.style.overflow = "auto"; 
        },
      },
      "-=0.1"
    );
  };

  // Simulate loading delay (remove in production)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Loading animation
  useEffect(() => {
    if (isLoading && loadingRef.current) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(".loading-airplane", {
        x: "100vw",
        duration: 3,
        ease: "power1.inOut",
      })
        .to(".loading-airplane", {
          opacity: 0,
          duration: 0.01,
        })
        .set(".loading-airplane", {
          x: "-100px",
        })
        .to(".loading-airplane", {
          opacity: 1,
          duration: 0.01,
        });
    }
  }, [isLoading]);

  // GSAP animations for page load
  useEffect(() => {
    if (!isLoading) {
      // Loading exit animation
      gsap.to(loadingRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          if (loadingRef.current) {
            loadingRef.current.style.display = "none";
          }
        },
      });

      // Header animation with burst effect
      const tl = gsap.timeline();
      tl.fromTo(
        headerRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );

      // Highlight animation for the word "Premium"
      tl.fromTo(
        ".highlight-text",
        { color: "#333", textShadow: "none" },
        {
          color: "#EAB308",
          textShadow: "0 0 10px rgba(234, 179, 8, 0.3)",
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Grid layout animation - fade in smoothly
      gsap.fromTo(
        ".grid-container",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      // Create an elegant sweep effect for cards
      const cardTl = gsap.timeline();

      // First batch - reveal cards with a clean sweep effect
      cardTl.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: {
            each: 0.08,
            grid: "auto",
            from: "start",
            ease: "power2.out",
          },
          ease: "power3.out",
        }
      );

      // Add subtle hover highlight animation to each card after they appear
      cardsRef.current.forEach((card, i) => {
        const delay = 0.8 + i * 0.08;
        gsap.fromTo(
          card.querySelector("img"),
          { filter: "brightness(0.7)" },
          {
            filter: "brightness(1)",
            duration: 0.5,
            delay: delay,
            ease: "power1.out",
          }
        );

        // Add a subtle "pop" effect for each title
        gsap.fromTo(
          card.querySelector(`#card-title-${i + 1}`),
          { y: 10, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: delay + 0.1,
            ease: "back.out(1.7)",
          }
        );
      });

      // Animate the CTA section from bottom
      gsap.fromTo(
        ".cta-section",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.5,
          ease: "power2.out",
        }
      );
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoading]);

  // Modal animation on open
  useEffect(() => {
    if (modalOpen && modalRef.current) {
      // First hide everything
      gsap.set(modalContentRef.current, {
        y: 100,
        opacity: 0,
      });
      gsap.set(modalOverlayRef.current, {
        opacity: 0,
      });

      // Then animate in
      const tl = gsap.timeline();
      tl.to(modalOverlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }).to(
        modalContentRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.1"
      );

      // Animate carousel
      tl.fromTo(
        ".carousel-container",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );

      // Animate specifications with staggered effect
      tl.fromTo(
        ".spec-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  }, [modalOpen]);

  // Card hover animation
  const handleCardHover = (id, isHovering) => {
    if (isHovering) {
      gsap.to(`#card-${id}`, {
        y: -10,
        scale: 1.03,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
        duration: 0.3,
        ease: "power2.out",
      });

      // Animate title upward
      gsap.to(`#card-title-${id}`, {
        y: -5,
        duration: 0.3,
      });

      // Make image zoom slight
      gsap.to(`#card-image-${id}`, {
        scale: 1.1,
        duration: 0.5,
      });
    } else {
      gsap.to(`#card-${id}`, {
        y: 0,
        scale: 1,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });

      // Reset title position
      gsap.to(`#card-title-${id}`, {
        y: 0,
        duration: 0.3,
      });

      // Reset image zoom
      gsap.to(`#card-image-${id}`, {
        scale: 1,
        duration: 0.5,
      });
    }
  };

  const fleetData = [
    {
      id: 1,
      title: "Falcon 2000LX",
      description:
        "The Falcon 2000LX is a versatile, long-range business jet known for its luxury, efficiency, and impressive performance in both speed and comfort.",
      images: images.fleetA,
      specs: {
        range: "4,000 nm",
        speed: "Mach 0.85",
        passengers: "10",
        altitude: "47,000 ft",
        engines: "2x Pratt & Whitney PW308C",
      },
    },
    {
      id: 2,
      title: "King Air B200",
      description:
        "The King Air B200 is a reliable, high-performance twin turboprop aircraft, renowned for its versatility, efficiency, and capability to operate from shorter runways.",
      images: images.fleetB,
      specs: {
        range: "1,800 nm",
        speed: "310 kts",
        passengers: "8",
        altitude: "35,000 ft",
        engines: "2x Pratt & Whitney PT6A-52",
      },
    },
    {
      id: 3,
      title: "Hawker 850XP",
      description:
        "The Hawker 850XP is a midsize business jet offering exceptional range, comfort, and performance, with a spacious cabin and efficient operating costs.",
      images: images.fleetC,
      specs: {
        range: "2,700 nm",
        speed: "Mach 0.80",
        passengers: "8",
        altitude: "41,000 ft",
        engines: "2x Honeywell TFE731-5BR",
      },
    },
    {
      id: 4,
      title: "Legacy 600",
      description:
        "The Legacy 600 is a large, super-midsize jet known for its luxurious cabin, long range, and impressive performance, making it ideal for both business and long-haul flights.",
      images: images.fleetD,
      specs: {
        range: "3,450 nm",
        speed: "Mach 0.80",
        passengers: "13",
        altitude: "41,000 ft",
        engines: "2x Rolls-Royce AE 3007A1E",
      },
    },
    {
      id: 5,
      title: "Premier 1A",
      description:
        "The Premier 1A is a light jet that combines impressive speed, range, and a spacious cabin, offering a comfortable and efficient travel experience for business and leisure.",
      images: images.fleetE,
      specs: {
        range: "1,500 nm",
        speed: "Mach 0.80",
        passengers: "6",
        altitude: "41,000 ft",
        engines: "2x Williams FJ44-2A",
      },
    },
    {
      id: 6,
      title: "Global 6000",
      description:
        "The Global 6000 is a large, long-range business jet that offers exceptional comfort, advanced technology, and impressive speed, making it ideal for intercontinental travel and high-end business flights.",
      images: images.fleetF,
      specs: {
        range: "6,000 nm",
        speed: "Mach 0.89",
        passengers: "17",
        altitude: "51,000 ft",
        engines: "2x Rolls-Royce BR710A2-20",
      },
    },
    {
      id: 7,
      title: "Gulfstream G550",
      description:
        "The Gulfstream G550 is a large, ultra-long-range business jet renowned for its luxurious cabin, advanced avionics, and exceptional performance, making it a top choice for global business travel.",
      images: images.fleetG,
      specs: {
        range: "6,750 nm",
        speed: "Mach 0.885",
        passengers: "19",
        altitude: "51,000 ft",
        engines: "2x Rolls-Royce BR710C4-11",
      },
    },
    {
      id: 8,
      title: "Pilatus PC-24",
      description:
        "The Pilatus PC-24 is a versatile light jet with exceptional short-field capability, combining the flexibility of a turboprop with the speed and comfort of a jet, perfect for accessing smaller airports with ease.",
      images: images.fleetH,
      specs: {
        range: "2,000 nm",
        speed: "Mach 0.74",
        passengers: "8",
        altitude: "45,000 ft",
        engines: "2x Williams FJ44-4A",
      },
    },
    {
      id: 9,
      title: "Cessna Citation Sovereign",
      description:
        "The Cessna Citation Sovereign is a super-midsize jet known for its impressive range, spacious cabin, and excellent performance, offering a perfect balance of comfort and efficiency for medium to long-range flights.",
      images: images.fleetI,
      specs: {
        range: "3,200 nm",
        speed: "Mach 0.80",
        passengers: "12",
        altitude: "47,000 ft",
        engines: "2x Pratt & Whitney PW306C",
      },
    },
    {
      id: 10,
      title: "Bombardier Global 7500",
      description:
        "The Bombardier Global 7500 is an ultra-long-range business jet, renowned for its luxurious, spacious cabin, advanced technology, and exceptional performance, making it one of the most capable and comfortable aircraft in its class.",
      images: images.fleetJ,
      specs: {
        range: "7,700 nm",
        speed: "Mach 0.925",
        passengers: "19",
        altitude: "51,000 ft",
        engines: "2x GE Passport",
      },
    },
    {
      id: 11,
      title: "Bell 407",
      description:
        "The Bell 407 is a versatile, single-engine light helicopter known for its reliability, speed, and comfort. It features a four-blade rotor system, making it ideal for a wide range of missions, including EMS, law enforcement, and corporate transport.",
      images: images.fleetK,
      specs: {
        range: "400 nm",
        speed: "140 kts",
        passengers: "6",
        altitude: "18,500 ft",
        engines: "1x Rolls-Royce 250-C47B/8",
      },
    },
    {
      id: 12,
      title: "Airbus H125",
      description:
        "The Airbus H125 has a sleek, compact design with a high-mounted tail rotor and streamlined fuselage, optimized for performance and agility. Its modern exterior ensures efficiency in diverse operational environments.",
      images: images.fleetL,
      specs: {
        range: "350 nm",
        speed: "155 kts",
        passengers: "5",
        altitude: "17,000 ft",
        engines: "1x Safran Arriel 2D",
      },
    },
    {
      id: 13,
      title: "Bell 429",
      description:
        "The Bell 429 is a light, twin-engine helicopter known for its advanced avionics, spacious cabin, and exceptional performance. It is widely used for EMS, law enforcement, and corporate transport, offering versatility and reliability.",
      images: images.fleetM,
      specs: {
        range: "380 nm",
        speed: "150 kts",
        passengers: "7",
        altitude: "20,000 ft",
        engines: "2x Pratt & Whitney PW207D1",
      },
    },
  ];

  // Handle carousel arrow key navigation
  const handleKeyDown = (e) => {
    if (!modalOpen || !expandedCard) return;

    const currentItem = fleetData.find((item) => item.id === expandedCard);

    if (!currentItem) return;

    if (e.key === "ArrowLeft") {
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentItem.images.length - 1 : prev - 1
      );
    } else if (e.key === "ArrowRight") {
      setCurrentImageIndex((prev) =>
        prev === currentItem.images.length - 1 ? 0 : prev + 1
      );
    } else if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  },);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-28 pb-16 relative">
      {/* Loading animation */}
      <div
        ref={loadingRef}
        className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center ${
          isLoading ? "" : "pointer-events-none"
        }`}
      >
        <div className="relative">
          <div className="loading-airplane text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16"
            >
              <path d="M6 15.5L2.5 12L6 8.5L10 12L6 15.5ZM15.5 13L13 15.5L17 21L21 21L15.5 13ZM13 8.5L15.5 11L21 3L17 3L13 8.5ZM9.5 12L5.5 8L3.5 6.5L3 7L3 9.5L7 12L3 14.5L3 17L3.5 17.5L5.5 16L9.5 12Z" />
            </svg>
          </div>
          <div className="loading-circles">
            <span className="loading-circle"></span>
            <span className="loading-circle"></span>
            <span className="loading-circle"></span>
          </div>
        </div>
        <p className="text-gray-700 font-light mt-4">Preparing our fleet...</p>
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Our <span className="highlight-text font-normal">Premium</span>{" "}
            Fleet
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our diverse range of exceptional aircraft, each selected to
            provide the highest standards of performance, comfort, and
            reliability for your private aviation needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={containerRef}
          className="grid-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {fleetData.map((item, index) => (
            <div
              key={item.id}
              id={`card-${item.id}`}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg"
              onClick={() => handleCardClick(item.id)}
              onMouseEnter={() => handleCardHover(item.id, true)}
              onMouseLeave={() => handleCardHover(item.id, false)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  id={`card-image-${item.id}`}
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3
                    id={`card-title-${item.id}`}
                    className="text-white text-xl font-medium transition-all duration-300"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm line-clamp-3">
                  {item.description}
                </p>
                <button className="mt-3 text-yellow-500 hover:text-yellow-600 font-medium flex items-center text-sm transition-all duration-300 hover:translate-x-1">
                  View details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center cta-section">
          <p className="text-gray-600 mb-4">
            Don&apos;t see what you&apos;re looking for? We have access to a wide range of
            aircraft on demand.
          </p>
          <button
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full 
            transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Contact Our Charter Team
          </button>
        </div>
      </div>

      {/* Modal for expanded card view */}
      {modalOpen && expandedCard && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
        >
          <div
            ref={modalOverlayRef}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>
          <div
            ref={modalContentRef}
            className="bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-5xl max-h-[90vh] z-10 flex flex-col md:flex-row relative"
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-white/30 backdrop-blur-md text-gray-800 hover:text-gray-900 p-2 rounded-full z-10 transition-transform duration-300 hover:rotate-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Left side - Carousel */}
            <div className="md:w-1/2 h-72 md:h-auto">
              <Carousel
                ref={carouselRef}
                showArrows={true}
                showStatus={false}
                showThumbs={true}
                showIndicators={true}
                infiniteLoop={true}
                selectedItem={currentImageIndex}
                onChange={setCurrentImageIndex}
                swipeable={true}
                emulateTouch={true}
                className="carousel-container h-full"
                thumbWidth={80}
              >
                {fleetData
                  .find((item) => item.id === expandedCard)
                  ?.images.map((img, idx) => (
                    <div key={idx} className="h-72 md:h-[500px]">
                      <img
                        src={img}
                        alt={`${
                          fleetData.find((item) => item.id === expandedCard)
                            ?.title
                        } - Image ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
              </Carousel>
            </div>

            {/* Right side - Content */}
            <div className="md:w-1/2 p-6 pt-20 md:p-8 overflow-y-auto">
              <h2 className="text-3xl font-medium text-gray-900 mb-3">
                {fleetData.find((item) => item.id === expandedCard)?.title}
              </h2>
              <p className="text-gray-700 mb-6 hidden md:block">
                {
                  fleetData.find((item) => item.id === expandedCard)
                    ?.description
                }
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-yellow-300 inline-block">
                  Aircraft Specifications
                </h3>
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div className="spec-item">
                    <div className="flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-yellow-600 font-medium">Range</span>
                    </div>
                    <span className="text-gray-800 pl-7">
                      {fleetData.find((item) => item.id === expandedCard)?.specs.range}
                    </span>
                  </div>
                  <div className="spec-item">
                    <div className="flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-yellow-600 font-medium">
                        Max Speed
                      </span>
                    </div>
                    <span className="text-gray-800 pl-7">
                      {fleetData.find((item) => item.id === expandedCard)?.specs.speed}
                    </span>
                  </div>
                  <div className="spec-item">
                    <div className="flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="text-yellow-600 font-medium">
                        Passengers
                      </span>
                    </div>
                    <span className="text-gray-800 pl-7">
                      {fleetData.find((item) => item.id === expandedCard)?.specs.passengers}
                    </span>
                  </div>
                  <div className="spec-item">
                    <div className="flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M5 4a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1zM5 16a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-yellow-600 font-medium">
                        Max Altitude
                      </span>
                    </div>
                    <span className="text-gray-800 pl-7">
                      {fleetData.find((item) => item.id === expandedCard)?.specs.altitude}
                    </span>
                  </div>
                  <div className="spec-item col-span-2">
                    <div className="flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-yellow-600 font-medium">
                        Engines
                      </span>
                    </div>
                    <span className="text-gray-800 pl-7">
                      {fleetData.find((item) => item.id === expandedCard)?.specs.engines}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Ready to Experience This Aircraft?
                </h3>
                <button
                  className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full 
                    transition-all duration-300 shadow-md hover:shadow-xl transform hover:translate-y-[-2px] flex items-center justify-center gap-2"
                >
                  <span className="font-medium">Request Charter Quote</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Carousel styling */
        .carousel-container {
          height: 100%;
        }
        .carousel .control-arrow {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          height: 40px;
          width: 40px;
          margin: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.7;
          z-index: 2;
          transition: all 0.3s ease;
        }
        .carousel .control-arrow:hover {
          background: rgba(234, 179, 8, 0.7);
          opacity: 1;
          transform: scale(1.1);
        }
        .carousel .control-prev.control-arrow:before {
          border-right: 8px solid #fff;
        }
        .carousel .control-next.control-arrow:before {
          border-left: 8px solid #fff;
        }
        .carousel .thumbs-wrapper {
          margin: 10px 0 0;
        }
        .carousel .thumb {
          border: 3px solid transparent;
          transition: all 0.3s ease;
        }
        .carousel .thumb.selected,
        .carousel .thumb:hover {
          border: 3px solid #eab308;
        }

        /* Card hover effect */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Loading animation */
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        @keyframes flyAcross {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }

        .loading-airplane {
          animation: float 2s ease-in-out infinite;
        }

        .loading-airplane {
          animation: float 2s ease-in-out infinite;
          position: relative;
        }

        .loading-circles {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .loading-circle {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #eab308;
          opacity: 0.7;
        }

        .loading-circle:nth-child(1) {
          animation: pulse 1.5s ease-in-out infinite;
        }

        .loading-circle:nth-child(2) {
          animation: pulse 1.5s ease-in-out 0.3s infinite;
        }

        .loading-circle:nth-child(3) {
          animation: pulse 1.5s ease-in-out 0.6s infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Fleet;
