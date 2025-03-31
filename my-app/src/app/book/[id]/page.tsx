"use client";

import booksData from "@/components/bookdata/bookadata";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getHeaders } from "@/api/api"; // Ensure this is correctly defined

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://the-one-api.dev/v2";

const BookDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const book = booksData.find((b) => b.id === params.id) as {
    id: string;
    name: string;
    imageUrl: string;
    longDescription: string;
    chapters?: string[];
  };

  if (!book) return notFound();

  console.log(
    `Fetching chapters from: ${API_BASE_URL}/book/${book.id}/chapter`,
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chapters, setChapters] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch chapters from the API
  const fetchChapters = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("Fetching chapters...");
      console.log("URL:", `${API_BASE_URL}/book/chapter`);
      console.log("Headers:", getHeaders());

      const response = await fetch(`${API_BASE_URL}/book/`, {
        headers: getHeaders(),
      });

      console.log("Response status:", response.status);
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`Failed to fetch chapters. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched chapters:", data);

      setChapters(data.docs.map((chapter: { name: string }) => chapter.name));
      setIsModalOpen(true);
    } catch (err: any) {
      console.error("API Error:", err);
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 mt-15">
      <div className="max-w-2xl bg-gray-900 p-6 rounded-lg shadow-lg border border-yellow-500 flex flex-col items-center text-center">
        <img
          src={book.imageUrl}
          alt={book.name}
          className="w-48 h-72 object-cover rounded-lg shadow-md mb-4"
        />
        <h1 className="text-3xl font-bold italic border-b-2 border-yellow-500 pb-2 mb-3">
          {book.name}
        </h1>
        <p className="text-base leading-relaxed text-gray-300 mb-4">
          {book.longDescription}
        </p>

        <button
          onClick={() => router.back()}
          className="mt-4 px-6 py-2 text-lg font-semibold text-black bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          Go Back
        </button>

        <button
          onClick={fetchChapters}
          className="mt-4 px-6 py-2 text-lg font-semibold text-black bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          View Chapters
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-yellow-500 max-w-lg w-full">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Chapters in {book.name}
            </h2>

            {loading && <p className="text-gray-400">Loading chapters...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && chapters && (
              <ul className="text-gray-300 text-left space-y-2">
                {chapters.map((chapter, index) => (
                  <li key={index} className="border-b border-gray-700 pb-1">
                    {chapter}
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-6 py-2 text-lg font-semibold text-black bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
