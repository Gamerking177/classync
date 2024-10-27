// src/components/BookModal.js
import React from "react";

const BookModal = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition duration-200"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
        <p className="text-gray-700 mb-1">Author: {book.author}</p>
        <p className="text-gray-700 mb-4">Genre: {book.genre}</p>
        <p className="text-gray-600">
          This book covers various insights and interesting concepts. A must-read for enthusiasts of {book.genre}.
        </p>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
          Reserve Book
        </button>
      </div>
    </div>
  );
};

export default BookModal;
