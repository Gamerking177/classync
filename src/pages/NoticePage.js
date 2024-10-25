// NoticePage.js

import React from 'react';

const notices = [
    {
        id: 1,
        title: 'New Course Announcement',
        date: '2024-10-26',
        content: 'We are excited to announce a new course on Advanced JavaScript. Enroll now!',
    },
    {
        id: 2,
        title: 'System Maintenance',
        date: '2024-10-29',
        content: 'Our system will be down for maintenance on October 29th from 2 AM to 4 AM. Thank you for your understanding.',
    },
    {
        id: 3,
        title: 'Join Our Webinar',
        date: '2024-11-02',
        content: 'Don\'t miss our upcoming webinar on Web Development Trends! Register today!',
    },
];

const NoticePage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Announcements</h1>
            <div className="space-y-4">
                {notices.map((notice) => (
                    <div key={notice.id} className="p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-xl font-semibold">{notice.title}</h2>
                        <p className="text-gray-500 text-sm">{notice.date}</p>
                        <p className="mt-2 text-gray-700">{notice.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoticePage;
