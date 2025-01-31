"use client";

import { useState } from 'react';

export default function ComplainPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">File a Complaint</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Order ID</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 text-black"
            placeholder="Your Order ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Complaint</label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 text-black"
            rows={4}
            placeholder="Describe your issue"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-600 transition"
        >
          Submit Complaint
        </button>
      </form>

      {/* Complaint Submitted Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-black">Complaint Submitted</h2>
            <p className="text-black">Thank you for your submission. We will get back to you shortly.</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-gray-400 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

  