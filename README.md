# Serkayon Industrial Intelligence Website

A premium industrial SaaS website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Full-screen video background with smooth animations
- **Product Showcase**: Interactive product cards with hover effects
- **Product Detail Pages**: Reusable template with features, demo video, and CTA buttons
- **Contact Form**: Email integration ready (EmailJS or backend API)
- **Responsive Design**: Desktop-first, fully responsive layout
- **Smooth Animations**: Subtle fade, slide, and glow effects using Framer Motion
- **Dark Industrial Theme**: Professional, authoritative design

## Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- EmailJS (for contact form)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── ScrollArrow.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Configuration

### Video Background

Replace the video source in `src/pages/Home.jsx` with your actual video file:
```jsx
<source src="/path/to/your/video.mp4" type="video/mp4" />
```

### Email Integration

For the contact form, you have two options:

1. **EmailJS** (configured but needs setup):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` in `src/pages/Contact.jsx`

2. **Backend API**:
   - Replace the EmailJS code with a fetch call to your backend endpoint

### Product Images

Update product images in `src/pages/ProductDetail.jsx` with your actual product images.

### YouTube Video IDs

Replace the `videoId` values in the `productData` object with your actual YouTube video IDs.

## Customization

### Colors

Edit `tailwind.config.js` to customize the industrial theme colors:
- `industrial-dark`: Main background
- `industrial-gray`: Card backgrounds
- `industrial-glow`: Accent color (hover effects, borders)

### Animations

Animations are handled by Framer Motion. Adjust timing and effects in individual components.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© Serkayon Technologies Pvt Ltd
