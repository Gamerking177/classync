import Navbar from './Navbar';
import React from 'react';

function ExamAssignmentSchedule() {
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
        <Navbar />
      <h2 className="text-2xl font-semibold mb-4">Exam & Assignment Schedule</h2>
      
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
    </div>
  );
}

export default ExamAssignmentSchedule;
