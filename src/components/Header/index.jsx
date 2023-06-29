import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <div className="header-logo_svg">
          <img src={logo} className="" alt="logo" />
        </div>
      </div>

      <nav className="header-lien color_red">
        <Link to="/" className="header-lien_text">ACCUEIL</Link>
        <Link to="/apropos" className="">A PROPOS</Link>
      </nav>
    </div>
  );
}