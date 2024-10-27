import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';

function AcademicPerformance() {
  const [selectedSemester, setSelectedSemester] = useState('Semester 1');

  const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'];

  const subjectsData = {
    'Semester 1': [
      { name: 'Mathematics', assignments: 28, midterm: 35, final: 30, total: 93 },
      { name: 'Computer Science', assignments: 27, midterm: 38, final: 32, total: 97 },
      { name: 'Physics', assignments: 25, midterm: 33, final: 29, total: 87 },
    ],
    'Semester 2': [
      { name: 'Data Structures', assignments: 26, midterm: 36, final: 31, total: 93 },
      { name: 'Database Systems', assignments: 28, midterm: 37, final: 33, total: 98 },
      { name: 'Web Development', assignments: 27, midterm: 35, final: 30, total: 92 },
    ],
    // Add data for other semesters
  };

  const performanceTrend = [
    { semester: 'Sem 1', gpa: 3.7 },
    { semester: 'Sem 2', gpa: 3.8 },
    { semester: 'Sem 3', gpa: 3.9 },
    { semester: 'Sem 4', gpa: 4.0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-6 shadow-lg"
      >
        <h1 className="text-3xl font-bold">Marks & Academic Performance</h1>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md rounded-lg p-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Student Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <p><span className="font-medium">Name:</span> John Doe</p>
          <p><span className="font-medium">Student ID:</span> 123456</p>
          <p><span className="font-medium">Class:</span> BCA 3rd Year</p>
          <p><span className="font-medium">Roll No:</span> 10023</p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white shadow-md rounded-lg p-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Subject Marks</h2>
        <div className="mb-4">
          <label htmlFor="semester" className="mr-2">Select Semester:</label>
          <select
            id="semester"
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="p-2 border rounded"
          >
            {semesters.map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-200">
              <th className="p-3 border">Subject</th>
              <th className="p-3 border">Assignments (30)</th>
              <th className="p-3 border">Midterm (40)</th>
              <th className="p-3 border">Final (30)</th>
              <th className="p-3 border">Total (100)</th>
            </tr>
          </thead>
          <tbody>
            {subjectsData[selectedSemester].map((subject, index) => (
              <motion.tr
                key={subject.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <td className="p-3 border">{subject.name}</td>
                <td className="p-3 border">{subject.assignments}</td>
                <td className="p-3 border">{subject.midterm}</td>
                <td className="p-3 border">{subject.final}</td>
                <td className="p-3 border">{subject.total}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white shadow-md rounded-lg p-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Performance Trend</h2>
        <LineChart width={600} height={300} data={performanceTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="semester" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="gpa" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Overall Performance</h2>
        <div className="text-lg">
          <p><span className="font-medium">Total Marks:</span> 500</p>
          <p><span className="font-medium">Marks Obtained:</span> 450</p>
          <p><span className="font-medium">Percentage:</span> 90%</p>
          <p><span className="font-medium">Grade:</span> A+</p>
        </div>
      </motion.section>
    </div>
  );
}

export default AcademicPerformance;