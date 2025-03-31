const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6  border-t border-yellow-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Middle-Earth Library. All rights
          reserved.
        </p>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a href="/" className="hover:text-yellow-500 transition duration-300">
            Home
          </a>
          <a
            href="/books"
            className="hover:text-yellow-500 transition duration-300"
          >
            Books
          </a>
          <a
            href="/about"
            className="hover:text-yellow-500 transition duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-yellow-500 transition duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
