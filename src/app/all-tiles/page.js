// import TileCard from "@/components/TileCard";

// const AllTilesPage = async () => {
//     const res = await fetch(
//     "https://tiles-gallery-five.vercel.app/tile.json",
//     { cache: "no-store" }
//   );
//   const data = await res.json();


//   const tiles = data.tiles || data;
//     return (
//         <div>
//             <h1 className="text-3xl font-bold mt-5 mb-8">All Tiles</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {tiles.map((tile) => (
//                     <TileCard key={tile.id} tile={tile} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllTilesPage;
"use client";

import { useEffect, useState } from "react";
import TileCard from "@/components/TileCard";
import { Input } from "@heroui/react";

const AllTilesPage = () => {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTiles = async () => {
      const res = await fetch("https://tiles-gallery-five.vercel.app/tile.json");
      const data = await res.json();
      setTiles(data.tiles || data);
    };

    fetchTiles();
  }, []);

  // 🔍 Filter logic
  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 bg-yellow-50 rounded-lg shadow border-b-amber-600 border-b-4 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold mt-5 mb-6">All Tiles</h1>

      {/* 🔍 HeroUI Search Field */}
      <div className="mb-8">
        <Input
          size="lg"
          radius="lg"
          placeholder="🔍 Search tiles by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full shadow-md"
        />
      </div>

      {/* Tiles Grid */}
      {filteredTiles.length === 0 ? (
        <p className="text-center text-gray-500">No tiles found 😢</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTilesPage;