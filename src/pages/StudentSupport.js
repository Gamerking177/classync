import React, { useState } from 'react';

const StudentSupport = () => {
    const [supportRequest, setSupportRequest] = useState('');
    const [faqSearch, setFaqSearch] = useState('');
    const [feedback, setFeedback] = useState('');

    const faqs = [
        { question: 'How do I reset my password?', answer: 'Click on the "Forgot Password" link on the login page.' },
        { question: 'Where can I find my grades?', answer: 'Grades can be accessed through the student portal under the "Grades" section.' },
        // Add more FAQs as needed
    ];

    const handleSubmitRequest = (e) => {
        e.preventDefault();
        // Logic to handle support request submission
        alert(`Support request submitted: ${supportRequest}`);
        setSupportRequest('');
    };

    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        // Logic to handle feedback submission
        alert(`Feedback submitted: ${feedback}`);
        setFeedback('');
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Student Support</h1>

            {/* Support Ticket System */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-3xl font-bold mb-4">Support Ticket</h2>
                <form onSubmit={handleSubmitRequest}>
                    <textarea
                        className="w-full p-3 border rounded-lg shadow-sm mt-2"
                        rows="4"
                        placeholder="Describe your issue..."
                        value={supportRequest}
                        onChange={(e) => setSupportRequest(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Submit Request
                    </button>
                </form>
            </div>

            {/* FAQs */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-3xl font-bold mb-4">FAQs</h2>
                <input
                    type="text"
                    className="w-full p-3 border rounded-lg shadow-sm mb-4"
                    placeholder="Search FAQs..."
                    value={faqSearch}
                    onChange={(e) => setFaqSearch(e.target.value)}
                />
                <ul>
                    {faqs.filter(faq => faq.question.toLowerCase().includes(faqSearch.toLowerCase())).map((faq, index) => (
                        <li key={index} className="mb-2">
                            <h3 className="font-semibold">{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Live Chat */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-3xl font-bold mb-4">Live Chat</h2>
                <p>For immediate assistance, please use the live chat feature on the bottom right of the screen.</p>
            </div>

            {/* Academic Counseling */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-3xl font-bold mb-4">Academic Counseling</h2>
                <p>Schedule a session with an academic counselor for guidance on your studies.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Schedule Appointment
                </button>
            </div>

            {/* Resource Library */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-3xl font-bold mb-4">Resource Library</h2>
                <p>Access downloadable materials and guides in the resource library.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Go to Library
                </button>
            </div>

            {/* Important Contacts */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-3xl font-bold mb-4">Important Contacts</h2>
                <ul>
                    <li>Admissions: admissions@example.com</li>
                    <li>Technical Support: techsupport@example.com</li>
                    <li>Finance Office: finance@example.com</li>
                </ul>
            </div>

            {/* Guidance Videos */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-3xl font-bold mb-4">Guidance Videos</h2>
                <p>Watch helpful tutorials on navigating your student portal and other resources.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Watch Videos
                </button>
            </div>

            {/* Feedback Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-3xl font-bold mb-4">Feedback</h2>
                <form onSubmit={handleSubmitFeedback}>
                    <textarea
                        className="w-full p-3 border rounded-lg shadow-sm mt-2"
                        rows="4"
                        placeholder="Provide your feedback..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>

            {/* Announcements */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Announcements</h2>
                <ul>
                    <li>New courses available for the upcoming semester!</li>
                    <li>Check your email for the latest updates from the administration.</li>
                    <li>Reminder: Last day to submit assignments is next Friday.</li>
                </ul>
            </div>
        </div>
    );
};

export default StudentSupport;
