import React from "react";
import "./herzlichSection.scss";
import HerzlichImage from "../../../../assets/images/herzlich-new1.png";
import CapaImage from "../../../../assets/images/capa.svg";
import { NavLink } from "react-router-dom";

export default function HerzlichSection() {
  return (
    <>
      <div className="herzlich-section-banner">
        <div className="container-sm">
          <div className="mobile-view-some-image-show">
            <img src={CapaImage} alt="CapaImage" />
          </div>
          <div className="grid">
            <div className="grid-items">
              <h1
                className="animate__slideInUp animate__animated wow"
                data-wow-offset="100"
              >
                Herzlich willkommen
              </h1>
              <p
                className="animate__slideInUp animate__animated wow"
                data-wow-offset="100"
              >
                Die Hansa Real Estate GmbH, oder kurz: HRE Immobilien verkauft
                und vermietet Immobilien aller Assetklassen. Unsere Expertise
                geht von Wohnungen, Einfamilien,- Doppel- und Reihenhäusern,
                über Villen, Wohn- und Geschäftshäusern bis hin zu Grundstücken
                und ganzen Neubauprojekten.
              </p>
              <div className="button-alignment">
                <NavLink to="/properties-page">
                  <button
                    className="animate__slideInUp animate__animated wow"
                    data-wow-offset="100"
                  >
                    zu den Angeboten
                  </button>
                </NavLink>
                <NavLink to="/kontakt">
                  <button
                    className="animate__slideInUp animate__animated wow"
                    data-wow-offset="100"
                  >
                    KONTAKT AUFNEHMEN
                  </button>
                </NavLink>
                <a href="https://bewertung.hre-immobilien.de/" target="_blank">
                  <button
                    className="animate__slideInUp animate__animated wow"
                    data-wow-offset="100"
                  >
                    Meine Immobilie Bewerten Lassen
                  </button>
                </a>
              </div>
            </div>
            <div className="grid-items">
              <div className="image-style">
                <img
                  className="animate__slideInRight animate__animated wow"
                  data-wow-offset="100"
                  src={HerzlichImage}
                  alt="HerzlichImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
