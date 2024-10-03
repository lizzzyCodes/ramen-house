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
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <Router>
      <Routes>
        {/* Tap To Order Screen */}
        <Route
          path="/"
          element={<Home imageUrl="/images/HomePageImage.jpg" />}
        />
        {/* Menu */}
        <Route path="/menu" element={<Menu />} />
        {/* Customizing Item / Order*/}
        <Route path="/menu-item" element={<MenuItem />} />
        {/* Confirmation and Payment*/}
        <Route path="/payment-confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
