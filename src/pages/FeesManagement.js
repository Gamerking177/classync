import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver';
import { FaCreditCard, FaUniversity, FaMobileAlt, FaSearch } from 'react-icons/fa';

const FeesManagement = () => {
    const [selectedSemester, setSelectedSemester] = useState("1st");
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState("");
    const [supportTicket, setSupportTicket] = useState("");
    const [filterText, setFilterText] = useState("");
    const [showHistory, setShowHistory] = useState(false);

    // Dummy data for fee structure and payments
    const feesData = {
        "1st": { tuition: 15000, hostel: 5000, library: 1000, lab: 2000, misc: 500, deadline: "31 March 2024", pending: 2000, fine: 200 },
        "2nd": { tuition: 15000, hostel: 5000, library: 1000, lab: 2000, misc: 700, deadline: "30 June 2024", pending: 1500, fine: 100 },
        "3rd": { tuition: 16000, hostel: 5500, library: 1200, lab: 2200, misc: 600, deadline: "30 September 2024", pending: 2500, fine: 150 },
        "4th": { tuition: 16000, hostel: 5500, library: 1200, lab: 2200, misc: 800, deadline: "31 December 2024", pending: 1000, fine: 0 },
    };

    const previousPayments = [
        { semester: "1st", amount: 20000, date: "20 March 2023" },
        { semester: "2nd", amount: 21000, date: "25 June 2023" },
        { semester: "3rd", amount: 21500, date: "15 September 2023" },
    ];

    const handleSemesterChange = (e) => setSelectedSemester(e.target.value);
    const semesterFees = feesData[selectedSemester];

    const handlePayment = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setNotification("Payment Successful!");
            const blob = new Blob([`Receipt\nSemester: ${selectedSemester}\nAmount: ₹${semesterFees.pending + semesterFees.fine}`], { type: 'text/plain;charset=utf-8' });
            saveAs(blob, `Payment_Receipt_${selectedSemester}.txt`);
        }, 2000);
    };

    const handleSupportTicket = () => {
        alert("Support ticket submitted successfully!");
    };

    const filteredPayments = previousPayments.filter(payment =>
        payment.semester.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row p-6 lg:p-8 bg-gradient-to-r from-indigo-500 to-blue-600 min-h-screen text-white"
        >
            {/* Main Content */}
            <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-6 lg:mb-0">
                <h1 className="text-4xl font-bold mb-6 text-center">Fees Management</h1>

                {/* Semester Filter and Search */}
                <div className="mb-6 flex flex-col lg:flex-row justify-between items-center">
                    <div className="w-full lg:w-auto">
                        <label className="block text-lg font-medium mb-2">Select Semester:</label>
                        <select 
                            onChange={handleSemesterChange} 
                            value={selectedSemester} 
                            className="w-full p-3 rounded-lg shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="1st">1st Semester</option>
                            <option value="2nd">2nd Semester</option>
                            <option value="3rd">3rd Semester</option>
                            <option value="4th">4th Semester</option>
                        </select>
                    </div>
                    {/* Search Filter */}
                    <div className="mt-4 lg:mt-0 lg:ml-4 flex items-center">
                        <FaSearch className="text-white mr-2"/>
                        <input 
                            type="text" 
                            placeholder="Search by semester..." 
                            value={filterText} 
                            onChange={(e) => setFilterText(e.target.value)}
                            className="p-2 rounded-lg text-gray-800"
                        />
                    </div>
                </div>

                {/* Fees Details for Selected Semester */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white text-gray-800 p-6 rounded-lg shadow-lg mb-6 border"
                >
                    <h2 className="text-3xl font-semibold mb-4">Fee Structure for {selectedSemester} Semester</h2>
                    <ul className="space-y-4">
                        <li className="flex justify-between">
                            <span className="font-medium">Tuition Fee:</span>
                            <span>₹{semesterFees.tuition}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Hostel Fee:</span>
                            <span>₹{semesterFees.hostel}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Library Fee:</span>
                            <span>₹{semesterFees.library}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Lab Fee:</span>
                            <span>₹{semesterFees.lab}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Miscellaneous Fee:</span>
                            <span>₹{semesterFees.misc}</span>
                        </li>
                    </ul>
                    <div className="mt-4 flex justify-between text-lg font-semibold">
                        <span>Total Fee:</span>
                        <span>₹{semesterFees.tuition + semesterFees.hostel + semesterFees.library + semesterFees.lab + semesterFees.misc}</span>
                    </div>
                    <div className="mt-2 text-red-500">Pending Due: ₹{semesterFees.pending}</div>
                    <div className="mt-1 text-red-500">Fine/Penalty: ₹{semesterFees.fine}</div>
                    <div className="mt-1 text-gray-600">Payment Deadline: {semesterFees.deadline}</div>
                </motion.div>

                {/* Payment Form with Online Payment Options */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border"
                >
                    <h2 className="text-3xl font-semibold mb-4">Make a Payment</h2>
                    <form className="space-y-6">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Amount to Pay:</span>
                            <span>₹{semesterFees.pending + semesterFees.fine}</span>
                        </div>

                        <div className="flex justify-around mt-4">
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-blue-600 flex items-center space-x-2">
                                <FaCreditCard />
                                <span>Credit/Debit Card</span>
                            </button>
                            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-green-600 flex items-center space-x-2">
                                <FaMobileAlt />
                                <span>UPI</span>
                            </button>
                            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-blue-600 flex items-center space-x-2">
                                <FaUniversity />
                                <span>Net Banking</span>
                            </button>
                        </div>

                        <button 
                            type="button" 
                            onClick={handlePayment}
                            className={`w-full bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Processing...' : 'Pay Now'}
                        </button>
                    </form>
                </motion.div>
            </div>

            {/* Sidebar Section */}
            <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex flex-col">
                {notification && (
                    <div className="bg-green-200 text-green-800 p-4 rounded-lg shadow-lg mb-6">
                        {notification}
                    </div>
                )}

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border mb-6"
                >
                    <h2 className="text-3xl font-semibold mb-4">Previous Payments</h2>
                    <ul className="space-y-4">
                        {filteredPayments.length > 0 ? (
                            filteredPayments.map((payment, index) => (
                                <li key={index} className="flex justify-between">
                                    <span className="font-medium">{payment.semester} Semester:</span>
                                    <span>₹{payment.amount} - {payment.date}</span>
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-500">No payments found.</li>
                        )}
                    </ul>
                </motion.div>

                {/* Support Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border"
                >
                    <h2 className="text-3xl font-semibold mb-4">Need Help?</h2>
                    <textarea 
                        value={supportTicket} 
                        onChange={(e) => setSupportTicket(e.target.value)} 
                        placeholder="Describe your issue here..." 
                        className="w-full p-4 border rounded-lg"
                    ></textarea>
                    <button 
                        onClick={handleSupportTicket} 
                        className="mt-4 w-full bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-200"
                    >
                        Submit Support Ticket
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default FeesManagement;
