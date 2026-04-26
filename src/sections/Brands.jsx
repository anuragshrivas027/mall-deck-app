import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const brands = [
  {
    name: "Prada",
    image: "/brands/prada.png",
    desc: "Iconic Italian luxury brand known for refined aesthetics and innovation."
  },
  {
    name: "Rolex",
    image: "/brands/rolex.png",
    desc: "Symbol of precision, prestige, and timeless craftsmanship."
  },
  {
    name: "Cartier",
    image: "/brands/cartier.jpg",
    desc: "Luxury jewelry and watchmaker blending heritage with elegance."
  },
  {
    name: "Dior",
    image: "/brands/dior.png",
    desc: "French luxury redefining fashion, beauty, and sophistication."
  },
  {
    name: "Balenciaga",
    image: "/brands/balenciaga.png",
    desc: "Bold, futuristic fashion pushing boundaries of modern design."
  },
  {
    name: "Versace",
    image: "/brands/versace.png",
    desc: "Italian luxury known for vibrant, glamorous, and iconic style."
  }
];

export default function Brands() {
  const [activeBrand, setActiveBrand] = useState(null);

  return (
    <div className="section px-10 md:px-20">

      <h2 className="text-4xl md:text-6xl font-semibold text-center">
        Global Brand Ecosystem
      </h2>

      <p className="text-center text-muted mt-4 max-w-2xl mx-auto">
        A curated presence of the world’s most influential luxury brands.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">

        {brands.map((brand, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            onClick={() => setActiveBrand(brand)}
            className="glass p-12 rounded-xl flex items-center justify-center cursor-pointer brand-card"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-10 md:h-12 object-contain opacity-70 hover:opacity-100 transition"
            />
          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeBrand && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="max-w-4xl w-full mx-6 rounded-2xl overflow-hidden glass shadow-soft"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            >

              <img
                src={activeBrand.image}
                alt={activeBrand.name}
                className="w-full h-80 object-contain bg-white"
              />

              <div className="p-8 text-center">
                <h3 className="text-3xl font-semibold">
                  {activeBrand.name}
                </h3>

                <p className="mt-4 text-muted">
                  {activeBrand.desc}
                </p>

                <button
                  onClick={() => setActiveBrand(null)}
                  className="btn-premium mt-8"
                >
                  CLOSE
                </button>
              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}