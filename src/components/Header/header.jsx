import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import logo from "../../images/logo.svg";

export default function Header() {
  const location = useLocation();

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
        <div className={`divLien lien1 ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/" className="header-lien_text">
            ACCUEIL
          </Link>
        </div>

        <div className={`divLien lien2 ${location.pathname === '/apropos' ? 'active' : ''}`}>
          <Link to="/apropos" className="">
            A PROPOS
          </Link>
        </div>
      </nav>
    </div>
  );
}
