import React, { useEffect } from "react";
import Map from "../kontakt/map";
import "./kontakt.scss";
export default function Kontakt() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="kontak-all-section-content-alignment">
        {/* <div className="map-image">
          <img src={MapImage} alt="MapImage" />
        </div> */}
        <div className="full-page-image">
          <Map
            center={{ lat: 53.071747, lng: 8.785545 }}
            zoom={17}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwyQ2fI1UgcPSJJ8HuYLhVQRFHYpB0iRE"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `415px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className="all-content-style">
          <div className="container-md-2">
            <h1
              className="animate__slideInUp animate__animated wow"
              data-wow-offset="100"
            >
              Ihr Kontakt zu uns
            </h1>
            <div className="child-text-style">
              <p
                className="animate__slideInUp animate__animated wow"
                data-wow-offset="100"
              >
                Haben Sie Fragen zu unserem Angebot, möchten Ihre Immobilie
                unverbindlich bewerten lassen oder verkaufen? Unser kompetentes
                Team ist gerne für Sie da. Füllen Sie einfach das
                Kontaktformular aus, und wir setzen uns zeitnah mit Ihnen in
                Verbindung. Natürlich können Sie uns auch telefonisch erreichen,
                oder Sie besuchen uns direkt vor Ort – wir freuen uns auf Sie!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-md-4">
        <div className="contact-banner-new-phase" id="werden">
          <div className="grid">
            <div className="grid-items"></div>
            <div className="grid-items">
              <h4>Werden Sie Tippgeber</h4>
              <p>
                Werden Sie Tippgeber und erhalten Sie für jeden hergestellten Kontakt
                Geld, der zu einer erfolgreichen Vermittlung durch uns führt!
              </p>
              <span>
                Beispiel: Verkaufspreis einer Immobilie für 500.000,-
                € bedeutet für Sie 3.000,- €!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
