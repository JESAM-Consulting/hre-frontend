import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Energieausweis.scss";
import AngeboteDetailsModal from "../AngeboteDetails/AngeboteDetailsModal";
import HreLgImage from "../../../assets/images/hre-lg.png";
import Ene1 from "../../../assets/icons/ene-1.svg";
import Ene2 from "../../../assets/icons/ene-2.svg";
import Ene3 from "../../../assets/icons/ene-3.svg";
import Ene4 from "../../../assets/icons/ene-4.svg";
import Ene5 from "../../../assets/icons/ene-5.svg";
import EneHome1 from "../../../assets/icons/ene-home-1.svg";
import EneHome2 from "../../../assets/icons/ene-home-2.svg";
import BuildIcon from "../../../assets/icons/buld-icon.svg";
import QATopArrow from "../../../assets/icons/qa-top-arrow.svg";
import QADownArrow from "../../../assets/icons/qa-down-arrow.svg";
export default function Energieausweis() {
  // Adding modal handling functionality here
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const verbrauchsausweisButtonRef = useRef(null);
  const bedarfsausweisButtonRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        event.target !== verbrauchsausweisButtonRef.current &&
        event.target !== bedarfsausweisButtonRef.current
      ) {
        setModalOpen(false);
      }
    }
    console.log(
      "[handleClickOutside] Clicked outside the modal. Trying to close it."
    );
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      console.log(
        "[handleClickOutside] Clicked inside the modal or modal wasn't open or clicked the toggle button."
      );
    };
  }, []);

  return (
    <div>
      <div>
        <div className="energieausweis-banner">
          <div className="energieausweis-left-alignment-image">
            <img src={HreLgImage} alt="HreLgImage" />
          </div>
        </div>
        <div className="energieausweis-sind-all-cotnent-alignment">
          <div className="container-lg">
            <div className="heading-text">
              <h1
                className="animate__slideInUp animate__animated wow"
                data-wow-offset="100"
              >
                Energieausweis
              </h1>
              <div className="energieausweis-child-text-alignment">
                <p>
                  Sie möchten eine Immobilie kaufen oder verkaufen? Dann
                  benötigen Sie einen Energieausweis. Hier können Sie Ihren
                  Bedarfs- oder Verbrauchsausweis ganz leicht online erstellen.
                  Einfach Daten eingeben und nach wenigen Minuten erhalten Sie
                  Ihren persönlichen Energieausweis per E-Mail.
                </p>
              </div>
              <div className="energieausweis-button-alignment">
                <button
                  ref={verbrauchsausweisButtonRef}
                  onClick={() => {
                    history.push("/verbrauchsausweis");
                    // setModalOpen(!modalOpen);
                  }}
                >
                  Jetzt Verbrauchsausweis bestellen
                </button>
                <button
                  onClick={() => {
                    // setModalOpen(!modalOpen);
                    history.push("/bedarfsausweis"); // Navigate to the desired route
                  }}
                >
                  Jetzt Bedarfsausweis bestellen
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="energieausweis-einen-section">
          <div className="container-lg">
            <div className="energieausweis-einen-alignment">
              <div className="energieausweis-einen-details-alignment">
                <div className="enine-heading-text">
                  <h2>Energieausweis auf einen Blick</h2>
                </div>
                <div className="enine-table-alignment">
                  <table>
                    <thead>
                      <tr>
                        <th align="center">
                          <img src={Ene1} alt="Ene1" />
                        </th>
                        <th>
                          <img src={Ene2} alt="Ene2" />
                        </th>
                        <th>
                          <img src={Ene3} alt="Ene3" />
                        </th>
                        <th>
                          <img src={Ene4} alt="Ene4" />
                        </th>
                        <th align="center">
                          <img src={Ene5} alt="Ene5" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="first-table-details-alignment">
                          {/* <div className=""> */}
                          <div className="img-alignment">
                            <img src={EneHome1} alt="EneHome1" />
                          </div>
                          <div className="first-details-alignment">
                            <h6>Energieausweis</h6>
                            <p>
                              für Gebäude, die die Wärmeschutzverordnung von 01.
                              November 1977 einhalten
                            </p>
                          </div>
                          {/* </div> */}
                        </td>
                        <td>
                          <p>
                            orientiert sich am Verbrauch der vergangenen drei
                            Jahre
                          </p>
                        </td>
                        <td>
                          <p>erstellt von Versorgern oder Messanbietern</p>
                        </td>
                        <td rowSpan={2}>
                          <div className="first-details-alignment">
                            <h6>Ausnahmen:</h6>
                            <p>
                              Gebäude mit Nutzfläche von maximal 50 m2,
                              Denkmalschutz und Abrisshäuser
                            </p>
                          </div>
                        </td>
                        <td rowSpan={2}>
                          <div className="first-details-alignment">
                            <h6>Achtung Strafe!</h6>
                            <p>
                              Sie wollen vermieten oder verkaufen? Dann brauchen
                              Sie einen Energieausweis. Wer keinen vorweisen
                              kann, riskiert ein Bußgeld von bis zu 10.000 €
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="first-table-details-alignment">
                          {/* <div className=""> */}
                          <div className="img-alignment">
                            <img src={EneHome2} alt="EneHome2" />
                          </div>
                          <div className="first-details-alignment">
                            <h6>Energieausweis</h6>
                            <p>
                              für Gebäude, die die Wärmeschutzverordnung von 01.
                              November 1977 einhalten
                            </p>
                          </div>
                          {/* </div> */}
                        </td>
                        <td>
                          <p>
                            Energiebedarf ermittelt durch Berechnungsverfahren
                          </p>
                        </td>
                        <td>
                          <p>
                            erstellt von Architekten, Ingenieure, Heizungsbauer
                            und Schornsteinfeger
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mobile-enine-table-alignment">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>
                          <div className="img-alignment">
                            <img src={EneHome1} alt="EneHome1" />
                          </div>
                        </th>
                        <th>
                          <div className="img-alignment">
                            <img src={EneHome2} alt="EneHome2" />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src={Ene1} alt="Ene1" />
                        </td>
                        <td>
                          <div className="first-details-alignment">
                            <h6>Energieausweis</h6>
                            <p>
                              für Gebäude, die die Wärmeschutzverordnung von 01.
                              November 1977 einhalten
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="first-details-alignment">
                            <h6>Bedarfsausweis</h6>
                            <p>
                              für Gebäude, die die Wärmeschutzverordnung von 01.
                              November 1977 nicht einhalten
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={Ene2} alt="Ene2" />
                        </td>
                        <td>
                          <p>
                            {" "}
                            orientiert sich am Verbrauch der vergangenen drei
                            Jahre
                          </p>
                        </td>
                        <td>
                          <p>
                            {" "}
                            orientiert sich am Verbrauch der vergangenen drei
                            Jahre
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={Ene3} alt="Ene3" />
                        </td>
                        <td>
                          <p>erstellt von Versorgern oder Messanbietern</p>
                        </td>
                        <td>
                          <p>
                            erstellt von Architekten, Ingenieure, Heizungsbauer
                            und Schornsteinfeger
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={Ene4} alt="Ene4" />
                        </td>
                        <td colSpan={2}>
                          <div className="first-details-alignment">
                            <h6>Ausnahmen:</h6>
                            <p>
                              Gebäude mit Nutzfläche von maximal 50 m2,
                              Denkmalschutz und Abrisshäuser
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={Ene5} alt="Ene5" />
                        </td>
                        <td colSpan={2}>
                          <div className="first-details-alignment">
                            <h6>Achtung Strafe!</h6>
                            <p>
                              Sie wollen vermieten oder verkaufen? Dann brauchen
                              Sie einen Energieausweis. Wer keinen vorweisen
                              kann, riskiert ein Bußgeld von bis zu 10.000 €
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="warum-sollte-section">
          <div className="container-lg">
            <div className="warum-sollte-details-alignment">
              <h4>Warum sollte ich hier den Energieausweis bestellen?</h4>
              <p>Das sind Ihre Vorteile:</p>
              <p>Das sind Ihre Vorteile:</p>

              <div className="warum-sollte-list-alignment">
                <ul>
                  <li>einfache Erstellung und sofortige Verfügbarkeit</li>
                  <li>
                    rechtsgültiger Energieausweis nach dem GEG 2020
                    (Gebäudeenergiegesetz)
                  </li>
                  <li>PDF-Vorschau Ihres Energieausweises</li>
                  <li>
                    Abbildung des Gebäudes im Energieausweis möglich – einfach
                    Foto hochladen
                  </li>
                  <li>
                    inklusive Registrierung des Energieausweises beim DIBt
                    (Deutsches Institut für Bautechnik)
                  </li>
                  <li>inklusive Auflistung von Verbesserungsmaßnahmen</li>
                  <li>telefonischer Support bei Fragen</li>
                  <li>hohe Ersparnis gegenüber der Erstellung vor Ort</li>
                </ul>
              </div>
            </div>
            <div className="bedarfsausweis-section">
              <div className="bedarfsausweis-heading-text">
                <h4>
                  Bedarfsausweis oder Verbrauchs­ausweis – was benötige ich?
                </h4>

                <div className="bedarfsausweis-chart-alignment">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th align="left">Baujahr bis 1977</th>
                        <th align="left">Baujahr ab 1977</th>
                        <th align="left"> Neubau</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bis zu 4 Wohneinheiten</td>
                        <td>Bedarfsausweis</td>
                        <td>freie Wahl</td>
                        <td>Bedarfsausweis</td>
                      </tr>
                      <tr>
                        <td>Bis zu 4 Wohneinheiten</td>
                        <td>Bedarfsausweis</td>
                        <td>freie Wahl</td>
                        <td>Bedarfsausweis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-bedarfsausweis-chart-alignment">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Bis zu 4 Wohneinheiten</th>
                  <th>Ab 5 Wohneinheiten</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Baujahr bis 1977</td>
                  <td>Baujahr ab 1977</td>
                  <td>Neubau</td>
                </tr>
                <tr>
                  <td>Bedarfsausweis</td>
                  <td>freie Wahl</td>
                  <td>Bedarfsausweis</td>
                </tr>
                <tr>
                  <td>freie Wahl</td>
                  <td>freie Wahl</td>
                  <td>Bedarfsausweis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="verbrauchsausweis-bedarfsausweis-section">
          <div className="container-lg">
            <div className="verbrauchsausweis-grid-alignment">
              <div className="verbrauchsausweis-gridItem-box-alignment">
                <div className="main-section-alignment">
                  <img src={BuildIcon} alt="BuildIcon" />

                  <h4>Verbrauchsausweis für 59,95 €</h4>
                </div>

                <div className="child-details-alignment">
                  <h6>Verbrauchsausweis </h6>
                  <p>
                    Alle Angaben, die Sie für den verbrauchsorientierten
                    Energieausweis benötigen, haben wir für Sie
                    zusammengestellt. Alles parat? Dann starten Sie gleich mit
                    der Erstellung.
                  </p>
                </div>

                <div className="options-button-alignment">
                  <div className="pdf-button-alignment">
                    <button>PDF mit den Angaben</button>
                  </div>
                  Verbrauchsausweis
                  <div className="other-button-alignment">
                    <button
                      onClick={() => {
                        // setModalOpen(!modalOpen);
                        history.push("/Verbrauchsausweis");
                      }}
                    >
                      Jetzt Verbrauchsausweis bestellen
                    </button>
                  </div>
                </div>
              </div>

              <div className="verbrauchsausweis-gridItem-box-alignment">
                <div className="main-section-alignment">
                  <img src={BuildIcon} alt="BuildIcon" />

                  <h4>Bedarfsausweis für 109,95 €</h4>
                </div>

                <div className="child-details-alignment">
                  <h6>Bedarfsausweis </h6>
                  <p>
                    Alle Angaben, die Sie für den bedarfsorientierten
                    Energieausweis benötigen, haben wir für Sie
                    zusammengestellt. Alles parat? Dann starten Sie gleich mit
                    der Erstellung.
                  </p>
                </div>

                <div className="options-button-alignment">
                  <div className="pdf-button-alignment">
                    <button>PDF mit den Angaben</button>
                  </div>
                  <div className="other-button-alignment">
                    <button
                      onClick={() => {
                        history.push("/bedarfsausweis");

                        // setModalOpen(!modalOpen);
                      }}
                    >
                      Jetzt Bedarfsausweis bestellen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="qA-section">
          <div className="container-lg">
            <div className="qA-heading-text">
              <h4>Q&A</h4>
            </div>
            <div className="qA-details-alignment">
              <div className="qA-question-part-alignment active">
                <div className="main-name-alignment">
                  <p>Tex Question</p>
                  <div>
                    <img src={QATopArrow} alt="QATopArrow" />
                  </div>
                </div>
                <div className="qA-child-text-alignment">
                  <p>Tex Answer </p>
                  <p>
                    Lorem ipsum dolor sit amet. Cum laudantium quia rem omnis
                    libero est dicta tempore est placeat dolor et impedit
                    voluptas et aperiam aliquam aut sint ratione. Qui rerum
                    distinctio qui dignissimos aliquam vel nobis maxime sed
                    molestiae placeat qui ullam provident non iste mollitia nam
                    fugiat rerum? Qui voluptatem harum aut quae quibusdam qui
                    maxime perspiciatis sed esse fugiat. Et quod aliquid sit
                    repellat quasi qui delectus saepe
                  </p>
                </div>
              </div>

              <div className="qA-question-part-alignment">
                <div className="main-name-alignment">
                  <p>Tex Question</p>
                  <div>
                    <img src={QADownArrow} alt="QADownArrow" />
                  </div>
                </div>
              </div>

              <div className="qA-question-part-alignment">
                <div className="main-name-alignment">
                  <p>Tex Question</p>
                  <div>
                    <img src={QADownArrow} alt="QADownArrow" />
                  </div>
                </div>
              </div>

              <div className="qA-question-part-alignment">
                <div className="main-name-alignment">
                  <p>Tex Question</p>
                  <div>
                    <img src={QADownArrow} alt="QADownArrow" />
                  </div>
                </div>
              </div>
              <div className="qA-question-part-alignment">
                <div className="main-name-alignment">
                  <p>Tex Question</p>
                  <div>
                    <img src={QADownArrow} alt="QADownArrow" />
                  </div>
                </div>
              </div>

              <div className="qA-question-part-alignment">
                <div className="main-name-alignment">
                  <p>Tex Question</p>
                  <div>
                    <img src={QATopArrow} alt="QATopArrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}{" "}
        {modalOpen && (
          <AngeboteDetailsModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
