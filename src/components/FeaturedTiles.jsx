// import PhotoCard from "./PhotoCard";



// const FeaturedTiles = async () => {
//     const res = await fetch('https://tiles-gallery-five.vercel.app/data.json');
//     const tiles = await res.json();
//     console.log(tiles);

//     return (
//         <div>
//             <h2 className="text-3xl font-bold mt-5 mb-8">Featured Tiles</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {tiles.map(({ tile }) => (
//                     <PhotoCard key={tile.id} {...tile} />
//                 ))}
//             </div>



//         </div>
//     );
// };

// export default FeaturedTiles;
import TileCard from "./TileCard";
import PhotoCard from "./TileCard";

const FeaturedTiles = async () => {
  const res = await fetch(
    "https://tiles-gallery-five.vercel.app/data.json"
  );
  const data = await res.json();

  // Handle both cases (array or { tiles: [] })
  const tiles = data.tiles || data;

  return (
    <div>
      <h2 className="text-3xl font-bold mt-5 mb-8">
        Featured Tiles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tiles?.slice(0, 4).map((tile) => (
         <TileCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTiles;