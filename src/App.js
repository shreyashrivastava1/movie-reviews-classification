import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Ensure the path is correct
import Signup from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./AuthContext";
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
