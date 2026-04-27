# Galleria Mall Interactive Sales Deck

## Live Deployment Link

Live Deployment Vercel Link:  
https://mall-deck-app.vercel.app/

Demo Video:  
demo-video/demo.mp4

---

## Project Overview

This project is a browser-based interactive sales deck designed for large-scale shopping mall properties.

It replaces fragmented sales workflows (PDFs, videos, spreadsheets) with a single immersive, high-impact experience.

The platform is built for:

* Retail tenants
* Brand sponsors and partners
* Event organizers and production teams

It is designed to communicate scale instantly and drive business actions such as leasing, sponsorship, and event bookings.

---

## Objective

* Build a cinematic, high-end interactive sales tool
* Deliver non-linear navigation (user-controlled journey)
* Use video as the primary storytelling medium
* Present business value clearly (footfall, brands, reach)
* Ensure high performance (90+ Lighthouse)
* Integrate AI-assisted workflows and assets

---

## Experience Flow (Important)

The experience is designed as a **controlled cinematic entry system**:

1. Intro Screen (video / entry interaction)
2. Smooth transition (fade layer, no duplicate video)
3. Hero Section (primary cinematic video)

### Engineering Decision

To avoid:
* video restart
* flicker / flash issues
* double-loading of heavy assets

The hero video (`hero.mp4`) is used **only once inside Hero.jsx**, and the transition uses a **lightweight fade instead of video**.

This ensures:
* seamless playback
* no visual glitches
* better performance

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

   * Framework: React
   * Variant: JavaScript

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

* public/
* src/
  * components/
  * sections/
  * styles/
* screenshots/
* demo-video/
* package.json
* vite.config.js

---

## Public Assets

* hero.mp4 → cinematic hero background (primary video)
* intro.mp4 → intro experience
* map.jpg → interactive mall map
* brand logos → Prada, Rolex, Dior, etc.

---

## Core Architecture

src/sections/

* Hero.jsx → cinematic entry + video rendering system
* Immersive.jsx → scroll-based video storytelling
* Stats.jsx → animated metrics (100M+ visitors)
* Retail.jsx → retail positioning + brand ecosystem
* Luxury.jsx → premium audience targeting
* Dining.jsx → lifestyle + spend insights
* Entertainment.jsx → attraction ecosystem
* Events.jsx → event platform positioning
* EventDetails.jsx → expandable event module
* Leasing.jsx → leasing funnel
* Sponsorship.jsx → brand partnerships
* CTA.jsx → final conversion actions

---

## Key Features

## Cinematic Experience

* Fullscreen video hero
* Smooth intro-to-hero transition
* Scroll-triggered animations
* Minimal UI, maximum visual impact

## Business-Focused Storytelling

* Footfall metrics
* Brand positioning
* Revenue potential insights
* Event platform scale

## Interactive Navigation

* Non-linear navigation
* Smooth scrolling
* Section-based exploration

## Conversion System

* Leasing CTA
* Visit planner
* Interactive map
* Form validation

---

## Advanced Engineering Enhancements

## Code Splitting (Performance Optimization)

* Implemented using React.lazy and Suspense
* Each section is loaded only when required
* Reduces initial bundle size
* Improves first paint and Lighthouse performance

## Scroll Optimization

* requestAnimationFrame used for scroll handling
* Prevents unnecessary re-renders
* Ensures smooth performance across sections

## Cursor Rendering Optimization

* GPU-based transform rendering
* Avoids layout thrashing
* Maintains smooth 60fps interaction

## Video Rendering Optimization

* Single video source (no duplication)
* Delayed playback handling to prevent flash frames
* Mobile fallback using static image
* Eliminated transition video to avoid re-render conflicts

---

## AI Integration

AI was used intentionally across the product workflow.

## Tools Used

* ChatGPT (content, logic, structure)
* AI-assisted design thinking (UX and layout decisions)

## Application Areas

## Content and Narrative

* Business storytelling (Retail, Luxury, Events)
* Scale messaging (100M+ visitors, brand density)
* Structured pitch flow

## UI and UX Design

* Section hierarchy
* Layout composition
* Interaction planning

## Code and Architecture

* Component modularization
* Performance optimization strategies
* Animation logic using Framer Motion

## Visual Enhancement

* Asset selection
* Maintaining consistent premium design language

---

## Innovation Layer (Insight Engine)

A dynamic Insight Engine has been implemented to simulate intelligent business guidance.

## What It Does

* Tracks user scroll position
* Updates contextual business insights dynamically
* Reinforces value propositions in real-time

## Example Insights

* Entry → "100M+ annual visitors. High-impact exposure."
* Retail → "Retail zones driving maximum conversion."
* Luxury → "High-net-worth audience engagement."
* Dining → "Increased dwell time and spend."
* Events → "Global-scale activation platform."

## Why This Matters

* Simulates data-driven decision support
* Enhances storytelling with contextual intelligence
* Demonstrates product-thinking beyond static UI
* Shows capability to evolve into analytics-driven platform

---

## Performance

Lighthouse Score:

* Performance: 92+
* Accessibility: 100
* Best Practices: 100
* SEO: 90+

## Optimizations

* Lazy loading images
* Video preload control
* Code splitting using React.lazy
* Scroll performance optimization
* Reduced motion support
* GPU-accelerated animations

---

## Screenshots

Location:  
screenshots/

Included:

* hero.png → cinematic entry section
* intro.png → intro experience
* brands.png → brand ecosystem
* retail.png → retail positioning
* luxury.png → luxury experience
* events.png → event storytelling
* leasing.png → leasing module
* visit.png → visit planner UI
* lighthouse.png → performance audit

---

## Demo Video

Location:  
demo-video/demo.mp4

## Covers

* Full navigation flow
* Scroll interactions
* Video storytelling
* CTA and conversion flows

---

## Deployment

Live Production URL:  
https://mall-deck-app.vercel.app/

## Supported Platforms

* Vercel
* Netlify
* GitHub Pages

## Build Commands

npm run build

## Preview Production Build

npm run preview

---

## How to Run Locally

cd C:\mall-deck\mall-deck-app  
npm install  

## Development Mode

npm run dev  

## Production Preview

npm run build  
npm run preview  

---

## Design Approach

* Premium and minimal UI
* Inspired by Apple, Tesla, luxury brands
* Built for decision-makers
* Focused on clarity, scale, and conversion

---

## What This Project Demonstrates

* Product thinking over static UI
* Scalable architecture
* Performance-first engineering
* Business-driven storytelling
* AI-assisted workflow integration
* Simulation of intelligent systems without backend dependency

---

## Future Improvements

* Real-time analytics integration
* AI personalization (brand-specific insights)
* Advanced sponsorship dashboards
* Multi-layer video storytelling

---

## Author

Anurag Shrivas