import TileCard from "@/components/TileCard";

const AllTilesPage = async () => {
    const res = await fetch(
    "https://tailsgallery.vercel.app/tile.json",
    { cache: "no-store" }
  );
  const data = await res.json();


  const tiles = data.tiles || data;
    return (
        <div>
            <h1 className="text-3xl font-bold mt-5 mb-8">All Tiles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tiles.map((tile) => (
                    <TileCard key={tile.id} tile={tile} />
                ))}
            </div>
        </div>
    );
};

export default AllTilesPage;