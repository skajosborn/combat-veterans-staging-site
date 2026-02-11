# Combat Veterans to Careers Foundation

A bold, patriotic Next.js application designed to help combat veterans transition into successful civilian careers.

## Features

- **Bold, Patriotic Design**: Red, white, and blue color scheme with modern UI elements
- **Hero Section**: Captivating landing page with call-to-action
- **Programs Section**: Showcase of available career transition programs
- **Success Stories**: Testimonials from veterans who have successfully transitioned
- **Contact Form**: Application and contact form for interested veterans
- **Responsive Design**: Fully responsive across all device sizes

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

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind configuration
│   ├── layout.tsx       # Root layout with navigation
│   └── page.tsx         # Homepage
├── components/
│   ├── Navigation.tsx   # Top navigation bar
│   ├── Hero.tsx         # Hero section with main CTA
│   ├── Programs.tsx     # Programs showcase
│   ├── SuccessStories.tsx # Success stories section
│   └── Contact.tsx      # Contact form and information
└── package.json         # Dependencies and scripts
```

## Design Philosophy

The design emphasizes:
- **Bold Typography**: Large, impactful headings
- **Patriotic Colors**: Red (#B22234), Blue (#3C3B6E), Navy (#1E3A5F), and Gold (#FFD700)
- **Modern UI**: Clean layouts with subtle animations and hover effects
- **Accessibility**: Semantic HTML and proper contrast ratios

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Inter font family
