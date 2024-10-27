import React from 'react';
import { Pie } from 'react-chartjs-2';

const AttendanceOverview = ({ attendanceData, presentCount, absentCount, leaveCount }) => {
  return (
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
  );
};

export default AttendanceOverview;
    