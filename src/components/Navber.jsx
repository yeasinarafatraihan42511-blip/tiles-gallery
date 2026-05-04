
// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   const userData = authClient.useSession();

//   const user = userData.data?.user;
//   console.log(user);

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };

//   return (
//     <div className="border-b bg-yellow-50 shadow-lg hover:shadow-yellow-200 transition-shadow mt-4">
//       <nav className="flex justify-between items-center py-4 px-4 max-w-7xl mx-auto w-full">

//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/logo.png"
//             alt="logo"
//             width={42}
//             height={42}
//           />
//           <h2 className="font-bold text-lg">TileGallery</h2>
//         </Link>

//         {/* Center Links */}
//         <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/all-tiles">All Tiles</Link>
//           </li>
//           <li>
//             <Link href="/profile">My Profile</Link>
//           </li>
//         </ul>

//         {/* Right Side (UI only - no auth yet) */}
//         {
//           !user && (
//             <div className="flex items-center gap-3 text-sm">
//               <Link
//                 href="/login"
//                 className="px-4 py-1.5 border rounded-md hover:bg-gray-100"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/register"
//                 className="px-4 py-1.5 bg-black text-white rounded-md hover:bg-gray-800"
//               >
//                 Register
//               </Link>
//             </div>
//           )
//         }

//             {user &&(
//               <div className="flex items-center gap-4">
//                 <Avatar size="sm">
//                   <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
//                   <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
//                 </Avatar>
//                 <Button  size="sm" variant="danger" onClick={handleSignOut}>
//                   Sign Out
//                 </Button>
//               </div>
//             )
          
//             }
          

//       </nav>
//     </div>
//   );
// };

// export default Navbar;
"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Tiles", path: "/all-tiles" },
    { name: "My Profile", path: "/profile" },
  ];

  return (
    <div className="border-b bg-yellow-50 shadow-lg mt-4">
      <nav className="flex justify-between items-center py-4 px-4 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={42} height={42} />
          <h2 className="font-bold text-lg">TileGallery</h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "text-black font-semibold border-b-2 border-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <Link
                href="/login"
                className="px-4 py-1.5 border-2 border-fuchsia-500 rounded-md hover:bg-gray-50"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-1.5 bg-red-500 text-white rounded-md hover:bg-gray-800"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Avatar size="sm">
                <Avatar.Image
                  alt="user"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
              </Avatar>
              <Button size="sm" variant="danger" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          )}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`block ${
                pathname === link.path
                  ? "font-semibold text-black"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {!user ? (
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/login"
                className="border px-3 py-1 rounded"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-black text-white px-3 py-1 rounded"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="pt-2 flex flex-col gap-2">
              <Button size="sm" variant="danger" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;