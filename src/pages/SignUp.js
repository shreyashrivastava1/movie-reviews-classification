import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import BE_3 from "../components/BE_3";
import Header from "../components/Header";
import VerticallyCenteredModal from "../components/VerticallyCenteredModal";

const Signup = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // Store error/success messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setModalMessage("Signup successful! Welcome to MovieMeter 🎬");
      setModalShow(true);
    } catch (error) {
      setModalMessage(error.message);
      setModalShow(true);
    }
  };

  const handleClose = () => {
    setModalShow(false);
    if (modalMessage.includes("successful!")) {
      navigate("/"); // Navigate only on successful signup
    }
  };

  return (
    <div className="min-h-screen w-full bg-black font-poppins text-white flex flex-col items-center justify-center px-4">
      <BE_3 />

      <section className="flex flex-col items-center justify-center w-full gap-8 z-10">
        <Header />
        <input
          className="w-80 px-4 py-2 rounded-lg border border-pink-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:shadow-pink-500/50 transition duration-300 neon-glow"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-80 px-4 py-2 rounded-lg border border-pink-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:shadow-pink-500/50 transition duration-300 neon-glow"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="px-6 py-2 text-lg font-semibold bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-md neon-button transition"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </section>

      <VerticallyCenteredModal
        show={modalShow}
        onHide={handleClose}
        message={modalMessage}
      />
    </div>
  );
};

export default Signup;
