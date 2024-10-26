// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ selectedTab, setSelectedTab }) {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-around">
      <Link
        to="/ClassSchedule"
        onClick={() => setSelectedTab('ClassSchedule')}
        className={`px-4 py-2 rounded ${selectedTab === 'ClassSchedule' ? 'bg-blue-800' : ''}`}
      >
        Class Schedule
      </Link>
      <Link
        to="/ExamAssignmentSchedule"
        onClick={() => setSelectedTab('ExamAssignmentSchedule')}
        className={`px-4 py-2 rounded ${selectedTab === 'ExamAssignmentSchedule' ? 'bg-blue-800' : ''}`}
      >
        Exam & Assignment Schedule
      </Link>
    </nav>
  );
}

export default Navbar;
