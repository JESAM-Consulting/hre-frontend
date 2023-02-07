import React from "react";
import "./UserWorkFlow.scss";
import Image01 from "../../../../assets/images/01.png";
import Image06 from "../../../../assets/images/006.png";
import NewImgage from "../../../../assets/images/news.png";
import Image008 from "../../../../assets/images/008.png";
import Image009 from "../../../../assets/images/009.png";
import Image0010 from "../../../../assets/images/0010.png";
import WhiteLong from "../../../../assets/images/white-long.svg";
import Blackbottom from "../../../../assets/images/black-bottom.svg";
export default function UserWorkFlow() {
  return (
    <div>
      <div className="user-work-flow-all-content-alignment-for-page">
        <div className="container-md-4">
          <div className="section-title">
            <p>Unser Workflow</p>
          </div>
          <div className="all-grid-content-alignment">
          <div className="grid">
              <div className="grid-items">
               
              </div>
              <div className="grid-items black-border" style={{ height:'180px'}}>
                <div className="down-icon-new">
                    <img src={WhiteLong} alt="WhiteLong"/>
                </div>
                <div className="black-bottom-icon-alignment-one">
                    <img src={Blackbottom} alt="Blackbottom"/>
                </div>
              </div>
              <div className="grid-items">
               
              </div>
            </div>
            <div className="grid">
              <div className="grid-items">
                <div className="box box-right-arrow">
                  <div className="light-box box-height">
                    <div className="image-center-alignment">
                      <img src={Image01} alt="Image01" />
                    </div>
                    <h2>1. Der richtige Kaufpreis</h2>
                    <p>
                      Unser <span>Dipl. Sachverständiger</span> bewertet Ihre
                      Immobilie für Sie und errechnet den aktuellen Verkehrswert
                      - <span>kostenlos</span>, unverbindlich und schnell!
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid-items black-border">
                <div className="round-icon one">I</div>
                <div className="round-icon two">II</div>
              </div>
              <div className="grid-items">
                <div className="box box-left-arrow">
                  <div className="light-box box-height">
                    <div className="image-center-alignment">
                      <img src={Image06} alt="Image06" />
                    </div>
                    <h2>2. Professionelle Fotos</h2>
                    <p>
                      Für Sie schicken wir unseren <span>Profi-Fotografen</span>{" "}
                      los, damit Ihre Immobilie im besten Licht präsentiert wird
                      -selbstverständlich <span>kostenlos!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-items">
                <div className="box box-right-arrow">
                  <div className="light-box box-height">
                    <div className="image-center-alignment-one">
                      <img src={NewImgage} alt="NewImgage" />
                    </div>
                    <h2>3. Beschaffung der Unterlagen</h2>
                    <p>
                      Wir organisieren und prüfen alle relevanten Unterlagen für
                      den Verkauf.
                    </p>
                    <p>
                      Ob es ein Grundbuchauszug ist oder der gesetzlich
                      vorgeschriebene Energieausweis,{" "}
                      <span>wir kümmern uns.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid-items black-border">
                <div className="round-icon one">III</div>
                <div className="round-icon two">IV</div>
              </div>
              <div className="grid-items">
                <div className="box box-left-arrow">
                  <div className="light-box box-height">
                    <div className="image-center-alignment">
                      <img src={Image06} alt="Image06" />
                    </div>
                    <h2>4. Aufbereiten der Grundrisse</h2>
                    <p className="margin-0">
                      Grundrisse sind ein elementares Dokument für Ihre
                      Immobilie.
                    </p>
                    <p className="margin-0">
                      Sollten keine Grundrisse vorliegen, lassen wir Ihre
                      Immobilie für Sie
                    </p>
                    <p className="margin-0">
                      neu vermessen - <br />
                      selbstverständlich kostenlos!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-items">
                <div className="box box-right-arrow">
                  <div className="light-box">
                    <div className="image-center-alignment-two">
                      <img src={Image008} alt="Image008" />
                    </div>
                    <h2>5. Hochwertiges Exposé</h2>

                    <p className="margin-0">
                      Um den <span>bestmöglichen Kaufpreis</span> zu erzielen,
                      erstellen wir ein hochwertiges Expose mit allen wichtigen
                      und gesetzlich vorgeschriebener Informationen!
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid-items black-border">
                <div className="round-icon one">V</div>
                <div className="round-icon two">VI</div>
              </div>
              <div className="grid-items">
                <div className="box box-left-arrow box-740">
                  <div className="light-box">
                    <div className="image-center-alignment">
                      <img src={Image009} alt="Image009" />
                    </div>
                    <h2>6. Darstellung aut allen relevanten Portalen</h2>
                    <p className="margin-0">
                      Wir präsentieren Ihre Immobilie auf allen relevanten
                      Portalen, um die maximale Reichweite und den besten
                      Kaufpreis für Sie zu erzielen -
                    </p>
                    <p className="margin-0">
                      <span>Topplatzierung inklusive.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid-items">
                <div className="box box-right-arrow">
                  <div className="light-box">
                    <div className="image-center-alignment-two">
                      <img src={Image0010} alt="Image0010" />
                    </div>
                    <h2>7. Besichtigungen, Verhandlung und Bonitätsprüfung</h2>
                    <p className="margin-0">
                      Wir übernehmen für Sie selbstverständlich alle
                      Besichtigungen,
                    </p>
                    <p className="margin-0">
                      <span>auch am Wochenende,</span> damit Sie Zeit für andere
                      Dinge haben. Zudem übernehmen wir die Verhandlungen in
                      Ihrem Sinne und prüfen jeden Kunden auf Bonitat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid-items black-border">
                <div className="round-icon one">VII</div>
                <div className="round-icon two">VIII</div>
                <div className="black-bottom-icon-alignment">
                    <img src={Blackbottom} alt="Blackbottom"/>
                </div>
              </div>
              <div className="grid-items">
                <div className="box box-left-arrow box-740">
                  <div className="light-box">
                    <div className="image-center-alignment">
                      <img src={Image009} alt="Image009" />
                    </div>
                    <h2>8. Notar - Erfolg</h2>
                    <p className="margin-0">
                      Wir lassen den Kaufvertrag vorbereiten und prüfen für Sie,
                      dass alles niedergeschrieben wird, was Ihnen wichtig ist.
                      Selbstverständlich begleiten wir Sie auch zum Notar, um
                      den Verkauf erfolgreich und 
                      <span>rechtssicher für Sie
                      abzuschließen!</span>
                    </p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
