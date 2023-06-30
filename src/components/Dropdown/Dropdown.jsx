import React, { useState } from "react";
import "./dropdown.scss";

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
       {props.titre}
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <p>{props.text}</p>
        </ul>
      )}
    </div>
  );
}
