// import { Button } from "@heroui/react";
// import Link from "next/link";

// const Banner = () => {
//   return (
//     <div className="bg-[url('https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
//       {/* Overlay */}
//       <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
//         <div className="max-w-7xl mx-auto px-6 text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
//             Turn Ideas into Stunning AI Art
//           </h1>
//           <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
//             Generate high-quality images from simple text prompts.
//           </p>

//           <div className="flex gap-4">
//             <Link href="#">
//               <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
//                 Generate Now
//               </Button>
//             </Link>

//             <Link href="/pricing">
//               <Button variant="outline" className="text-white">
//                 View Pricing
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden rounded-xl">

      {/* Background Slides */}
      <div className="absolute inset-0">
        <div className="w-full h-full animate-slide bg-cover bg-center"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Discover Your Perfect Aesthetic
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Explore premium tiles crafted for modern interiors. Find the perfect
            design, material, and style for your space.
          </p>

          <Link href="/all-tiles">
            <Button className="bg-black text-white hover:bg-gray-800">
              Browse Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;