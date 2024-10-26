// components/ClassSchedule.js
import React, { useState } from 'react';

function ClassSchedule() {
  const [view, setView] = useState('weekly');

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Class Schedule - Current Semester</h2>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setView('weekly')}
          className={`px-4 py-2 ${view === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Weekly
        </button>
        <button
          onClick={() => setView('monthly')}
          className={`px-4 py-2 ${view === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Monthly
        </button>
      </div>
      <div className="bg-white p-4 shadow rounded">
        {view === 'weekly' ? (
          <p>Display the weekly timetable here</p>
        ) : (
          <p>Display the monthly timetable here</p>
        )}
      </div>
    </div>
  );
}

export default ClassSchedule;
