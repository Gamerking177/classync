    import React, { useState } from 'react';

function ClassSchedule() {
  const [view, setView] = useState('weekly');
  const [semester, setSemester] = useState('Fall 2023');
  const weeklySchedule = [
    { day: 'Monday', time: '9:00 AM - 10:30 AM', subject: 'Mathematics' },
    { day: 'Tuesday', time: '11:00 AM - 12:30 PM', subject: 'Physics' },
    { day: 'Wednesday', time: '1:00 PM - 2:30 PM', subject: 'Chemistry' },
    { day: 'Thursday', time: '10:00 AM - 11:30 AM', subject: 'History' },
    { day: 'Friday', time: '2:00 PM - 3:30 PM', subject: 'Biology' },
  ];

  const monthlySchedule = [
    { week: 'Week 1', subjects: ['Math', 'Physics', 'Chemistry'] },
    { week: 'Week 2', subjects: ['Math', 'History', 'Biology'] },
    { week: 'Week 3', subjects: ['Physics', 'Chemistry', 'History'] },
    { week: 'Week 4', subjects: ['Math', 'Biology', 'Chemistry'] },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Class Schedule - {semester}</h2>

      {/* Semester Selector */}
      <div className="mb-4">
        <label htmlFor="semester" className="mr-2 font-medium">Select Semester:</label>
        <select
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option>Fall 2023</option>
          <option>Spring 2024</option>
          <option>Fall 2024</option>
        </select>
      </div>

      {/* Toggle Buttons for Weekly and Monthly View */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setView('weekly')}
          className={`px-4 py-2 rounded ${view === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Weekly
        </button>
        <button
          onClick={() => setView('monthly')}
          className={`px-4 py-2 rounded ${view === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Monthly
        </button>
      </div>

      {/* Timetable Display */}
      <div className="bg-white p-6 shadow rounded-lg">
        {view === 'weekly' ? (
          <div>
            <h3 className="text-xl font-semibold mb-3">Weekly Schedule</h3>
            <div className="space-y-3">
              {weeklySchedule.map((session, index) => (
                <div key={index} className="p-3 border border-gray-300 rounded-md">
                  <p className="font-medium">{session.day}</p>
                  <p>{session.time} - {session.subject}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-3">Monthly Schedule</h3>
            <div className="space-y-3">
              {monthlySchedule.map((week, index) => (
                <div key={index} className="p-3 border border-gray-300 rounded-md">
                  <p className="font-medium">{week.week}</p>
                  <p>{week.subjects.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassSchedule;
