# ASPIRE IITB Research Park Foundation Website

A modern, responsive website for ASPIRE IITB Research Park Foundation built with HTML, CSS (Tailwind), and JavaScript.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with consistent spacing and typography
- **Interactive Elements**: Animated sliders, team member modals, and smooth scrolling
- **Customizable**: Easy-to-modify Tailwind configuration for quick style changes

## Design System

### Colors
- **Primary**: `#c1598d` - Main brand color
- **Secondary**: `#304268` - Dark blue for headers and accents
- **Accent**: `#7bc99f` - Light green for highlights
- **Surface**: `#f7f7f7` - Light gray background
- **Text Primary**: `#304268` - Main text color
- **Text Secondary**: `#595656` - Secondary text color

### Spacing
Consistent spacing scale using Tailwind's spacing system:
- Small gaps: `gap-4` (1rem)
- Medium gaps: `gap-8` (2rem)
- Large gaps: `gap-12` (3rem)
- Extra large: `gap-16` (4rem)

### Typography
- **Headings**: Inter font, various weights from light to black
- **Body**: Inter font, regular weight
- **Display**: Public Sans for special headings

### Shadows
- `shadow-soft`: Subtle shadow for cards
- `shadow-medium`: Medium shadow for hover states
- `shadow-large`: Large shadow for emphasis

## File Structure

```
/
├── index.html          # Main homepage
├── script.js           # JavaScript functionality
├── tailwind.config.js  # Tailwind configuration (created)
├── data/
│   ├── partners.json   # Partner logos data
│   └── connect-collocate.json  # Features data
├── assets/             # Static assets
└── homepage/           # Additional pages
```

## Customization

### Colors
Edit the color values in the `tailwind.config.js` file under the `colors` section:

```javascript
colors: {
  primary: '#c1598d',    // Change this to update primary color
  secondary: '#304268',  // Change this to update secondary color
  // ... other colors
}
```

### Spacing
Modify the spacing scale in `tailwind.config.js`:

```javascript
spacing: {
  '18': '4.5rem',  // Custom spacing values
  // ... other spacing
}
```

### Typography
Update font families and sizes in the config:

```javascript
fontFamily: {
  sans: ["Inter", "system-ui", "sans-serif"],
  display: ["Public Sans", "sans-serif"],
}
```

## Development

1. **Local Development**:
   ```bash
   python3 -m http.server 8000
   ```
   Visit `http://localhost:8000` to view the site.

2. **Making Changes**:
   - Edit `index.html` for content and structure
   - Modify `script.js` for functionality
   - Update `tailwind.config.js` for styling
   - Data files are in the `data/` folder

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Performance

- Optimized images and assets
- Efficient CSS with Tailwind's purging
- Fast loading with minimal JavaScript

## License

© 2024 ASPIRE Innovation Hub. All rights reserved.