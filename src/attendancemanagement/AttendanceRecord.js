import React from 'react';

const AttendanceRecord = ({ filteredRecords = [] }) => {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
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
  );
};

export default AttendanceRecord; 
