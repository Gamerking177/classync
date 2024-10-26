// src/components/CourseRegistration.js
import React, { useState } from 'react';

const CourseRegistration = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [availableCourses, setAvailableCourses] = useState(dummyCourses);
    const [selectedCourses, setSelectedCourses] = useState([]);

    const handleDepartmentChange = (e) => {
        const department = e.target.value;
        setSelectedDepartment(department);
        setAvailableCourses(
            department
                ? dummyCourses.filter(course => course.department === department)
                : dummyCourses
        );
    };

    const handleCourseSelection = (course) => {
        setSelectedCourses((prev) =>
            prev.includes(course)
                ? prev.filter((c) => c !== course)
                : [...prev, course]
        );
    };

    const handleSubmit = () => {
        alert(`Registered Courses: ${selectedCourses.map(c => c.title).join(', ')}`);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-semibold mb-4">Course Registration</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <select
                    className="p-2 border rounded-lg shadow-sm w-full md:w-1/3"
                    value={selectedDepartment}
                    onChange={handleDepartmentChange}
                >
                    <option value="">All Departments</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Business">Business</option>
                    <option value="Mathematics">Mathematics</option>
                </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {availableCourses.map((course) => (
                    <div
                        key={course.id}
                        className={`p-4 border rounded-lg shadow-md ${selectedCourses.includes(course) ? 'bg-blue-100' : 'bg-white'}`}
                        onClick={() => handleCourseSelection(course)}
                    >
                        <h2 className="text-xl font-bold">{course.title}</h2>
                        <p className="text-gray-600">Department: {course.department}</p>
                        <p className="text-gray-600">Faculty: {course.faculty}</p>
                        <p className="text-gray-600">Availability: {course.availability}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
                Register Selected Courses
            </button>
        </div>
    );
};

export default CourseRegistration;

const dummyCourses = [
    { id: 1, title: 'Data Structures', department: 'Computer Science', faculty: 'Dr. Smith', availability: 'Available' },
    { id: 2, title: 'Algorithms', department: 'Computer Science', faculty: 'Dr. Clark', availability: 'Available' },
    { id: 3, title: 'Business Management', department: 'Business', faculty: 'Prof. Johnson', availability: 'Available' },
    { id: 4, title: 'Calculus I', department: 'Mathematics', faculty: 'Dr. Lee', availability: 'Full' },
    { id: 5, title: 'Operating Systems', department: 'Computer Science', faculty: 'Dr. Brown', availability: 'Available' },
    { id: 6, title: 'Marketing 101', department: 'Business', faculty: 'Prof. Williams', availability: 'Available' },
];
