import React from "react";
import Header from "../../components/Header/header";
import cover from "../../images/Apropos.png";
import "./apropos.scss";

export default function Aporpos() {
  return (
    <>
      <Header />
      <main>
        <div className="cover">
          <img src={cover} className="cover-img" alt="Image de site" />
        </div>
      </main>
    </>
  );
}
