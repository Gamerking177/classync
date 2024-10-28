import React, { useState } from 'react';

function ClassSchedule() {
  const [view, setView] = useState('weekly');
  const [semester, setSemester] = useState('Semester 1');
  const [course, setCourse] = useState('All Courses');

  // Example course options
  const courses = ['All Courses', 'BCA', 'BTech', 'MCA', 'MBA'];

  const weeklySchedule = {
    'Semester 1': {
      BCA: [
        { day: 'Monday', startTime: '9:00 AM', endTime: '10:30 AM', subject: 'Mathematics, Statistics, Physics', room: 'Room 101' },
      ],
      BTech: [
        { day: 'Tuesday', startTime: '10:00 AM', endTime: '11:30 AM', subject: 'Engineering Basics, Mathematics', room: 'Room 201' },
      ],
      MCA: [
        { day: 'Wednesday', startTime: '11:00 AM', endTime: '12:30 PM', subject: 'Programming Fundamentals', room: 'Room 301' },
      ],
      MBA: [
        { day: 'Thursday', startTime: '1:00 PM', endTime: '2:30 PM', subject: 'Business Management', room: 'Room 401' },
      ],
    },
    'Semester 2': {
      BCA: [
        { day: 'Monday', startTime: '9:00 AM', endTime: '10:30 AM', subject: 'Advanced Mathematics', room: 'Room 102' },
      ],
      BTech: [
        { day: 'Tuesday', startTime: '10:00 AM', endTime: '11:30 AM', subject: 'Thermodynamics', room: 'Room 202' },
      ],
      MCA: [
        { day: 'Wednesday', startTime: '11:00 AM', endTime: '12:30 PM', subject: 'Data Structures', room: 'Room 302' },
      ],
      MBA: [
        { day: 'Thursday', startTime: '1:00 PM', endTime: '2:30 PM', subject: 'Financial Accounting', room: 'Room 402' },
      ],
    },
    'Semester 3': {
      BCA: [
        { day: 'Monday', startTime: '9:00 AM', endTime: '10:30 AM', subject: 'Computer Networks', room: 'Room 103' },
      ],
      BTech: [
        { day: 'Tuesday', startTime: '10:00 AM', endTime: '11:30 AM', subject: 'Fluid Mechanics', room: 'Room 203' },
      ],
      MCA: [
        { day: 'Wednesday', startTime: '11:00 AM', endTime: '12:30 PM', subject: 'Database Management', room: 'Room 303' },
      ],
      MBA: [
        { day: 'Thursday', startTime: '1:00 PM', endTime: '2:30 PM', subject: 'Marketing Strategies', room: 'Room 403' },
      ],
    },
    'Semester 4': {
      BCA: [
        { day: 'Monday', startTime: '9:00 AM', endTime: '10:30 AM', subject: 'Operating Systems', room: 'Room 104' },
      ],
      BTech: [
        { day: 'Tuesday', startTime: '10:00 AM', endTime: '11:30 AM', subject: 'Control Systems', room: 'Room 204' },
      ],
      MCA: [
        { day: 'Wednesday', startTime: '11:00 AM', endTime: '12:30 PM', subject: 'Artificial Intelligence', room: 'Room 304' },
      ],
      MBA: [
        { day: 'Thursday', startTime: '1:00 PM', endTime: '2:30 PM', subject: 'Human Resource Management', room: 'Room 404' },
      ],
    },
  };

  const monthlySchedule = [
    { week: 'Week 1', subjects: 'Mathematics, Statistics, Physics' },
    { week: 'Week 2', subjects: 'Engineering Mechanics, Thermodynamics, Physics' },
    // Other weeks...
  ];

  const examSchedule = [
    { date: '2023-11-01', subject: 'Mathematics', room: 'Room 101', startTime: '10:00 AM', endTime: '12:00 PM' },
    { date: '2023-11-05', subject: 'Physics', room: 'Room 102', startTime: '2:00 PM', endTime: '4:00 PM' },
    // Other exams...
  ];

  const filteredWeeklySchedule = Object.entries(weeklySchedule[semester] || {}).flatMap(
    ([courseName, sessions]) => (course === 'All Courses' || course === courseName ? sessions : [])
  );

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Class Schedule - {semester}</h2>

      {/* Semester and Course Selectors */}
      <div className="mb-4">
        <label htmlFor="semester" className="mr-2 font-medium">Select Semester:</label>
        <select
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
        >
          <option>Semester 1</option>
          <option>Semester 2</option>
          <option>Semester 3</option>
          <option>Semester 4</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="course" className="mr-2 font-medium">Select Course:</label>
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
        >
          {courses.map((courseOption, index) => (
            <option key={index} value={courseOption}>{courseOption}</option>
          ))}
        </select>
      </div>

      {/* Toggle Buttons for Weekly, Monthly, and Exam Schedule */}
      <div className="flex flex-wrap space-x-4 mb-6">
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
        <button
          onClick={() => setView('exams')}
          className={`px-4 py-2 rounded ${view === 'exams' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Exam Schedule
        </button>
      </div>

      {/* Timetable Display */}
      <div className="bg-white p-4 sm:p-6 shadow rounded-lg overflow-x-auto">
        {view === 'weekly' ? (
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Weekly Schedule</h3>
            <table className="min-w-full border border-gray-300 text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-2 sm:px-4 py-2">Day</th>
                  <th className="border px-2 sm:px-4 py-2">Class Start Time</th>
                  <th className="border px-2 sm:px-4 py-2">Class End Time</th>
                  <th className="border px-2 sm:px-4 py-2">Subject</th>
                  <th className="border px-2 sm:px-4 py-2">Room No.</th>
                </tr>
              </thead>
              <tbody>
                {filteredWeeklySchedule.map((session, index) => (
                  <tr key={index} className="border-b">
                    <td className="border px-2 sm:px-4 py-2">{session.day}</td>
                    <td className="border px-2 sm:px-4 py-2">{session.startTime}</td>
                    <td className="border px-2 sm:px-4 py-2">{session.endTime}</td>
                    <td className="border px-2 sm:px-4 py-2">{session.subject}</td>
                    <td className="border px-2 sm:px-4 py-2">{session.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : view === 'monthly' ? (
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Monthly Schedule</h3>
            <table className="min-w-full border border-gray-300 text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-2 sm:px-4 py-2">Week</th>
                  <th className="border px-2 sm:px-4 py-2">Subjects</th>
                </tr>
              </thead>
              <tbody>
                {monthlySchedule.map((week, index) => (
                  <tr key={index} className="border-b">
                    <td className="border px-2 sm:px-4 py-2">{week.week}</td>
                    <td className="border px-2 sm:px-4 py-2">{week.subjects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Exam Schedule</h3>
            <table className="min-w-full border border-gray-300 text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-2 sm:px-4 py-2">Date</th>
                  <th className="border px-2 sm:px-4 py-2">Subject</th>
                  <th className="border px-2 sm:px-4 py-2">Room No.</th>
                  <th className="border px-2 sm:px-4 py-2">Start Time</th>
                  <th className="border px-2 sm:px-4 py-2">End Time</th>
                </tr>
              </thead>
              <tbody>
                {examSchedule.map((exam, index) => (
                  <tr key={index} className="border-b">
                    <td className="border px-2 sm:px-4 py-2">{exam.date}</td>
                    <td className="border px-2 sm:px-4 py-2">{exam.subject}</td>
                    <td className="border px-2 sm:px-4 py-2">{exam.room}</td>
                    <td className="border px-2 sm:px-4 py-2">{exam.startTime}</td>
                    <td className="border px-2 sm:px-4 py-2">{exam.endTime}</td>
                  </tr>
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
