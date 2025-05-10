import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const UserProfile = () => {
    const [editable, setEditable] = useState(false);
    const [profile, setProfile] = useState({
        studentID: "BCA2024XYZ",
        name: "Rahul kumar",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        address: "123, Main Street, City",
        Course: ["BCA"],
        academicHistory: [
            { semester: "1st", GPA: 3.8 },
            { semester: "2nd", GPA: 3.9 },
            { semester: "3rd", GPA: 4.0 },
            { semester: "4th", GPA: 3.7 },
            { semester: "5th", GPA: 4.0 },
            { semester: "6th", GPA: 3.9 }
        ],
        parentName: "Mr. and Mrs. Doe",
        parentPhone: "987-654-3210",
        parentWhatsApp: "9123456789",
        extracurricularActivities: ["Football Team Captain", "Volunteer at Local Shelter", "Coding Club President"],
        skills: [
            { name: "JavaScript", level: "Advanced" },
            { name: "React", level: "Intermediate" },
            { name: "Python", level: "Intermediate" },
            { name: "Node.js", level: "Beginner" }
        ],
        certificates: ["JavaScript Certification", "React Developer Certificate"],
        courseReviews: [
            { course: "Data Structures", review: "Great course, learned a lot!" },
            { course: "Algorithms", review: "Challenging but rewarding." }
        ]
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userSummery, setUserSummery] = useState(null);
    const [userDetails, setUserDetails] = useState({ skills: [], certificates: [], academicHistory: [], courseData:[] })
    const token = localStorage.getItem("token");

    const fetchUserSummery = async () => {
        if (!token) {
            setError("Authentication token required");
            setLoading(false);
            return;
        }

        try {
            const API_URL = process.env.REACT_APP_API_URL;
            const response = await fetch(`${API_URL}/users/getUserSummery`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();
            setUserSummery(data)

            if (response.ok) {
                setUserSummery(data.user);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserSummery();
    }, []);


    const fetchUserDetails = async () => {
        if (!token) {
            setError("Authentication token required");
            setLoading(false);
            return;
        }

        try {
            const API_URL = process.env.REACT_APP_API_URL;
            const response = await fetch(`${API_URL}/users/getUserDetails`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (response.ok) {
                setUserDetails(data.user);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Something went wrong!');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUserDetails();
    }, [])
    


    const handleEditToggle = () => setEditable(!editable);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const courseData = [
        { name: 'Technical', value: 2 },
        { name: 'Core', value: 3 },
        { name: 'Elective', value: 2 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <div className="p-6 bg-gradient-to-r from-green-200 to-blue-200 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">User Profile</h1>

            {/* Personal Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                            <p className="ml-3 text-blue-500 font-medium">Loading...</p>
                        </div>
                    ) : (
                        Object.entries(userSummery).slice(0, 5).map(([key, value]) => (
                            <div key={key}>
                                <label className="block font-medium text-gray-600 mb-2">
                                    {key.replace(/([A-Z])/g, " $1").toUpperCase()}:
                                </label>
                                <input
                                    type={key === "email" ? "email" : "text"}
                                    name={key}
                                    value={value || "Unable to Fetch"}
                                    disabled={!editable}
                                    onChange={() => { }}
                                    className="w-full p-3 border rounded-lg shadow-sm mt-1 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                                />
                            </div>
                        ))
                    )}
                    <div>
                        <label className="block font-medium text-gray-600 mb-2">{userDetails.course || "Not Available"}</label>
                        <input
                            type="text"
                            name="bcaCourse"
                            value={userDetails.course || "Not Available"}
                            disabled
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 bg-gray-100 cursor-not-allowed"
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

            {/* Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Skills</h2>
                <ul className="list-disc pl-6">
                    {userDetails.skills.map((skill, index) => (
                        <li key={index} className="text-gray-600">
                            <span className="font-semibold">{skill.name}:</span> {skill.level}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Certificates */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Certificates</h2>
                <ul className="list-disc pl-6">
                    {userDetails.certificates.map((certificate, index) => (
                        <li key={index} className="text-gray-600">{certificate}</li>
                    ))}
                </ul>
            </div>

            {/* Parent Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Parent Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium text-gray-600 mb-2">Parent's Name:</label>
                        <input
                            type="text"
                            value={userDetails.parentsName}
                            readOnly
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-600 mb-2">Parent's Phone:</label>
                        <input
                            type="text"
                            value={userDetails.parentsPhone}
                            readOnly
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block font-medium text-gray-600 mb-2">Parent's WhatsApp:</label>
                        <input
                            type="text"
                            value={userDetails.whatsappNo}
                            readOnly
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                </div>
            </div>

            {/* Academic Performance and Course Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">Academic Performance</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={userDetails.academicHistory}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="semester" />
                            <YAxis domain={[3.0, 4.0]} />
                            <Tooltip />
                            <Line type="monotone" dataKey="GPA" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">Enrolled Course Distribution</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={userDetails.courseData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {userDetails.courseData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="top" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
