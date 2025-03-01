import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import BE_3 from "../components/BE_3";
import Header from "../components/Header";
import VerticallyCenteredModal from "../components/VerticallyCenteredModal";

const Signup = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email.trim() || !password.trim()) {
      setModalMessage("⚠️ Please enter both email and password!");
      setModalShow(true);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setModalMessage("✅ Signup successful! Welcome to MovieMeter 🎬");
      setModalShow(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "❌ Email is already registered. Try signing in.";
          break;
        case "auth/invalid-email":
          errorMessage = "❌ Invalid email format!";
          break;
        case "auth/weak-password":
          errorMessage = "❌ Password should be at least 6 characters.";
          break;
        default:
          errorMessage = "❌ Signup failed. Please try again.";
      }
      setModalMessage(errorMessage);
      setModalShow(true);
    }
  };
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setModalMessage("✅ Google Sign-Up successful! Welcome to MovieMeter 🎬");
      setModalShow(true);
    } catch (error) {
      setModalMessage("❌ Google Sign-Up failed. Please try again.");
      setModalShow(true);
    }
  };

  const handleClose = () => {
    setModalShow(false);
    if (modalMessage.includes("successful")) {
      navigate("/");
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-80 px-4 py-2 rounded-lg border border-pink-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:shadow-pink-500/50 transition duration-300 neon-glow"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="px-6 py-2 text-lg font-semibold bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-md neon-button transition"
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <button
          className="px-5 py-2 text-white border border-red-500 rounded-lg hover:bg-red-500 transition"
          onClick={handleGoogleSignup}
        >
          Sign Up with Google
        </button>
        <div
          onClick={() => navigate("/signin")}
          className="font-bold neon-glow mb-6 tracking-wide font-poppins movie-logo cursor-pointer hover:underline"
        >
          Have an account? <span className="text-pink-400">Sign In</span>
        </div>
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
