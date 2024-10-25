
import React, { useState } from 'react';

const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Michael Brown' },
];

const AttendancePage = () => {
    const [attendance, setAttendance] = useState(
        students.reduce((acc, student) => ({ ...acc, [student.id]: 'Absent' }), {})
    );

    const handleAttendanceChange = (studentId, status) => {
        setAttendance((prev) => ({ ...prev, [studentId]: status }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Attendance:', attendance);
        alert('Attendance has been submitted successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Attendance Page</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {students.map((student) => (
                    <div key={student.id} className="p-4 border border-gray-300 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">{student.name}</h2>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name={`attendance-${student.id}`}
                                    value="Present"
                                    checked={attendance[student.id] === 'Present'}
                                    onChange={() => handleAttendanceChange(student.id, 'Present')}
                                    className="text-green-500"
                                />
                                <span>Present</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name={`attendance-${student.id}`}
                                    value="Absent"
                                    checked={attendance[student.id] === 'Absent'}
                                    onChange={() => handleAttendanceChange(student.id, 'Absent')}
                                    className="text-red-500"
                                />
                                <span>Absent</span>
                            </label>
                        </div>
                    </div>
                ))}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    Submit Attendance
                </button>
            </form>
        </div>
    );
};

export default AttendancePage;
