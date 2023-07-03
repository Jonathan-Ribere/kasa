import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <div className="header-logo_svg">
            <img src={logo} className="" alt="logo" />
          </div>
        </Link>
      </div>

      <nav className="header-lien color_red">
        <div className="divLien lien1">
        <Link to="/" className="header-lien_text">
          ACCUEIL
        </Link>

        </div>

        <div className="divLien lien2">

        <Link to="/apropos" className="">
          A PROPOS
        </Link>
        </div>
      </nav>
    </div>
  );
}
