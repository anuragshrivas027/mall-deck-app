# Galleria Mall Interactive Sales Deck

## Live Demo

Live Interactive Demo:  
https://mall-deck-app.vercel.app/

Demo Video:  
demo-video/demo.mp4

---

## Project Overview

This project is a browser-based interactive sales deck designed for large-scale shopping mall properties.

It replaces fragmented sales workflows (PDFs, videos, spreadsheets) with a single immersive, high-impact experience.

The platform is built for:
- Retail tenants
- Brand sponsors and partners
- Event organizers and production teams

It is designed to communicate scale instantly and drive business actions such as leasing, sponsorship, and event bookings.

---

## Objective

- Build a cinematic, high-end interactive sales tool
- Deliver non-linear navigation (user-controlled journey)
- Use video as the primary storytelling medium
- Present business value clearly (footfall, brands, reach)
- Ensure high performance (90+ Lighthouse)
- Integrate AI-assisted workflows and assets

---

## Project Location (Local Setup)

C:\mall-deck\mall-deck-app

---

## Initial Setup Steps

1. Installed Node.js (LTS)
2. npm installed with Node.js

3. Created project using Vite:

   npm create vite@latest mall-deck-app

4. Selected:
   - Framework: React
   - Variant: JavaScript

5. Navigate to project:

   cd mall-deck-app

6. Install dependencies:

   npm install

7. Install libraries:

   npm install framer-motion  
   npm install tailwindcss postcss autoprefixer  

8. Initialize Tailwind:

   npx tailwindcss init -p

---

## Project Structure

mall-deck-app/
- public/
- src/
  - components/
  - sections/
  - styles/
- screenshots/
- demo-video/
- package.json
- vite.config.js

---

## Public Assets

- hero.mp4 → cinematic hero background
- intro.mp4 → intro experience
- map.jpg → interactive mall map
- brand logos → Prada, Rolex, Dior, etc.

---

## Core Architecture

src/sections/

- Hero.jsx → cinematic entry + scale statement
- Immersive.jsx → scroll-based video storytelling
- Stats.jsx → animated metrics (100M+ visitors)
- Retail.jsx → retail positioning + brand ecosystem
- Luxury.jsx → premium audience targeting
- Dining.jsx → lifestyle + spend insights
- Entertainment.jsx → attraction ecosystem
- Events.jsx → event platform positioning
- EventDetails.jsx → expandable event module
- Leasing.jsx → leasing funnel
- Sponsorship.jsx → brand partnerships
- CTA.jsx → final conversion actions

---

## Key Features

### Cinematic Experience
- Fullscreen video hero
- Scroll-triggered animations
- Minimal UI, maximum visual impact

### Business-Focused Storytelling
- Footfall metrics
- Brand positioning
- Revenue potential insights
- Event platform scale

### Interactive Navigation
- Non-linear navigation
- Smooth scrolling
- Section-based exploration

### Conversion System
- Leasing CTA
- Visit planner
- Interactive map
- Form validation

---

## AI Integration

AI was used intentionally across the product workflow.

### Tools Used
- ChatGPT (content, logic, structure)
- AI-assisted design thinking (UX, layout decisions)

### Application Areas

1. Content & Narrative  
- Business storytelling (Retail, Luxury, Events)  
- Scale messaging (100M+ visitors, brand density)  
- Structured pitch flow  

2. UI/UX Design  
- Section hierarchy  
- Layout composition  
- Interaction planning  

3. Code & Architecture  
- Component modularization  
- Performance strategies  
- Animation logic  

4. Visual Enhancement  
- Asset selection  
- Consistent premium aesthetic  

---

## Innovation Layer (Simulated Intelligence)

The platform includes simulated intelligence features:

### Smart Visit Suggestions
- Morning → Dining focus  
- Afternoon → Retail engagement  
- Evening → Luxury + entertainment peak  

### Business Insights
- Retail conversion positioning  
- Event audience scale  
- Dining spend behavior  

### Expandable Architecture
- Event module → booking system ready  
- Sponsorship → analytics ready  
- Dashboard → future real-time integration  

---

## Performance

Lighthouse Score:

- Performance: 92+  
- Accessibility: 100  
- Best Practices: 100  
- SEO: 90+  

Optimizations:
- Lazy loading images
- Video preload control
- Reduced motion support
- Optimized rendering

---

## Screenshots

Location:  
screenshots/

Included:

- hero.png → cinematic entry section  
- intro.png → intro experience  
- brands.png → brand ecosystem  
- retail.png → retail positioning  
- luxury.png → luxury experience  
- events.png → event storytelling  
- leasing.png → leasing module  
- visit.png → visit planner UI  
- lighthouse.png → performance audit  

These screenshots validate UI quality, interaction flow, and performance.

---

## Demo Video

Location:  
demo-video/demo.mp4

Covers:
- Full navigation flow
- Scroll interactions
- Video storytelling
- CTA and conversions

---

## Deployment

Live Production URL:  
https://mall-deck-app.vercel.app/

Supported platforms:
- Vercel
- Netlify
- GitHub Pages

Build command:
npm run build

Preview production build:
npm run preview

---

## How to Run Locally

cd C:\mall-deck\mall-deck-app  
npm install  

Development mode:
npm run dev  

Production preview:
npm run build  
npm run preview  

---

## Design Approach

- Premium and minimal UI
- Inspired by Apple, Tesla, luxury brands
- Built for decision-makers
- Focus on clarity, scale, and conversion

---

## What This Project Demonstrates

- Product thinking over static UI
- Scalable architecture
- Performance optimization
- Business storytelling
- Effective AI-assisted workflow

---

## Future Improvements

- Real-time analytics integration
- AI personalization (brand-specific insights)
- Advanced sponsorship dashboards
- Multi-layer video storytelling

---

## Author

Anurag Shrivas