import React, { useEffect, useState } from "react";
import "./Referenzen.scss";
import HreLgImage from "../../../assets/images/hre-lg.png";
import HreLgImageSmall from "../../../assets/images/small-hre-min.png";
import Image1 from "../../../assets/images/r1-min.png";
import Image2 from "../../../assets/images/r2-min.png";
import Image3 from "../../../assets/images/r3-min.png";
import Image4 from "../../../assets/images/r4-min.png";
import Image5 from "../../../assets/images/r5-min.png";
import Image6 from "../../../assets/images/r6-min.png";
import Image7 from "../../../assets/images/r7-min.png";
import Image8 from "../../../assets/images/r8-min.png";
import Image9 from "../../../assets/images/r9-min.png";
import Image10 from "../../../assets/images/r10-min.png";
import { NavLink } from "react-router-dom";
import HRE_WHITE from "../../../assets/logo/HRE_WHITE.svg";

export default function Referenzen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  return (
    <div>
      <div>
        <div className="referenzen-banner">
          <div className="right-alignment-image">
            <img src={HreLgImage} alt="HreLgImage" />
          </div>
        </div>
        <div className="referenzen-all-content-alignment-for-page">
          <div className="container-sm-14">
            <h1>Referenzen</h1>

            <div className="all-image-grid-alignment">
              <div className="image-grid">
                <div className="image-grid-items">
                  <div className="relative-div">
                    <div className="image-style">
                      <img src={Image1} alt="Image1" />
                    </div>
                    <div className="small-logo-alignment">
                      <img src={HreLgImageSmall} alt="HreLgImageSmall" />
                    </div>
                  </div>
                  <div className="line-row">
                    <div className="active-line-row"></div>
                  </div>
                </div>
                <div className="image-grid-items">
                  <div className="relative-div">
                    <div className="image-style">
                      <img src={Image2} alt="Image2" />
                    </div>
                    <div className="small-logo-alignment">
                      <img src={HreLgImageSmall} alt="HreLgImageSmall" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-grid">
                <div className="image-grid-items">
                  <div className="relative-div">
                    <div className="image-style">
                      <img src={Image3} alt="Image3" />
                    </div>
                    <div className="small-logo-alignment">
                      <img src={HreLgImageSmall} alt="HreLgImageSmall" />
                    </div>
                  </div>
                  <div className="line-row">
                    <div className="active-line-row"></div>
                  </div>
                </div>
                <div className="image-grid-items">
                  <div className="relative-div">
                    <div className="image-style">
                      <img src={Image4} alt="Image4" />
                    </div>
                    <div className="small-logo-alignment">
                      <img src={HreLgImageSmall} alt="HreLgImageSmall" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-grid">
                <div className="image-grid-items">
                  <div className="relative-div">
                    <div className="image-style">
                      <img src={Image5} alt="Image5" />
                    </div>
                    <div className="small-logo-alignment">
                      <img src={HreLgImageSmall} alt="HreLgImageSmall" />
                    </div>
                  </div>
                  <div className="line-row">
                    <div className="active-line-row"></div>
                  </div>
                </div>
                <div className="image-grid-items">
                  <div className="relative-div">
                    <div className="image-style">
                      <img src={Image6} alt="Image6" />
                    </div>
                    <div className="small-logo-alignment">
                      <img src={HreLgImageSmall} alt="HreLgImageSmall" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-grid">
                <div className="image-grid-items">
                  <div className="relative-div">
                    <div className="image-style">
                      <img src={Image7} alt="Image7" />
                    </div>
                    <div className="small-logo-alignment">
                      <img src={HreLgImageSmall} alt="HreLgImageSmall" />
                    </div>
                  </div>
                  <div className="line-row">
                    <div className="active-line-row"></div>
                  </div>
                </div>
                <div className="image-grid-items">
                  <div className="relative-div">
                    <div className="image-style">
                      <img src={Image8} alt="Image8" />
                    </div>
                    <div className="small-logo-alignment">
                      <img src={HreLgImageSmall} alt="HreLgImageSmall" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-grid">
                <div className="image-grid-items">
                  <div className="relative-div">
                    <div className="image-style">
                      <img src={Image9} alt="Image9" />
                    </div>
                    <div className="small-logo-alignment">
                      <img src={HreLgImageSmall} alt="HreLgImageSmall" />
                    </div>
                  </div>
                  <div className="line-row">
                    <div className="active-line-row"></div>
                  </div>
                </div>
                <div className="image-grid-items">
                  <div className="relative-div">
                    <div className="image-style">
                      <img src={Image10} alt="Image10" />
                    </div>
                    <div className="small-logo-alignment">
                      <img src={HreLgImageSmall} alt="HreLgImageSmall" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      '
      {isLoading && (
        <div>
          <div className="loader-wrapper-page">
            <div>
              <div className="image-center-alignment">
                <img src={HRE_WHITE} alt="HRE_WHITE" />
              </div>
              <span>Unsere Referenzen werden geladen ...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
