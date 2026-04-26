import { motion } from "framer-motion";

export default function Luxury() {
  return (
    <div className="section relative flex items-center justify-center text-center">

      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
        alt="Luxury"
        loading="lazy"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 px-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Luxury Redefined
        </h2>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          Featuring a dedicated luxury district hosting globally renowned brands
          and high-net-worth clientele.
        </p>

        {/* 🔥 BUSINESS VALUE */}
        <p className="mt-4 text-sm text-gray-400">
          Top 5% high-spending audience · Premium positioning · Flagship exposure
        </p>
      </motion.div>

    </div>
  );
}