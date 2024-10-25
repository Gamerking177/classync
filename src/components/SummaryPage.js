// SummaryPage.js

import React from 'react';

const studentSummaries = [
    {
        id: 1,
        studentName: 'KETAN KUMAR',
        rollNo: 'B-7',
        studentID: '444-9758',
        courseInfo: 'BCA-PPU-1ST-YEAR-B1-(444)',
        totalClasses: 405,
        presentDays: 318,
        absentDays: 87,
        attendancePercent: 79,
    },
    {
        id: 2,
        studentName: 'KETAN KUMAR',
        rollNo: 'B-7',
        studentID: '444-9758',
        courseInfo: 'BCA-PPU-2ND YEAR-BATCH-1',
        totalClasses: 274,
        presentDays: 185,
        absentDays: 89,
        attendancePercent: 68,
    },
];

const SummaryPage = () => {
    return (
        <div className="container mx-auto bg-white p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-4">» Attendance Summary</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-blue-100">
                            <th className="border border-gray-300 p-2">S.N.</th>
                            <th className="border border-gray-300 p-2">Student</th>
                            <th className="border border-gray-300 p-2">Total Classes</th>
                            <th className="border border-gray-300 p-2">Total Present</th>
                            <th className="border border-gray-300 p-2">Total Absent</th>
                            <th className="border border-gray-300 p-2">Attendance %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentSummaries.map((student, index) => (
                            <tr key={student.id} className="border-t border-gray-300">
                                <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                                <td className="border border-gray-300 p-2">
                                    <div className="font-bold text-blue-700">{student.studentName}</div>
                                    <div>Roll No.: {student.rollNo}</div>
                                    <div className="text-red-600">ID: {student.studentID}</div>
                                    <div className="text-blue-700">{student.courseInfo}</div>
                                </td>
                                <td className="border border-gray-300 p-2 text-center">{student.totalClasses}</td>
                                <td className="border border-gray-300 p-2 text-center">{student.presentDays}</td>
                                <td className="border border-gray-300 p-2 text-center">{student.absentDays}</td>
                                <td className="border border-gray-300 p-2 text-center text-red-600 font-bold">
                                    {student.attendancePercent} %
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-center mt-4 text-blue-700">CIMAGE Group of Institutions</div>
            </div>
        </div>
    );
};

export default SummaryPage;
