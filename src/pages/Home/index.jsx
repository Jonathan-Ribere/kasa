import React from "react";
import Header from "../../components/Header/index";
import cover from "../../images/imageHome.svg";
import CardHome from "../../components/Card/CardHome";

export default function index() {
  return (
    <div>
      <Header />
      <main>
        <div className="cover-home">
        <img src={cover} className="" alt="Image de site" />
        </div>
        <section className="section-home">
            <CardHome />
        </section>
      </main>
    </div>
  );
}
