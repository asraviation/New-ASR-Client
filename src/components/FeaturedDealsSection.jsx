import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Image imports
import bombardierImage from "../images/planes/bombardier.jpg";
import citationImage from "../images/planes/citation.jpg";
import falconImage from "../images/planes/falcon.jpeg";
import hawerImage from "../images/planes/hawker.jpeg";

gsap.registerPlugin(ScrollTrigger);

const FeaturedDealsSection = () => {
  const featureDealsTitleRef = useRef(null);
  const featureCardsRef = useRef(null);
  const communityyRef = useRef(null);
  const communityparaRef = useRef(null);
  const communityButtonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.play();

    const ctx = gsap.context(() => {
      tl.from([featureDealsTitleRef.current], {
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

      tl.from([featureCardsRef.current], {
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

      tl.from([communityyRef.current], {
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

      tl.from([communityparaRef.current], {
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

      tl.from([communityButtonRef.current], {
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
    });

    return () => {
      ctx.revert();
      tl.kill();
    };
  }, []);

  return (
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
          exclusive access to limited offers and discounts you won&apos;t find
          anywhere else. Don&apos;t miss out - Join the ASR Community Now!
        </p>

        {/* Join Button */}
        <a
          href="https://chat.whatsapp.com/KiOiQr6pVKf44DMu8vUe6X"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-yellow-500 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-yellow-600 transition"
          ref={communityButtonRef}
        >
          JOIN ASR COMMUNITY NOW
        </a>
      </div>
    </div>
  );
};

export default FeaturedDealsSection;
