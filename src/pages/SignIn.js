import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import BE_3 from "../components/BE_3";
import Header from "../components/Header";
import VerticallyCenteredModal from "../components/VerticallyCenteredModal";

const SignIn = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email.trim() || !password.trim()) {
      setModalMessage("⚠️ Please enter both email and password!");
      setModalShow(true);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setModalMessage("✅ Sign in successful! Welcome to MovieMeter 🎬");
      setModalShow(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "❌ Invalid email format!";
          break;
        case "auth/user-not-found":
          errorMessage = "❌ No account found. Please sign up first!";
          break;
        case "auth/wrong-password":
          errorMessage = "❌ Incorrect password. Try again!";
          break;
        default:
          errorMessage = "❌ Login failed. Please try again.";
      }
      setModalMessage(errorMessage);
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
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <div
          onClick={() => navigate("/signup")}
          className="font-bold neon-glow mb-6 tracking-wide font-poppins movie-logo cursor-pointer hover:underline"
        >
          Don't have an account? <span className="text-pink-400">Sign Up</span>
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

export default SignIn;
