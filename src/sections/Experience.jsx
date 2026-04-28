import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="section relative flex flex-col items-center justify-center text-center px-6">

      {/* 🔥 ADDED IMAGE */}
      <img
        src="/experience.jpg"
        alt="Experience"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-4xl md:text-6xl font-bold"
      >
        Experiential Destination
      </motion.h2>

      <p className="relative z-10 mt-6 max-w-2xl text-muted text-lg">
        From immersive entertainment to global events and attractions,
        the destination redefines retail through experience.
      </p>

    </div>
  );
}