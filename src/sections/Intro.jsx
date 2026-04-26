import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ onEnter }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onEnter();
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[999] bg-black">

      <video
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute bottom-6 right-6 z-30">
        <button onClick={onEnter} className="btn-premium">
          SKIP INTRO
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold">
          Galleria Mall
        </h1>

        <button onClick={onEnter} className="btn-premium mt-10">
          ENTER
        </button>
      </motion.div>
    </div>
  );
}