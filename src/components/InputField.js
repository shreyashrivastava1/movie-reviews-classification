import React, { useEffect, useState, useRef } from "react";

export default function InputField() {
  const [placeholder, setPlaceholder] = useState(" ");
  const text = "Enter your movie review here... ";
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    setPlaceholder("");

    intervalRef.current = setInterval(() => {
      if (indexRef.current < text.length) {
        setPlaceholder((prev) => prev + text[indexRef.current - 1]);
        indexRef.current++;
      } else {
        clearInterval(intervalRef.current);
      }
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="bg-black bg-opacity-50 border border-cyan-400 shadow-lg rounded-2xl p-6 w-full max-w-lg">
      <textarea
        placeholder={placeholder}
        className="w-full p-4 h-32 rounded-lg border border-pink-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:shadow-pink-500/50 transition duration-300 neon-glow"
        rows="4"
      ></textarea>
    </div>
  );
}
