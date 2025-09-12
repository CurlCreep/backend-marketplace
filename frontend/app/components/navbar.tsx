import React from "react";
import { FaUser } from 'react-icons/fa';
import MusicPlayer from '@/app/components/player';

export default function NavBar() {
  return (
    <>
        {/* Navbar */}
        <nav className="bg-secondary-light dark:bg-secondary-dark shadow-md flex justify-between items-center rounded-t-lg py-3 px-8">
            {/* Brand */}
            <div className="flex items-center space-x-2">
                <img
                    src="/BrandLogo.svg"
                    className="h-10 w-10 cursor-pointer"
                />
            </div>

            <MusicPlayer/>

            <div className="space-x-4">
                <button className="bg-primary-dark text-white dark:bg-primary-light dark:text-black flex items-center gap-1 text-xs px-4 py-1.5 font-bold rounded-md cursor-pointer">
                    <FaUser />
                    Sign in
                </button>
            </div>
        </nav>
    </>
  );
}
