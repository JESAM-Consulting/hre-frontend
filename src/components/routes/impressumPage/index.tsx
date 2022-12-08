import React, { useEffect } from "react";
import "./impressumPage.scss";
export default function ImpressumPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="impressum-page-banner">
        <div className="container-md-2">
          <h1>Impressum</h1>
          <div className="child-text-style">
            <p>Verantwortlich</p>
            <p>Hansa Real Estate GmbH</p>
            <p>Hohentorsheerstr. 49/51</p>
            <p>28199 Bremen</p>
            <p>Telefon:</p>
            <p>0421 / 38 87 247-0</p>
            <p>E-Mail:</p>
            <p>info@hre-immobilien.de</p>
          </div>
          <div className="text-style">
            <p>Rechtsform: Gesellschaft mit beschränkter Haftung </p>
            <p>
              Aufsichtsbehörde: Die Senatorin für Wirtschaft, Arbeit und Europa,
              Abschnitt 500 Gewerbeangelegenheiten
            </p>
            <p>Registerart: Handelsregister</p>
            <p>Registergericht: Amtsgericht Bremen</p>
            <p>Registernummer: HRB 38115 HB</p>
            <p>
              Gewerbeerlaubnis nach § 34C der Gewerbeordnung erteilt durch Die
              Senatorin für Wirtschaft, Arbeit und Europa
            </p>
            <p>
              Die Hansa Real Estate GmbH wird vertreten durch die die
              Geschäftsführer: Dominik Gröne und Timo Czehowsky
            </p>
          </div>
          <div className="text-style">
            <p>
              Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO: Die
              Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit, die Sie unter
            </p>
            <p>
              {" "}
              ec.europa.eu/consumers/odr/ finden. Darüber hinaus nimmt unser
              Betrieb an einem Verbraucherstreitigkeitsverfahren nicht teil.
            </p>
          </div>
          <div className="text-style">
            <p>Bitte beachten Sie auch unsere Datenschutzerklärung.</p>
            <p>Kontakt:</p>
            <p>Hansa Real Estate GmbH</p>
            <p>Hohentorsheerstr. 49/51</p>
            <p>28199 Bremen</p>
          </div>
          <div className="text-style">
            <p>Telefon:</p>
            <p>0421 / 38 87 247-0</p>
          </div>
          <div className="text-style">
            <p>E-Mail:</p>
            <p>info@hre-immobilien.de</p>
            <p>Registereintrag:</p>
            <p>HRB 38115 HB</p>
            <p>Umsatzsteuer-ID:</p>
            <p>DE353660244</p>
          </div>
        </div>
      </div>
    </div>
  );
}
