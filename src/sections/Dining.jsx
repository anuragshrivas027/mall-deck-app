import { motion } from "framer-motion";

export default function Dining() {
  return (
    <div className="section relative flex flex-col items-center justify-center text-center px-6">

      {/* 🔥 ADDED IMAGE */}
      <img
        src="/dining.jpg"
        alt="Dining"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-4xl md:text-6xl font-bold"
      >
        By The Numbers
      </motion.h2>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">

        <Stat number="100M+" label="Annual Visitors" />
        <Stat number="1200+" label="Retail Stores" />
        <Stat number="5.9M sq.ft" label="Retail Space" />
        <Stat number="200+" label="Dining Experiences" />

      </div>

      <p className="relative z-10 mt-12 text-sm text-gray-400">
        Average visitor dwell time: <strong>2.8 hours</strong> · High F&B spend conversion
      </p>

    </div>
  );
}

function Stat({ number, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <h3 className="text-3xl md:text-5xl font-bold">{number}</h3>
      <p className="mt-2 text-muted text-sm">{label}</p>
    </motion.div>
  );
}