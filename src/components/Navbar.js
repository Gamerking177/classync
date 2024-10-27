import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ selectedTab, setSelectedTab }) {
  return (
    <nav className="bg-blue-600 p-4 flex justify-center">
      <Link
        to="/ClassSchedule"
        onClick={() => setSelectedTab('ClassSchedule')}
        className={`mx-2 flex items-center justify-center h-32 w-64 text-center text-white bg-blue-700 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105`}
      >
        <div className="flex flex-col justify-center">
          <span className="text-lg font-semibold">Class Schedule</span>
          <span className="text-sm">& Time Table</span>
        </div>
      </Link>
      <Link
        to="/ExamAssignmentSchedule"
        onClick={() => setSelectedTab('ExamAssignmentSchedule')}
        className={`mx-2 flex items-center justify-center h-32 w-64 text-center text-white bg-blue-700 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105`}
      >
        <div className="flex flex-col justify-center">
          <span className="text-lg font-semibold">Exam Schedule</span>
          <span className="text-sm"> & Assignment</span>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
