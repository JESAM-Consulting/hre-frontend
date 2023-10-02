import React from "react";
import "./informationSection.scss";
import CardImage from "../../../../assets/images/card-image 5.svg";
import CardImage1 from "../../../../assets/images/card-image1.svg";
import CardImage2 from "../../../../assets/images/card-image2.svg";
import { NavLink } from "react-router-dom";
export default function InformationSection() {
  return (
    <div>
      <div className="home-information-all-section-content-alignment">
        <div className="grid">
          <div className="grid-items">
            <div className="card-image">
              <img src={CardImage} alt="CardImage" />
            </div>
            <div className="card-details-content-alignment">
              <div
                className="card-spacing-alignment animate__slideInUp animate__animated wow "
                data-wow-offset="100"
              >
                <h2>Verkauf</h2>
                <div className="child-all-content-alignment">
                  <p>
                    Mit HRE faire Preise erzielen und Zeit gewinnen, um diese
                    für die Dinge zu haben, die Sie wirklich gern tun.
                  </p>
                  <p>
                    Unsere Dienstleistung umfasst den gesamten Verkaufsprozess.
                    Von der kostenlosen Einwertung durch einen Dipl.
                    Sachverständigen bis zur finalen Unterschrift unter dem
                    Notarvertrag. Sie können auf uns zählen!
                  </p>
                  <p>
                    Zahlreiche Eigentümer und Bauträger haben ihre Immobilie
                    oder ihr Projekt mit unserer Hilfe schnell, diskret und
                    erfolgreich vermarktet. Unsere erfahrenen Makler freuen sich
                    darauf, den Vermarktungsprozess für Sie so reibungslos wie
                    möglich zu gestalten.
                  </p>
                </div>
                <div className="button-alignment">
                  <NavLink to="/angebote-page">
                    <button>MEhr erfahren</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-items">
            <div className="card-image">
              <img src={CardImage1} alt="CardImage1" />
            </div>
            <div className="card-details-content-alignment">
              <div
                className="card-spacing-alignment animate__slideInUp animate__animated wow"
                data-wow-offset="100"
              >
                <h2>Vermietung</h2>
                <div className="child-all-content-alignment">
                  <p>
                    Sie möchten von Mieterwechseln so wenig wie möglich
                    mitbekommen und bei jeder Neuvermietung die aktuelle
                    ortsübliche Miete erzielen?
                  </p>
                  <p>
                    Wir bekommen den Auszug des Mieters mitgeteilt und Sie hören
                    erst wieder von uns, wenn Ihre Wohnung schnell und
                    nachhaltig neuvermietet ist. Abnahmen und Übergaben
                    übernehmen wir selbstverständlich auch.
                  </p>
                  <p>
                    Sprechen Sie uns noch heute an, um Leerstand zu vermeiden.
                  </p>
                </div>
                <div className="button-alignment">
                  <NavLink to="/kontakt">
                    <button>kontakt</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-items">
            <div className="card-image">
              <img src={CardImage2} alt="CardImage2" />
            </div>
            <div className="card-details-content-alignment">
              <div
                className="card-spacing-alignment animate__slideInUp animate__animated wow"
                data-wow-offset="100"
              >
                <h2>Bewertung</h2>
                <div className="child-all-content-alignment">
                  <p>
                    Sie interessiert der wirkliche Wert Ihrer Immobilie, möchten
                    sich aber das Geld für einen Sachverständigen sparen?
                  </p>
                  <p>
                    Unser Dipl. Sachverständiger liefert Ihnen eine kostenlose
                    fundierte Bewertung Ihrer Immobilie.
                  </p>
                  <p>
                    Wenn es sich bei der Immobilie um ein Grundstück handeln
                    sollte, prüft unser Projektexperte die Bebaubarkeit des
                    Grundstücks, um Ihnen einen marktgerechten Grundstückswert
                    zu ermitteln.
                  </p>
                  <p>
                    Vereinbaren Sie noch heute einen unverbindlichen
                    Bewertungstermin für Ihre Immobilie.
                  </p>
                </div>
                <div className="button-alignment">
                  <a
                    href="https://bewertung.hre-immobilien.de/"
                    target="_blank"
                  >
                    <button>Was ist meine Immobilie Wert?</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
