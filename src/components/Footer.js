import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Wanderlust Tours</h3>
          <p>
            Your gateway to amazing adventures around the world. We create unforgettable 
            travel experiences that will last a lifetime.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/#tours">Tours</Link></p>
          <p><Link to="/booking">Book Now</Link></p>
          <p><Link to="/#about">About Us</Link></p>
          <p><Link to="/#contact">Contact</Link></p>
        </div>
        
        <div className="footer-section">
          <h3>Destinations</h3>
          <p>Europe</p>
          <p>Asia</p>
          <p>Americas</p>
          <p>Africa</p>
          <p>Oceania</p>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <MapPin size={16} />
            123 Travel Street, Adventure City, AC 12345
          </p>
          <p>
            <Phone size={16} />
            +1 (555) 123-4567
          </p>
          <p>
            <Mail size={16} />
            info@wanderlusttours.com
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Wanderlust Tours. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
