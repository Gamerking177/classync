// src/components/ResourceManagement.js
import React from 'react';

const ResourceManagement = () => (
    <div className="bg-white p-4 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">My Resources</h2>
        <ul>
            <li className="py-2 border-b">
                Reserved: React Handbook - Due in 3 days
            </li>
            <li className="py-2 border-b">
                Checked Out: JavaScript Essentials - Due in 10 days
            </li>
        </ul>
    </div>
);

export default ResourceManagement;
