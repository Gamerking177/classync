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
        Course: [ "BCA"], // Added "BCA" here
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

    const handleEditToggle = () => setEditable(!editable);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    // Function to handle file upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Here you can handle the uploaded file, for example, saving it to state or uploading it to a server
            alert(`Uploaded certificate: ${file.name}`);
        }
    };

    // Dummy data for pie chart
    const courseData = [
        { name: 'Technical', value: 2 },
        { name: 'Core', value: 3 },
        { name: 'Elective', value: 2 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <div className="p-6 bg-gradient-to-r from-green-200 to-blue-200 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">User Profile</h1>
            
            {/* Personal Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Personal Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(profile).slice(0, 5).map(([key, value]) => (
            <div key={key}>
                <label className="block font-medium text-gray-600 mb-2">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</label>
                <input
                    type={key === 'email' ? 'email' : 'text'}
                    name={key}
                    value={value}
                    disabled={!editable}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow-sm mt-1 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                />
            </div>
        ))}
        
        {/* Separate Input Field for BCA Course */}
        <div>
            <label className="block font-medium text-gray-600 mb-2">Course (BCA):</label>
            <input
                type="text"
                name="bcaCourse"
                value="BCA"
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


            {/* Parent Information (Non-Editable) */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Parent Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium text-gray-600 mb-2">Parent's Name:</label>
                        <input
                            type="text"
                            value={profile.parentName}
                            readOnly
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-600 mb-2">Parent's Phone:</label>
                        <input
                            type="text"
                            value={profile.parentPhone}
                            readOnly
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block font-medium text-gray-600 mb-2">Parent's WhatsApp:</label>
                        <input
                            type="text"
                            value={profile.parentWhatsApp}
                            readOnly
                            className="w-full p-3 border rounded-lg shadow-sm mt-1 bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                </div>
            </div>

            {/* Academic Performance Graph */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">Academic Performance</h2>
                    <LineChart width={500} height={300} data={profile.academicHistory}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="semester" />
                        <YAxis domain={[3.0, 4.0]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="GPA" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>

                {/* Course Distribution Pie Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">Enrolled Course Distribution</h2>
                    <PieChart width={500} height={300}>
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
                        <Legend verticalAlign="top" height={36} />
                    </PieChart>
                </div>
            </div>

            {/* Extracurricular Activities */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Extracurricular Activities</h2>
                <ul className="list-disc ml-5">
                    {profile.extracurricularActivities.map((activity, index) => (
                        <li key={index} className="text-gray-600">{activity}</li>
                    ))}
                </ul>
            </div>

            {/* Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Skills</h2>
                <ul className="list-disc ml-5">
                    {profile.skills.map((skill, index) => (
                        <li key={index} className="text-gray-600">{`${skill.name}: ${skill.level}`}</li>
                    ))}
                </ul>
            </div>

            {/* Certificates */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Certificates</h2>
                <ul className="list-disc ml-5">
                    {profile.certificates.map((certificate, index) => (
                        <li key={index} className="text-gray-600">{certificate}</li>
                    ))}
                </ul>
                <div className="mt-6">
                    <label className="block font-medium text-gray-600 mb-2">Upload New Certificate:</label>
                    <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded-lg shadow-sm" />
                </div>
            </div>

           
        </div>
    );
};

export default UserProfile;
