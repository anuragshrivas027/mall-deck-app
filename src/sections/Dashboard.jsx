import { motion } from "framer-motion";

const stats = [
  { label: "Occupancy Rate", value: "92%" },
  { label: "Active Brands", value: "180+" },
  { label: "Monthly Visitors", value: "8.5M" },
  { label: "Avg Revenue / Store", value: "₹18L" },
];

const zones = [
  { name: "Luxury", revenue: 85, color: "bg-yellow-400" },
  { name: "Dining", revenue: 65, color: "bg-green-400" },
  { name: "Entertainment", revenue: 50, color: "bg-blue-400" },
];

export default function Dashboard() {
  return (
    <div className="section px-10 md:px-20">

      <h2 className="text-4xl md:text-6xl text-center">
        Mall Intelligence
      </h2>

      <p className="text-center mt-4 text-muted">
        Real-time performance insights across zones and brands.
      </p>

      {/* 🔥 STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-xl text-center"
          >
            <p className="text-muted text-sm">{item.label}</p>
            <h3 className="text-2xl mt-2">{item.value}</h3>
          </motion.div>
        ))}

      </div>

      {/* 🔥 ZONE PERFORMANCE */}
      <div className="mt-20 max-w-3xl mx-auto">

        <h3 className="text-2xl text-center mb-6">
          Zone Performance
        </h3>

        {zones.map((zone, i) => (
          <div key={i} className="mb-6">

            <div className="flex justify-between text-sm mb-2">
              <span>{zone.name}</span>
              <span>{zone.revenue}%</span>
            </div>

            <div className="w-full h-2 bg-white/10 rounded">
              <div
                className={`${zone.color} h-full rounded`}
                style={{ width: `${zone.revenue}%` }}
              />
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}