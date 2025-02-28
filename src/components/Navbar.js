import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50 p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <a href="/">
          <h1 className="text-2xl font-bold tracking-wide font-poppins">
            <span className="text-white drop-shadow-[0_0_6px_#4A90E2]">
              Movie
            </span>
            <span className="text-pink-400  drop-shadow-[0_0_6px_#4A90E2]">
              Meter
            </span>{" "}
            🎬
          </h1>
        </a>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white font-semibold">
                Hello, {user.email}!
              </span>
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-white border border-red-500 rounded-lg hover:bg-red-500 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/signin">
                <button className="px-5 py-2 text-white border border-pink-500 rounded-lg hover:bg-pink-500 transition">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-5 py-2 text-white border border-blue-500 rounded-lg hover:bg-blue-500 transition">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
