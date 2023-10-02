import React from "react";
import "./heroSection.scss";
import HRELogo from "../../../../assets/logo/HRE_WHITE.svg";
import AssetsImage from "../../../../assets/images/abc.svg";
import HeroBannerGif from "../../../../assets/images/hero-banner-gif.gif";
import HeroBanner1 from "../../../../assets/images/Titel2-minis.svg";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <div id="redirect">
      <div className="hero-section-slider-section-alignment">
        <div className="relative-main-div">
          <div className="hero-section">
            <div className="large-image-style">
              <img src={HeroBanner1} alt="HeroBanner1" className="debug-image" />
            </div>
          </div>
        </div>
        <div className="hero-section-top-content-alignment-here">
          <div className="top-content-alignment">
            <a href="https://bewertung.hre-immobilien.de/" target="_blank" rel="noopener noreferrer">
              <div className="gif-center-alignment">
                <img src={HeroBannerGif} alt="HeroBannerGif" />
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
          <a href="https://www.hre-immobilien.de/kontakt/#werden" target="_blank" rel="noopener noreferrer">
            <div className="bottom-banner-image-dummy-align-one">
              <div className="hero-light-box">
                <img src={AssetsImage} alt="AssetsImage" />
              </div>
            </div>
          </a>
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
