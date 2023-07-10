import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/Footer";
import "./ficheLogement.scss";
import data from "../../db";
import flecheD from "../../images/icones/flecheDroite.png";
import flecheG from "../../images/icones/flecheGauche.png";
import flecheD1 from "../../images/icones/gaucheGrandFormat.png";
import flecheD2 from "../../images/icones/droitGrandFormat.png";
import etoileRed from "../../images/icones/etoileRed.png";
import etoileGris from "../../images/icones/etoileGris.png";
import Dropdown from "../../components/Dropdown/Dropdown";

export default function ficheLogement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/error" replace={true} />;
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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="main">
        <div className="carousel-container">
          {logement.pictures.length > 1 && (
            <span className="arrow left" onClick={handlePrevious}>
              <img src={isMobile ? flecheG : flecheD1} alt="Flèche gauche" />
            </span>
          )}

          <img
            src={logement.pictures[currentIndex]}
            alt="images"
            className="carousel-img"
          />

          {logement.pictures.length > 1 && (
            <span className="arrow right" onClick={handleNext}>
              <img src={isMobile ? flecheD : flecheD2} alt="Flèche droite" />
            </span>
          )}

          {logement.pictures.length > 1 && (
            <span className="image-counter">
              {currentIndex + 1}/{logement.pictures.length}
            </span>
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
                  className="etoile"
                />
              ))}
            </div>
            <div className="user-info">
              <div className="user-info_name">{logement.host.name}</div>
              <img
                src={logement.host.picture}
                alt="Profile Pictures"
                className="user-info_pic"
              />
            </div>
          </div>
        </div>
        <div className="dropdownContainer">
          <Dropdown
            titre="Description"
            content={logement.description}
            dropdownClass="dropdown"
          />
          <Dropdown
            titre="Équipements"
            content={logement.equipments}
            isList={true}
            dropdownClass="dropdown"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
