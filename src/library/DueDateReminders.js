// src/components/DueDateReminders.js
import React from 'react';

const DueDateReminders = () => (
    <div className="bg-yellow-50 p-4 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Due Date Reminders</h2>
        <ul>
            <li className="py-2 border-b text-red-600">
                React Handbook - Overdue by 2 days
            </li>
            <li className="py-2 border-b text-yellow-600">
                JavaScript Essentials - Due in 2 days
            </li>
        </ul>
    </div>
);

export default DueDateReminders;
