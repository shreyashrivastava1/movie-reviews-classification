import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-6 right-8 flex space-x-4 z-50">
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
    </nav>
  );
};

export default Navbar;
