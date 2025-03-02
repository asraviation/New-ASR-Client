import React from "react";
import offer2 from "../images/offer2.png";
import offer3 from "../images/offer3.png";
import anirudhImage from "../images/anirudh.png";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-20">
           {/* Top Section - Our Expertise & Our Approach */}
           <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start mb-16">
        {/* Left Side - Our Expertise */}
        <div className="flex flex-col items-center text-center">
          <img
            src={offer3}
            alt="Our Expertise"
            className="w-full h-[350px] object-cover rounded-lg shadow-md"
          />
          <h2 className="text-3xl font-semibold text-gray-800 mt-6">Our Expertise</h2>
          <p className="text-lg text-gray-600 mt-4">
          At ASR Aviation, we redefine travel with unparalleled private jet services tailored to your needs. Whether it's a luxurious joyride or a seamless business trip, we offer exclusive deals and a first-class experience that exceeds expectations.          </p>
        </div>

        {/* Right Side - Our Approach */}
        <div className="flex flex-col items-center text-center">
          <img
            src={offer2}
            alt="Our Approach"
            className="w-full h-[350px] object-cover rounded-lg shadow-md"
          />
          <h2 className="text-3xl font-semibold text-gray-800 mt-6">Our Approach</h2>
          <p className="text-lg text-gray-600 mt-4">
          With deep aviation industry expertise, we understand the challenges our clients face. By combining industry knowledge with cutting-edge technology, we deliver innovative solutions that ensure efficiency, luxury, and success in every journey.          </p>
        </div>
      </div>


      {/* About Heading */}
      <div className="text-center">
        <h1 className="text-5xl bg-gradient-to-r from-yellow-500 to-yellow-400 text-transparent bg-clip-text font-light text-[#9C7167] mb-12">About ASR Aviation</h1>
      </div>

      {/* Three-Column Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Column 1 - Who We Are */}
        <div className="text-center bg-white p-8 border border-gray-300 shadow-md rounded-lg">
          <h3 className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-transparent bg-clip-text text-2xl font-semibold text-[#9C7167] mb-4">Who We Are</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
          At ASR Aviation, we are a team of experienced aviation consultants, dedicated to providing top-tier consulting services. We pride ourselves on our attention to detail and our ability to deliver results that consistently exceed expectations.          </p>
        </div>

        {/* Column 2 - What We Do */}
        <div className="text-center bg-white p-8 border border-gray-300 shadow-md rounded-lg">
          <h3 className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-transparent bg-clip-text text-2xl font-semibold text-[#9C7167] mb-4">What We Do</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
          We offer a range of aviation services, including Private Charters, Business Flights, Air Joyrides, Air Ambulance, Aircraft Management, and Aviation Finance. By working closely with our clients, we gain a deep understanding of their needs and deliver customized solutions that meet their unique requirements with precision and care.          </p>
        </div>

        {/* Column 3 - Our Experience */}
        <div className="text-center bg-white p-8 border border-gray-300 shadow-md rounded-lg">
          <h3 className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-transparent bg-clip-text text-2xl font-semibold text-[#9C7167] mb-4">Our Experience</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
          With decades of combined experience in the aviation industry, our team has worked with clients globally. We have a deep understanding of the aviation market and a proven track record of delivering successful results. Take a look at our community and see how we’ve made a difference.          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-12 text-center">
      <a
    href="https://chat.whatsapp.com/KiOiQr6pVKf44DMu8vUe6X"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-700 transition inline-block"
  >
    JOIN OUR COMMUNITY
  </a>
      </div>
      {/* About Founder Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <h2 className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-transparent bg-clip-text text-4xl font-semibold text-[#9C7167] text-center mb-12">About Founder</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Founder Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Anirudh Singh Chauhan (Managing Director - ASR Aviation )</h3>
            <p className="text-lg text-gray-700 mt-4">
            Meet our founder, Anirudh, whose passion for the aviation industry drives ASR Aviation to new heights. With a vision to make ASR Aviation one of the leading brands in the sector, Anirudh's focus on technology and innovation has helped establish ASR as one of the most trusted aircraft service providers in India. His relentless dedication to understanding and addressing customer needs has played a key role in driving our success, ensuring that every flight experience exceeds expectations.            </p>
          </div>

          {/* Right Side - Founder Image */}
          <div className="text-center">
            <img
              src={anirudhImage} // Replace with actual image URL
              alt="Anirudh - Founder of ASR Aviation"
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
