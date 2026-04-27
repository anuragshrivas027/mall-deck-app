import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import InsightPanel from "./components/InsightPanel";

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
  const [showTransition, setShowTransition] = useState(false);
  const [loading, setLoading] = useState(true);

  /* 🔥 CURSOR */
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      requestAnimationFrame(() => {
        setCursor({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* 🔥 LOADER */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  /* 🔥 INSIGHT ENGINE */
  const [insight, setInsight] = useState("");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;

          if (y < 800) {
            setInsight("100M+ annual visitors. High-impact entry exposure.");
          } else if (y < 1600) {
            setInsight("Retail zones driving maximum brand conversion.");
          } else if (y < 2400) {
            setInsight("Luxury segment attracting high-net-worth audience.");
          } else if (y < 3200) {
            setInsight("Dining & lifestyle extending visitor dwell time.");
          } else if (y < 4200) {
            setInsight("Event platform enabling global-scale activations.");
          } else {
            setInsight("Leasing, sponsorship, and event opportunities active.");
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-primary text-white">

      {/* 🔥 CURSOR */}
      <div
        className="cursor-glow"
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`
        }}
      />

      {loading && <Loader />}

      {/* INTRO */}
      {!entered && !loading && !showTransition && (
        <Intro onEnter={() => setShowTransition(true)} />
      )}

      {/* 🔥 CLEAN TRANSITION (NO VIDEO) */}
      {showTransition && !entered && (
        <motion.div
          className="fixed inset-0 bg-black z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => {
            setTimeout(() => setEntered(true), 300);
          }}
        />
      )}

      {/* MAIN APP */}
      <AnimatePresence mode="wait">
        {entered && !loading && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />

            <Suspense
              fallback={
                <div className="text-center mt-40 text-muted">
                  Loading experience...
                </div>
              }
            >
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

            {/* 🔥 INSIGHT PANEL */}
            <InsightPanel insight={insight} />

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}