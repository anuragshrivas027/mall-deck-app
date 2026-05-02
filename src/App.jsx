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

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [slideIndex, setSlideIndex] = useState(1);
  const totalSlides = 14;

  const [progress, setProgress] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  /* CURSOR */
  useEffect(() => {
    const move = (e) => {
      requestAnimationFrame(() => {
        setCursor({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* LOADER */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  /* SLIDE INDEX */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let index = 1;

      sections.forEach((section, i) => {
        const top = section.offsetTop - 200;
        if (window.scrollY >= top) {
          index = i + 1;
        }
      });

      setSlideIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* PROGRESS */
  useEffect(() => {
    setProgress((slideIndex / totalSlides) * 100);
  }, [slideIndex]);

  /* INSIGHT */
  const [insight, setInsight] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y < 800) setInsight("100M+ annual visitors.");
      else if (y < 1600) setInsight("Retail conversion zones.");
      else if (y < 2400) setInsight("Luxury audience targeting.");
      else if (y < 3200) setInsight("Dining increases dwell time.");
      else if (y < 4200) setInsight("Event activation scale.");
      else setInsight("Leasing & sponsorship opportunities.");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔥 TRUE DECK MODE (FIXED FOR TOUCHPAD + TOUCH) */
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    let currentIndex = 0;
    let isScrolling = false;
    let lastScrollTime = 0;

    const scrollToSection = (index) => {
      if (index < 0 || index >= sections.length) return;

      isScrolling = true;

      sections[index].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      currentIndex = index;

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    const handleWheel = (e) => {
      const now = Date.now();

      if (isScrolling || now - lastScrollTime < 500) return;

      if (Math.abs(e.deltaY) < 5) return; // 🔥 FIX: allow trackpad micro scroll

      if (e.deltaY > 0) scrollToSection(currentIndex + 1);
      else scrollToSection(currentIndex - 1);

      lastScrollTime = now;
      setAutoPlay(false);
    };

    /* 🔥 TOUCH SUPPORT */
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const delta = touchStartY - e.changedTouches[0].clientY;

      if (Math.abs(delta) < 50) return;

      if (delta > 0) scrollToSection(currentIndex + 1);
      else scrollToSection(currentIndex - 1);
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  /* AUTO PLAY */
  useEffect(() => {
    if (!autoPlay) return;

    const sections = document.querySelectorAll("section");
    let index = slideIndex - 1;

    const interval = setInterval(() => {
      if (index < sections.length - 1) {
        index++;
        sections[index].scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [autoPlay, slideIndex]);

  return (
    <div className="bg-primary text-white">

      {!entered && (
        <>
          <video src="/hero.mp4" preload="auto" muted playsInline style={{ display: "none" }} />
          <video src="/intro.mp4" preload="auto" muted playsInline style={{ display: "none" }} />
        </>
      )}

      {/* PROGRESS */}
      {entered && (
        <div className="fixed top-0 left-0 w-full h-[2px] bg-white/10 z-[999]">
          <div className="h-full bg-white transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* CURSOR */}
      <div
        className="cursor-glow"
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
      />

      {/* SLIDE */}
      {entered && (
        <div className="fixed bottom-6 right-6 text-xs tracking-widest text-gray-400 z-50">
          {String(slideIndex).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </div>
      )}

      {/* AUTO */}
      {entered && (
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="fixed bottom-6 left-6 text-xs tracking-widest text-gray-400 z-50 border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
        >
          {autoPlay ? "PAUSE" : "AUTO"}
        </button>
      )}

      {loading && <Loader />}

      {!entered && !loading && !showTransition && (
        <Intro onEnter={() => setShowTransition(true)} />
      )}

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

      <AnimatePresence mode="wait">
        {entered && !loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Navbar />

            <Suspense fallback={<div className="text-center mt-40 text-muted">Loading...</div>}>
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

            <InsightPanel insight={insight} />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}