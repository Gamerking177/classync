import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver'; // To save the receipt as a file

const FeesManagement = () => {
    const [selectedSemester, setSelectedSemester] = useState("1st");
    const [isLoading, setIsLoading] = useState(false);

    // Dummy data for semester-wise fee structure and payments
    const feesData = {
        "1st": {
            tuition: 15000,
            hostel: 5000,
            library: 1000,
            lab: 2000,
            misc: 500,
            deadline: "31 March 2024",
            pending: 2000
        },
        "2nd": {
            tuition: 15000,
            hostel: 5000,
            library: 1000,
            lab: 2000,
            misc: 700,
            deadline: "30 June 2024",
            pending: 1500
        },
        "3rd": {
            tuition: 16000,
            hostel: 5500,
            library: 1200,
            lab: 2200,
            misc: 600,
            deadline: "30 September 2024",
            pending: 2500
        },
        "4th": {
            tuition: 16000,
            hostel: 5500,
            library: 1200,
            lab: 2200,
            misc: 800,
            deadline: "31 December 2024",
            pending: 1000
        }
    };

    const previousPayments = [
        { semester: "1st", amount: 20000, date: "20 March 2023" },
        { semester: "2nd", amount: 21000, date: "25 June 2023" },
        { semester: "3rd", amount: 21500, date: "15 September 2023" },
    ];

    const handleSemesterChange = (e) => {
        setSelectedSemester(e.target.value);
    };

    const semesterFees = feesData[selectedSemester];

    const handlePayment = () => {
        setIsLoading(true);
        // Simulate a payment process
        setTimeout(() => {
            setIsLoading(false);
            alert("Payment Successful!");

            // Create a PDF receipt (for demonstration, just a plain text)
            const blob = new Blob([`Receipt\nSemester: ${selectedSemester}\nAmount: ₹${semesterFees.pending}`], { type: 'text/plain;charset=utf-8' });
            saveAs(blob, `Payment_Receipt_${selectedSemester}.txt`);
        }, 2000); // Simulate a network delay
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-gray-100 min-h-screen"
        >
            <h1 className="text-4xl font-bold mb-6 text-center">Fees Management</h1>

            {/* Semester Filter */}
            <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Select Semester:</label>
                <select 
                    onChange={handleSemesterChange} 
                    value={selectedSemester} 
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                >
                    <option value="1st">1st Semester</option>
                    <option value="2nd">2nd Semester</option>
                    <option value="3rd">3rd Semester</option>
                    <option value="4th">4th Semester</option>
                </select>
            </div>

            {/* Fees Details for Selected Semester */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-300"
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
                <div className="mt-1 text-gray-600">Payment Deadline: {semesterFees.deadline}</div>
            </motion.div>

            {/* Previous Payments */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-300"
            >
                <h2 className="text-3xl font-semibold mb-4">Previous Payments</h2>
                <ul className="space-y-4">
                    {previousPayments.map((payment, index) => (
                        <li key={index} className="flex justify-between">
                            <span className="font-medium">{payment.semester} Semester:</span>
                            <span>₹{payment.amount} - {payment.date}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Payment Form with Online Payment Options */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
            >
                <h2 className="text-3xl font-semibold mb-4">Make a Payment</h2>
                <form className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="font-medium">Select Fees to Pay:</label>
                        <select className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500">
                            <option>Tuition</option>
                            <option>Hostel</option>
                            <option>Library</option>
                            <option>Lab</option>
                            <option>Miscellaneous</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Amount to Pay:</span>
                        <span>₹{semesterFees.pending}</span>
                    </div>

                    {/* Online Payment Options */}
                    <div className="flex justify-between items-center mb-4">
                        <label className="font-medium">Select Payment Method:</label>
                        <div className="flex space-x-2">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">Credit/Debit Card</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">UPI</button>
                            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600 transition">Net Banking</button>
                        </div>
                    </div>

                    <button 
                        type="button" 
                        onClick={handlePayment}
                        className={`w-full bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Processing...' : 'Pay Now'}
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default FeesManagement;
