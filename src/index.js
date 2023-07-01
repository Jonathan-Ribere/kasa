import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.scss";
import Home from "./pages/Home/home";
import Apropos from "./pages/Apropos/apropos";
import FicheLogement from "./pages/FicheLogement/FicheLogement";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
