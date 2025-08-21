"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("/api/health")
      .then(res => res.text())
      .then(data => setStatus(data))
      .catch(() => setStatus("Error"));
  }, []);

  return (
    <div>
      <h1>Backend Status: {status}</h1>
    </div>
  );
}
