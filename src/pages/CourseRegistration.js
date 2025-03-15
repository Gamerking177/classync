// src/components/CourseRegistration.js
import React, { useState } from 'react';

const CourseRegistration = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [selectedAvailability, setSelectedAvailability] = useState('');
    const [availableCourses, setAvailableCourses] = useState(dummyCourses);
    const [selectedCourses, setSelectedCourses] = useState([]);

    const handleDepartmentChange = (e) => {
        const department = e.target.value;
        setSelectedDepartment(department);
        filterCourses(department, selectedFaculty, selectedAvailability);
    };

    const handleFacultyChange = (e) => {
        const faculty = e.target.value;
        setSelectedFaculty(faculty);
        filterCourses(selectedDepartment, faculty, selectedAvailability);
    };

    const handleAvailabilityChange = (e) => {
        const availability = e.target.value;
        setSelectedAvailability(availability);
        filterCourses(selectedDepartment, selectedFaculty, availability);
    };

    const filterCourses = (department, faculty, availability) => {
        let filteredCourses = dummyCourses;

        if (department) {
            filteredCourses = filteredCourses.filter(course => course.department === department);
        }
        if (faculty) {
            filteredCourses = filteredCourses.filter(course => course.faculty === faculty);
        }
        if (availability) {
            filteredCourses = filteredCourses.filter(course => course.availability === availability);
        }

        setAvailableCourses(filteredCourses);
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
        <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-6">Course Registration</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <select
                    className="p-2 border rounded-lg shadow-sm w-full md:w-1/3 transition duration-200 ease-in-out hover:shadow-lg"
                    value={selectedDepartment}
                    onChange={handleDepartmentChange}
                >
                    <option value="">All Departments</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Business">Business</option>
                    <option value="Mathematics">Mathematics</option>
                </select>
                <select
                    className="p-2 border rounded-lg shadow-sm w-full md:w-1/3 transition duration-200 ease-in-out hover:shadow-lg"
                    value={selectedFaculty}
                    onChange={handleFacultyChange}
                >
                    <option value="">All Faculty</option>
                    <option value="Dr. Smith">Dr. vivekanand</option>
                    <option value="Dr. Clark">Dr. subash</option>
                    <option value="Prof. Johnson">Prof. neeraj</option>
                    <option value="Dr. Lee">Dr. manlj</option>
                    <option value="Dr. Brown">Dr. sumita</option>
                    <option value="Prof. Williams">Prof. Deepak</option>
                </select>
                <select
                    className="p-2 border rounded-lg shadow-sm w-full md:w-1/3 transition duration-200 ease-in-out hover:shadow-lg"
                    value={selectedAvailability}
                    onChange={handleAvailabilityChange}
                >
                    <option value="">All Availability</option>
                    <option value="Available">Available</option>
                    <option value="Full">Full</option>
                </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {availableCourses.map((course) => (
                    <div
                        key={course.id}
                        className={`p-4 border rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 ${selectedCourses.includes(course) ? 'bg-blue-200' : 'bg-white'}`}
                        onClick={() => handleCourseSelection(course)}
                    >
                        <h2 className="text-xl font-bold">{course.title}</h2>
                        <p className="text-gray-700">Department: {course.department}</p>
                        <p className="text-gray-700">Faculty: {course.faculty}</p>
                        <p className="text-gray-700">Availability: {course.availability}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out"
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