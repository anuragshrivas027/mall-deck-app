import { useState } from "react";
import { motion } from "framer-motion";

const zones = [
  {
    id: "luxury",
    name: "Luxury Avenue",
    desc: "Premium brands like Rolex, Cartier, Dior.",
    coords: "20,20,180,20,180,120,20,120"
  },
  {
    id: "dining",
    name: "Dining District",
    desc: "Global cuisines and fine dining experiences.",
    coords: "220,20,380,20,380,120,220,120"
  },
  {
    id: "entertainment",
    name: "Entertainment Hub",
    desc: "Cinema, gaming, and immersive attractions.",
    coords: "120,150,300,150,300,260,120,260"
  }
];

export default function InteractiveMap() {
  const [active, setActive] = useState(null);

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-6">

      {/* MAP */}
      <div className="relative w-full md:w-2/3 rounded-xl overflow-hidden border border-white/10">

        <img
          src="/map.jpg"
          alt="Mall Map"
          className="w-full h-full object-cover"
        />

        {/* CLICKABLE AREAS */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 400 300"
        >
          {zones.map((zone) => (
            <polygon
              key={zone.id}
              points={zone.coords}
              fill={active === zone.id ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)"}
              stroke="white"
              strokeWidth="1"
              className="cursor-pointer transition"
              onClick={() => setActive(zone)}
              onMouseEnter={() => setActive(zone)}
            />
          ))}
        </svg>

      </div>

      {/* DETAILS PANEL */}
      <div className="w-full md:w-1/3 glass p-6 rounded-xl flex flex-col justify-center">

        {active ? (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold"
            >
              {active.name}
            </motion.h3>

            <p className="mt-4 text-muted">
              {active.desc}
            </p>
          </>
        ) : (
          <p className="text-muted">
            Hover or click on a zone to explore.
          </p>
        )}

      </div>
    </div>
  );
}