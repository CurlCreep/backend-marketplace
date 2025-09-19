import React from "react";
import { HiHome } from "react-icons/hi";

export default function ToolBar() {
  return (
    <>
        {/* Toolbar */}
        <div className="flex flex-col bg-secondary-light dark:bg-secondary-dark shadow-lg p-4 rounded-lg w-fit mx-2 items-center space-y-2">
            {/* Home Button */}
            <button className="bg-primary text-black dark:text-white p-2 rounded-sm cursor-pointer hover:scale-125 transition-transform duration-150">
                <HiHome size={18} />
            </button>

            {/* Search Button */}
            <button className="bg-primary text-black dark:text-white p-2 rounded-sm cursor-pointer hover:scale-125 transition-transform duration-150">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <hr className="w-full border-t border-gray-400 dark:border-gray-400 my-2" />
        </div>
    </>
  );
}