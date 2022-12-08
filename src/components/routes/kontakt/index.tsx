import React, { useEffect } from "react";
import Map from "../kontakt/map";
import "./kontakt.scss";
import MapImage from "../../../assets/images/map.png";
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
    </div>
  );
}
