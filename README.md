# Galleria Mall Interactive Sales Deck

## Project Overview

This project is a browser-based interactive sales deck built for a large-scale shopping mall property.  
It replaces traditional fragmented sales processes (PDFs, videos, spreadsheets) with a single immersive experience.

The platform is designed for:
- Retail tenants
- Brand partners and sponsors
- Event organizers and production teams

The goal is to create immediate impact, communicate scale, and drive business actions such as leasing, sponsorship, and event bookings.

---

## Objective

- Build a cinematic, high-end interactive sales tool
- Deliver non-linear navigation (user-controlled journey)
- Use video as the primary storytelling medium
- Present business value clearly (footfall, brands, revenue potential)
- Ensure performance, responsiveness, and deployability
- Integrate AI-assisted assets and workflows

---

## Project Location (Local Setup)

C:\mall-deck\mall-deck-app

---

## Initial Setup Steps

1. Installed Node.js (LTS)
2. Installed npm (comes with Node.js)

3. Created project using Vite:

   npm create vite@latest mall-deck-app

4. Selected:
   - Framework: React
   - Variant: JavaScript

5. Navigated to project:

   cd mall-deck-app

6. Installed dependencies:

   npm install

7. Installed additional libraries:

   npm install framer-motion
   npm install tailwindcss postcss autoprefixer

8. Initialized Tailwind:

   npx tailwindcss init -p

---

## Project Structure

mall-deck-app/
- public/
- src/
- screenshots/
- demo-video/
- package.json
- vite.config.js

---

## Public Assets

- hero.mp4 (cinematic entry video)
- intro.mp4 (intro experience)
- map.jpg (interactive mall map)
- brand logos (Prada, Rolex, Dior, etc.)

---

## Core Architecture

src/sections/

- Hero.jsx → First impression (scale + business hook)
- Immersive.jsx → Video storytelling layer
- Stats.jsx → Animated business metrics
- Retail.jsx → Retail performance & positioning
- Luxury.jsx → Premium audience targeting
- Dining.jsx → Lifestyle + spend behavior
- Entertainment.jsx → Attraction ecosystem
- Events.jsx → Event platform positioning
- EventDetails.jsx → Expandable module
- Leasing.jsx → Business conversion flow
- Sponsorship.jsx → Brand partnerships
- CTA.jsx → Final conversion actions

---

## Key Features

### Cinematic Experience
- Fullscreen video hero
- Scroll-based animations
- Visual storytelling instead of static slides

### Business-Driven Storytelling
- Footfall metrics
- Retail conversion insights
- Luxury audience positioning
- Event scale and platform value

### Interactive Navigation
- Non-linear section navigation
- Smooth scroll behavior
- User-controlled exploration

### Conversion-Oriented Design
- Leasing CTA
- Visit planning system
- Interactive map
- Form validation

---

## AI Integration (EXPLICIT)

AI was used as a core part of both design and development workflow.

### Tools Used
- ChatGPT (for content, structure, and logic)
- AI-assisted design reasoning (layout, UX hierarchy)
- AI-supported asset selection and enhancement

### Where AI Was Applied

1. Content & Storytelling
   - Generated business-focused copy (Retail, Luxury, Events)
   - Crafted scale statements (e.g., "100M+ visitors")
   - Structured narrative flow like a real sales deck

2. UI/UX Design Decisions
   - Section hierarchy planning
   - Layout structuring for clarity and impact
   - Interaction patterns inspired by premium platforms

3. Code & Architecture
   - Component structuring (modular sections)
   - Performance optimization strategies
   - Animation logic using Framer Motion

4. Visual Enhancement
   - Selection and refinement of imagery
   - Maintaining consistent premium aesthetic

---

## Simulated "Innovation Layer" (WOW Factor)

While real-time data integration is not connected, the system simulates intelligent decision support:

### 1. Smart Visit Suggestions
- Based on selected time slot, system provides insights:
  - Morning → Dining & lifestyle
  - Afternoon → Retail engagement
  - Evening → Luxury & entertainment peak

### 2. Business-Oriented Metrics
- Retail section highlights conversion potential
- Events section shows audience scale
- Dining section reflects spending behavior

### 3. Modular Expansion Ready
- EventDetails module can expand into booking system
- Sponsorship module can integrate real analytics
- Dashboard module supports future live data

This demonstrates how the platform can evolve into a fully data-driven sales system.

---

## Performance

- Lighthouse Score: 90+
- Optimizations:
  - Lazy loading images
  - Video preload control
  - Reduced motion support
  - Efficient rendering

---

## Demo Video

Location:
demo-video/demo.mp4

Covers:
- Full navigation flow
- Animations and transitions
- User interactions
- Overall experience

---

## Deployment

Supported platforms:
- Vercel
- Netlify
- GitHub Pages

Build:

npm run build

---

## How to Run Locally

cd C:\mall-deck\mall-deck-app  
npm install  
npm run dev  

Open:
http://localhost:4713/

---

## Design Approach

- Minimal, premium, and cinematic
- Inspired by Apple, Tesla, luxury brand platforms
- Focused on decision-makers (not casual users)
- Built as a product, not just a UI

---

## What This Project Demonstrates

- Product thinking over static development
- Modular and scalable architecture
- Strong performance optimization
- Business-driven storytelling
- Effective AI-assisted workflow

---

## Future Improvements

- Real-time analytics integration
- AI personalization (brand-specific insights)
- Multi-layer video storytelling
- Advanced sponsorship dashboards

---

## Author

Anurag Shrivas