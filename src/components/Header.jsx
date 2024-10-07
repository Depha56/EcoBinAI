import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-logo">
        <img src="/logo2.png" alt="Logo" className="logo-img" />
      </div>
      
      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
      </div>
      
      {/* Navigation Links */}
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#features">FEATURES</a></li>
        </ul>
        <div className="auth-buttons">
          <a href="#login" className="login-button">Login</a>
          <a href="#signup" className="signup-button">Signup</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;


