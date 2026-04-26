import { motion } from "framer-motion";

export default function WhyInvest() {
  return (
    <div className="section px-10 md:px-20 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl"
      >
        Why Partner With Galleria
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 mt-16">

        <div className="glass p-8 rounded-xl">
          <h3 className="text-xl font-semibold">High Footfall</h3>
          <p className="mt-4 text-muted">
            Millions of visitors annually across retail, dining, and events.
          </p>
        </div>

        <div className="glass p-8 rounded-xl">
          <h3 className="text-xl font-semibold">Premium Audience</h3>
          <p className="mt-4 text-muted">
            High spending power and strong brand engagement.
          </p>
        </div>

        <div className="glass p-8 rounded-xl">
          <h3 className="text-xl font-semibold">Event Platform</h3>
          <p className="mt-4 text-muted">
            Continuous activations, launches, and global events.
          </p>
        </div>

      </div>

    </div>
  );
}