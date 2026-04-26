import { motion, AnimatePresence } from "framer-motion";

export default function InsightPanel({ insight }) {
  return (
    <AnimatePresence>
      {insight && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 right-8 z-[999] glass px-6 py-4 rounded-xl shadow-soft max-w-sm"
        >
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            Live Insight
          </p>

          <p className="mt-2 text-sm">
            {insight}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}