import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import "./ficheLogement.scss";
import data from "../../db";

export default function FicheLogement(props) {
  // Récupérer l'ID à partir de l'URL
  const { id } = useParams();

  // Rechercher l'objet correspondant à l'ID dans le tableau de données
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <div>Ce logement n'existe pas.</div>;
  }

  return (
    <div>
      <Header />
      <div className="main">
        <div className="img">image</div>
        <div className="info">
          <div className="info-global">
            <h1 className="info-global_h1">{logement.title}</h1>
            <p className="info-global_region">{logement.location}</p>
            <span className="tag">
              {logement.tags.map((tag, index) => (
                <div key={index} className="tag-txt">
                  {tag}
                </div>
              ))}
            </span>
          </div>
          <div className="user">
            <div className="user-etoile">etoiles</div>
            <div className="user-info">
              <div className="user-info_name">{logement.host.name}</div>
              <div className="user-info_pic">{logement.host.picture}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
