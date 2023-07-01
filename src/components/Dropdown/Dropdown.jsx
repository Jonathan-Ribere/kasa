import React, { useState } from "react";
import "./dropdown.scss";
import haut from "../../images/icones/arrow_haut.png";
import bas from "../../images/icones/arrow_bas.png";

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <h2>{props.titre}</h2>
        <img src={isOpen ? haut : bas} alt="Flèche" className="arrow" />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {props.isList ? (
            props.content.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <p>{props.content}</p>
          )}
        </ul>
      )}
    </div>
  );
}
