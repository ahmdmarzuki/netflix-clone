import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const customStyle = {
    backgroundColor: "#0f0f0f", // Custom blue color
  };
  return (
    <main style={customStyle} className="min-h-screen">
      <Navbar />
    </main>
  );
}

export default App;
