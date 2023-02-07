import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./angebotePage.scss";
import PartnerSection from "./partnerSection";
import UserWorkFlow from "./UserWorkFlow";
export default function AngebotePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="angebote-page-banner"></div>
      <div className="wer-sind-all-cotnent-alignment">
        <div className="container-md-2">
          <div className="text-style">
            <h1
              className="animate__slideInUp animate__animated wow"
              data-wow-offset="100"
            >
              Wer sind wir und was zeichnet uns aus?
            </h1>
            <div className="child-text-style">
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
              <p
                className="animate__slideInUp animate__animated wow"
                data-wow-offset="100"
              >
                Professionalität, Dynamik und vor allem: umfangreiches
                Immobilienfachwissen zeichnet unser Unternehmen und unsere
                Mitarbeiter aus. Eine Auswahl hochqualifizierter
                Immobilienexperten steht Ihnen zur Verfügung, denn unser Erfolg
                basiert auf unserer Geschäftsphilosophie: Kundenzufriedenheit,
                ständige Anpassung an den Immobilienmarkt und Verkauf zu fairen,
                marktüblichen Preisen
              </p>
              <p
                className="animate__slideInUp animate__animated wow"
                data-wow-offset="100"
              >
                Wir freuen uns auf Sie!
              </p>
            </div>
            <div className="all-content-alignment">
              <div>
                <p
                  className="animate__slideInUp animate__animated wow"
                  data-wow-offset="100"
                >
                  Dominik Gröne und Timo Czehowsky
                </p>
                <span
                  className="animate__slideInUp animate__animated wow"
                  data-wow-offset="100"
                >
                  Geschäftsführer HRE
                </span>
              </div>
              <div>
                <NavLink to="/kontakt">
                  <button
                    className="animate__slideInUp animate__animated wow"
                    data-wow-offset="100"
                  >
                    kontakt aufnehmen
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PartnerSection />
      <UserWorkFlow/>
    </div>
  );
}
