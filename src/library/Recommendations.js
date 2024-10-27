// src/components/Recommendations.js
import React from "react";

const recommendations = [
  "To Kill a Mockingbird",
  "Pride and Prejudice",
  "Moby-Dick",
  // Add more recommended books
];

const Recommendations = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Recommended for You</h3>
      <ul className="space-y-2">
        {recommendations.map((book, index) => (
          <li key={index} className="text-gray-800 hover:text-blue-500 transition duration-200">
            {book}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
