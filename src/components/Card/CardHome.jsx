/* Composant "CardHome" : Affiche une carte d'accueil avec un titre et un lien cliquable
vers une fiche de logement spécifique. */

import React from "react";
import { Link } from "react-router-dom";
import "./CardHome.scss";
import data from "../../db";

export default function CardHome(props) {
  const { id, title } = props;
  const logement = data.find((logement) => logement.id === id);
  const cover = logement ? logement.cover : "";

  return (
    <Link to={`/fiche-logement/${id}`}>
      <div className="card">
        <div className="card-titre">
          <img src={cover} alt="Cover" className="card-cover" />
          <p className="card-titre_text">{title}</p>
        </div>
      </div>
    </Link>
  );
}
