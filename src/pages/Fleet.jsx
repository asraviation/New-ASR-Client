import React, { useState } from "react";
import { images } from "../image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Fleet = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeCarousel, setActiveCarousel] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id); // Toggle between expanded and collapsed
    setActiveCarousel(expandedCard === id ? null : id); // Set the active carousel when card is clicked
  };

  const fleetData = [
    {
      id: 1,
      title: "Falcon 2000LX",
      description:
        "The Falcon 2000LX is a versatile, long-range business jet known for its luxury, efficiency, and impressive performance in both speed and comfort.",
      images: images.fleetA,
    },
    {
      id: 2,
      title: "King Air B200",
      description:
        "The King Air B200 is a reliable, high-performance twin turboprop aircraft, renowned for its versatility, efficiency, and capability to operate from shorter runways.",
      images: images.fleetB,
    },
    {
      id: 3,
      title: "Hawker 850XP",
      description:
        "The Hawker 850XP is a midsize business jet offering exceptional range, comfort, and performance, with a spacious cabin and efficient operating costs.",
      images: images.fleetC,
    },
    {
      id: 4,
      title: "Legacy 600",
      description:
        "The Legacy 600 is a large, super-midsize jet known for its luxurious cabin, long range, and impressive performance, making it ideal for both business and long-haul flights.",
      images: images.fleetD,
    },
    {
      id: 5,
      title: "Premier 1A",
      description:
        "The Premier 1A is a light jet that combines impressive speed, range, and a spacious cabin, offering a comfortable and efficient travel experience for business and leisure.",
      images: images.fleetE,
    },
    {
      id: 6,
      title: "Global 6000",
      description:
        "The Global 6000 is a large, long-range business jet that offers exceptional comfort, advanced technology, and impressive speed, making it ideal for intercontinental travel and high-end business flights.",
      images: images.fleetF,
    },
    {
      id: 7,
      title: "Gulfstream G550",
      description:
        "The Gulfstream G550 is a large, ultra-long-range business jet renowned for its luxurious cabin, advanced avionics, and exceptional performance, making it a top choice for global business travel.",
      images: images.fleetG,
    },
    {
      id: 8,
      title: "Pilatus PC-24",
      description:
        "The Pilatus PC-24 is a versatile light jet with exceptional short-field capability, combining the flexibility of a turboprop with the speed and comfort of a jet, perfect for accessing smaller airports with ease.",
      images: images.fleetH,
    },
    {
      id: 9,
      title: "Cessna Citation Sovereign",
      description:
        "The Cessna Citation Sovereign is a super-midsize jet known for its impressive range, spacious cabin, and excellent performance, offering a perfect balance of comfort and efficiency for medium to long-range flights.",
      images: images.fleetI,
    },
    {
      id: 10,
      title: "Bombardier Global 7500",
      description:
        "The Bombardier Global 7500 is an ultra-long-range business jet, renowned for its luxurious, spacious cabin, advanced technology, and exceptional performance, making it one of the most capable and comfortable aircraft in its class.",
      images: images.fleetJ,
    },
    {
      id: 11,
      title: "Bell 407",
      description:
        "The Bell 407 is a versatile, single-engine light helicopter known for its reliability, speed, and comfort. It features a four-blade rotor system, making it ideal for a wide range of missions, including EMS, law enforcement, and corporate transport.",
      images: images.fleetK,
    },
    {
      id: 12,
      title: "Airbus H125",
      description:
        "The Airbus H125 has a sleek, compact design with a high-mounted tail rotor and streamlined fuselage, optimized for performance and agility. Its modern exterior ensures efficiency in diverse operational environments.",
      images: images.fleetL,
    },
    {
      id: 13,
      title: "Bell 429",
      description:
        "The Bell 429 is a light, twin-engine helicopter known for its advanced avionics, spacious cabin, and exceptional performance. It is widely used for EMS, law enforcement, and corporate transport, offering versatility and reliability.",
      images: images.fleetM,
    },
  ];

  const headerRef = useRef(null);
  const headerh1Ref = useRef(null);
  const fleetCardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl5 = gsap.timeline();

      tl5.from([headerRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "sine.out",
      });

      tl5.from([headerh1Ref.current], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "sine.out",
      });

      fleetCardRefs.current.forEach((ref, index) => {
        if (ref) {
          tl5.from(ref, {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: "power.out",
            stagger: 0.1,
          });
        }
      });
    });
    ScrollTrigger.refresh();
    ScrollTrigger.clearScrollMemory();
    return () => ctx.revert(); // Cleanup animation context
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="p-2 relative w-full h-48">
        <img
          ref={headerRef}
          src={images.header}
          alt="Header"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1
        className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400 text-center mt-6"
        ref={headerh1Ref}
      >
        Our Fleets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {fleetData.map((fleet, index) => (
          <div
            key={fleet.id}
            ref={(el) => {
              if (el) {
                fleetCardRefs.current[index] = el;
              }
            }}
            className="bg-white shadow-lg rounded-lg p-4 relative"
            onMouseEnter={() => setActiveCarousel(fleet.id)}
            onMouseLeave={() => setActiveCarousel(null)}
          >
            <div className="carousel">
              <Carousel
                showThumbs={false}
                showArrows={true}
                showIndicators={true}
                infiniteLoop
                autoPlay={expandedCard === fleet.id}
                interval={3000}
                stopOnHover
              >
                {fleet.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${fleet.title} Image ${index + 1}`}
                    className="w-full h-36 object-cover rounded-lg"
                  />
                ))}
              </Carousel>
            </div>
            <h2
              className="text-lg font-bold text-black p-2 mt-4 w-full text-center cursor-pointer rounded-md"
              onClick={() => handleCardClick(fleet.id)}
            >
              {fleet.title}
            </h2>
            {expandedCard === fleet.id && (
              <p className="mt-4 text-sm text-gray-600">{fleet.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fleet;
