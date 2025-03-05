import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Image imports
import offer1 from "../images/planes/falcon.jpeg";
import offer2 from "../images/offer2.png";
import offer3 from "../images/offer3.png";

gsap.registerPlugin(ScrollTrigger);

const OurOffersSection = () => {
  const sectionRef = useRef(null);
  const offerRef1 = useRef(null);
  const offerRef2 = useRef(null);
  const offerRef3 = useRef(null);
  const offerparaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Single scrollTrigger for all offer images
      gsap.from([offerRef1.current, offerRef2.current, offerRef3.current], {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // starts when top of section enters bottom of viewport
          end: "center center", // ends when center of section reaches center of viewport
          scrub: true,
          toggleActions: "play none none reverse",
          // markers: true, // uncomment for debugging
        },
      });

      // Paragraph animation
      gsap.from(offerparaRef.current, {
        opacity: 0,
        y: 50, // Changed from x to y for better visual effect
        duration: 1,
        ease: "sine.out",
        scrollTrigger: {
          trigger: offerparaRef.current,
          start: "top bottom",
          end: "bottom 70%",
          scrub: true,
          toggleActions: "play none none reverse",
          // markers: true, // uncomment for debugging
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-white py-16 px-8" ref={sectionRef}>
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
        comfort, and seamless private jet travel, ensuring a premium experience
        tailored to your needs. Elevate your journey with world-class aviation
        services designed for efficiency, convenience, and exclusivity at every
        step.{" "}
      </p>
    </div>
  );
};

export default OurOffersSection;
