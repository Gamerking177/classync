// src/components/Dashboard.js
import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {

    const announcements = [
        { id: 1, title: "Library Week", content: "Library week starts from Nov 1st to Nov 7th. All students are welcome!" },
        { id: 2, title: "Winter Vacation", content: "College will remain closed from Dec 25th to Jan 5th for winter break." },
    ];

    const recentActivities = [
        { id: 1, activity: "Submitted Assignment 3 in Computer Science", time: "2 hours ago" },
        { id: 2, activity: "Joined the Physics Club", time: "Yesterday" },
        { id: 3, activity: "Attended workshop on Blockchain", time: "2 days ago" },
    ];

    const upcomingExams = [
        { id: 1, subject: "Mathematics", date: "Nov 15, 2024", time: "10:00 AM" },
        { id: 2, subject: "Physics", date: "Nov 18, 2024", time: "1:00 PM" },
        { id: 3, subject: "Chemistry", date: "Nov 20, 2024", time: "10:00 AM" },
    ];

    const notifications = [
        { id: 1, message: "Your tuition fee payment is due by Nov 10th." },
        { id: 2, message: "New student orientation on Nov 12th in the main hall." },
        { id: 3, message: "Last day to register for Spring semester courses is Dec 1st." },
    ];

    return (
        <div className="p-6 min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 relative">

            <h1 className="text-3xl font-semibold mb-6 text-indigo-700 text-center sm:text-left">Dashboard Overview</h1>

            {/* Announcements and Activities Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Announcements */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 border-t-4 border-indigo-500">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Student Announcements</h2>
                    <ul className="space-y-4 text-gray-700">
                        {announcements.map((announcement) => (
                            <li key={announcement.id} className="border-b pb-2 hover:bg-indigo-50 rounded-md px-2 transition-colors duration-200">
                                <h3 className="font-semibold">{announcement.title}</h3>
                                <p>{announcement.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Recent Activities */}
                <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Recent Activities</h2>
                    <ul className="space-y-4 text-gray-700">
                        {recentActivities.map((activity) => (
                            <li key={activity.id} className="flex flex-col md:flex-row justify-between border-b pb-2 hover:bg-blue-50 rounded-md px-2 transition-colors duration-200">
                                <span>{activity.activity}</span>
                                <span className="text-sm text-gray-500">{activity.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Upcoming Exams */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 mb-6 border-t-4 border-green-500">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Upcoming Exams</h2>
                <ul className="space-y-4 text-gray-700">
                    {upcomingExams.map((exam) => (
                        <li key={exam.id} className="flex flex-col md:flex-row justify-between border-b pb-2 hover:bg-green-50 rounded-md px-2 transition-colors duration-200">
                            <div>
                                <h3 className="font-semibold">{exam.subject}</h3>
                                <p className="text-sm text-gray-500">{exam.date}</p>
                            </div>
                            <span className="text-sm text-gray-500">{exam.time}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Notifications */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 mb-6 border-t-4 border-yellow-500">
                <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Important Notifications</h2>
                <ul className="space-y-4 text-gray-700">
                    {notifications.map((notification) => (
                        <li key={notification.id} className="flex items-center space-x-4 hover:bg-yellow-50 rounded-md px-2 transition-colors duration-200">
                            <div className="bg-yellow-100 p-2 rounded-full">
                                <span role="img" aria-label="notification" className="text-yellow-500">🔔</span>
                            </div>
                            <span>{notification.message}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 border-t-4 border-purple-500">
                <h2 className="text-2xl font-semibold text-purple-600 mb-4">Quick Links</h2>
                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center space-x-4 hover:bg-purple-50 rounded-md px-2 transition-colors duration-200">
                        <span role="img" aria-label="link" className="text-green-500">📚</span>
                        <Link to="/library" className="text-blue-500 hover:underline">Library Resources</Link>
                    </li>
                    <li className="flex items-center space-x-4 hover:bg-purple-50 rounded-md px-2 transition-colors duration-200">
                        <span role="img" aria-label="link" className="text-yellow-500">📝</span>
                        <Link to="/register-courses" className="text-blue-500 hover:underline">Course Registration</Link>
                    </li>
                    <li className="flex items-center space-x-4 hover:bg-purple-50 rounded-md px-2 transition-colors duration-200">
                        <span role="img" aria-label="link" className="text-red-500">📅</span>
                        <Link to="/classSchedule" className="text-blue-500 hover:underline">Academic Calendar</Link>
                    </li>
                    <li className="flex items-center space-x-4 hover:bg-purple-50 rounded-md px-2 transition-colors duration-200">
                        <span role="img" aria-label="link" className="text-purple-500">👥</span>
                        <Link to="/user-profile" className="text-blue-500 hover:underline">Student Support</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
