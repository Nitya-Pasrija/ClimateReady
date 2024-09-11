import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaEnvelope } from "react-icons/fa"; // Import Instagram and Mail icons

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-gradient-to-r from-green-400 to-green-600 text-white pt-16 pb-20 shadow-lg">
      <div className="max-w-[700px] px-4 mx-auto">
        <p className="text-center font-bold text-3xl text-white mb-8">
          <NavLink
            to="/"
            className="hover:text-green-200 transition-colors"
          >
            Climate Ready
          </NavLink>
        </p>
        <ul className="flex justify-center gap-8 font-semibold mb-8">
          <li>
            <a
              href="mailto:contact@climateready.org"
              className="text-white hover:text-green-200 transition-colors"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc9VA2JyrzqvZHdZlwZ3b4yiUt85XzurM7heMzc5WdNQqLBkg/viewform?pli=1"
              className="no-underline text-white hover:text-green-200 transition-colors"
            >
              Volunteer
            </a>
          </li>
          <li>
            <NavLink
              to="/fellowship"
              className="no-underline text-white hover:text-green-200 transition-colors"
            >
              Fellowship Program
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vision"
              className="no-underline text-white hover:text-green-200 transition-colors"
            >
              Vision
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.instagram.com/climatereadydelhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-200 transition-colors"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </li>
        </ul>
        <p className="text-center text-sm mb-8">
          Climate Ready is committed to raising awareness and driving action for a sustainable future. Join us in making a difference.
        </p>
        <p className="text-center text-sm">
          © {currentYear} Climate Ready | Empowering Change
        </p>
      </div>
    </footer>
  );
};

export default Footer;
