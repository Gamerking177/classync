import React, { useState } from 'react';
import { Link } from 'react-router-dom';
  import { motion } from 'framer-motion';

// Create a MotionLink component that uses the Link component with motion
const MotionLink = motion(Link);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-6 shadow-lg"
      >
        <h1 className="text-3xl font-bold">Attendance Management</h1>
      </motion.header>

      {/* Navigation Links */}
      <nav className="flex justify-center gap-4 mb-6">
        {['/attendance-record', '/attendance-calendar', '/attendance-overview'].map((link, index) => (
          <MotionLink
            to={link}
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {link.split('/').pop().replace('-', ' ').replace(/^\w/, c => c.toUpperCase())}
          </MotionLink>
        ))}
      </nav>

       

       
    </div>
  );
};

export default AttendanceManagement;
