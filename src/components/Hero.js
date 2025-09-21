import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Amazing Destinations</h1>
        <p>
          Embark on unforgettable journeys to the world's most beautiful places. 
          From tropical paradises to mountain peaks, create memories that last a lifetime.
        </p>
        <div className="hero-buttons">
          <Link to="/#tours" className="cta-button">
            Explore Tours
          </Link>
          <Link to="/booking" className="cta-button">
            Book Now
          </Link>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <MapPin size={24} />
            <span>50+ Destinations</span>
          </div>
          <div className="stat">
            <Calendar size={24} />
            <span>365 Days/Year</span>
          </div>
          <div className="stat">
            <Users size={24} />
            <span>10,000+ Happy Travelers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
