import React from 'react';
import Calendar from 'react-calendar';

const AttendanceCalendar = ({ setDateFilter, dateFilter, filteredRecords = [] }) => {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Attendance Calendar</h2>
      <Calendar
        onChange={setDateFilter}
        value={dateFilter}
        className="rounded-lg shadow-sm"
      />
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 30 }, (_, i) => i + 1).map(day => {
          const record = filteredRecords.find(record => record.date.endsWith(`-${day.toString().padStart(2, '0')}`));
          return (
            <div key={day} className="p-2 border rounded-lg hover:bg-gray-100 transition duration-200">
              <p className="text-center">{day}</p>
              {record && (
                <p className={`text-center ${record.status === 'Present' ? 'text-green-600' : record.status === 'Absent' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {record.status}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AttendanceCalendar;
