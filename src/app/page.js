import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import Marquee from "@/components/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 rounded-lg px-4 py-8">
          <Marquee/>
          <Banner/>
          <FeaturedTiles/>
       

       
          
    </div>
  );
}
