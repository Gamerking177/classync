// src/ReplyPage.js
import React, { useState } from 'react';

const ReplyPage = () => {
  const [reply, setReply] = useState('');

  const handleInputChange = (event) => {
    setReply(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission, e.g., send the reply to a server
    console.log('Reply submitted:', reply);
    alert('Reply submitted successfully!');
    setReply(''); // Clear the input after submission
  };

  return (
    <div className="container mx-auto mt-10 p-5 max-w-md border border-gray-300 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Reply to Show Cause Notice</h2>
      <p className="mb-4 text-gray-700">
        If you are absent for three consecutive days, you must reply. Ignore this message if your attendance was updated.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={reply}
          onChange={handleInputChange}
          placeholder="Write your reply here..."
          className="p-3 border border-gray-300 rounded-md w-full h-32"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit Reply
        </button>
      </form>
    </div>
  );
};

export default ReplyPage;
