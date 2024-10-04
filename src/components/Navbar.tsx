import React from "react";
import { Link } from "react-router-dom";

type NavProps = {};

const Navbar: React.FC<NavProps> = () => {
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
          <li>
            <Link
              to="/get-started"
              className="no-underline text-white hover:text-green-300 transition-colors"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
