import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [loadVideo, setLoadVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadVideo(true), 300);

    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <div className="h-screen w-full relative overflow-hidden">

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
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
      )}

      <div className="absolute inset-0 bg-black/70 z-10" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
          Galleria Mall
        </h1>

        <p className="mt-4 text-white text-lg md:text-xl font-medium">
          120M+ Visitors · 500+ Brands · Global Destination
        </p>

        <p className="mt-4 text-muted max-w-xl text-lg">
          A high-performance retail, entertainment, and brand activation ecosystem.
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
          Explore Experience
        </button>
      </motion.div>
    </div>
  );
}