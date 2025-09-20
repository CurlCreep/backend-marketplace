import React from "react";
import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ToolBar from "./components/toolbar";

export default function HomePage() {
  return (
    <div className="bg-primary-light dark:bg-primary-dark flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />

      <div className="flex flex-1">
        {/* Toolbar */}
        <ToolBar />

        {/* Body */}
        <main className="flex-1 items-center justify-center shadow-lg rounded-lg bg-secondary-light dark:bg-secondary-dark p-2 mr-2">
        </main>
      </div>

      {/* Footer */}
      < Footer />
    </div>
  );
}
