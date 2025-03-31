import Link from "next/link";
import { Books } from "@/types/typebook";
import booksData from "@/components/bookdata/bookadata";

const Book = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center mt-15">
      <h1 className="text-4xl font-bold italic mb-6 border-b-2 border-yellow-500 pb-2">
        Books
      </h1>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {booksData.map((book) => (
          <Link
            href={`/book/${book.id}`}
            key={book.id}
            className="bg-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform border border-yellow-500 text-center"
          >
            <img
              src={book.imageUrl}
              alt={book.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold italic text-yellow-400">
              {book.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Book;
