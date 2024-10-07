import { useState, useEffect } from 'react';
import '../styles/Header.css';
import { Link, Outlet } from 'react-router-dom';

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
    <>
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
            <li><Link to="/#home">HOME</Link></li>
            <li><Link to="/#about">ABOUT</Link></li>
            <li><Link to="/#features">FEATURES</Link></li>
            </ul>
            <div className="auth-buttons">
            <Link to="/dashboard" className="login-button">Login</Link>
            <a href="#signup" className="signup-button">Signup</a>
            </div>
        </nav>
        </header>

        {/* Helps Router move to children route */}
        <Outlet />
    </>
  );
};

export default Header;


