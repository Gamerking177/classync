import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';

const UserProfile = () => {
    const [editable, setEditable] = useState(false);
    const [profile, setProfile] = useState({
        studentID: "BCA2024XYZ",
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        address: "123, Main Street, City",
        enrolledCourses: ["Data Structures", "Algorithms", "Operating Systems", "Mathematics"],
        academicHistory: [
            { semester: "1st", GPA: 3.8 },
            { semester: "2nd", GPA: 3.9 },
            { semester: "3rd", GPA: 4.0 }
        ]
    });

    const handleEditToggle = () => setEditable(!editable);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    // Dummy data for pie chart
    const courseData = [
        { name: 'Technical', value: 2 },
        { name: 'Core', value: 1 },
        { name: 'Elective', value: 1 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">User Profile</h1>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium text-gray-600 mb-2">Student ID:</label>
                        <input
                            type="text"
                            name="studentID"
                            value={profile.studentID}
                            disabled={!editable}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-600 mb-2">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            disabled={!editable}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-600 mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            disabled={!editable}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-600 mb-2">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            disabled={!editable}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block font-medium text-gray-600 mb-2">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={profile.address}
                            disabled={!editable}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                        />
                    </div>
                </div>
                <button
                    onClick={handleEditToggle}
                    className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                    {editable ? "Save Changes" : "Edit Profile"}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Academic Performance Graph */}
                <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">Academic Performance</h2>
                    <LineChart width={400} height={300} data={profile.academicHistory}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="semester" />
                        <YAxis domain={[3.5, 4.0]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="GPA" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>

                {/* Course Distribution Pie Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">Enrolled Course Distribution</h2>
                    <PieChart width={400} height={300}>
                        <Pie
                            data={courseData}
                            cx={200}
                            cy={150}
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {courseData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>

            {/* User Stats */}
            <div className="bg-white p-8 mt-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">User Statistics</h2>
                <div className="flex flex-wrap justify-around">
                    <div className="text-center p-4 bg-blue-100 rounded-xl transition-all duration-300 hover:bg-blue-200">
                        <p className="text-xl font-medium text-blue-800">Total Credits</p>
                        <p className="text-3xl font-bold text-blue-600">28</p>
                    </div>
                    <div className="text-center p-4 bg-green-100 rounded-xl transition-all duration-300 hover:bg-green-200">
                        <p className="text-xl font-medium text-green-800">Attendance</p>
                        <p className="text-3xl font-bold text-green-600">85%</p>
                    </div>
                    <div className="text-center p-4 bg-purple-100 rounded-xl transition-all duration-300 hover:bg-purple-200">
                        <p className="text-xl font-medium text-purple-800">Total Semesters</p>
                        <p className="text-3xl font-bold text-purple-600">3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;