import React from "react";
import { FaUser } from 'react-icons/fa';

export default function NavBar() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-secondary-light dark:bg-secondary-dark shadow-md p-2 flex justify-between items-center">
        
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="/BrandLogo.svg"
            className="h-9 w-8"
          />
        </div>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="bg-primary-dark text-white dark:bg-primary-light dark:text-black flex items-center gap-1 text-xs px-4 py-1.5 font-bold rounded-lg text-white cursor-pointer">
            <FaUser /> {/* icon */}
            Sign in
          </button>
        </div>

      </nav>
    </>
  );
}
