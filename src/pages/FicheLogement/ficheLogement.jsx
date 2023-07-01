import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/header';
import './ficheLogement.scss';
import data from '../../db';

import flecheD from '../../images/icones/flecheDroite.png';
import flecheG from '../../images/icones/flecheGauche.png';

import etoileRed from '../../images/icones/etoileRed.png';
import etoileGris from '../../images/icones/etoileGris.png';

export default function FicheLogement(props) {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <div>Ce logement n'existe pas.</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex > 0 ? prevIndex - 1 : logement.pictures.length - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };
  
  return (
    <div>
      <Header />
      <div className="main">
        <div className="carousel">
          {logement.pictures.length > 1 && (
            <button onClick={handlePrevious}>
              <img src={flecheG} alt="Flèche gauche" />
            </button>
          )}

          <img src={logement.pictures[currentIndex]} alt="image" />

          {logement.pictures.length > 1 && (
            <button onClick={handleNext}>
              <img src={flecheD} alt="Flèche droite" />
            </button>
          )}
        </div>

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
            <div className="user-etoile">
              {Array.from({ length: 5 }, (_, index) => (
                <img
                  key={index}
                  src={index < logement.rating ? etoileRed : etoileGris}
                  alt="étoile"
                />
              ))}
            </div>
            <div className="user-info">
              <div className="user-info_name">{logement.host.name}</div>
              <img
                src={logement.host.picture}
                alt="Profile Picture"
                className="user-info_pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
