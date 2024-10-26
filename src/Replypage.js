// src/ReplyPage.js
import React, { useState } from 'react';

const ReplyPage = () => {
  const [reply, setReply] = useState('');
  const [file, setFile] = useState(null);

  const handleInputChange = (event) => {
    setReply(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission here, e.g., send reply and file to a server
    console.log('Reply submitted:', reply);
    if (file) {
      console.log('File uploaded:', file.name);
    }
    alert('Reply submitted successfully!');
    setReply(''); // Clear the reply input
    setFile(null); // Clear the file input
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
        <input
          type="file"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-md p-2"
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
