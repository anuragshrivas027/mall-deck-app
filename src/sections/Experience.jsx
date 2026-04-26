import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="section flex flex-col items-center justify-center text-center px-6">

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Experiential Destination
      </motion.h2>

      <p className="mt-6 max-w-2xl text-muted text-lg">
        From immersive entertainment to global events and attractions,
        the destination redefines retail through experience.
      </p>

    </div>
  );
}