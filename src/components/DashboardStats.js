import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    // Data for announcements, activities, exams, and notifications
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
        <div className="min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-100">
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-6 shadow-lg"
            >
                <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            </motion.header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Announcements Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                    <h2 className="text-2xl font-bold mb-4">Student Announcements</h2>
                    <ul className="space-y-4">
                        {announcements.map((announcement) => (
                            <motion.li
                                key={announcement.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: announcement.id * 0.1 }}
                                className="border-b pb-2 hover:bg-blue-50 rounded-md px-2 transition-colors duration-200"
                            >
                                <h3 className="font-semibold">{announcement.title}</h3>
                                <p>{announcement.content}</p>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Recent Activities Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                    <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
                    <ul className="space-y-4">
                        {recentActivities.map((activity) => (
                            <motion.li
                                key={activity.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: activity.id * 0.1 }}
                                className="flex justify-between border-b pb-2 hover:bg-blue-50 rounded-md px-2 transition-colors duration-200"
                            >
                                <span>{activity.activity}</span>
                                <span className="text-sm text-gray-500">{activity.time}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Upcoming Exams Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white shadow-md rounded-lg p-6 mt-6 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
                <h2 className="text-2xl font-bold mb-4">Upcoming Exams</h2>
                <ul className="space-y-4">
                    {upcomingExams.map((exam) => (
                        <motion.li
                            key={exam.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: exam.id * 0.1 }}
                            className="flex justify-between border-b pb-2 hover:bg-blue-50 rounded-md px-2 transition-colors duration-200"
                        >
                            <div>
                                <h3 className="font-semibold">{exam.subject}</h3>
                                <p className="text-sm text-gray-500">{exam.date}</p>
                            </div>
                            <span className="text-sm text-gray-500">{exam.time}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Notifications Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white shadow-md rounded-lg p-6 mt-6 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
                <h2 className="text-2xl font-bold mb-4">Notifications</h2>
                <ul className="space-y-4">
                    {notifications.map((notification) => (
                        <motion.li
                            key={notification.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: notification.id * 0.1 }}
                            className="border-b pb-2 hover:bg-blue-50 rounded-md px-2 transition-colors duration-200"
                        >
                            <p>{notification.message}</p>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}

export default Dashboard;
