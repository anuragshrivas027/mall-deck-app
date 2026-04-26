import { useState } from "react";

export default function Leasing() {
  const [area, setArea] = useState(1000);
  const [zone, setZone] = useState("Luxury Wing");
  const [result, setResult] = useState(null);
  const [showWhy, setShowWhy] = useState(false);

  const getAIInsights = (area, zone) => {
    const rent = area * (zone === "Luxury Wing" ? 1200 : 800);
    const revenue = rent * 2.4;

    const confidence = Math.min(
      95,
      Math.round((area / 1000) * 20 + (zone === "Luxury Wing" ? 60 : 40))
    );

    return {
      rent,
      revenue,
      confidence,
      recommendation:
        zone === "Luxury Wing"
          ? "Best suited for luxury and premium brands."
          : "Ideal for mid-tier and lifestyle brands.",
      reasoning: [
        "High footfall density",
        "Strong audience alignment",
        "Proven brand performance",
      ],
    };
  };

  const calculate = () => {
    const data = getAIInsights(area, zone);
    setResult(data);
  };

  return (
    <div className="section px-10 md:px-20 text-center">

      <h2 className="text-5xl font-bold">Leasing Intelligence</h2>

      <div className="flex gap-4 mt-10 justify-center flex-wrap">
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="p-3 rounded bg-black/40 border border-white/20"
        />

        <select
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          className="p-3 rounded bg-black/40 border border-white/20"
        >
          <option>Luxury Wing</option>
          <option>Retail Zone</option>
        </select>

        <button onClick={calculate} className="btn-premium">
          Calculate
        </button>
      </div>

      {result && (
        <div className="mt-10 glass p-8 rounded-2xl max-w-3xl mx-auto">

          <p>Estimated Rent: ₹ {result.rent.toLocaleString()}</p>
          <p className="text-green-400 mt-2">
            Revenue: ₹ {result.revenue.toLocaleString()}
          </p>

          {/* AI PANEL */}
          <div className="mt-6 text-left">
            <p className="text-muted">AI Insight</p>
            <p>{result.recommendation}</p>

            <p className="text-green-400 mt-2">
              Confidence: {result.confidence}%
            </p>

            <button
              onClick={() => setShowWhy(!showWhy)}
              className="text-sm underline mt-2"
            >
              Why?
            </button>

            {showWhy && (
              <ul className="mt-2 list-disc ml-5 text-sm text-muted">
                {result.reasoning.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            )}
          </div>

          {/* DASHBOARD */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="glass p-4">Footfall: High</div>
            <div className="glass p-4">Conversion: 2.5x</div>
            <div className="glass p-4">Risk: Low</div>
          </div>

        </div>
      )}

    </div>
  );
}