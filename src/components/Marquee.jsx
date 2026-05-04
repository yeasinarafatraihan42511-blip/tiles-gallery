"use client";

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden bg-cyan-600 text-white py-2 mb-6 rounded">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        
        <p className="mx-6">
          🔥 New Arrivals: Ceramic Blue Tile | Marble White Tile | Wooden Brown Tile
        </p>
        <p className="mx-6">
          ⭐ Weekly Feature: Modern Geometric Patterns
        </p>
        <p className="mx-6">
          🚀 Join the Community & Explore Premium Tiles
        </p>

        {/* duplicate for smooth loop */}
        <p className="mx-6">
          🔥 New Arrivals: Ceramic Blue Tile | Marble White Tile | Wooden Brown Tile
        </p>
        <p className="mx-6">
          ⭐ Weekly Feature: Modern Geometric Patterns
        </p>
        <p className="mx-6">
          🚀 Join the Community & Explore Premium Tiles
        </p>

      </div>
    </div>
  );
};

export default Marquee;