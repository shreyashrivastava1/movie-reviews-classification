import React from "react";

export default function InputField() {
  return (
    <div className="bg-black bg-opacity-50 border border-cyan-400 shadow-lg rounded-2xl p-6 w-full max-w-lg">
      <textarea
        placeholder="Enter your movie review here..."
        className="w-full bg-transparent border border-pink-400 rounded-lg p-4 text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        rows="4"
      ></textarea>
    </div>
  );
}
