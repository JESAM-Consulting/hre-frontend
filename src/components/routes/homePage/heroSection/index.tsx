import React from "react";
import "./heroSection.scss";
import HRELogo from "../../../../assets/logo/HRE_WHITE.svg";
import Slider from "react-slick";
import UpdateHero from "../../../../assets/images/update-hero.png";
import HeroBanner from "../../../../assets/images/09.png";
import HeroBanner1 from "../../../../assets/images/Titel1.jpg";
import HeroBanner3 from "../../../../assets/images/Titel2.jpg";
import HeroBanner4 from "../../../../assets/images/Titel3.jpg";
import HeroBanner5 from "../../../../assets/images/Titel4.jpg";
import HeroBanner6 from "../../../../assets/images/Titel5.jpg";
import HeroBanner7 from "../../../../assets/images/Titel6.jpg";
import HeroBanner8 from "../../../../assets/images/08.png";
import AssetsImage from "../../../../assets/images/abc.svg";
import HeroBannerGif from "../../../../assets/images/hero-banner-gif.gif";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
  };

  return (
    <div id="redirect">
      <div className="hero-section-slider-section-alignment">
        <Slider {...settings}>
          <div className="relative-main-div">
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner1} alt="HeroBanner1" />
              </div>
            </div>
          </div>
          <div className="relative-main-div">
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner3} alt="HeroBanner3" />
              </div>
            </div>
          </div>
          <div className="relative-main-div">
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner4} alt="HeroBanner4" />
              </div>
            </div>
          </div>
          <div className="relative-main-div">
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner5} alt="HeroBanner5" />
              </div>
            </div>
          </div>
          <div className="relative-main-div">
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner6} alt="HeroBanner6" />
              </div>
            </div>
          </div>
          <div className="relative-main-div">
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner7} alt="HeroBanner7" />
              </div>
            </div>
          </div>
        </Slider>
        <div className="hero-section-top-content-alignment-here">
          <div className="top-content-alignment">
            <a href="https://bewertung.hre-immobilien.de/" target="_blank">
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
          <a href="https://www.hre-immobilien.de/kontakt/#werden" target="_blank">
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
