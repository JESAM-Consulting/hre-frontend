import React from "react";
import "./heroSection.scss";
import HRELogo from "../../../../assets/logo/HRE_WHITE.svg";
import AssetsImage from "../../../../assets/images/abc.svg";
import HeroBannerGif from "../../../../assets/images/Group1.svg";
import HeroBanner1 from "../../../../assets/images/BEDROOM1111.jpg";
import Vector1Image from "../../../../assets/images/Vector 1.svg";
import Vector1ImageMobile from "../../../../assets/images/Vectormob.svg";
import Frame1Image from "../../../../assets/images/Frame2.svg";
import Picture2Image from "../../../../assets/images/Frame 17.svg";
import Frame3Image from "../../../../assets/images/Frame 18.svg";
import Frame278Image from "../../../../assets/images/Frame 278.svg";
import Bedroommobile from "../../../../assets/images/BEDROOM1mobil.svg";
import Group222Mobile from "../../../../assets/images/Group 220.svg";

import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <div id="redirect">
      <div className="hero-section-slider-section-alignment">
        <div className="relative-main-div">
          <div className="hero-section">
            <div className="centered-text">
              HERZLICH WILLKOMEN BEI IHREM IMMOBILIENMAKLER
              <img
                src={Vector1Image}
                alt="Vector 1"
                className="vector1-image-style"
              />
              <img
                src={Vector1ImageMobile}
                alt="Vector 1"
                className="vector-mobile"
              />
              <div className="info-text">
                HRE Immobilien verkauft und vermietet Immobilien aller
                Assetklassen.<br></br>
                Unsere Expertise geht von Wohnungen, Einfamilien,
                <br className="phonebreak" /> Doppel- und Reihenhäusern, über
                Villen, Wohn- und <br className="phonebreak" />
                Geschäftshäusern bis hin zu Grundstücken und ganzen
                Neubauprojekten.
              </div>
              <NavLink to="/properties-page" className="offer-link">
                <img
                  src={Frame1Image}
                  alt="Frame 1"
                  className="frame1-image-style"
                />
              </NavLink>
              <NavLink to="/kontakt">
                <img
                  src={Picture2Image}
                  alt="Picture 2"
                  className="picture-style"
                />
              </NavLink>
              <a
                href="https://bewertung.hre-immobilien.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Frame3Image}
                  alt="Picture 3"
                  className="newpic-style"
                />
              </a>
            </div>
            <div className="large-image-style">
              <img
                src={Bedroommobile}
                alt="Bedroom Mobile"
                className="bedroom-mobile-image"
              />
              <img
                src={HeroBanner1}
                alt="HeroBanner1"
                className="debug-image"
              />
            </div>
          </div>
        </div>
        <div className="hero-section-top-content-alignment-here">
          <div className="top-content-alignment">
            <a
              href="https://bewertung.hre-immobilien.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="gif-center-alignment">
                <img src={HeroBannerGif} alt="HeroBannerGif" />
                <img src={Group222Mobile} alt="Group 222" className="mobile" />
              </div>
              <div className="hero-content-button-alignment">
                <button>
                  Immobilie jetzt <br /> bewerten lassen!
                </button>
              </div>
            </a>
          </div>
        </div>
        <div className="tow-new-s-alignment">
          <div className="image-container">
            <a
              href="https://www.hre-immobilien.de/kontakt/#werden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bottom-banner-image-dummy-align-one">
                <div className="hero-light-box">
                  <img src={AssetsImage} alt="AssetsImage" className="euro" />
                </div>
              </div>
            </a>
            <div className="frame278-container">
              <img
                src={Frame278Image}
                alt="Frame 278"
                className="frame278-image-style"
              />
              <div className="frame278-text-content">
                <a
                  href="tel:042138872470"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <strong>Telefon</strong> 0421/ 38 87 247-0
                </a>
                <br />
                <a
                  href="mailto:info@hre-immobilien.de"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <strong>E-Mail</strong> info@hre-immobilien.de
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-banner-image-dummy-align">
            <div className="image-wrapper-alignment">
              <div className="logo-center-alignment">
                <img src={HRELogo} alt="HRELogo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
