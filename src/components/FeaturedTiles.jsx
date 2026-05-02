import TileCard from "./TileCard";

const FeaturedTiles = async () => {
  const res = await fetch(
    "https://tailsgallery.vercel.app/tile.json",
    { cache: "no-store" }
  );
  const data = await res.json();

  const tiles = data.tiles || data;

  return (
    <div>
      <h2 className="text-3xl font-bold mt-5 mb-8">
        Featured Tiles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tiles && tiles.slice(0, 4).map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTiles;