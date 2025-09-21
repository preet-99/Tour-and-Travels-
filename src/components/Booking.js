import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Users, CreditCard, CheckCircle } from 'lucide-react';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tourId: '',
    fullName: '',
    email: '',
    phone: '',
    travelers: 1,
    startDate: '',
    endDate: '',
    specialRequests: '',
    paymentMethod: 'credit'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tours = [
    { id: 1, title: "Tropical Paradise - Bali", price: 1299, duration: "7 days" },
    { id: 2, title: "European Adventure - Paris", price: 1899, duration: "5 days" },
    { id: 3, title: "Mountain Escape - Swiss Alps", price: 2199, duration: "6 days" },
    { id: 4, title: "Desert Safari - Dubai", price: 1599, duration: "4 days" },
    { id: 5, title: "Cultural Journey - Japan", price: 2499, duration: "10 days" },
    { id: 6, title: "Island Hopping - Greece", price: 1799, duration: "8 days" }
  ];

  useEffect(() => {
    if (location.state?.selectedTour) {
      setFormData(prev => ({
        ...prev,
        tourId: location.state.selectedTour.id
      }));
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking process
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      navigate('/');
    }, 3000);
  };

  const selectedTour = tours.find(tour => tour.id === parseInt(formData.tourId));
  const totalPrice = selectedTour ? selectedTour.price * formData.travelers : 0;

  if (isSubmitted) {
    return (
      <div className="booking">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <CheckCircle size={64} color="#4CAF50" style={{ marginBottom: '1rem' }} />
          <h2>Booking Confirmed!</h2>
          <p>Thank you for choosing Wanderlust Tours. We'll send you a confirmation email shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="booking">
      <h2 className="section-title">Book Your Adventure</h2>
      
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="tourId">Select Tour *</label>
          <select
            id="tourId"
            name="tourId"
            value={formData.tourId}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose a tour...</option>
            {tours.map(tour => (
              <option key={tour.id} value={tour.id}>
                {tour.title} - ${tour.price} ({tour.duration})
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="travelers">Number of Travelers *</label>
            <select
              id="travelers"
              name="travelers"
              value={formData.travelers}
              onChange={handleInputChange}
              required
            >
              {[1,2,3,4,5,6,7,8,9,10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate">Start Date *</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date *</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method *</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            required
          >
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            rows="4"
            placeholder="Any dietary restrictions, accessibility needs, or special requests..."
          />
        </div>

        {selectedTour && (
          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <div className="summary-item">
              <span>Tour:</span>
              <span>{selectedTour.title}</span>
            </div>
            <div className="summary-item">
              <span>Duration:</span>
              <span>{selectedTour.duration}</span>
            </div>
            <div className="summary-item">
              <span>Travelers:</span>
              <span>{formData.travelers}</span>
            </div>
            <div className="summary-item total">
              <span>Total Price:</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
          </div>
        )}

        <button type="submit" className="submit-button">
          <CreditCard size={20} />
          Complete Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
