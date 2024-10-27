import React, { useState, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import Calendar from 'react-calendar'; // Import calendar library

ChartJS.register(ArcElement, Tooltip, Legend);

// Function to generate dummy attendance data for the past 3 months
function generateAttendanceData() {
  const attendanceRecords = [];
  const currentDate = new Date();
  currentDate.setDate(1); // Start from the beginning of the current month

  for (let i = 0; i < 90; i++) {
    const status = Math.random() < 0.75 ? 'Present' : (Math.random() < 0.5 ? 'Absent' : 'Leave');
    attendanceRecords.push({
      date: currentDate.toISOString().split('T')[0],
      status: status,
    });
    currentDate.setDate(currentDate.getDate() - 1); // Move to the previous day
  }
  return attendanceRecords;
}

const attendanceRecords = generateAttendanceData();

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

function AttendanceManagement() {
  const [dateFilter, setDateFilter] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [semesterFilter, setSemesterFilter] = useState('');

  // Refs for scrolling to sections
  const recordRef = useRef(null);
  const calendarRef = useRef(null);
  const overviewRef = useRef(null);

  const filteredRecords = attendanceRecords.filter(record => {
    const dateMatch = dateFilter ? record.date === dateFilter : true;
    const subjectMatch = subjectFilter ? record.subject === subjectFilter : true;
    const semesterMatch = semesterFilter ? record.semester === semesterFilter : true;
    return dateMatch && subjectMatch && semesterMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6">
      {/* Header */}
      <header className="text-center py-6 bg-blue-600 text-white rounded-lg mb-6 shadow-md">
        <h1 className="text-3xl font-bold">Attendance Management</h1>
      </header>

      {/* Navigation Links */}
      <nav className="flex justify-center gap-4 mb-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          onClick={() => recordRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          Attendance Record
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          onClick={() => calendarRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          Attendance Calendar
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          onClick={() => overviewRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          Attendance Overview
        </button>
      </nav>

      {/* Attendance Table */}
      <section ref={recordRef} className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Attendance Record (Last 3 Months)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRecords.map((record, index) => (
            <div key={index} className="border rounded-lg p-4 transition duration-200 hover:shadow-lg">
              <h3 className="text-lg font-bold">{record.date}</h3>
              <p className={`text-xl ${record.status === 'Present' ? 'text-green-600' : record.status === 'Absent' ? 'text-red-600' : 'text-yellow-600'}`}>
                {record.status}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Attendance Calendar */}
      <section ref={calendarRef} className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Attendance Calendar</h2>
        <Calendar
          onChange={setDateFilter}
          value={dateFilter}
          className="rounded-lg shadow-sm"
        />
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
            <div key={day} className="p-2 border rounded-lg hover:bg-gray-100 transition duration-200">
              <p className="text-center">{day}</p>
              {filteredRecords.find(record => record.date.endsWith(`-${day.toString().padStart(2, '0')}`)) && (
                <p className={`text-center ${filteredRecords.find(record => record.date.endsWith(`-${day.toString().padStart(2, '0')}`)).status === 'Present' ? 'text-green-600' : filteredRecords.find(record => record.date.endsWith(`-${day.toString().padStart(2, '0')}`)).status === 'Absent' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {filteredRecords.find(record => record.date.endsWith(`-${day.toString().padStart(2, '0')}`)).status}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Attendance Pie Chart */}
      <section ref={overviewRef} className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Attendance Overview</h2>
        <div className="w-1/2 mx-auto">
          <Pie data={attendanceData} />
        </div>
        <div className="text-lg mt-6 text-center">
          <p><span className="font-medium">Total Days:</span> 90</p>
          <p><span className="font-medium">Present:</span> {presentCount}</p>
          <p><span className="font-medium">Absent:</span> {absentCount}</p>
          <p><span className="font-medium">On Leave:</span> {leaveCount}</p>
        </div>
      </section>
    </div>
  );
}

export default AttendanceManagement;
