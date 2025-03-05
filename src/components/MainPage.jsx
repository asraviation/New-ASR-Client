import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import ExclusiveServicesSection from "./ExclusiveServicesSection";
import FeaturedDealsSection from "./FeaturedDealsSection";
import OurOffersSection from "./OurOffersSection";

gsap.registerPlugin(ScrollTrigger);
// Carousel import
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MainPage = () => {
  const carouselImages = [
    { src: "../images/planes/falcon.jpeg", alt: "Aircraft 1" },
    { src: "../images/offer2.png", alt: "Aircraft 2" },
    { src: "../images/offer3.png", alt: "Aircraft 3" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Exclusive Services Section */}
      <ExclusiveServicesSection />

      {/* Featured Deals Section */}
      <FeaturedDealsSection />

      {/* Our Offers Section */}
      <OurOffersSection />
    </div>
  );
};

export default MainPage;
