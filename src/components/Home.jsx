import React from 'react';
import '../styles/Home.css';
import { FaWhatsapp } from 'react-icons/fa';  // WhatsApp icon from react-icons

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image">
        <img src="/tree.jpg" alt="EcoBin Background" />
        <div className="overlay">
          <h1>ECOLOGICAL BIN WITH AI</h1>
          <h3>Simplifying Waste Amplifying Green</h3>
        </div>
      </div>

      {/* WhatsApp floating button with text */}
      <a
        href="https://wa.me/1234567890?text=Hello%20EcoBin"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
        WhatsApp Us
      </a>
    </div>
  );
};

export default Home;
