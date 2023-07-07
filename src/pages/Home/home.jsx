import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/Footer";
import cover from "../../images/BgHome.png";
import CardHome from "../../components/Card/CardHome";
import data from "../../db";
import "./home.scss";

export default function index() {
  return (
    <div>
      <Header />
      <main>
        <div className="cover-home"></div>
        <section className="section-home">
          <div className="section-home_img">
            <img src={cover} className="coverHome" alt="Image de site" />
            <span className="image-text">
              Chez vous, <br />
              partout et ailleurs{" "}
            </span>
          </div>
          <main className="card-container">
            <div className="card-container_card">
              {data.map((item) => (
                <CardHome key={item.id} id={item.id} title={item.title} />
              ))}
            </div>
          </main>
        </section>
      </main>
      <Footer />
    </div>
  );
}
