# Aura Planner - Professional Event Management Company

A professional, corporate-grade event management website built with HTML, CSS, and JavaScript. Inspired by industry-leading event management companies.

## Features

✨ **Professional Design**
- Corporate-grade UI with modern color scheme
- Fully responsive design for all devices
- Smooth animations and professional transitions
- Trust-building elements and social proof

🎯 **Key Sections**
- **Hero Section**: Professional headline with dual call-to-action buttons
- **About Us**: Company credibility with key statistics (15+ years, 1000+ events, 200+ brands)
- **Services**: Six specialized event planning categories
- **Portfolio & Testimonials**: Client success stories with real-world results
- **Gallery**: Professional event photo showcase
- **Contact Form**: Professional inquiry form with validation
- **Footer**: Professional footer with branding

📱 **Mobile-Friendly**
- Fully responsive design for all screen sizes
- Mobile hamburger menu with smooth animations
- Touch-friendly interface
- Optimized button layouts for mobile

⚡ **Interactive Features**
- Mobile menu toggle with animated hamburger icon
- Smooth scroll navigation with active link highlighting
- Professional form validation and submission handling
- Success notifications with auto-dismiss
- Lazy loading for images
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Professional testimonial cards with metadata

## Project Structure

```
event/
├── index.html       # Main HTML file
├── style.css        # Styling and animations
├── main.js          # JavaScript functionality
└── README.md        # This file
```

## Getting Started

### Option 1: Open in Browser
Simply open `index.html` in your web browser to view the website.

### Option 2: Local Server (Recommended)
For better performance and to avoid CORS issues, use a local server:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Features Explained

### Mobile Menu
- Click the hamburger icon on mobile devices to toggle the navigation menu
- Menu automatically closes when a link is clicked

### Contact Form
- Fill in your details (Name, Email, Event Type, Message)
- Form validates all required fields
- Submit button shows "Sending..." state during submission
- Success message appears after submission
- Form automatically resets after successful submission

### Smooth Scrolling
- Click any navigation link to smoothly scroll to that section
- Active section is highlighted in the navigation

### Animations
- Sections fade in as you scroll down the page
- Cards have hover effects with lift animations
- Gallery images zoom on hover

## Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
  --color-text: #1f2937;
  /* ... more variables */
}
```

### Content
Edit the HTML content in `index.html` to customize:
- Company name and tagline
- About section text
- Service offerings
- Contact information
- Gallery images

### Styling
Modify `style.css` to change:
- Fonts and typography
- Spacing and layout
- Colors and gradients
- Animations and transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading for images
- Optimized CSS with CSS variables
- Smooth animations using CSS transforms
- Efficient JavaScript with event delegation
- Intersection Observer for scroll animations

## Future Enhancements

- Backend integration for form submissions
- Event filtering and search
- User testimonials section
- Blog/News section
- Social media integration
- Multi-language support
- Dark mode toggle

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues, please contact: hello@eventify.com

---

**Created with ❤️ for event planners everywhere**
