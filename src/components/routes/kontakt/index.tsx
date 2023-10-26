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
                Geld, der zu einer erfolgreichen Vermittlung durch uns führt!<br/>
                Beispiel: Verkaufspreis einer Immobilie für 500.000,-
                € bedeutet für Sie 4.500,- €!<br/><br/></p>
                <h6>Folgende Informationen benötigen wir:  </h6>
                <ul>
                     <li>  Anschrift der zu verkaufenden / vermietenden Immobilie</li> 
                    <li>    Anschrift des Eigentümers der Immobilie</li>
                   <li>  Ihren eigenen Namen und Ihre Anschrift Sie helfen uns, wenn Sie uns möglichst umfassend informieren.</li>
                      <li>Sobald Sie uns einen Brief oder eine E-Mail mit Ihrer Empfehlung schreiben, erhalten Sie von uns  eine schriftlicheBestätigung.</li> 
                    <li>   Natürlich können Sie uns auch jederzeit telefonisch Ihre Tipp-Empfehlung mitteilen.</li> 
                    <li>   Vorab prüfen wir, ob uns das Objekt noch nicht bekannt ist und nehmen anschließend Kontakt mit dem benannten Eigentümer auf.
                        Die Eigentümer müssen informiert worden sein und Ihnen gegenüber unserer Kontaktaufnahme zugestimmt haben</li> 
                     <li>  Erteilt uns der Eigentümer einen Auftrag zur Vermarktung seines Objektes, informieren wir Sie umgehend und beginnen unverzüglich mit unserer Arbeit.</li> 
                   <li>    Die Immobilie wird durch unsere Maklertätigkeit mit einem rechtswirksamen und notariellen Kaufvertrag provisionspflichtig verkauft.</li> 
                 <li>  Der Käufer und/oder Verkäufer zahlt seine Provision an uns.</li>   
                   <li>   Wir sind am Ziel und Sie dürfen sich über Ihre üppige TIPP-Provision freuen.</li>
                   <li>  Sie erhalten 15% der gesamten an uns gezahlten Nettoprovision* (ohne MwSt.)</li> <br/> 
                </ul>
              <span>
              
                *Voraussetzungen: Die benannte Immobilie darf uns noch nicht bekannt sein und wird von uns nach dem erteilten Maklerauftrag
                 des Eigentümers erfolgreich provisionspflichtig verkauft. Die Tippgeberprovision ist verdient und fällig mit Abschluss 
                 des rechtswirksamen notariellen Kaufvertrages und nach Eingang der Vermittlungs-/Nachweisprovision des Käufers und/oder 
                 Verkäufers bei uns. Der Empfehlungsgeber muss volljährig sein. Wir behalten uns das Recht vor, die Vermarktung von benannten 
                 Immobilien jederzeit ohne Angaben von Gründen abzulehnen oder zu beenden. Der Rechtsweg ist ausgeschlossen.<br/>
                **Beispielrechnung auf Basis der ortsüblichen Maklerprovision in Bremen von 6% (netto) des notariellen Kaufpreises. 
                Der Provisionssatz kann abweichen und ist nicht garantiert. Die Höhe richtet sich allein nach dem von uns mit dem 
                Immobilienkäufer und/oder -verkäufer vereinbarten Provisionssatz.

              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
