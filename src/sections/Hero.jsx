import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [loadVideo, setLoadVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadVideo(true), 300);

    // detect mobile
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }

    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -120]);

  return (
    <div className="h-screen w-full relative overflow-hidden">

      {/* VIDEO OR FALLBACK */}
      {loadVideo && !isMobile ? (
        <motion.video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          style={{ scale, opacity }}
          className="absolute w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.jpg')", // 👉 add one fallback image
          }}
        />
      )}

      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
          Galleria Mall
        </h1>

        <p className="mt-4 text-white text-lg md:text-xl font-medium">
          100M+ Annual Visitors · 500+ Brands · Global Destination
        </p>

        <p className="mt-4 text-muted max-w-xl text-lg">
          A next-generation retail, entertainment, and brand activation ecosystem.
        </p>

        <p className="text-sm text-muted mt-3">
          Leasing · Sponsorship · Events
        </p>

        <button
          onClick={() =>
            document.getElementById("overview")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="btn-premium mt-10"
        >
          Explore
        </button>

        <div className="mt-6 text-sm text-gray-400">
          Scroll ↓
        </div>
      </motion.div>
    </div>
  );
}