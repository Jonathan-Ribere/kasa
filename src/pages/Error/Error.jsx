import React from "react";
import Header from "../../components/Header/header";
import { Link } from "react-router-dom";
import "./error.scss";

export default function Error() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="section-h1">
            <h1 className="section-h1_txt">404</h1>
          </div>
          <div className="section-p">
            <p className="section-p_txt">
              Oups! La page que vous demandez n'existe pas.
            </p>
          </div>
          <div className="divLienError">
            <Link to="/" className="section-lien">
              <p className="section-lien_txt">
                Retourner sur la page d’accueil
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
