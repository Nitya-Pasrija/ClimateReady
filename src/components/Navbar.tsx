import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

type NavProps = {};

const Navbar: React.FC<NavProps> = () => {
  const [user, setUser] = useState<{ name: string | null; email: string | null } | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({ name: user.displayName, email: user.email });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/"); 
  };

  return (
    <nav className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg">
      <div className="max-w-[1100px] mx-auto px-4 h-20 flex justify-between items-center">
        <Link
          to="/"
          className="no-underline hover:text-green-200 text-lg sm:text-xl font-bold text-white"
        >
          Climate Ready
        </Link>
        <ul className="flex gap-4 sm:gap-6 font-semibold text-xs sm:text-sm">
          <li>
            <Link
              to="/fellowship"
              className="no-underline text-white hover:text-green-300 transition-colors"
            >
              Fellowship
            </Link>
          </li>
          <li>
            <Link
              to="/vision"
              className="no-underline text-white hover:text-green-300 transition-colors"
            >
              Vision
            </Link>
          </li>
          <li>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSc9VA2JyrzqvZHdZlwZ3b4yiUt85XzurM7heMzc5WdNQqLBkg/viewform?pli=1"
              className="no-underline text-white hover:text-green-300 transition-colors"
            >
              Volunteer
            </Link>
          </li>
          {user ? (
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="no-underline text-white hover:text-green-300 transition-colors"
              >
                Welcome, {user.name || "User"}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white text-black rounded-lg shadow-lg">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-black hover:bg-green-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 w-full text-left hover:bg-green-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li>
              <Link
                to="/get-started"
                className="no-underline text-white hover:text-green-300 transition-colors"
              >
                Get Started
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
