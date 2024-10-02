import React from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import "./App.css";
import Card from "./components/card";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
// Main app, router logic here :)
function App() {
  return (
    <Router>
      <Routes>
        {/* Tap To Order Screen */}
        <Route path="/" element={<Home />} />
        {/* Menu */}
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
