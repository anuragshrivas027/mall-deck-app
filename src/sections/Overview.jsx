import { motion } from "framer-motion";

export default function Overview() {
  return (
    <div className="section relative flex flex-col justify-center px-10 md:px-20">

      {/* BACKGROUND */}
      <img
        src="/overview.jpg"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl"
        >
          A Destination Like No Other
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-6 text-muted max-w-2xl text-lg"
        >
          Galleria Mall is not just a retail destination — it is a high-performance commercial ecosystem...
        </motion.p>
      </div>
    </div>
  );
}