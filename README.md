# Harsh Sharma - React Portfolio

A stunning futuristic portfolio website built with React, Vite, and featuring glass-morphism design with Azure blue theme.

## Features

✨ **Design & Aesthetics:**
- Glass-morphism UI (iOS/macOS style)
- Futuristic blue gradient background with Azure theme
- Smooth animations and transitions
- Custom iPad OS-like cursor
- Responsive design (mobile, tablet, desktop)

🎯 **Sections:**
- Hero with call-to-action buttons
- About with professional summary
- Technical Skills organized by category
- Experience timeline with achievements
- Featured Projects showcase
- Certifications & Awards
- Contact information
- Smooth navigation

🚀 **Technology Stack:**
- React 18.2
- Vite (fast build tool)
- CSS3 (glass-morphism, animations)
- JavaScript (custom cursor, interactions)

## Setup & Installation

### Prerequisites
- Node.js 16+ installed

### Installation

1. **Navigate to the project directory:**
```bash
cd "Portfolio Harsh Sharma"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── CustomCursor.jsx
├── styles/             # CSS files
│   ├── index.css
│   ├── cursor.css
│   ├── navbar.css
│   ├── hero.css
│   ├── sections.css
│   └── footer.css
├── App.jsx
└── main.jsx
```

## Customization

### Modify Content
- Edit component files in `src/components/` to update content
- Each section has its own component for easy management

### Customize Colors
Update the CSS variables in `src/styles/index.css`:
```css
:root {
    --primary-blue: #0066cc;
    --accent-blue: #0099ff;
    /* ... other variables */
}
```

### Update Resume Data
Modify the arrays in component files to add/remove:
- Skills
- Experience
- Projects
- Certifications
- Awards

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Deploy to Vercel, Netlify, or GitHub Pages
- Upload the `dist` folder contents to your hosting provider
- Configure your hosting to serve `index.html` for all routes

## Performance Features

- Lazy loading of components
- Optimized animations with CSS transforms
- Efficient custom cursor implementation
- Smooth scroll behavior
- Intersection Observer for animations

## License

© 2026 Harsh Sharma. All rights reserved.

## Contact

- Email: Harsh.141615@gmail.com
- Phone: +91 8076692244
- LinkedIn: linkedin.com/in/harsh-sharma-qwer8303
- Location: Faridabad, Haryana, India
