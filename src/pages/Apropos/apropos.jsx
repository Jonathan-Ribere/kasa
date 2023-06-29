import React, { useState } from "react";
import Header from "../../components/Header/header";
import cover from "../../images/Apropos.png";
import "./apropos.scss";

export default function Aporpos() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <main>
        <div className="cover">
          <img src={cover} className="cover-img" alt="Image de site" />
        </div>
        <section>
        <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        Dropdown
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>ici le text</li>
        
        </ul>
      )}
    </div>
  





        </section>
      </main>
    </>
  );
}
