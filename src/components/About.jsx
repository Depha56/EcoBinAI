import React from 'react';
import { FaPhone } from 'react-icons/fa'; // Import phone icon from react-icons
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Place the subtitle above the bin image */}
      <h2 className="about-subtitle above-image">ABOUT US</h2>
      <div className="about-left">
        <img src="/bin.jpg" alt="Smart Bin" className="about-team-image" />
      </div>
      <div className="about-right">
        <h1 className="about-title">Transforming Waste Management through Innovation</h1>
        <p className="about-description">
          At Ecobin AI, we believe in revolutionizing the waste management industry with AI-driven solutions. Our smart bins offer cutting-edge technology to automate waste sorting and enhance sustainability.
        </p>
        <p className="about-vision">
          With a vision to create cleaner environments and efficient waste systems, our dedicated team is focused on developing products that make waste management smarter and simpler for public and private spaces.
        </p>
        <button className="about-contact-btn">
          Contact Us <FaPhone className="phone-icon" /> {/* Add phone icon */}
        </button>
      </div>
    </div>
  );
};

export default About;
