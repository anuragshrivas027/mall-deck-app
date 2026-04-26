import { motion } from "framer-motion";

export default function Immersive() {
  return (
    <div className="section relative overflow-hidden">

      <motion.video
        src="/experience.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <h2 className="text-4xl md:text-6xl max-w-3xl">
          Experience retail, entertainment, and culture — all in one destination
        </h2>
      </div>
    </div>
  );
}