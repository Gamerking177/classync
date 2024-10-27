import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const statuses = ["Present", "Absent", "Late"];
const subjects = ["Mathematics", "Physics", "Chemistry"];
const COLORS = ['#0088FE', '#FF8042', '#FFBB28'];

const generateDummyData = () => {
    const data = [];
    const today = new Date();
    for (let i = 0; i < 365; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const formattedDate = date.toISOString().slice(0, 10);
        
        const semester = date.getMonth() < 4 ? 'Semester 1' : date.getMonth() < 8 ? 'Semester 2' : 'Semester 3';
        subjects.forEach((subject) => {
            const status = statuses[Math.floor(Math.random() * statuses.length)];
            data.push({ date: formattedDate, subject, status, semester });
        });
    }
    return data;
};

const dummyData = generateDummyData();

const AttendanceRecord = () => {
    const mostRecentDate = dummyData[0].date;
    const [dateFilter, setDateFilter] = useState(mostRecentDate);
    const [semesterFilter, setSemesterFilter] = useState('All Semesters');

    const filteredRecords = dummyData.filter(record =>
        (semesterFilter === 'All Semesters' || record.semester === semesterFilter) &&
        (dateFilter ? record.date === dateFilter : true)
    );

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
            <div className="absolute top-4 right-4 bg-blue-200 text-blue-800 font-semibold p-2 rounded-lg shadow-sm">
                <p>Today's Date: {new Date().toISOString().slice(0, 10)}</p>
            </div>

            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">Attendance Record (Most Recent)</h2>

                <div className="mb-4">
                    <label htmlFor="semesterFilter" className="mr-2">Select Semester:</label>
                    <select
                        id="semesterFilter"
                        className="border p-2 rounded"
                        value={semesterFilter}
                        onChange={(e) => {
                            setSemesterFilter(e.target.value);
                            if (e.target.value !== "All Semesters") {
                                setDateFilter(''); // Clear date filter if specific semester is selected
                            } else {
                                setDateFilter(mostRecentDate); // Reset to most recent date for "All Semesters"
                            }
                        }}
                    >
                        <option value="All Semesters">All Semesters</option>
                        <option value="Semester 1">Semester 1</option>
                        <option value="Semester 2">Semester 2</option>
                        <option value="Semester 3">Semester 3</option>
                    </select>
                </div>

                <div className="mb-4">
                    <input
                        type="date"
                        className="border p-2 rounded"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        placeholder="Select a date"
                        disabled={semesterFilter !== "All Semesters"} // Disable if specific semester is selected
                    />
                </div>

                <div className="space-y-2">
                    {filteredRecords.length > 0 ? (
                        filteredRecords.map((record, index) => (
                            <div key={index} className="border p-4 rounded-lg flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold">{record.subject}</h3>
                                </div>
                                <p className={`text-lg font-semibold ${record.status === 'Present' ? 'text-green-600' : record.status === 'Absent' ? 'text-red-600' : 'text-yellow-600'}`}>
                                    {record.status}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No records available for this date or semester.</p>
                    )}
                </div>
            </div>

            <div className="flex-1">
                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-4">
                        Attendance Summary for {semesterFilter} {dateFilter && `on ${dateFilter}`}
                    </h2>
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
