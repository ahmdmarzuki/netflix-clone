import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Player from "./pages/player";

function App() {
  const customStyle = {
    backgroundColor: "#0f0f0f", // Custom blue color
  };
  return (
    <main style={customStyle} className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </main>
  );
}

export default App;
