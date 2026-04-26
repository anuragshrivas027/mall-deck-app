import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Events() {
  return (
    <div className="section px-10 md:px-20 py-20">

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        A Global Stage for Experiences
      </motion.h2>

      {/* 🔥 BUSINESS CONTEXT */}
      <p className="text-center text-muted mt-4">
        300+ annual events · global brand activations · high-impact audience reach
      </p>

      <div className="grid md:grid-cols-3 gap-12 mt-16">

        <EventCard 
          title="Global Performances"
          metric="50K+ attendees"
          image="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80"
        />

        <EventCard 
          title="Brand Experiences"
          metric="High engagement zones"
          image="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80"
        />

        <EventCard 
          title="Product Showcases"
          metric="Global launches"
          image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
        />

      </div>

    </div>
  );
}

function EventCard({ title, image, metric }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative rounded-2xl overflow-hidden hover-lift shadow-soft"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-80 object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{metric}</p>
      </div>
    </motion.div>
  );
}