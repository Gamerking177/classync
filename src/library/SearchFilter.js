// src/components/SearchFilter.js
import React from 'react';

const SearchFilter = () => (
    <div className="flex items-center space-x-4 mb-6">
        <input
            type="text"
            placeholder="Search by title or author"
            className="px-4 py-2 border rounded w-full"
        />
        <select className="px-4 py-2 border rounded">
            <option value="All">All Categories</option>
            <option value="Books">Books</option>
            <option value="Journals">Journals</option>
            <option value="E-books">E-books</option>
        </select>
    </div>
);

export default SearchFilter;
