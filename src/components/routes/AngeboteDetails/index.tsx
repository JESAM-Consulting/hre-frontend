import React, { useState } from "react";
import "./AngeboteDetails.scss";
import HreLgImage from "../../../assets/images/hre-lg.png";
import QaIcons from "../../../assets/images/qa-icons.svg";
import Icons1 from "../../../assets/images/h1.svg";
import Icons2 from "../../../assets/images/h2.svg";
import Icons3 from "../../../assets/images/h3.svg";
import Icons4 from "../../../assets/images/h4.svg";
import AngeboteDetailsModal from "./AngeboteDetailsModal";

export default function AngeboteDetails() {
  const [texthidden, setTexthidden] = useState(false);
  const [ modalOpen , setModalOpen ] = useState(false);

  return (
    <div>
      <div className="angebote-details-banner">
        <div className="right-alignment-image">
          <img src={HreLgImage} alt="HreLgImage" />
        </div>
      </div>
      <div className="container-md-5">
        <div className="angebote-details-all-content-alignment">
          <div className="section-content-alignment">
            <h1>Energieausweis</h1>
            <p>
              Sie möchten eine Immobilie kaufen oder verkaufen? Dann benötigen
              Sie einen Energieausweis. Hier können Sie Ihren Bedarfs- oder
              Verbrauchsausweis ganz leicht online erstellen. Einfach Daten
              eingeben und nach wenigen Minuten erhalten Sie Ihren persönlichen
              Energieausweis per E-Mail.
            </p>
            <button onClick={()=> setModalOpen(!modalOpen)}>Jetzt Verbrauchsausweis bestellen</button>
          </div>
          <div className="warum-details-all-content-alignment">
            <h2>Warum sollte ich hier den Energieausweis bestellen?</h2>
            <p>Das sind Ihre Vorteile:</p>
            <ol>
              <li>einfache Erstellung und sofortige Verfügbarkeit</li>
              <li>
                rechtsgültiger Energieausweis nach dem GEG 2020
                (Gebäudeenergiegesetz)
              </li>
              <li>PDF-Vorschau Ihres Energieausweises</li>
              <li>
                Abbildung des Gebäudes im Energieausweis möglich – einfach Foto
                hochladen
              </li>
              <li>
                inklusive Registrierung des Energieausweises beim DIBt
                (Deutsches Institut für Bautechnik)
              </li>
              <li>inklusive Auflistung von Verbesserungsmaßnahmen</li>
              <li>telefonischer Support bei Fragen</li>
              <li>hohe Ersparnis gegenüber der Erstellung vor Ort</li>
            </ol>
          </div>
          <div className="qa-all-details-content-alignment">
            <div className="first-title">
              <h5>Q&A</h5>
            </div>
            <div>
              <div className="qa-main-section">
                <div
                  className="qa-header"
                  onClick={() => setTexthidden(!texthidden)}
                >
                  <h4>Tex Question</h4>
                  <img
                    className={
                      texthidden ? "iamge-rotate-animation" : "image-rotate"
                    }
                    src={QaIcons}
                    alt="QaIcons"
                  />
                </div>
                <div
                  className={
                    texthidden ? "qa-body answer-show" : "qa-body answer-hidden"
                  }
                >
                  <p>
                    Lorem ipsum dolor sit amet. Cum laudantium quia rem omnis
                    libero est dicta tempore est placeat dolor et impedit
                    voluptas et aperiam aliquam aut sint ratione. Qui rerum
                    distinctio qui dignissimos aliquam vel nobis maxime sed
                    molestiae placeat qui ullam provident non iste mollitia nam
                    fugiat rerum? Qui voluptatem harum aut quae quibusdam qui
                    maxime perspiciatis sed esse fugiat. Et quod aliquid sit
                    repellat quasi qui delectus saepe in natus consequatur vel
                    soluta autem aut quos rerum.
                  </p>
                </div>
              </div>
              <div
                className={
                  texthidden ? "qa-line qa-line-full-width" : "qa-line"
                }
              ></div>
            </div>
            <div>
              <div className="qa-main-section">
                <div className="qa-header">
                  <h4>Tex Question</h4>
                  <img src={QaIcons} alt="QaIcons" />
                </div>
              </div>
              <div className="qa-line"></div>
            </div>
            <div>
              <div className="qa-main-section">
                <div className="qa-header">
                  <h4>Tex Question</h4>
                  <img src={QaIcons} alt="QaIcons" />
                </div>
              </div>
              <div className="qa-line"></div>
            </div>
            <div>
              <div className="qa-main-section">
                <div className="qa-header">
                  <h4>Tex Question</h4>
                  <img src={QaIcons} alt="QaIcons" />
                </div>
              </div>
              <div className="qa-line"></div>
            </div>
            <div>
              <div className="qa-main-section">
                <div className="qa-header">
                  <h4>Tex Question</h4>
                  <img src={QaIcons} alt="QaIcons" />
                </div>
              </div>
              <div className="qa-line"></div>
            </div>
            <div>
              <div className="qa-main-section">
                <div className="qa-header">
                  <h4>Tex Question</h4>
                  <img src={QaIcons} alt="QaIcons" />
                </div>
              </div>
              <div className="qa-line"></div>
            </div>
          </div>
          <div className="ihr-all-contnet-alignment">
            <h6>Ihr Weg zur persönlichen Beratung</h6>
            <div className="sub-grid">
              <div className="sub-grid-items">
                <p>
                  Sie haben Fragen oder brauchen Unterstützung? Geben Sie
                  einfach die Postleitzahl Ihres Wohnortes oder Ihrer Immobilie
                  ein und Sie werden automatisch auf die Seite Ihres
                  Experten-Teams vor Ort weitergeleitet. Unsere Kolleg*innen
                  freuen sich auf Sie!
                </p>
              </div>
              <div className="sub-grid-items">
                <label>Postleitzahl</label>
                <input type="text" placeholder="PLZ eingeben" />
                <button onClick={()=> setModalOpen(!modalOpen)}>Jetzt Bedarfsausweis bestellen</button>
              </div>
            </div>
          </div>
          <div className="four-box-new-contnet-alignment">
            <div className="items">
              <div className="icon-alignment">
                <img src={Icons1} alt="Icons1" />
              </div>
              <h6>Immobilie verkaufen</h6>
              <p>
                Immobilienverkauf ist Vertrauenssache. Deswegen sind wir in
                Ihrer Nähe und persönlich für Sie da.
              </p>
            </div>
            <div className="items">
              <div className="icon-alignment">
                <img src={Icons2} alt="Icons2" />
              </div>
              <h6>Immobilie finanzieren</h6>
              <p>
                Wir begleiten Sie in Ihre ganz persönliche Wohnzukunft. Mit der
                besten Auswahl aus über 500 Angeboten finden wir gemeinsam die
                passende Finanzierung.
              </p>
            </div>
            <div className="items">
              <div className="icon-alignment">
                <img src={Icons3} alt="Icons3" />
              </div>
              <h6>Unsere Standorte</h6>
              <p>
                Von der Küste bis in die Berge der Sächsischen Schweiz: Wir sind
                an 13 Standorten in den neuen Bundesländern zuhause und in ganz
                Deutschland super vernetzt.
              </p>
            </div>
            <div className="items">
              <div className="icon-alignment">
                <img src={Icons4} alt="Icons4" />
              </div>
              <h6>Immobilie bewerten</h6>
              <p>
                Was ist meine Immobilie wert? Wir beantworten es Ihnen - ganz
                gleich, ob Einfamilienhaus, Eigentumswohnung oder
                Mehrfamilienhaus.
              </p>
            </div>
          </div>
        </div>
      </div>
      {
        modalOpen && (
          <AngeboteDetailsModal/>
        )
      }
    </div>
  );
}
