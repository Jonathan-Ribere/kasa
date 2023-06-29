import React from "react";
import { Link } from "react-router-dom";
import "./CardHome.scss";

export default function CardHome(props) {
  const { id, title } = props;

  return (
    <Link to={`/fiche-logement/${id}`}>
      <div className="card">
        <div className="card-titre">
          <p className="card-titre_text">{title}</p>
        </div>
      </div>
    </Link>
  );
}
