import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Stats() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 2;
      if (i >= 100) {
        i = 100;
        clearInterval(interval);
      }
      setCount(i);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section flex flex-col items-center justify-center text-center">

      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-7xl md:text-9xl font-semibold"
      >
        {count}M+
      </motion.h2>

      <p className="mt-6 text-lg text-muted">
        Annual Visitors Driving Global Brand Visibility
      </p>

      <div className="flex gap-10 mt-10 text-sm text-gray-400 flex-wrap justify-center">
        <span>1200+ Stores</span>
        <span>220+ Dining Brands</span>
        <span>25+ Attractions</span>
        <span>320K+ Daily Footfall</span>
      </div>

    </div>
  );
}