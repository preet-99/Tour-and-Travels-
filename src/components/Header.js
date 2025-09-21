import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          🌍 India Best Travels
        </Link>
        
        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/#tours" onClick={() => setIsMenuOpen(false)}>Tours</Link>
          <Link to="/booking" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
          <Link to="/#about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
        
        <Link to="/booking" className="cta-button">
          Book Your Adventure
        </Link>
        
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
