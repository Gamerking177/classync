// src/components/SearchFilter.js
import React from "react";

const SearchFilter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search by book title or author"
        className="w-full sm:w-auto flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none"
      />
      <select className="w-full sm:w-auto p-2 border border-gray-300 rounded-lg">
        <option value="">All Categories</option>
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="science">Science</option>
        <option value="history">History</option>
      </select>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
    </div>
  );
};

export default SearchFilter;
