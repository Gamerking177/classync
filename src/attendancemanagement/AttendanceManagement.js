import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; // Import necessary chart.js features

// Create a MotionLink component that uses the Link component with motion
const MotionLink = motion(Link);

const AttendanceManagement = () => {
  // Sample attendance records
  const attendanceRecords = [
    { id: 1, date: '2024-10-01', status: 'Present' },
    { id: 2, date: '2024-10-02', status: 'Absent' },
    { id: 3, date: '2024-10-03', status: 'Leave' },
    { id: 4, date: '2024-10-04', status: 'Present' },
  ];

  // Filter records for the current month
  const currentMonth = new Date().getMonth() + 1; // months are zero-indexed
  const currentMonthRecords = attendanceRecords.filter(record =>
    new Date(record.date).getMonth() + 1 === currentMonth
  );

  const presentCount = currentMonthRecords.filter(record => record.status === 'Present').length;
  const absentCount = currentMonthRecords.filter(record => record.status === 'Absent').length;
  const leaveCount = currentMonthRecords.filter(record => record.status === 'Leave').length;

  // Calculate total and percentages
  const totalRecords = currentMonthRecords.length;
  const presentPercentage = ((presentCount / totalRecords) * 100).toFixed(1);
  const absentPercentage = ((absentCount / totalRecords) * 100).toFixed(1);
  const leavePercentage = ((leaveCount / totalRecords) * 100).toFixed(1);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4 md:p-6">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-4 md:py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-4 md:mb-6 shadow-lg"
      >
        <h1 className="text-2xl md:text-3xl font-bold">Attendance Management</h1>
      </motion.header>

      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mb-4 md:mb-6">
        {['/attendance-record', '/attendance-calendar' ].map((link, index) => (
          <MotionLink
            to={link}
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-center"
          >
            {link.split('/').pop().replace('-', ' ').replace(/^\w/, c => c.toUpperCase())}
          </MotionLink>
        ))}
      </nav>

      {/* Attendance Summary Pie Chart and Percentage Summary */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-8 space-y-6 md:space-y-0 md:space-x-8">
        {/* Pie Chart */}
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-lg md:text-xl font-semibold text-center mb-4">Current Month Attendance Summary</h2>
          <Doughnut data={attendanceData} />
        </div>

        {/* Percentage Summary */}
        <div className="text-center md:text-left text-lg font-medium space-y-2 md:space-y-3">
          <p className="underline">
            <span className="font-semibold text-purple-600">Total 100%:</span>
          </p>
          <p>
            <span className="font-semibold text-green-600">Present:</span> {presentPercentage}%
          </p>
          <p>
            <span className="font-semibold text-red-600">Absent:</span> {absentPercentage}%
          </p>
          <p>
            <span className="font-semibold text-yellow-600">Leave:</span> {leavePercentage}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceManagement;
