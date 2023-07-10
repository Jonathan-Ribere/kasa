import React from "react";
import Header from "../../components/Header/header";
import cover from "../../images/Apropos.png";
import "./apropos.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";

export default function Aporpos() {
  return (
    <>
      <Header />
      <main className="mainApropos">
        <div className="cover">
          <img src={cover} className="cover-img" alt="Images de site" />
        </div>
        <section>
          <Dropdown
            titre="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            dropdownClass="dropdown2" 
          />
          <Dropdown
            titre="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            dropdownClass="dropdown2" 
          />
          <Dropdown
            titre="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            dropdownClass="dropdown2" 
          />
          <Dropdown
            titre="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            dropdownClass="dropdown2" 
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
