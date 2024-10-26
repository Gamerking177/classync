import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function AttendanceManagement() {
  // Dummy data for the pie chart
  const attendanceData = {
    labels: ['Present', 'Absent', 'Leave'],
    datasets: [
      {
        label: 'Attendance',
        data: [75, 15, 10], // Adjust according to actual data
        backgroundColor: ['#4CAF50', '#F44336', '#FFC107'],
        hoverBackgroundColor: ['#45A049', '#E53935', '#FFB300'],
      },
    ],
  };

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
        <h2 className="text-xl font-semibold mb-4">Attendance Record</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-200">
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">2024-10-01</td>
              <td className="p-3 border text-green-600">Present</td>
            </tr>
            <tr>
              <td className="p-3 border">2024-10-02</td>
              <td className="p-3 border text-red-600">Absent</td>
            </tr>
            {/* Add more records as needed */}
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
          <p><span className="font-medium">Total Days:</span> 100</p>
          <p><span className="font-medium">Present:</span> 75</p>
          <p><span className="font-medium">Absent:</span> 15</p>
          <p><span className="font-medium">On Leave:</span> 10</p>
        </div>
      </section>
    </div>
  );
}

export default AttendanceManagement;
