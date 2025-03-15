// src/components/LibraryPage.js
import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import BookList from "./BookList";
import BookModal from "./BookModal";
import Recommendations from "./Recommendations";
import ResourceManagement from "./ResourceManagement";
import DueDateReminders from "./DueDateReminders";

const LibraryPage = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  // Function to open the modal with the selected book
  const handleBookSelect = (book) => setSelectedBook(book);

  // Function to close the modal
  const closeModal = () => setSelectedBook(null);

  return (
    <div className="p-4 md:p-8 bg-pink-100 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">Library Resources</h1>

      <SearchFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {/* Example Book Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <h2 className="text-lg font-semibold text-center">Auther name Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="book-image-url" alt="Book Title" className="w-32 h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold text-center">Book Title</h2>
          <button className="mt-4 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500">
            Download
          </button>
          <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded hover:bg-pink-400">
            Add to Read Later
          </button>
        </div>

        

        {/* Add more book cards here */}
      </div>

      <div className="mt-10 space-y-8">
        <Recommendations />
        <ResourceManagement />
        <DueDateReminders />
      </div>

      {/* Modal for Book Details */}
      {selectedBook && <BookModal book={selectedBook} onClose={closeModal} />}
    </div>
  );
};

export default LibraryPage;
