import React from "react";
import "./expertiseSection.scss";
import ExpartImage from "../../../../assets/images/expert-banner2.png";
import HRELogo from "../../../../assets/logo/HRE_WHITE.svg";

export default function ExpertiseSection() {
  return (
    <div>
      <div className="expretise-section-all-content-alignment">
        <div className="grid">
          <div className="grid-items">
            <div className="all-text-style-alignment">
              <div className="text-style">
                <h2
                  className="animate__slideInUp animate__animated wow"
                  data-wow-offset="100"
                >
                  Expertise
                </h2>
                <div>
                  <p
                    className="animate__slideInUp animate__animated wow"
                    data-wow-offset="100"
                  >
                    Durch eine gründliche Analyse des aktuellen
                    Immobilienmarktes von unserem Dipl. Sachverständigen
                    garantieren wir einen angemessenen, realistischen und fairen
                    Preis für Ihre Immobilie.
                  </p>
                </div>
              </div>
              <div className="text-style">
                <h2
                  className="animate__slideInUp animate__animated wow"
                  data-wow-offset="100"
                >
                  Reichweite
                </h2>
                <div>
                  <p
                    className="animate__slideInUp animate__animated wow"
                    data-wow-offset="100"
                  >
                    Maximale Reichweite ist der Schlüssel zu einem erfolgreichen
                    Verkauf: Mit uns erreicht Ihr Objekt tausende potentieller
                    Käufer.
                  </p>
                </div>
              </div>
              <div className="text-style">
                <h2
                  className="animate__slideInUp animate__animated wow"
                  data-wow-offset="100"
                >
                  Professionelle Bilder
                </h2>
                <div>
                  <p
                    className="animate__slideInUp animate__animated wow"
                    data-wow-offset="100"
                  >
                    Zeigen Sie Ihre Immobilie von der Schokoladen-Seite: Mit
                    unserem auf Immobilien spezialisierten Profi-Fotografen
                    rücken wir jede Immobilie garantiert ins rechte Licht.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-items">
            <div className="image-style">
              <img
                className="animate__slideInRight animate__animated wow"
                data-wow-offset="100"
                src={ExpartImage}
                alt="ExpartImage"
              />
              <div className="hrelogopostion ">

               <img
                    src={HRELogo}
                    alt="HerzlichImage"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
