import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy Data for attendance records over the last three months
const dummyData = [
    { date: '2023-07-15', subject: 'Mathematics', status: 'Present' },
    { date: '2023-07-16', subject: 'Physics', status: 'Absent' },
    { date: '2023-07-17', subject: 'Chemistry', status: 'Present' },
    { date: '2023-08-05', subject: 'Mathematics', status: 'Late' },
    { date: '2023-08-10', subject: 'Physics', status: 'Present' },
    { date: '2023-08-12', subject: 'Chemistry', status: 'Absent' },
    { date: '2023-09-01', subject: 'Mathematics', status: 'Present' },
    { date: '2023-09-15', subject: 'Physics', status: 'Present' },
    { date: '2023-09-20', subject: 'Chemistry', status: 'Absent' },
    { date: '2023-09-25', subject: 'Mathematics', status: 'Present' },
    { date: '2023-09-28', subject: 'Physics', status: 'Late' },
];

const COLORS = ['#0088FE', '#FF8042', '#FFBB28']; // Colors for Present, Absent, and Late

const AttendanceRecord = () => {
    const [subjectFilter, setSubjectFilter] = useState('All');
    const [dateFilter, setDateFilter] = useState('');

    // Filtered records based on subject and date filter
    const filteredRecords = dummyData
        .filter(record => (subjectFilter === 'All' || record.subject === subjectFilter))
        .filter(record => (dateFilter ? record.date >= dateFilter : true));

    // Count attendance statuses for pie chart data
    const attendanceSummary = filteredRecords.reduce(
        (acc, record) => {
            acc.total += 1;
            if (record.status === 'Present') acc.present += 1;
            else if (record.status === 'Absent') acc.absent += 1;
            else if (record.status === 'Late') acc.late += 1;
            return acc;
        },
        { total: 0, present: 0, absent: 0, late: 0 }
    );

    const pieData = [
        { name: 'Present', value: attendanceSummary.present },
        { name: 'Absent', value: attendanceSummary.absent },
        { name: 'Late', value: attendanceSummary.late },
    ];

    return (
        <section className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
            {/* Left Side: Subjects and Status */}
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">Attendance Record (Last 3 Months)</h2>

                {/* Filter Controls */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
                    <select
                        className="border p-2 rounded mb-2 sm:mb-0"
                        value={subjectFilter}
                        onChange={(e) => setSubjectFilter(e.target.value)}
                    >
                        <option value="All">All Subjects</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                    </select>

                    <input
                        type="date"
                        className="border p-2 rounded"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        placeholder="Filter by date"
                    />
                </div>

                {/* Subject-wise Attendance Records */}
                <div className="space-y-2">
                    {filteredRecords.map((record, index) => (
                        <div key={index} className="border p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold">{record.subject}</h3>
                                <p className="text-sm text-gray-500">{record.date}</p>
                            </div>
                            <p className={`text-lg font-semibold ${record.status === 'Present' ? 'text-green-600' : record.status === 'Absent' ? 'text-red-600' : 'text-yellow-600'}`}>
                                {record.status}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side: Summary and Chart */}
            <div className="flex-1">
                {/* Total Attendance Summary */}
                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-4">Attendance Summary</h2>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="border rounded-lg p-4">
                            <p className="text-gray-500">Total Classes</p>
                            <p className="text-2xl font-bold">{attendanceSummary.total}</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="text-gray-500">Absent</p>
                            <p className="text-2xl font-bold text-red-600">{attendanceSummary.absent}</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="text-gray-500">Present</p>
                            <p className="text-2xl font-bold text-green-600">{attendanceSummary.present}</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <p className="text-gray-500">Late</p>
                            <p className="text-2xl font-bold text-yellow-600">{attendanceSummary.late}</p>
                        </div>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Attendance Distribution</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={80}
                                fill="#8884d8"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default AttendanceRecord;
