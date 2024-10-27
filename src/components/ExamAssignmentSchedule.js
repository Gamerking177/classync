import React, { useState } from 'react';
import Navbar from './ScheduleDashboard';

function ExamAssignmentSchedule() {
  // Define selectedTab state to keep track of the active tab
  const [selectedTab, setSelectedTab] = useState('exams');

  const upcomingExams = [
    { subject: 'Mathematics', date: '2024-11-20' },
    { subject: 'Physics', date: '2024-11-25' },
  ];

  const assignments = [
    { title: 'Math Assignment', dueDate: '2024-11-15', detailsLink: '#' },
    { title: 'Physics Lab Report', dueDate: '2024-11-18', detailsLink: '#' },
  ];

  return (
    <div>
      {/* Pass selectedTab and setSelectedTab to Navbar if needed */}
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <h2 className="text-2xl font-semibold mb-4">Exam & Assignment Schedule</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setSelectedTab('exams')}
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

      {/* Conditionally Render Content Based on selectedTab */}
      {selectedTab === 'exams' && (
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
    </div>
  );
}

export default ExamAssignmentSchedule;
