import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./cookies.scss";
export default function Cookies() {
  const [show, setShow] = useState();

  useEffect(() => {
    let getShowCookie = localStorage.getItem("hre-cookie");
    let isCookie = true;
    if (getShowCookie) {
      getShowCookie = JSON.parse(getShowCookie);
      isCookie = getShowCookie.isCookie;
    }
    setTimeout(() => {
      setShow(isCookie);
    }, 4000);
  }, []);

  const onClose = () => {
    localStorage.setItem("hre-cookie", JSON.stringify({ isCookie: false }));
    setShow(false);
  };
  return (
    <>
      {show && (
        <div>
          <div className="cookies-box-content-alignment animate__slideInUp animate__animated wow">
            <div className="text-style-alignment">
              <h2>Wir verwenden Cookies</h2>
              <p>
                Um Ihnen die bestmögliche Nutzung zu ermöglichen. Neben
                technisch unbedingt erforderlichen Cookies werden mit Ihrer
                Einwilligung auch weitere Cookies angesteuert, um zusätzliche
                Dienste und Funktionen einzubinden. Wir verarbeiten Daten zu den
                Zwecken „Analyse und Performance“ und „Marketing" nur, soweit
                Sie uns durch Klicken auf „Alles akzeptieren“ oder unter
                „Einstellungen“ Ihre freiwillige Einwilligung geben. Sie können
                Ihre jeweilige Einwilligung jederzeit mit Wirkung für die
                Zukunft widerrufen.
              </p>
            </div>
            <div className="all-switch-content-alignment">
              <div className="switch-text-style">
                <div>
                  <label class="switch">
                    <input type="checkbox" checked />
                    <span class="slider round"></span>
                  </label>
                </div>
                <div>
                  <p>Notwendig</p>
                </div>
              </div>
              <div className="switch-text-style">
                <div>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
                <div>
                  <p>Performance</p>
                </div>
              </div>
              <div className="switch-text-style">
                <div>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
                <div>
                  <p>Funktional</p>
                </div>
              </div>
            </div>
            <div className="two-button-grid">
              <div className="two-button-grid-items">
                <button onClick={onClose}>Akzeptieren</button>
              </div>
              <div className="two-button-grid-items">
                <button onClick={onClose}>Ablehnen</button>
              </div>
            </div>
            <div className="box-footer-text">
              <a href="/datenschutz">Datenschutz</a>
              <a>|</a>
              <a href="/impressum-page">Impressum</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
