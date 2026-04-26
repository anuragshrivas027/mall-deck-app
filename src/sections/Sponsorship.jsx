import { motion } from "framer-motion";

export default function Sponsorship() {
  return (
    <div className="section px-10 md:px-20 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Brand Partnerships & Sponsorships
      </motion.h2>

      <p className="mt-6 text-muted max-w-2xl mx-auto text-lg">
        Activate your brand inside one of the highest footfall environments.
        From immersive installations to global campaigns.
      </p>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

        <div className="glass p-6">
          <p className="text-3xl font-bold">100M+</p>
          <p className="text-sm text-muted mt-2">Visitors</p>
        </div>

        <div className="glass p-6">
          <p className="text-3xl font-bold">5000+</p>
          <p className="text-sm text-muted mt-2">Brands</p>
        </div>

        <div className="glass p-6">
          <p className="text-3xl font-bold">365</p>
          <p className="text-sm text-muted mt-2">Events / Year</p>
        </div>

        <div className="glass p-6">
          <p className="text-3xl font-bold">Global</p>
          <p className="text-sm text-muted mt-2">Audience</p>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-16">
        <button
          onClick={() =>
            document.getElementById("cta")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="btn-premium"
        >
          Become a Partner
        </button>
      </div>

    </div>
  );
}