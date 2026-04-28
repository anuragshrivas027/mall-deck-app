import { useState } from "react";

export default function EventDetails() {
  const [open, setOpen] = useState(false);

  return (
    <div className="section relative px-10 md:px-20 flex flex-col items-center justify-center overflow-hidden">

      {/* 🔥 BACKGROUND VIDEO (ADDED ONLY) */}
      <video
        src="/events.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔥 DARK OVERLAY (FOR READABILITY) */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔥 YOUR ORIGINAL CONTENT (UNCHANGED) */}
      <div className="relative z-10 flex flex-col items-center justify-center">

        <h2 className="text-4xl md:text-6xl font-bold text-center">
          Host Your Event
        </h2>

        <p className="mt-6 text-muted max-w-xl text-center">
          From global concerts to brand activations, our venues are designed for scale and impact.
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="mt-10 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          {open ? "Hide Details" : "View Event Capabilities"}
        </button>

        {open && (
          <div className="mt-10 max-w-2xl text-center text-gray-300">
            <p>• Multiple large-scale event spaces</p>
            <p>• High footfall exposure</p>
            <p>• Integrated brand activation zones</p>
            <p>• Premium audience reach</p>
          </div>
        )}

      </div>
    </div>
  );
}