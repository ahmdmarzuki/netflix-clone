import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Player from "./pages/player";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User is signed in:", user);
        navigate("/");
      } else {
        console.log("No user is signed in.");
        navigate("/login");
      }
    });
  }, []);

  const customStyle = {
    backgroundColor: "#0f0f0f", // Custom blue color
  };
  return (
    <main style={customStyle} className="min-h-screen">
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </main>
  );
}

export default App;
