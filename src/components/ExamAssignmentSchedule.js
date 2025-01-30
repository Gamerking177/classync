import React, { useState } from 'react';
import Navbar from './ScheduleDashboard';

function ExamAssignmentSchedule() {
  const [selectedTab, setSelectedTab] = useState('exams');
  const [showSchedule, setShowSchedule] = useState(false);

  const upcomingExams = [
    { subject: 'Mathematics', date: '2024-11-20', startTime: '9:00 AM', endTime: '11:00 AM', room: 'Room 101' },
    { subject: 'Physics', date: '2024-11-25', startTime: '1:00 PM', endTime: '3:00 PM', room: 'Room 102' },
    { subject: 'Chemistry', date: '2024-11-28', startTime: '10:00 AM', endTime: '12:00 PM', room: 'Room 103' },
  ];

  const assignments = [
    { title: 'Math Assignment', dueDate: '2024-11-15', detailsLink: '#' },
    { title: 'Physics Lab Report', dueDate: '2024-11-18', detailsLink: '#' },
  ];

  const toggleScheduleView = () => {
    setShowSchedule(!showSchedule);
  };

  return (
    <div>
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <h2 className="text-2xl font-semibold mb-4">Exam & Assignment Schedule</h2>

      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => {
            setSelectedTab('exams');
            toggleScheduleView();
          }}
          className={`py-2 px-4 ${selectedTab === 'exams' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Upcoming Exams
        </button>
        <button
          onClick={() => setSelectedTab('assignments')}
          className={`py-2 px-4 ${selectedTab === 'assignments' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Assignments
        </button>
      </div>

      {/* Conditionally Render Content Based on selectedTab and showSchedule */}
      {selectedTab === 'exams' && !showSchedule && (
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-2">Upcoming Exams</h3>
          <ul className="bg-white p-4 shadow rounded">
            {upcomingExams.map((exam, index) => (
              <li key={index} className="flex justify-between py-2">
                <span>{exam.subject}</span>
                <span>{exam.date}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedTab === 'assignments' && (
        <div>
          <h3 className="text-xl font-medium mb-2">Assignments</h3>
          <ul className="bg-white p-4 shadow rounded">
            {assignments.map((assignment, index) => (
              <li key={index} className="flex justify-between py-2">
                <span>{assignment.title}</span>
                <span>Due: {assignment.dueDate}</span>
                <a href={assignment.detailsLink} className="text-blue-500 underline">Details</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showSchedule && <ExamSchedule />} {/* Display exam schedule when showSchedule is true */}
    </div>
  );
}

// Exam schedule component in table format
function ExamSchedule() {
  const upcomingExams = [
    { day: 'Wednesday', date: '2024-11-20', startTime: '9:00 AM', endTime: '10:30 AM', subject: 'Mathematics', room: 'Room 101' },
    { day: 'Friday', date: '2024-11-25', startTime: '11:00 AM', endTime: '12:30 PM', subject: 'Physics', room: 'Room 102' },
    { day: 'Monday', date: '2024-11-28', startTime: '1:00 PM', endTime: '2:30 PM', subject: 'Chemistry', room: 'Room 103' },
  ];

  return (
    <div>
      <h3 className="text-xl font-medium mb-2">Exam Schedule - Fall 2023</h3>
      <div className="bg-white p-4 shadow rounded">
        <h4 className="text-lg font-semibold mb-2">Weekly Exam Schedule</h4>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Day</th>
              <th className="border-b p-2">Date</th>
              <th className="border-b p-2">Start Time</th>
              <th className="border-b p-2">End Time</th>
              <th className="border-b p-2">Subject</th>
              <th className="border-b p-2">Room No.</th>
            </tr>
          </thead>
          <tbody>
            {upcomingExams.map((exam, index) => (
              <tr key={index}>
                <td className="border-b p-2">{exam.day}</td>
                <td className="border-b p-2">{exam.date}</td>
                <td className="border-b p-2">{exam.startTime}</td>
                <td className="border-b p-2">{exam.endTime}</td>
                <td className="border-b p-2">{exam.subject}</td>
                <td className="border-b p-2">{exam.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExamAssignmentSchedule;
