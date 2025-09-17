import React from "react";

export default function Footer() {
  return (
    <>
        {/* Footer */}
        <footer className="bg-secondary-light dark:bg-secondary-dark shadow-md dark:text-[#b0b0b0] text-center p-4 text-[0.7rem] text-gray-600 rounded-lg m-2">
            © {new Date().getFullYear()} echo. All rights reserved.
        </footer>
    </>
  );
}