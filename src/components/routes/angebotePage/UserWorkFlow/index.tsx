import React from "react";
import "./UserWorkFlow.scss";
import Image01 from "../../../../assets/images/01.png";
import Image06 from "../../../../assets/images/Rectangle 139.svg";
import NewImgage from "../../../../assets/images/news.png";
import Image008 from "../../../../assets/images/008.png";
import Image009 from "../../../../assets/images/009.png";
import Image0010 from "../../../../assets/images/0010.png";
import WhiteLong from "../../../../assets/images/white-long.svg";
import Blackbottom from "../../../../assets/images/black-bottom.svg";
import Mobile01 from "../../../../assets/images/mobile01.png";
import Mobile02 from "../../../../assets/images/Rectangle 139.svg";
import Mobile03 from "../../../../assets/images/mobile03.png";
import Mobile04 from "../../../../assets/images/mobile04.png";
import Mobile05 from "../../../../assets/images/mobile05.png";
import Mobile06 from "../../../../assets/images/mobile06.png";
import Mobile07 from "../../../../assets/images/mobile07.png";
import Mobile08 from "../../../../assets/images/mobile08.png";
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
              <div className="grid-items"></div>
              <div
                className="grid-items black-border"
                style={{ height: "180px" }}
              >
                <div className="down-icon-new">
                  <img src={WhiteLong} alt="WhiteLong" />
                </div>
                <div className="black-bottom-icon-alignment-one">
                  <img src={Blackbottom} alt="Blackbottom" />
                </div>
              </div>
              <div className="grid-items"></div>
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
                      Für Sie machen wir hochwertige Fotos, damit Ihre Immobilie
                      im besten Licht präsentiert wird - selbstverständlich
                      kostenlos!
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
                      <img src={Mobile04} alt="Image06" />
                    </div>
                    <h2>4. Aufbereiten der Grundrisse</h2>
                    <p className="margin-0">
                      Grundrisse sind ein elementares Dokument für Ihre
                      Immobilie.
                    </p>
                    <p className="margin-0">
                      Sollten keine Grundrisse vorliegen, sorgen wir dafür, dass
                      Ihre Immobilie neu vermessen wird.
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
                  <img src={Blackbottom} alt="Blackbottom" />
                </div>
              </div>
              <div className="grid-items">
                <div className="box box-left-arrow box-740">
                  <div className="light-box">
                    <div className="image-center-alignment">
                      <img src={Mobile08} alt="Image009" className="Notar" />
                    </div>
                    <h2>8. Notar - Erfolg</h2>
                    <p className="margin-0">
                      Wir lassen den Kaufvertrag vorbereiten und prüfen für Sie,
                      dass alles niedergeschrieben wird, was Ihnen wichtig ist.
                      Selbstverständlich begleiten wir Sie auch zum Notar, um
                      den Verkauf erfolgreich und
                      <span>rechtssicher für Sie abzuschließen!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-view-all-grid-alignment">
            <div className="mobile-grid">
              <div className="mobile-grid-items black-line black-line-height">
                <div className="white-long">
                  <img src={WhiteLong} alt="WhiteLong" />
                </div>
                <div className="moile-dot-first-alignment">
                  <img src={Blackbottom} alt="Blackbottom" />
                </div>
              </div>
              <div className="mobile-grid-items"></div>
            </div>
            <div className="mobile-grid">
              <div className="mobile-grid-items black-line">
                <div className="mobile-black-icon">I</div>
              </div>
              <div className="mobile-grid-items">
                <div className="mobile-border-box">
                  <div className="mobile-light-box first-box">
                    <div className="image-bottom-alignment">
                      <img src={Mobile01} alt="Mobile01" />
                    </div>
                    <h4>1. Der richtige Kaufpreis</h4>
                    <p>
                      Unser <span>Dipl. Sachverständiger</span> bewertet Ihre
                      Immobilie für Sie und errechnet den aktuellen Verkehrswert
                      - kostenlos, unverbindlich und schnell!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-grid">
              <div className="mobile-grid-items black-line">
                <div className="mobile-black-icon">II</div>
              </div>
              <div className="mobile-grid-items">
                <div className="mobile-border-box">
                  <div className="mobile-light-box">
                    <div
                      className="image-bottom-alignment"
                      style={{ margin: "0 0 42px 0" }}
                    >
                      <img src={Mobile02} alt="Mobile02" />
                    </div>
                    <h4>2. Professionelle Fotos</h4>
                    <p style={{ maxWidth: "182px" }}>
                      Für Sie schicken wir unseren <span>Profi-Fotografen</span>{" "}
                      los, damit Ihre Immobilie im besten Licht präsentiert wird
                      -selbstverständlich <span>kostenlos!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-grid">
              <div className="mobile-grid-items black-line">
                <div className="mobile-black-icon">III</div>
              </div>
              <div className="mobile-grid-items">
                <div className="mobile-border-box">
                  <div className="mobile-light-box">
                    <div className="image-bottom-alignment">
                      <img src={Mobile03} alt="Mobile03" />
                    </div>
                    <h4>3. Beschaffung der Unterlagen</h4>
                    <p style={{ maxWidth: "182px", margin: " 0 0 16px 0" }}>
                      Wir organisieren und prüfen alle relevanten Unterlagen für
                      den Verkauf.
                    </p>
                    <p style={{ maxWidth: "182px" }}>
                      Ob es ein Grundbuchauszug ist oder der gesetzlich
                      vorgeschriebene Energieausweis,
                      <span>wir kümmern uns.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-grid">
              <div className="mobile-grid-items black-line">
                <div className="mobile-black-icon">IV</div>
              </div>
              <div className="mobile-grid-items">
                <div className="mobile-border-box">
                  <div className="mobile-light-box">
                    <div className="image-bottom-alignment">
                      <img src={Mobile04} alt="Mobile04" />
                    </div>
                    <h4>4. Aufbereiten der Grundrisse</h4>
                    <p style={{ maxWidth: "182px" }}>
                      Grundrisse sind ein elementares
                      <br /> Dokument für Ihre Immobilie.
                      <br /> Sollten keine Grundrisse vorliegen,
                      <br /> lassen wir Ihre Immobilie für Sie
                      <br />
                      <span>neu vermessen</span> - <br /> selbstverständlich{" "}
                      <span>kostenlos!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-grid">
              <div className="mobile-grid-items black-line">
                <div className="mobile-black-icon">V</div>
              </div>
              <div className="mobile-grid-items">
                <div className="mobile-border-box">
                  <div className="mobile-light-box">
                    <div className="image-bottom-alignment">
                      <img src={Mobile05} alt="Mobile05" />
                    </div>
                    <h4>5. Hochwertiges Exposé</h4>
                    <p style={{ maxWidth: "182px" }}>
                      Um den <span>bestmöglichen Kaufpreis</span> zu erzielen,
                      erstellen wir ein hochwertiges Expose mit allen wichtigen
                      und gesetzlich vorgeschriebener Informationen!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-grid">
              <div className="mobile-grid-items black-line">
                <div className="mobile-black-icon">VI</div>
              </div>
              <div className="mobile-grid-items">
                <div className="mobile-border-box">
                  <div className="mobile-light-box">
                    <div className="image-bottom-alignment">
                      <img src={Mobile06} alt="Mobile06" />
                    </div>
                    <h4>6. Darstellung aut allen relevanten Portalen</h4>
                    <p style={{ maxWidth: "182px" }}>
                      Wir präsentieren Ihre Immobilie auf allen
                    </p>
                    <p style={{ maxWidth: "182px" }}>
                      relevanten Portalen, um die maximale
                      <br /> Reichweite und den besten Kaufpreis
                      <br /> für Sie zu erzielen -<br />
                      <span>Topplatzierung inklusive.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-grid">
              <div className="mobile-grid-items black-line">
                <div className="mobile-black-icon">VII</div>
              </div>
              <div className="mobile-grid-items">
                <div className="mobile-border-box">
                  <div className="mobile-light-box">
                    <div className="image-bottom-alignment">
                      <img src={Mobile07} alt="Mobile07" />
                    </div>
                    <h4>7. Besichtigungen, Verhandlung und Bonitätsprüfung</h4>
                    <p style={{ maxWidth: "182px" }}>
                      Wir übernehmen für Sie selbstverständlich alle
                      Besichtigungen, <span>auch am Wochenende</span>, damit Sie
                      Zeit für andere Dinge haben. Zudem übernehmen wir die
                      Verhandlungen in Ihrem Sinne und prüfen jeden Kunden auf
                      Bonitat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-grid">
              <div className="mobile-grid-items black-line">
                <div className="mobile-black-icon">VIII</div>
                <div className="moile-dot-first-alignment-bottom">
                  <img src={Blackbottom} alt="Blackbottom" />
                </div>
              </div>
              <div className="mobile-grid-items">
                <div className="mobile-border-box">
                  <div className="mobile-light-box">
                    <div className="image-bottom-alignment">
                      <img src={Mobile08} alt="Mobile08" />
                    </div>
                    <h4>8. Notar - Erfolg</h4>
                    <p style={{ maxWidth: "182px" }}>
                      Wir lassen den Kaufvertrag vorbereiten und prüfen für Sie,
                      dass alles niedergeschrieben wird, was Ihnen wichtig ist.
                      Selbstverständlich begleiten wir Sie auch zum Notar, um
                      den Verkauf erfolgreich und
                      <span>rechtssicher für Sie abzuschließen!</span>
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
