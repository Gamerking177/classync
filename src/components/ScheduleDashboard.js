import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

function ScheduleDashboard({ selectedTab, setSelectedTab }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="flex space-x-6">
        
        {/* Class Schedule Box */}
        <Link
          to="/ClassSchedule"
          onClick={() => setSelectedTab('ClassSchedule')}
          className="flex flex-col items-center justify-center w-64 h-48 bg-white rounded-xl shadow-lg border border-blue-200 transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <FaCalendarAlt className="text-blue-600 text-4xl mb-3" />
          <h3 className="text-xl font-bold text-blue-800">Class Schedule</h3>
          <p className="text-gray-500 text-sm">View your daily schedule</p>
        </Link>

        {/* Exam Schedule Box */}
        <Link
  to="/exam-assignment-schedule"
  onClick={() => setSelectedTab('ExamAssignmentSchedule')}
  className="flex flex-col items-center justify-center w-64 h-48 bg-white rounded-xl shadow-lg border border-blue-200 transition-transform transform hover:scale-105 hover:shadow-2xl"
>
  <FaClipboardList className="text-blue-600 text-4xl mb-3" />
  <h3 className="text-xl font-bold text-blue-800">Exam Schedule</h3>
  <p className="text-gray-500 text-sm">Check assignments & exams</p>
</Link>

      </div>
    </div>
  );
}

export default ScheduleDashboard;
