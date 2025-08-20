# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 plumbing business website for "AB's Plumbing Services" in the San Francisco Bay Area. The project uses React 19, TypeScript, Tailwind CSS v4, and Framer Motion for animations.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### App Router Structure
- Uses Next.js App Router with TypeScript
- Pages located in `src/app/` with route-based file structure:
  - `/` - Home page (`src/app/page.tsx`)
  - `/about` - About page (`src/app/about/page.tsx`)
  - `/services` - Services page (`src/app/services/page.tsx`)
  - `/gallery` - Gallery page (`src/app/gallery/page.tsx`)
  - `/service-areas` - Service areas page (`src/app/service-areas/page.tsx`)

### Component Organization
- **Core Components** (`src/components/`):
  - `navigation.tsx` - Sticky navigation with mobile menu
  - `footer.tsx` - Site footer
  - `hero-section.tsx` - Landing page hero with CSS modules
  - `emergency-banner.tsx` - Emergency service banner
  - `contact-form.tsx` - Contact form component
  - `service-card.tsx` - Service display cards
  - `testimonial-card.tsx` - Customer testimonial cards

- **UI Components** (`src/components/ui/`):
  - `apple-cards-carousel.tsx` - Animated carousel component
  - `layout-grid.tsx` - Grid layout component

- **Hooks** (`src/hooks/`):
  - `use-outside-click.tsx` - Custom hook for detecting outside clicks

### Styling and Design System
- **Tailwind CSS v4** with custom configuration
- **Custom color palette**:
  - Primary: `#0EA5E9` (sky-500)
  - Primary Dark: `#0284C7` (sky-600)
  - Primary Light: `#38BDF8` (sky-400)
  - Primary Accent: `#7DD3FC` (sky-300)
- **CSS Modules** for component-specific styles (e.g., `hero-section.module.css`)
- **shadcn/ui integration** configured with "new-york" style
- **Icon system**: Lucide React icons and Tabler icons

### Key Libraries and Dependencies
- **Framer Motion** (`framer-motion`) - Animations and transitions
- **React Intersection Observer** - Scroll-based animations
- **Class Variance Authority** + **clsx** + **tailwind-merge** - Conditional styling utility in `src/lib/utils.ts`

### Business Context
- **Service Area**: San Francisco Bay Area
- **Services**: Emergency plumbing, water heater services, drain cleaning, general plumbing
- **Contact**: Emergency phone number is (415) 555-1234
- **Key Features**: 24/7 emergency service, 500+ 5-star reviews, licensed & insured

## Development Notes

### Configuration
- ESLint ignores errors during builds (`ignoreDuringBuilds: true`)
- Uses Turbopack for faster development builds
- TypeScript strict mode enabled
- shadcn/ui components use `@/` path aliasing

### Content Management
- Service data and testimonials are defined as JavaScript objects in `src/app/page.tsx`
- Static images stored in `public/` directory
- Business owner messaging and testimonials are hardcoded content

### Responsive Design
- Mobile-first responsive design
- Sticky navigation with mobile hamburger menu
- Emergency contact prominent on mobile
- Grid layouts that adapt from 1-column mobile to 4-column desktop