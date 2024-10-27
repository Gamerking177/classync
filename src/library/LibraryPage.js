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
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">Library Resources</h1>

      <SearchFilter />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Book List Section */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-4 md:p-6">
          <BookList onSelect={handleBookSelect} />
        </div>
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
