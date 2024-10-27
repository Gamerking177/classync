import React, { useState } from 'react';
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
    const [monthFilter, setMonthFilter] = useState('All Months');
    const [attendanceDetails, setAttendanceDetails] = useState([]);

    const handleMonthChange = (e) => {
        const selectedMonth = e.target.value;
        setMonthFilter(selectedMonth);
        updateAttendanceDetails(semesterFilter, selectedMonth);
    };

    const handleSemesterChange = (e) => {
        const selectedSemester = e.target.value;
        setSemesterFilter(selectedSemester);
        updateAttendanceDetails(selectedSemester, monthFilter);
    };

    const updateAttendanceDetails = (semester, month) => {
        const filteredRecords = dummyData.filter(record =>
            (semester === 'All Semesters' || record.semester === semester) &&
            (month === 'All Months' || new Date(record.date).getMonth() === parseInt(month))
        );
        setAttendanceDetails(filteredRecords);
    };

    // Calculate summary of attendance
    const attendanceSummary = subjects.map(subject => {
        const subjectRecords = attendanceDetails.filter(record => record.subject === subject);
        const totalClasses = subjectRecords.length;
        const present = subjectRecords.filter(record => record.status === 'Present').length;
        const absent = subjectRecords.filter(record => record.status === 'Absent').length;

        return { subject, totalClasses, present, absent, records: subjectRecords };
    });

    // Group attendance details by date
    const groupedAttendanceDetails = attendanceDetails.reduce((acc, record) => {
        const date = record.date;
        if (!acc[date]) {
            acc[date] = { date, subjects: {} };
        }
        acc[date].subjects[record.subject] = record.status;
        return acc;
    }, {});

    // Convert grouped details into an array
    const attendanceDetailArray = Object.values(groupedAttendanceDetails);

    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col gap-6">
            <div className="absolute top-4 right-4 bg-blue-200 text-blue-800 font-semibold p-2 rounded-lg shadow-sm">
                <p>Today's Date: {new Date().toISOString().slice(0, 10)}</p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
                <div className="flex-1 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Attendance Record (Most Recent)</h2>

                    <div className="mb-4">
                        <label htmlFor="semesterFilter" className="mr-2">Select Semester:</label>
                        <select
                            id="semesterFilter"
                            className="border p-2 rounded"
                            value={semesterFilter}
                            onChange={handleSemesterChange}
                        >
                            <option value="All Semesters">All Semesters</option>
                            <option value="Semester 1">Semester 1</option>
                            <option value="Semester 2">Semester 2</option>
                            <option value="Semester 3">Semester 3</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="monthFilter" className="mr-2">Select Month:</label>
                        <select
                            id="monthFilter"
                            className="border p-2 rounded"
                            value={monthFilter}
                            onChange={handleMonthChange}
                        >
                            <option value="All Months">All Months</option>
                            {Array.from({ length: 12 }, (_, index) => (
                                <option key={index} value={index}>{new Date(0, index).toLocaleString('default', { month: 'long' })}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        {attendanceSummary.map(({ subject, totalClasses, present, absent }, index) => (
                            <div key={index} className="border p-4 rounded-lg flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold">{subject}</h3>
                                </div>
                                <p className="text-lg font-semibold">
                                    Total: {totalClasses}, Present: {present}, Absent: {absent}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Attendance Distribution Chart on the Right */}
                <div className="flex-1 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Attendance Distribution</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={[
                                        { name: 'Present', value: attendanceSummary.reduce((acc, curr) => acc + curr.present, 0) },
                                        { name: 'Absent', value: attendanceSummary.reduce((acc, curr) => acc + curr.absent, 0) },
                                    ]}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={80}
                                    fill="#8884d8"
                                >
                                    {attendanceSummary.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Attendance Details Table */}
            {attendanceDetailArray.length > 0 && (
                <div className="w-full mt-4">
                    <h2 className="text-lg font-semibold mb-4">Detailed Attendance for Selected Month</h2>
                    <table className="min-w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2">Date</th>
                                <th className="border border-gray-300 p-2">Subjects</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceDetailArray.map(({ date, subjects }, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 p-2">{date}</td>
                                    <td className="border border-gray-300 p-2 flex flex-wrap gap-2">
                                        {subjects && Object.keys(subjects).map(subject => (
                                            <div key={subject} className="flex items-center">
                                                <span className="mr-2">{subject}</span>
                                                <span className={subjects[subject] === 'Present' ? 'text-green-500' : 'text-red-500'}>
                                                    {subjects[subject] === 'Present' ? '✓' : '✗'}
                                                </span>
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AttendanceRecord;
