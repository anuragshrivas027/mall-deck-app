import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CTA() {
  const [active, setActive] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
  });

  const goToLeasing = () => {
    setActive(null);
    document.getElementById("leasing")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.date || !form.time) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setActive(null);
        setForm({ name: "", date: "", time: "" });
      }, 2000);
    }, 1200);
  };

  const getBrandSuggestion = (time) => {
    if (time === "10-1") return "Dining & lifestyle brands perform best.";
    if (time === "1-5") return "Retail & fashion brands see strong engagement.";
    if (time === "5-9") return "Luxury & entertainment drive peak traffic.";
    return "";
  };

  return (
    <div className="section flex flex-col items-center justify-center text-center px-6">

      <h2 className="text-5xl md:text-7xl font-bold">
        Start Your Presence at Galleria
      </h2>

      <p className="mt-6 max-w-2xl text-muted text-lg">
        Explore spaces, analyze performance, and onboard your brand into a
        high-value retail ecosystem.
      </p>

      <div className="flex gap-6 mt-10 flex-wrap justify-center">
        <button onClick={() => setActive("map")} className="btn-premium">
          Mall Map
        </button>

        <button onClick={goToLeasing} className="btn-premium">
          Start Leasing
        </button>

        <button onClick={() => setActive("visit")} className="btn-premium">
          Plan Visit
        </button>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="w-full max-w-2xl glass rounded-2xl overflow-y-auto max-h-[85vh] p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >

              {/* ================= MAP ================= */}
              {active === "map" && (
                <>
                  <h3 className="text-2xl font-bold text-center">
                    Mall Navigation
                  </h3>

                  <p className="mt-4 text-muted text-center">
                    Click to zoom and explore mall layout.
                  </p>

                  <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src="/map.jpg"
                      alt="Mall Map"
                      className="w-full max-h-[400px] object-contain cursor-zoom-in transition"
                      onClick={(e) =>
                        e.target.classList.toggle("scale-150")
                      }
                    />
                  </div>
                </>
              )}

              {/* ================= VISIT ================= */}
              {active === "visit" && (
                <>
                  {!submitted ? (
                    <>
                      <h3 className="text-2xl font-bold text-center">
                        Visit Information
                      </h3>

                      <p className="mt-4 text-muted text-center">
                        Open daily: 10 AM – 12 AM
                      </p>

                      <p className="text-muted text-center mt-2">
                        Gurugram, India
                      </p>

                      {/* FORM */}
                      <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-4 text-left"
                      >
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="w-full p-3 bg-black/40 border border-white/20 rounded outline-none"
                        />

                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) =>
                            setForm({ ...form, date: e.target.value })
                          }
                          className="w-full p-3 bg-black/40 border border-white/20 rounded outline-none"
                        />

                        <select
                          value={form.time}
                          onChange={(e) =>
                            setForm({ ...form, time: e.target.value })
                          }
                          className="w-full p-3 bg-black/40 border border-white/20 rounded outline-none"
                        >
                          <option value="">Select Time Slot</option>
                          <option value="10-1">Morning (10 AM - 1 PM)</option>
                          <option value="1-5">Afternoon (1 PM - 5 PM)</option>
                          <option value="5-9">Evening (5 PM - 9 PM)</option>
                        </select>

                        {error && (
                          <p className="text-red-400 text-sm">{error}</p>
                        )}

                        {loading && (
                          <p className="text-muted text-sm">
                            Analyzing your visit...
                          </p>
                        )}

                        <button className="btn-premium w-full">
                          Confirm Visit
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-10">
                      <h3 className="text-2xl font-bold">
                        Visit Scheduled ✓
                      </h3>

                      <p className="mt-3 text-muted">
                        {getBrandSuggestion(form.time)}
                      </p>
                    </div>
                  )}
                </>
              )}

              {/* CLOSE */}
              <button
                onClick={() => setActive(null)}
                className="btn-premium mt-8 w-full"
              >
                Close
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}