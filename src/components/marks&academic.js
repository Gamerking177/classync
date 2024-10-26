import React from 'react';

function AcademicPerformance() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="text-center py-6 bg-blue-600 text-white rounded-lg mb-6">
        <h1 className="text-3xl font-bold">Marks & Academic Performance</h1>
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

      {/* Marks Table */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Subject Marks</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-200">
              <th className="p-3 border">Subject</th>
              <th className="p-3 border">Max Marks</th>
              <th className="p-3 border">Marks Obtained</th>
              <th className="p-3 border">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Mathematics</td>
              <td className="p-3 border">100</td>
              <td className="p-3 border">85</td>
              <td className="p-3 border">A</td>
            </tr>
            <tr>
              <td className="p-3 border">Computer Science</td>
              <td className="p-3 border">100</td>
              <td className="p-3 border">90</td>
              <td className="p-3 border">A+</td>
            </tr>
            {/* Add more subjects as needed */}
          </tbody>
        </table>
      </section>

      {/* Performance Summary */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Overall Performance</h2>
        <div className="text-lg">
          <p><span className="font-medium">Total Marks:</span> 500</p>
          <p><span className="font-medium">Marks Obtained:</span> 450</p>
          <p><span className="font-medium">Percentage:</span> 90%</p>
          <p><span className="font-medium">Grade:</span> A+</p>
        </div>
      </section>
    </div>
  );
}

export default AcademicPerformance;
