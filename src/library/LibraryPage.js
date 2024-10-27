// src/components/LibraryPage.js
import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import BookList from "./BookList";
import BookDetails from "./BookDetails";
import Recommendations from "./Recommendations";
import ResourceManagement from "./ResourceManagement";
import DueDateReminders from "./DueDateReminders";

const LibraryPage = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  
  const handleBookSelect = (book) => setSelectedBook(book);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Library Resources</h1>

      <SearchFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div className="col-span-2">
          <BookList onSelect={handleBookSelect} />
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg">
          {selectedBook ? <BookDetails book={selectedBook} /> : <p>Select a book to see details</p>}
        </div>
      </div>

      <div className="mt-8">
        <Recommendations />
      </div>

      <div className="mt-8">
        <ResourceManagement />
      </div>

      <div className="mt-8">
        <DueDateReminders />
      </div>
    </div>
  );
};

export default LibraryPage;
