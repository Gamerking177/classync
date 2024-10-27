// src/components/BookList.js
import React from 'react';

const books = [
    { id: 1, title: "JavaScript Essentials", author: "John Doe", availability: "Available" },
    { id: 2, title: "React Handbook", author: "Jane Smith", availability: "Checked Out" },
    { id: 3, title: "Machine Learning Guide", author: "A. Developer", availability: "Available" },
];

const BookList = ({ onSelect }) => (
    <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Available Books</h2>
        <ul>
            {books.map((book) => (
                <li
                    key={book.id}
                    onClick={() => onSelect(book)}
                    className="py-2 border-b cursor-pointer hover:bg-gray-50"
                >
                    <h3 className="text-lg font-medium">{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p className={book.availability === "Available" ? "text-green-600" : "text-red-600"}>{book.availability}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default BookList;
