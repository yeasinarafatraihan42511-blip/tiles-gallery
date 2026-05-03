"use client";
import Image from "next/image";
import Link from "next/link";
import { PiHeartDuotone } from "react-icons/pi";

const TileCard = ({ tile }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      {/* Image */}
      <div className="relative">
        <Image
          src={tile.image}
          size="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          
          width={400}
          height={250}
          className="w-full h-[200px] object-cover"
        />

        {/* Stock Badge */}
        <span
          className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${
            tile.inStock
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-500"
          }`}
        >
          {tile.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Title */}
        <h3 className="text-lg font-semibold">{tile.title}</h3>

        {/* Category + Material */}
        <p className="text-sm text-gray-500 capitalize">
          {tile.category} • {tile.material}
        </p>

        {/* Dimensions */}
        <p className="text-xs text-gray-400">
          Size: {tile.dimensions}
        </p>

        {/* Price */}
        <p className="text-md font-bold text-black">
          {tile.price} {tile.currency}
        </p>
        <div>
         <p>
           <PiHeartDuotone />
         </p>
        
        </div>

        {/* Button */}
        <Link href={`/all-tiles/${tile.id}`}>
          <button className="w-full mt-2 bg-blue-700 text-white py-2 rounded-lg hover:bg-gray-800 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TileCard;