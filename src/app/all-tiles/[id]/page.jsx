import TileCard from "@/components/TileCard";
import Image from "next/image";
import { notFound } from "next/navigation";

if (!TileCard) {
  notFound();
}


const TileDetailPage = async ({ params }) => {
    const {id} = await params;
    const res = await fetch( `https://tailsgallery.vercel.app/tile.json`, { cache: "no-store" });
    const tiles = await res.json();
    const tile = tiles.find(t => t.id === id);
 
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 bg-yellow-50 rounded-lg shadow border-b-amber-600 border-b-4">
      <h1 className="text-3xl font-bold mb-8">Tile Details</h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT: IMAGE */}
        <div className="w-full">
          <Image
          alt="image"
            src={tile.image}
            alt={tile.title}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-[400px]"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="space-y-4">

          <h2 className="text-2xl font-bold">{tile.title}</h2>

          <p className="text-gray-600">
            {tile.description || "No description available"}
          </p>

          <p className="text-lg font-semibold">
            {tile.price} {tile.currency}
          </p>

          <p className="text-sm text-gray-500">
            Category: <span className="capitalize">{tile.category}</span>
          </p>

          <p className="text-sm text-gray-500">
            Material: {tile.material}
          </p>

          <p className="text-sm text-gray-500">
            Size: {tile.dimensions}
          </p>

          {/* Creator  */}
          <p className="text-sm">
            Creator: <span className="font-medium">TileCraft Studio</span>
          </p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">
              {tile.category}
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">
              {tile.material}
            </span>
          </div>

          {/* Stock */}
          <p
            className={`text-sm font-semibold ${
              tile.inStock ? "text-green-600" : "text-red-500"
            }`}
          >
            {tile.inStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
    );
};

export default TileDetailPage;