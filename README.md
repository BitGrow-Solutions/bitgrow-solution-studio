# BitGrow Solutions Website

## About

A modern, responsive website for BitGrow Solutions - a software development company that grows ideas into reliable software. Built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ or Bun installed

### Installation

```sh
# Install dependencies
bun install

# Start the development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Features

- **7 Pages**: Home, Services, Industries, Work (Portfolio), About, Contact, Privacy, Terms
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: React 18, TypeScript, Vite
- **Component Library**: shadcn/ui components
- **Form Validation**: React Hook Form + Zod
- **Accessibility**: WCAG AA compliant
- **SEO Ready**: Meta tags and semantic HTML
- **Performance Optimized**: Lazy loading and code splitting

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout
│   ├── sections/        # Reusable section components
│   └── ui/              # shadcn/ui components
├── data/
│   └── content.json     # All site content and copy
├── pages/               # Route pages
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Industries.tsx
│   ├── Work.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Privacy.tsx
│   └── Terms.tsx
├── lib/
│   └── utils.ts         # Utility functions
└── App.tsx              # Route configuration
```

## Customization

All content is centralized in `src/data/content.json` for easy updates:
- Company information
- Services and consulting offerings
- Industry segments
- Portfolio/work items
- Testimonials
- Value propositions
- Process steps

## Deployment

This project is ready to deploy to:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**
- Any static hosting service

## License

© BitGrow Solutions. All rights reserved.
