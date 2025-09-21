# Wanderlust Tours - Travel Website

A modern, responsive tour and travel website built with React featuring booking functionality and beautiful UI design.

## Features

- 🌍 **Beautiful Landing Page** - Eye-catching hero section with stunning travel imagery
- 🎯 **Tour Catalog** - Browse featured tours with detailed information and pricing
- 📅 **Booking System** - Complete booking functionality with form validation
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- ⚡ **Fast Performance** - Optimized for speed and user experience

## Tours Available

- **Tropical Paradise - Bali** - 7 days, $1,299
- **European Adventure - Paris** - 5 days, $1,899
- **Mountain Escape - Swiss Alps** - 6 days, $2,199
- **Desert Safari - Dubai** - 4 days, $1,599
- **Cultural Journey - Japan** - 10 days, $2,499
- **Island Hopping - Greece** - 8 days, $1,799

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or download the project files
2. Navigate to the project directory:
   ```bash
   cd tour-travel-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Landing page hero section
│   ├── Tours.js           # Tour catalog component
│   ├── Booking.js         # Booking form component
│   └── Footer.js          # Footer component
├── App.js                 # Main app component
├── App.css                # Global styles
└── index.js               # App entry point
```

## Technologies Used

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **CSS3** - Modern styling with flexbox and grid
- **Responsive Design** - Mobile-first approach

## Features in Detail

### Booking System
- Tour selection with real-time pricing
- Traveler count selection
- Date picker for start and end dates
- Payment method selection
- Special requests input
- Booking summary with total calculation
- Form validation and confirmation

### Responsive Design
- Mobile-first CSS approach
- Flexible grid layouts
- Touch-friendly navigation
- Optimized images and content

### User Experience
- Smooth animations and transitions
- Intuitive navigation
- Clear call-to-action buttons
- Professional color scheme
- Easy-to-read typography

## Customization

### Adding New Tours
Edit the `tours` array in `src/components/Tours.js` to add new tour packages.

### Styling
Modify `src/App.css` to customize colors, fonts, and layout according to your brand.

### Content
Update text content in individual components to match your business needs.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please contact us at info@wanderlusttours.com

---

**Happy Travels! 🌍✈️**
