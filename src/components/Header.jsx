import React, { useState, useEffect } from 'react';
import '../styles/Header.css';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-logo">
        <img src="/logo2.png" alt="Logo" className="logo-img" />
      </div>
      <nav className="header-nav">
        <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#features">FEATURES</a></li>
          {/* <li><a href="#dashboard">Dashboard</a></li> */}
        </ul>
      </nav>
      <a href="#contact" className="contact-button">Contact us</a>
    </header>
  );
};

export default Header;
