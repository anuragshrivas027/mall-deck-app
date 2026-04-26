import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const brands = [
  { name: "Prada", logo: "/brands/prada.png" },
  { name: "Rolex", logo: "/brands/rolex.png" },
  { name: "Cartier", logo: "/brands/cartier.jpg" },
  { name: "Dior", logo: "/brands/dior.png" },
  { name: "Balenciaga", logo: "/brands/balenciaga.png" },
  { name: "Versace", logo: "/brands/versace.png" }
];

export default function Retail() {
  return (
    <div className="section flex flex-col gap-24 px-10 md:px-20">

      {/* TOP */}
      <div className="flex flex-col md:flex-row items-center gap-16">

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-6xl font-semibold">
            Retail Excellence
          </h2>

          <p className="mt-6 text-muted max-w-md text-lg">
            A curated mix of global luxury brands, flagship experiences, and
            high-footfall retail zones designed to maximize visibility,
            engagement, and revenue performance.
          </p>

          {/* 🔥 BUSINESS METRICS */}
          <div className="mt-8 text-sm text-gray-400 space-y-2">
            <p>• 270K+ daily visitors</p>
            <p>• 18% avg. retail conversion rate</p>
            <p>• Premium audience targeting</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="hover-lift shadow-soft rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80"
              loading="lazy"
              alt="Retail"
              className="w-full h-full object-cover grayscale contrast-110"
            />
          </div>
        </motion.div>

      </div>

      {/* LOGOS */}
      <div className="flex flex-wrap justify-center gap-16 items-center">
        {brands.map((brand, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: i * 0.08 }}
            className="brand-logo"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              loading="lazy"
              className="h-16 md:h-20 object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* CASE STUDY */}
      <div className="glass p-10 rounded-2xl max-w-4xl mx-auto text-center shadow-soft">

        <h3 className="text-2xl font-semibold">
          Case Study: Luxury Brand Growth
        </h3>

        <p className="mt-4 text-muted">
          Luxury brands at Galleria achieved up to <strong>2.5× higher engagement</strong> and
          <strong> 32% higher conversion</strong> through premium placement and
          experiential retail design — transforming footfall into measurable revenue.
        </p>

      </div>

    </div>
  );
}