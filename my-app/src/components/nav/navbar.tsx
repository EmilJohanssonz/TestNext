import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-10 bg-gray-900 bg-opacity-90 shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white font-serif italic text-3xl tracking-wider drop-shadow-lg">
          Lord Of The Rings
        </h1>

        <div className="flex space-x-6">
          {["Home", "Book", "Movies", "Character", "Quote"].map(
            (item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-white text-lg font-medium relative group transition duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
