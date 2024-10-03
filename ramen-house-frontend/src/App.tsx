import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./styles/globals.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MenuItem from "./pages/MenuItem";

function App() {
  return (
    <Router>
      <Routes>
        {/* Tap To Order Screen */}
        <Route path="/" element={<Home imageUrl="/images/HomePageImage.jpg" />} />
        {/* Menu */}
        <Route path="/menu" element={<Menu />} />
        {/* Customizing Item / Order*/}
        <Route path="/menu-item" element={<MenuItem />} />
      </Routes>
    </Router>
  );
}

export default App;
