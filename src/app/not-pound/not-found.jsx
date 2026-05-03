import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      {/* Big 404 */}
      <h1 className="text-7xl font-extrabold text-black mb-4">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
          Go Back Home
        </button>
      </Link>

    </div>
  );
};

export default NotFoundPage;