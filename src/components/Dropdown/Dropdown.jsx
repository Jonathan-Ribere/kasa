/* Composant "Dropdown" : Affiche un menu déroulant avec un titre et une flèche pour
 l'ouvrir ou le fermer. */

import React, { useState } from "react";
import "./dropdown.scss";
import haut from "../../images/icones/arrow_haut.png";
import bas from "../../images/icones/arrow_bas.png";

export default function Dropdown(props) {
  /*hook d'état useState pour créer une variable isOpen
   qui gère l'état de l'ouverture ou de la fermeture du menu déroulant */
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <h2>{props.titre}</h2>

        {/** une image représentant une flèche vers le haut ou vers le bas en fonction de l'état
        de la variable isOpen. Si isOpen est true, l'image "haut" sera affichée, sinon l'image "bas"
        sera affichée */}
        <img src={isOpen ? haut : bas} alt="Flèche" className="arrow" />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {/** Si props.isList est true, le contenu est considéré comme une liste */}
          {props.isList
            ? props.content.map((item, index) => <li key={index}>{item}</li>)
            : {
                /** Sinon, le contenu est affiché dans une balise <p> */
              }(<p>{props.content}</p>)}
        </ul>
      )}
    </div>
  );
}
