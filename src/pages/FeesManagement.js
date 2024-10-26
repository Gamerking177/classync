import React, { useState } from 'react';

const FeesManagement = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    tuition: 15000,
    hostel: 5000,
    misc: 2000,
    totalDue: 22000,
    deadline: "2024-12-31"
  });

  const [previousPayments, setPreviousPayments] = useState([
    { id: 1, amount: 5000, date: "2024-08-15" },
    { id: 2, amount: 8000, date: "2024-09-20" }
  ]);

  const handlePayNow = () => {
    alert("Payment simulated. No actual payment processing here.");
    // Add logic to update the pending dues if needed
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Fees & Payment Management</h2>

      {/* Pending Dues Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Pending Dues</h3>
        <div className="bg-red-100 p-4 rounded-md">
          <p><span className="font-semibold">Total Due:</span> ₹{paymentDetails.totalDue}</p>
          <p><span className="font-semibold">Payment Deadline:</span> {paymentDetails.deadline}</p>
        </div>
      </div>

      {/* Previous Payments Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Previous Payments</h3>
        <div className="bg-green-100 p-4 rounded-md space-y-2">
          {previousPayments.length > 0 ? (
            previousPayments.map((payment) => (
              <div key={payment.id} className="flex justify-between">
                <span>₹{payment.amount}</span>
                <span>{payment.date}</span>
              </div>
            ))
          ) : (
            <p>No previous payments found.</p>
          )}
        </div>
      </div>

      {/* Payment Details Form */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Make a Payment</h3>
        <div className="bg-blue-100 p-4 rounded-md space-y-4">
          <div className="flex justify-between">
            <span>Tuition Fees:</span>
            <span>₹{paymentDetails.tuition}</span>
          </div>
          <div className="flex justify-between">
            <span>Hostel Fees:</span>
            <span>₹{paymentDetails.hostel}</span>
          </div>
          <div className="flex justify-between">
            <span>Miscellaneous Fees:</span>
            <span>₹{paymentDetails.misc}</span>
          </div>
          <div className="flex justify-between font-bold border-t border-gray-300 pt-2">
            <span>Total Amount:</span>
            <span>₹{paymentDetails.totalDue}</span>
          </div>

          <button
            onClick={handlePayNow}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeesManagement;
