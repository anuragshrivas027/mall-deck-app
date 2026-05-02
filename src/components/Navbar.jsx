import { useEffect, useState } from "react";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "brands", label: "Brands" },
  { id: "retail", label: "Retail" },
  { id: "leasing", label: "Leasing" },
  { id: "experience", label: "Experience" },
  { id: "luxury", label: "Luxury" },
  { id: "dining", label: "Dining" },
  { id: "entertainment", label: "Entertainment" },
  { id: "events", label: "Events" },
  { id: "cta", label: "Visit" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "hero";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 px-10 py-6 flex justify-between items-center">

      <h1 className="text-xs tracking-[0.35em] font-semibold">
        GALLERIA
      </h1>

      <div className="flex gap-8 text-xs tracking-widest uppercase">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`relative transition ${
              active === item.id ? "text-white" : "text-gray-400"
            }`}
          >
            {item.label}

            <span
              className={`absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300 ${
                active === item.id ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>

    </div>
  );
}