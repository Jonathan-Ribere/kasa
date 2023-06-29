import React from "react";
import Header from "../../components/Header/index";
import cover from "../../images/imageHome.svg";
import CardHome from "../../components/Card/CardHome";
import data from "../../db";

export default function index() {
  return (
    <div>
      <Header />
      <main>
        <div className="cover-home">
          <img src={cover} className="" alt="Image de site" />
        </div>
        <section className="section-home">
          {data.map((item) => (
            <CardHome key={item.id} title={item.title} />
          ))}
        </section>
      </main>
    </div>
  );
}
