import React, { useEffect } from "react";
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
        <div className="full-page-image">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.3051568839824!2d8.78508889784913!3d53.071596874108664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b129dfc3c65ea9%3A0xa7641d8aa3a95bb5!2sHRE%20Immobilien!5e0!3m2!1sen!2sde!4v1695922977968!5m2!1sen!2sde" 
            width="100%" 
            height="450" 
            style={{border:"0"}} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
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
      <div className="kontak-all-section-content-alignment">
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
