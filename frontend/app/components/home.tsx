import React from "react";
import { FaUser } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-2 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            // alt="Brand Logo"
            className="h-8 w-8"
          />
        </div>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="flex items-center gap-1 text-xs px-4 py-1.5 font-bold rounded-lg bg-[#D60017] text-white cursor-pointer">
            <FaUser /> {/* icon */}
            Sign in
          </button>
        </div>
      </nav>

      {/* Body */}
      <main className="flex-1 flex items-center justify-center">
        {/* Empty body for now */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </footer>
    </div>
  );
}
