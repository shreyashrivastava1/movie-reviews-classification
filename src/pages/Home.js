import React, { useEffect } from "react";
import { useState } from "react";
import BE_3 from "../components/BE_3";
import Header from "../components/Header";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import Navbar from "../components/Navbar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieName, setMovieName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log("User:", auth.currentUser);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/signin");
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const analyseSentiment = async () => {
    if (!text.trim()) return;
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text.trim() }),
      });

      if (!response.ok) throw new Error("Failed to fetch sentiment");

      const data = await response.json();
      //setSentiment(data.sentiment);
      setSentiment(data[0]?.label || "Unknown");
    } catch (error) {
      console.error("Error:", error);
      setSentiment("Error analyzing sentiment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black font-poppins text-white flex flex-col items-center justify-center px-4">
      <Navbar />
      <BE_3 />

      <section className="flex flex-col items-center justify-center w-full gap-8 z-10">
        <Header />
        <div className="flex flex-col items-center gap-6 w-full max-w-lg">
          <input
            className="w-80 px-4 py-2 rounded-lg border border-pink-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition neon-glow"
            type="text"
            placeholder="Enter Movie Name"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <InputField text={text} setText={setText} />
          <SubmitButton
            analyseSentiment={analyseSentiment}
            disabled={loading}
          />
        </div>
        {loading ? (
          <div className="mt-4 text-lg font-semibold text-yellow-400">
            Analyzing sentiment...
          </div>
        ) : (
          sentiment && (
            <div className="mt-4 text-lg font-semibold text-cyan-400">
              Sentiment:{" "}
              {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
            </div>
          )
        )}
      </section>
    </div>
  );
}
