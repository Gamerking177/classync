import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AttendanceCalendar from './AttendanceCalendar';
import AttendanceOverview from './AttendanceOverview'; // Assuming you have this component

const AttendanceManagement = () => {
  // Sample attendance records
  const attendanceRecords = [
    { id: 1, date: '2024-10-01', status: 'Present' },
    { id: 2, date: '2024-10-02', status: 'Absent' },
    { id: 3, date: '2024-10-03', status: 'Leave' },
    { id: 4, date: '2024-10-04', status: 'Present' },
    // Add more records as needed
  ];

  const [dateFilter, setDateFilter] = useState(new Date()); // Initialize with today's date

  // Calculate attendance summary for the pie chart
  const presentCount = attendanceRecords.filter(record => record.status === 'Present').length;
  const absentCount = attendanceRecords.filter(record => record.status === 'Absent').length;
  const leaveCount = attendanceRecords.filter(record => record.status === 'Leave').length;

  // Pie chart data
  const attendanceData = {
    labels: ['Present', 'Absent', 'Leave'],
    datasets: [
      {
        label: 'Attendance',
        data: [presentCount, absentCount, leaveCount],
        backgroundColor: ['#4CAF50', '#F44336', '#FFC107'],
        hoverBackgroundColor: ['#45A049', '#E53935', '#FFB300'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6">
      <header className="text-center py-6 bg-blue-600 text-white rounded-lg mb-6 shadow-md">
        <h1 className="text-3xl font-bold">Attendance Management</h1>
      </header>

      {/* Navigation Links */}
      <nav className="flex justify-center gap-4 mb-6">
        <Link
          to="/attendance-record"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Attendance Record
        </Link>
        <Link
          to="/attendance-calendar"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Attendance Calendar
        </Link>
        <Link
          to="/attendance-overview"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Attendance Overview
        </Link>
      </nav>

      {/* Pass the attendance records to the AttendanceCalendar component */}
      <AttendanceCalendar
        setDateFilter={setDateFilter}
        dateFilter={dateFilter}
        filteredRecords={attendanceRecords} // Pass the attendance records here
      />

      {/* You can also add AttendanceOverview here if needed */}
      <AttendanceOverview
        attendanceData={attendanceData}
        presentCount={presentCount}
        absentCount={absentCount}
        leaveCount={leaveCount}
      />
    </div>
  );
};

export default AttendanceManagement;
