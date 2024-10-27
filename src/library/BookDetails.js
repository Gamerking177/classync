// src/components/BookDetails.js
import React from "react";

const BookDetails = ({ book }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-700 mb-1">Author: {book.author}</p>
      <p className="text-gray-700 mb-4">Genre: {book.genre}</p>
      <p className="text-gray-600">This book covers various insights and interesting concepts. A must-read for enthusiasts of {book.genre}.</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Reserve Book</button>
    </div>
  );
};

export default BookDetails;
