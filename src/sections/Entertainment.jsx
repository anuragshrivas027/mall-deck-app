export default function Entertainment() {
  return (
    <div className="section relative flex items-center justify-center text-center">

      {/* Image instead of video */}
      <img
        src="/entertainment.jpg"
        alt="Entertainment"
        loading="lazy"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          Entertainment Like No Other
        </h2>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          From the Dubai Aquarium to an Olympic-sized ice rink, the mall offers immersive attractions that drive unmatched footfall.
        </p>
      </div>
    </div>
  );
}