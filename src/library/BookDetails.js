// src/components/BookDetails.js
import React from 'react';

const BookDetails = ({ book }) => (
    <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-2xl font-semibold">{book.title}</h2>
        <p className="text-gray-600">Author: {book.author}</p>
        <p className="text-gray-600">Status: {book.availability}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Reserve Book</button>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded ml-2">Renew</button>
    </div>
);

export default BookDetails;
