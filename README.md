# Koda Advisors - Professional Consulting Website

A modern, professional website for Koda Advisors, providing fractional CIO services and strategic technology leadership.

## Features

- **Modern Design**: Clean, professional layout with responsive design
- **Service Showcase**: Comprehensive display of all consulting services
- **Contact Integration**: Professional contact forms and information
- **SEO Optimized**: Built with Next.js for excellent search engine optimization
- **Performance Focused**: Fast loading times and optimal user experience

## Services Highlighted

1. **Fractional & Advisory CIO Services**
2. **AI Strategy & Implementation**
3. **Digital Transformation Leadership**
4. **M&A Technology Due Diligence & Integration**
5. **Cybersecurity & Risk Management**
6. **IT Optimization & Cost Management**

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
└── components/
    ├── Header.tsx          # Navigation header
    ├── Hero.tsx            # Hero section with CTAs
    ├── Services.tsx        # Services showcase
    ├── About.tsx           # About section
    ├── Contact.tsx         # Contact form and info
    └── Footer.tsx          # Footer with links
```

## Customization

### Branding
- Update colors in `tailwind.config.js`
- Modify logo and company name in components
- Customize fonts in `layout.tsx`

### Content
- Edit service descriptions in `Services.tsx`
- Update contact information in `Contact.tsx` and `Footer.tsx`
- Modify about content in `About.tsx`

### Styling
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes
- Color scheme defined in Tailwind config

## Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with one click

### Other Platforms
- Netlify: Connect Git repository
- AWS Amplify: Deploy from Git
- Traditional hosting: Use `npm run build` output

## SEO Features

- Optimized meta tags and descriptions
- Structured data for search engines
- Fast loading times with Next.js optimization
- Responsive design for mobile-first indexing

## Contact Form Integration

The contact form is ready for integration with:
- Formspree
- Netlify Forms
- EmailJS
- Custom backend API

## License

© 2024 Koda Advisors. All rights reserved.

## Support

For questions about the website or services, contact:
- Email: info@kodaadvisors.com
- Phone: (123) 456-7890
