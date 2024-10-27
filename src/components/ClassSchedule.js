import React, { useState } from 'react';

function ClassSchedule() {
  const [view, setView] = useState('weekly');
  const [semester, setSemester] = useState('Fall 2023');
  const [course, setCourse] = useState('All Courses');

  const courses = ['All Courses', 'BCA', 'BTech', 'MCA', 'MBA'];

  const weeklySchedule = {
    'Fall 2023': {
      'BCA': [
        { day: 'Monday', startTime: '9:00 AM', endTime: '10:30 AM', subject: 'Mathematics', room: 'Room 101' },
        { day: 'Wednesday', startTime: '11:00 AM', endTime: '12:30 PM', subject: 'Computer Science', room: 'Room 102' },
        { day: 'Friday', startTime: '1:00 PM', endTime: '2:30 PM', subject: 'English', room: 'Room 103' },
      ],
      'BTech': [
        { day: 'Tuesday', startTime: '10:00 AM', endTime: '11:30 AM', subject: 'Engineering Mechanics', room: 'Room 201' },
        { day: 'Thursday', startTime: '1:00 PM', endTime: '2:30 PM', subject: 'Data Structures', room: 'Room 202' },
      ],
      'MCA': [
        { day: 'Monday', startTime: '11:00 AM', endTime: '12:30 PM', subject: 'Database Management Systems', room: 'Room 301' },
      ],
      'MBA': [
        { day: 'Wednesday', startTime: '1:00 PM', endTime: '2:30 PM', subject: 'Business Management', room: 'Room 401' },
      ],
    },
  };

  const monthlySchedule = [
    { week: 'Week 1', subjects: [
      { subject: 'Mathematics', day: 'Monday', room: 'Room 101' },
      { subject: 'Computer Science', day: 'Wednesday', room: 'Room 102' },
      { subject: 'English', day: 'Friday', room: 'Room 103' },
    ]},
    { week: 'Week 2', subjects: [
      { subject: 'Engineering Mechanics', day: 'Tuesday', room: 'Room 201' },
      { subject: 'Data Structures', day: 'Thursday', room: 'Room 202' },
    ]},
    { week: 'Week 3', subjects: [
      { subject: 'Database Management Systems', day: 'Monday', room: 'Room 301' },
      { subject: 'Business Management', day: 'Wednesday', room: 'Room 401' },
    ]},
    { week: 'Week 4', subjects: [
      { subject: 'Mathematics', day: 'Monday', room: 'Room 101' },
      { subject: 'Engineering Mechanics', day: 'Tuesday', room: 'Room 201' },
    ]},
  ];

  const filteredWeeklySchedule = Object.entries(weeklySchedule[semester]).flatMap(([courseName, sessions]) => 
    course === 'All Courses' || course === courseName ? sessions : []
  );

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

      {/* Course Selector */}
      <div className="mb-4">
        <label htmlFor="course" className="mr-2 font-medium">Select Course:</label>
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          {courses.map((courseOption, index) => (
            <option key={index} value={courseOption}>{courseOption}</option>
          ))}
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
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Day</th>
                  <th className="border px-4 py-2">Class Start Time</th>
                  <th className="border px-4 py-2">Class End Time</th>
                  <th className="border px-4 py-2">Subject</th>
                  <th className="border px-4 py-2">Room No.</th>
                </tr>
              </thead>
              <tbody>
                {filteredWeeklySchedule.map((session, index) => (
                  <tr key={index} className="border-b">
                    <td className="border px-4 py-2">{session.day}</td>
                    <td className="border px-4 py-2">{session.startTime}</td>
                    <td className="border px-4 py-2">{session.endTime}</td>
                    <td className="border px-4 py-2">{session.subject}</td>
                    <td className="border px-4 py-2">{session.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-3">Monthly Schedule</h3>
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Week</th>
                  <th className="border px-4 py-2">Day</th>
                  <th className="border px-4 py-2">Subject</th>
                  <th className="border px-4 py-2">Room No.</th>
                </tr>
              </thead>
              <tbody>
                {monthlySchedule.map((week, index) => (
                  week.subjects.map((subject, idx) => (
                    <tr key={`${index}-${idx}`} className="border-b">
                      {idx === 0 && <td className="border px-4 py-2" rowSpan={week.subjects.length}>{week.week}</td>}
                      <td className="border px-4 py-2">{subject.day}</td>
                      <td className="border px-4 py-2">{subject.subject}</td>
                      <td className="border px-4 py-2">{subject.room}</td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassSchedule;
