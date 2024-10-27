// src/components/Recommendations.js
import React from 'react';

const Recommendations = () => (
    <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
        <ul>
            <li className="py-2 border-b">Learn JavaScript Quickly - Author: Alex</li>
            <li className="py-2 border-b">Understanding React - Author: Sarah</li>
            <li className="py-2 border-b">Data Science with Python - Author: Mike</li>
        </ul>
    </div>
);

export default Recommendations;
