import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, Users, Heart, Search, Filter } from 'lucide-react';

const Tours = () => {
  const [tours] = useState([
    {
      id: 1,
      title: "Tropical Paradise - Bali",
      description: "Experience the beauty of Bali with its stunning beaches, ancient temples, and vibrant culture. Perfect for relaxation and adventure seekers.",
      price: 1299,
      duration: "7 days",
      rating: 4.9,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Bali, Indonesia",
      category: "Beach",
      difficulty: "Easy",
      groupSize: "2-12",
      highlights: ["Beach hopping", "Temple visits", "Cultural experiences", "Spa treatments"],
      included: ["Accommodation", "Meals", "Transportation", "Guide", "Activities"]
    },
    {
      id: 2,
      title: "European Adventure - Paris",
      description: "Discover the City of Light with its iconic landmarks, world-class cuisine, and romantic atmosphere. A perfect cultural experience.",
      price: 1899,
      duration: "5 days",
      rating: 4.8,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Paris, France",
      category: "City",
      difficulty: "Easy",
      groupSize: "2-15",
      highlights: ["Eiffel Tower", "Louvre Museum", "Seine River cruise", "French cuisine"],
      included: ["Hotel", "Breakfast", "Museum passes", "City tour", "Airport transfer"]
    },
    {
      id: 3,
      title: "Mountain Escape - Swiss Alps",
      description: "Breathe in the fresh mountain air and enjoy breathtaking views of the Swiss Alps. Perfect for nature lovers and adventure enthusiasts.",
      price: 2199,
      duration: "6 days",
      rating: 4.9,
      reviews: 634,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Swiss Alps, Switzerland",
      category: "Mountain",
      difficulty: "Moderate",
      groupSize: "2-8",
      highlights: ["Matterhorn views", "Cable car rides", "Hiking trails", "Swiss chocolate"],
      included: ["Mountain lodge", "All meals", "Cable car passes", "Equipment rental", "Guide"]
    },
    {
      id: 4,
      title: "Desert Safari - Dubai",
      description: "Experience the magic of the desert with thrilling safaris, luxury accommodations, and traditional Arabian hospitality.",
      price: 1599,
      duration: "4 days",
      rating: 4.7,
      reviews: 1156,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Dubai, UAE",
      category: "Desert",
      difficulty: "Easy",
      groupSize: "2-20",
      highlights: ["Desert safari", "Camel riding", "Burj Khalifa", "Gold souk"],
      included: ["5-star hotel", "Desert camp", "All activities", "Traditional dinner", "Transportation"]
    },
    {
      id: 5,
      title: "Cultural Journey - Japan",
      description: "Immerse yourself in Japanese culture with visits to ancient temples, modern cities, and traditional experiences.",
      price: 2499,
      duration: "10 days",
      rating: 4.9,
      reviews: 743,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Tokyo, Japan",
      category: "Cultural",
      difficulty: "Moderate",
      groupSize: "2-10",
      highlights: ["Tokyo city tour", "Temple visits", "Bullet train", "Traditional ryokan"],
      included: ["Ryokan stay", "JR Pass", "All meals", "Cultural activities", "English guide"]
    },
    {
      id: 6,
      title: "Island Hopping - Greece",
      description: "Sail through the crystal-clear waters of the Aegean Sea and explore the beautiful Greek islands with their white-washed buildings.",
      price: 1799,
      duration: "8 days",
      rating: 4.8,
      reviews: 987,
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Santorini, Greece",
      category: "Island",
      difficulty: "Easy",
      groupSize: "2-16",
      highlights: ["Santorini sunset", "Mykonos beaches", "Ancient ruins", "Greek islands"],
      included: ["Boat transfers", "Island hotels", "Breakfast", "Sunset cruise", "Archaeological sites"]
    },
    {
      id: 7,
      title: "African Safari - Kenya",
      description: "Witness the Big Five in their natural habitat with expert guides and luxury tented camps in the heart of Kenya's wildlife reserves.",
      price: 2899,
      duration: "9 days",
      rating: 4.9,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Masai Mara, Kenya",
      category: "Safari",
      difficulty: "Moderate",
      groupSize: "2-6",
      highlights: ["Big Five safari", "Masai culture", "Hot air balloon", "Wildlife photography"],
      included: ["Luxury tented camp", "All meals", "Game drives", "Professional guide", "Airport transfers"]
    },
    {
      id: 8,
      title: "Northern Lights - Iceland",
      description: "Chase the magical Northern Lights across Iceland's dramatic landscapes, from glaciers to geysers and black sand beaches.",
      price: 1999,
      duration: "6 days",
      rating: 4.8,
      reviews: 678,
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Reykjavik, Iceland",
      category: "Adventure",
      difficulty: "Moderate",
      groupSize: "2-12",
      highlights: ["Northern Lights", "Blue Lagoon", "Golden Circle", "Glacier hiking"],
      included: ["Hotel", "Rental car", "Blue Lagoon entry", "Northern Lights tour", "Breakfast"]
    },
    {
      id: 9,
      title: "Tropical Rainforest - Costa Rica",
      description: "Explore Costa Rica's incredible biodiversity with guided tours through rainforests, volcano hikes, and wildlife spotting adventures.",
      price: 1699,
      duration: "8 days",
      rating: 4.7,
      reviews: 523,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "San José, Costa Rica",
      category: "Nature",
      difficulty: "Moderate",
      groupSize: "2-14",
      highlights: ["Rainforest tours", "Volcano hiking", "Wildlife spotting", "Coffee plantation"],
      included: ["Eco-lodge", "All meals", "National park fees", "Professional guide", "Transportation"]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [favorites, setFavorites] = useState(new Set());

  const categories = ['All', 'Beach', 'City', 'Mountain', 'Desert', 'Cultural', 'Island', 'Safari', 'Adventure', 'Nature'];

  const toggleFavorite = (tourId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(tourId)) {
      newFavorites.delete(tourId);
    } else {
      newFavorites.add(tourId);
    }
    setFavorites(newFavorites);
  };

  const filteredTours = tours
    .filter(tour => 
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(tour => selectedCategory === 'All' || tour.category === selectedCategory)
    .sort((a, b) => {
      switch(sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'duration':
          return parseInt(a.duration) - parseInt(b.duration);
        default:
          return b.reviews - a.reviews;
      }
    });

  return (
    <section id="tours" className="tours">
      <div className="tours-header">
        <h2 className="section-title">Discover Amazing Tours</h2>
        <p className="section-subtitle">Explore our handpicked collection of unforgettable travel experiences</p>
      </div>

      {/* Search and Filter Section */}
      <div className="tours-controls">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search tours, destinations, or activities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filters-container">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="sort-container">
            <Filter size={16} />
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="popularity">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>
      </div>

      <div className="tours-grid">
        {filteredTours.map(tour => (
          <div key={tour.id} className="tour-card">
            <div className="tour-image-container">
              <img src={tour.image} alt={tour.title} className="tour-image" />
              <button 
                className={`favorite-btn ${favorites.has(tour.id) ? 'favorited' : ''}`}
                onClick={() => toggleFavorite(tour.id)}
              >
                <Heart size={20} fill={favorites.has(tour.id) ? '#ff6b6b' : 'none'} />
              </button>
              <div className="tour-category-badge">{tour.category}</div>
            </div>
            
            <div className="tour-content">
              <div className="tour-header">
                <h3 className="tour-title">{tour.title}</h3>
                <div className="tour-rating">
                  <Star size={16} fill="#ffd700" />
                  <span>{tour.rating}</span>
                  <span className="review-count">({tour.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="tour-description">{tour.description}</p>
              
              <div className="tour-location">
                <MapPin size={16} />
                {tour.location}
              </div>
              
              <div className="tour-highlights">
                <h4>Highlights:</h4>
                <div className="highlights-list">
                  {tour.highlights.slice(0, 3).map((highlight, index) => (
                    <span key={index} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              </div>
              
              <div className="tour-details">
                <div className="detail-item">
                  <Clock size={16} />
                  <span>{tour.duration}</span>
                </div>
                <div className="detail-item">
                  <Users size={16} />
                  <span>{tour.groupSize} people</span>
                </div>
                <div className="detail-item difficulty">
                  <span className={`difficulty-badge ${tour.difficulty.toLowerCase()}`}>
                    {tour.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="tour-footer">
                <div className="tour-price">
                  <span className="price-amount">₹{tour.price.toLocaleString()}</span>
                  <span className="price-per">per person</span>
                </div>
                
                <Link 
                  to="/booking" 
                  state={{ selectedTour: tour }}
                  className="book-button"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredTours.length === 0 && (
        <div className="no-results">
          <h3>No tours found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </section>
  );
};

export default Tours;
