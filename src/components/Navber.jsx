
"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b bg-white">
      <nav className="flex justify-between items-center py-4 px-4 max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={42}
            height={42}
          />
          <h2 className="font-bold text-lg">TileGallery</h2>
        </Link>

        {/* Center Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-tiles">All Tiles</Link>
          </li>
          <li>
            <Link href="/my-profile">My Profile</Link>
          </li>
        </ul>

        {/* Right Side (UI only - no auth yet) */}
        <div className="flex items-center gap-3 text-sm">
          <Link
            href="/login"
            className="px-4 py-1.5 border rounded-md hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-1.5 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Register
          </Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;