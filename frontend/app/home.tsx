import React from "react";
import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function HomePage() {
  return (
    <div className="bg-primary-light dark:bg-primary-dark flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />
      {/* Body */}
      <main className="flex-1 flex items-center justify-center">
        {/* Empty body for now */}
      </main>

      {/* Footer */}
      < Footer />
    </div>
  );
}
