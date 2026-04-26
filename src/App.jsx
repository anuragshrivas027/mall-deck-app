import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";

/* 🔥 CODE SPLITTING */
const Hero = lazy(() => import("./sections/Hero"));
const Immersive = lazy(() => import("./sections/Immersive"));
const Stats = lazy(() => import("./sections/Stats"));
const Overview = lazy(() => import("./sections/Overview"));
const Brands = lazy(() => import("./sections/Brands"));
const Retail = lazy(() => import("./sections/Retail"));
const Leasing = lazy(() => import("./sections/Leasing"));
const Sponsorship = lazy(() => import("./sections/Sponsorship"));
const Experience = lazy(() => import("./sections/Experience"));
const Luxury = lazy(() => import("./sections/Luxury"));
const Dining = lazy(() => import("./sections/Dining"));
const Entertainment = lazy(() => import("./sections/Entertainment"));
const Events = lazy(() => import("./sections/Events"));
const EventDetails = lazy(() => import("./sections/EventDetails"));
const CTA = lazy(() => import("./sections/CTA"));

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <motion.h1
        initial={{ opacity: 0, letterSpacing: "0.6em" }}
        animate={{ opacity: 1, letterSpacing: "0.25em" }}
        transition={{ duration: 1 }}
        className="text-xs tracking-[0.4em]"
      >
        GALLERIA
      </motion.h1>
    </div>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [loading, setLoading] = useState(true);

  /* 🔥 CURSOR GLOW */
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-primary text-white">

      {/* 🔥 CURSOR */}
      <div
        className="cursor-glow"
        style={{ left: cursor.x, top: cursor.y }}
      />

      {loading && <Loader />}

      {!entered && !loading && (
        <Intro onEnter={() => setEntered(true)} />
      )}

      <AnimatePresence mode="wait">
        {entered && !loading && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar />

            <Suspense fallback={<div className="text-center mt-40">Loading...</div>}>

              <main className="pt-20">

                <section id="hero"><Hero /></section>
                <section id="immersive"><Immersive /></section>

                <section id="stats"><Stats /></section>
                <section id="overview"><Overview /></section>
                <section id="brands"><Brands /></section>
                <section id="retail"><Retail /></section>

                <section id="leasing"><Leasing /></section>
                <section id="sponsorship"><Sponsorship /></section>

                <section id="experience"><Experience /></section>
                <section id="luxury"><Luxury /></section>
                <section id="dining"><Dining /></section>
                <section id="entertainment"><Entertainment /></section>
                <section id="events"><Events /></section>
                <section id="event-details"><EventDetails /></section>

                <section id="cta"><CTA /></section>

              </main>

            </Suspense>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}