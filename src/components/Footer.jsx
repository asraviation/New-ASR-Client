import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-transparent text-blue py-4 mt-8 font-sans font-thin">
      {/* Social Media Icons */}
      <div className="flex justify-center text-center mb-4">
        <a
          href="https://www.linkedin.com/company/asr-aviation/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-6 text-black hover:text-gray-700"
        >
          <FaLinkedin size={24} /> {/* Reduced size */}
        </a>
        <a
          href="https://www.instagram.com/asr.aviation/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-6 text-black hover:text-gray-700"
        >
          <FaInstagram size={24} /> {/* Reduced size */}
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-6 text-black hover:text-gray-700"
        >
          <FaTwitter size={24} /> {/* Reduced size */}
        </a>
      </div>

      {/* Divider and Contact Info */}
      <div className="flex justify-center items-center mt-6 text-center text-black">
        {/* Email Section */}
        <div className="pr-6">
          <a
            href="mailto:ceo@asraviation.com"
            className="hover:text-gray-700"
          >
            Email: ceo@asraviation.com
          </a>
          <br />
          <a
            href="mailto:ceo.asr.aviation@gmail.com"
            className="hover:text-gray-700"
          >
            ceo.asr.aviation@gmail.com
          </a>
        </div>

        {/* Vertical Line */}
        <div className="h-8 w-px bg-gray-700 mx-4"></div>

        {/* Mobile Section */}
        <div className="pl-6">
          <p>Phone: (+91) 9829538079</p>
        </div>
      </div>

      {/* Rights Reserved Text */}
      <div className="text-center mt-6">
        © 2024 Aviation Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;