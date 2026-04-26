import { motion } from "framer-motion";

export default function Overview() {
  return (
    <div className="section flex flex-col justify-center px-10 md:px-20">

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl"
      >
        A Destination Like No Other
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
        className="mt-6 text-muted max-w-2xl text-lg"
      >
        Galleria Mall is not just a retail destination — it is a high-performance commercial ecosystem. 
        By combining premium retail, dining, entertainment, and large-scale events, it delivers consistent footfall, 
        longer dwell time, and strong consumer engagement across all touchpoints.
      </motion.p>

    </div>
  );
}