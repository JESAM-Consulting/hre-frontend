import React from "react";
import "./partnerSection.scss";
import ParnterImage from "../../../../assets/images/partner-image.png";
import ParnterImage1 from "../../../../assets/images/partner-image1.png";
export default function PartnerSection() {
  return (
    <div>
      <div className="partner-all-content-section-alignment">
        <div className="grid">
          <div className="grid-items">
            <div className="card-image">
              <img src={ParnterImage} alt="ParnterImage" />
            </div>
            <div className="card-details-alignment">
              <div className="space">
                <h5
                  className="animate__slideInUp animate__animated wow"
                  data-wow-offset="100"
                >
                  dominik Gröne
                </h5>
                <h6
                  className="animate__slideInUp animate__animated wow"
                  data-wow-offset="100"
                >
                  Geschäftsführer
                </h6>
                <div className="child-text-new-alignment">
                  <p
                    className="animate__slideInUp animate__animated wow"
                    data-wow-offset="100"
                  >
                    Immobilienfachwirt (IHK)
                  </p>
                </div>
                <div className="all-text-alignment-grid">
                  <a href="tel: +49 174 8000848">
                    <div className="text-alignment">
                      <div
                        className="animate__slideInUp animate__animated wow"
                        data-wow-offset="100"
                      >
                        <p>Telefon :</p>
                      </div>
                      <div
                        className="animate__slideInUp animate__animated wow"
                        data-wow-offset="100"
                      >
                        <span> +49 174 8000848</span>
                      </div>
                    </div>
                  </a>
                  <a href="mailto:dg@hre-immobilien.de?subject = Feedback&body = Message">
                    <div className="text-alignment">
                      <div
                        className="animate__slideInUp animate__animated wow"
                        data-wow-offset="100"
                      >
                        <p>E-Mail:</p>
                      </div>
                      <div
                        className="animate__slideInUp animate__animated wow"
                        data-wow-offset="100"
                      >
                        <span>dg@hre-immobilien.de</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-items">
            <div className="card-image">
              <img src={ParnterImage1} alt="ParnterImage1" />
            </div>
            <div className="card-details-alignment">
              <div className="space">
                <h5
                  className="animate__slideInUp animate__animated wow"
                  data-wow-offset="100"
                >
                  Timo Czehowsky
                </h5>
                <h6
                  className="animate__slideInUp animate__animated wow"
                  data-wow-offset="100"
                >
                  Geschäftsführer
                </h6>
                <div className="child-text-new-alignment">
                  <p
                    className="animate__slideInUp animate__animated wow"
                    data-wow-offset="100"
                  >
                    Dipl. Sachverständiger (DIA)
                  </p>
                </div>
                <div className="all-text-alignment-grid">
                  <a href="tel:+49 1525 9204542">
                    <div className="text-alignment">
                      <div
                        className="animate__slideInUp animate__animated wow"
                        data-wow-offset="100"
                      >
                        <p>Telefon :</p>
                      </div>
                      <div
                        className="animate__slideInUp animate__animated wow"
                        data-wow-offset="100"
                      >
                        <span>+49 1525 9204542</span>
                      </div>
                    </div>
                  </a>
                  <a href="mailto:tc@hre-immobilien.de?subject = Feedback&body = Message">
                    <div className="text-alignment">
                      <div
                        className="animate__slideInUp animate__animated wow"
                        data-wow-offset="100"
                      >
                        <p>E-Mail:</p>
                      </div>
                      <div
                        className="animate__slideInUp animate__animated wow"
                        data-wow-offset="100"
                      >
                        <span>tc@hre-immobilien.de</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
