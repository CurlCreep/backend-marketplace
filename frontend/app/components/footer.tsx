import React from "react";

export default function Footer() {
  return (
    <>
        {/* Footer */}
        <footer className="bg-secondary-light dark:bg-secondary-dark text-[#8d8d8d] dark:text-[#b0b0b0] text-center p-4 text-[0.7rem] text-gray-600">
            © {new Date().getFullYear()} ECHO. All rights reserved.
        </footer>
    </>
  );
}