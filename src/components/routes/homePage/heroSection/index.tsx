import React from "react";
import "./heroSection.scss";
import HRELogo from "../../../../assets/logo/hre-lg-logo-1.svg";
import Slider from "react-slick";

import UpdateHero from "../../../../assets/images/update-hero.png";
import HeroBanner from "../../../../assets/images/09.png";
import HeroBanner1 from "../../../../assets/images/02.png";
import HeroBanner3 from "../../../../assets/images/03.png";
import HeroBanner4 from "../../../../assets/images/04.png";
import HeroBanner5 from "../../../../assets/images/05.png";
import HeroBanner6 from "../../../../assets/images/06.png";
import HeroBanner7 from "../../../../assets/images/07.png";
import HeroBanner8 from "../../../../assets/images/08.png";

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
          <div>
            <div className="hero-section">
              <div className="large-image-style">
                <img src={UpdateHero} alt="updateHero" />
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
         
          <div>
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner1} alt="HeroBanner1" />
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
          <div>
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner3} alt="HeroBanner3" />
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
          <div>
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner4} alt="HeroBanner4" />
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
          <div>
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner5} alt="HeroBanner5" />
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
          <div>
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner6} alt="HeroBanner6" />
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
          <div>
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner7} alt="HeroBanner7" />
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
          <div>
            <div className="hero-section">
              <div className="large-image-style">
                <img src={HeroBanner8} alt="HeroBanner8" />
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
        </Slider>
      </div>
    </div>
  );
}
