import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

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
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="text-center py-6 bg-blue-600 text-white rounded-lg mb-6">
        <h1 className="text-3xl font-bold">Attendance Management</h1>
      </header>

      {/* Student Info */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Student Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <p><span className="font-medium">Name:</span> John Doe</p>
          <p><span className="font-medium">Student ID:</span> 123456</p>
          <p><span className="font-medium">Class:</span> BCA 3rd Year</p>
          <p><span className="font-medium">Roll No:</span> 10023</p>
        </div>
      </section>

      {/* Attendance Table */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Attendance Record (Last 3 Months)</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-200">
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record, index) => (
              <tr key={index}>
                <td className="p-3 border">{record.date}</td>
                <td className={`p-3 border ${record.status === 'Present' ? 'text-green-600' : record.status === 'Absent' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Attendance Pie Chart */}
      <section className="bg-white shadow-md rounded-lg p-6">
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
