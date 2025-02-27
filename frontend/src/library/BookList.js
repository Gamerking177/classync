// src/components/BookList.js
import React from "react";

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
  { id: 2, title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science" },
  { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian" },
  // Add more dummy books
];

const BookList = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition duration-200"
          onClick={() => onSelect(book)}
        >
          <h3 className="text-lg font-bold">{book.title}</h3>
          <p className="text-gray-600">{book.author}</p>
          <p className="text-sm text-gray-500">{book.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
