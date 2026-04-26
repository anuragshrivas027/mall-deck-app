import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">

      <motion.h1
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, letterSpacing: "0.2em" }}
        transition={{ duration: 1.2 }}
        className="text-xl tracking-[0.3em]"
      >
        GALLERIA
      </motion.h1>

    </div>
  );
}