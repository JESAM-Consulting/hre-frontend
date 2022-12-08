import React, { useEffect, useState } from "react";
import "./propertiesCard.scss";
import NewCardImage from "../../../../assets/images/new-card.png";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import LeftIcon from "../../../../assets/icons/slider-left.svg";
import RightIcon from "../../../../assets/icons/slider-right.svg";
import ImageGallery from "react-image-gallery";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="right-slider-icon-alignment" onClick={onClick}>
      <img src={RightIcon} alt="RightIcon" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="left-slider-icon-alignment" onClick={onClick}>
      <img src={LeftIcon} alt="LeftIcon" />
    </div>
  );
}

export default function PropertiesCard() {
  const [cardData, setCardData] = useState<any>([]);
  const [mapdata, setMapData] = useState<any>([]);
  const [slidersImg, setSlidersImg] = useState<any>([]);
  const [sliderModalOpen, setSliderModalOpen] = useState(false);

  const propImage: any = [];

  useEffect(() => {
    propertyCardData();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const propertyCardData = async () => {
    await axios
      .get("https://api.hre.rejoicehub.com/api/v1/dataSchema/getDataSchema")
      .then((res) => {
        setCardData(res?.data?.payload?.getData);
        console.log("res", res?.data?.payload?.getData);
        setMapData(
          res?.data?.payload?.getData?.map(
            (data1: any) =>
              data1?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                ?.anhaenge?.[0]?.anhang
          )
        );
      })
      .catch((error) => console.log(error));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,
  };

  const makeData = (kauf: any) => {
    let filteredData = [];
    if (kauf === "g") {
      filteredData = cardData?.filter(
        (item: any, i: any) =>
          "grundstueck" in
          item?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
            .objektkategorie?.[0]?.objektart?.[0]
      );
    }

    // if (kauf === "et") {
    //   filteredData = cardData?.filter(
    //     (item: any, i: any) =>
    //       "wohnung" in
    //         item?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
    //           .objektkategorie?.[0]?.objektart?.[0] &&
    //       item?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0].objektkategorie?.[0]?.objektart?.[0]?.wohnung?.[0]?.X?.wohnungtyp?.toString() ===
    //         "ETAGE"
    //   );
    // }

    // if (kauf === "ma") {
    //   filteredData = cardData?.filter(
    //     (item: any, i: any) =>
    //       ("wohnung" in
    //         item?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
    //           .objektkategorie?.[0]?.objektart?.[0] &&
    //         item?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0].objektkategorie?.[0]?.objektart?.[0]?.wohnung?.[0]?.X?.wohnungtyp?.toString() ===
    //           "MAISONETTE") ||
    //       "haus" in
    //         item?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
    //           .objektkategorie?.[0]?.objektart?.[0] ||
    //       ("wohnung" in
    //         item?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
    //           .objektkategorie?.[0]?.objektart?.[0] &&
    //         item?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0].objektkategorie?.[0]?.objektart?.[0]?.wohnung?.[0]?.X?.wohnungtyp?.toString() ===
    //           "SOUTERRAIN")
    //   );
    // }

    return filteredData;
  };

  const makeData22 = (kauf: any) => {
    let filteredData = [];
    let notGrundData= []
    notGrundData = cardData?.filter(
      (item: any, i: any) =>
        !(
          "grundstueck" in
          item?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
            .objektkategorie?.[0]?.objektart?.[0]
        )
    );

    filteredData = notGrundData?.filter(
      (item: any, i: any) =>
        "anhaenge" in item?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0] &&
        item?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
          ?.objektkategorie?.[0]?.vermarktungsart?.[0]?.X?.KAUF === kauf
    );
    return filteredData;
  };

  return (
    <div>
      <div className="properties-all-content-card-alignment">
        <div className="container">
          <h2>Kaufangebote</h2>
          <div className="grid">
            {makeData22("true")?.map((data: any) => {
              return (
                <div className="grid-items">
                  <div className="card-grid">
                    <div className="card-grid-items">
                      <div className="card-image">
                        <Slider {...settings}>
                          {data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]?.anhaenge?.[0]?.anhang
                            ?.filter(
                              (itm: any) =>
                                itm?.daten[0]?.pfad[0]?.split(".")[1] !== "pdf"
                            )
                            .map((item: any) => {
                              {
                                console.log(
                                  "item?.daten[0]?.pfad[0]",
                                  item?.daten[0]?.pfad[0]?.split(".")
                                );
                              }

                              return (
                                <div>
                                  <div>
                                    <div className="slider-image-style">
                                      <NavLink
                                        to={`/properties-details/${data?._id}/imagepreview`}
                                      >
                                        <img
                                          src={`  https://api.hre.rejoicehub.com/api/v1/image/${data?.projectName}/${item?.daten?.[0]?.pfad?.[0]}`}
                                          alt="hreimage"
                                        />
                                      </NavLink>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </Slider>
                      </div>
                    </div>
                    <NavLink to={`/properties-details/${data?._id}`}>
                      <div className="card-grid-items">
                        <h5>
                          {
                            data?.data?.openimmo?.anbieter[0]?.immobilie?.[0]
                              ?.kontaktperson[0]?.wohnflaeche
                          }
                        </h5>
                        <div className="all-text-bottom-alignment">
                          <div className="text-style">
                            <span className="one-line-title">
                              {" "}
                              {
                                data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                                  ?.freitexte?.[0]?.objekttitel?.[0]
                              }
                            </span>
                            <p>
                              {
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.geo?.[0]?.ort?.[0]
                              }
                            </p>
                          </div>
                          <div className="text-style">
                            <p>Wohnfläche</p>
                            <span>
                              {" "}
                              {
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.flaechen?.[0]
                                  ?.wohnflaeche?.[0]
                              }{" "}
                              m²
                            </span>
                          </div>
                          <div className="text-style">
                            <p>Zimmer</p>
                            <span>
                              {" "}
                              {
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.flaechen?.[0]
                                  ?.anzahl_zimmer?.[0]
                              }{" "}
                            </span>
                          </div>
                          <div className="text-style">
                            <p>Kaufpreis</p>
                            <span>
                              {" "}
                              {Number(
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.preise?.[0]?.kaufpreis?.[0]
                              )
                                ?.toLocaleString("en-us")
                                .replaceAll(",", ".")}{" "}
                              €
                            </span>
                          </div>
                        </div>
                        <button>weitere Informationen</button>
                      </div>
                    </NavLink>
                  </div>
                  <div className="mobile-view-card-button">
                    <NavLink to={`/properties-details/${data?._id}`}>
                      <button>weitere Informationen</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {sliderModalOpen && (
          <div className="slider-modal">
            <div style={{ position: "relative" }}>
              <div
                className="modal-close-alignment"
                onClick={() => setSliderModalOpen(false)}
              >
                <svg
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current w-1-1/4 h-1-1/4 sm:w-2 sm:h-2"
                >
                  <path fill="none" d="M1 1l12 12M13 1L1 13"></path>
                </svg>
              </div>
              <ImageGallery items={propImage} />
            </div>
          </div>
        )}
      </div>
      <div className="properties-all-content-card-alignment">
        <div className="container">
          <h2>Mietangebote</h2>
          <div className="grid">
            {makeData22("false")?.map((data: any) => {
              return (
                <div className="grid-items">
                  <div className="card-grid">
                    <div className="card-grid-items">
                      <div className="card-image">
                        <Slider {...settings}>
                          {data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]?.anhaenge?.[0]?.anhang
                            ?.filter(
                              (itm: any) =>
                                itm?.daten?.[0]?.pfad?.[0]?.split(".")[1] !== "pdf"
                            )
                            .map((item: any) => {
                              {
                                console.log(
                                  "item?.daten[0]?.pfad[0]",
                                  item?.daten?.[0]?.pfad?.[0]?.split(".")
                                );
                              }
                              return (
                                <div>
                                  <div>
                                    <div className="slider-image-style">
                                      <NavLink
                                        to={`/properties-details/${data?._id}/imagepreview`}
                                      >
                                        <img
                                          src={`  https://api.hre.rejoicehub.com/api/v1/image/${data?.projectName}/${item?.daten?.[0]?.pfad?.[0]}`}
                                          alt="hreimage"
                                        />
                                      </NavLink>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </Slider>
                      </div>
                    </div>
                    <NavLink to={`/properties-details/${data?._id}`}>
                      <div className="card-grid-items">
                        <h4>
                          {/* {
                            data?.data?.openimmo?.anbieter[0]?.immobilie[0]
                              ?.freitexte[0]?.objekttitel[0]
                          } */}
                        </h4>
                        <h5>
                          {
                            data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                              ?.kontaktperson?.[0]?.wohnflaeche
                          }
                        </h5>
                        <div className="all-text-bottom-alignment">
                          <div className="text-style">
                            <span className="one-line-title">
                              {" "}
                              {
                                data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                                  ?.freitexte?.[0]?.objekttitel?.[0]
                              }
                            </span>
                            <p>
                              {
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.geo[0]?.ort?.[0]
                              }
                            </p>
                          </div>
                          <div className="text-style">
                            <p>Wohnfläche</p>
                            <span>
                              {" "}
                              {
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.flaechen?.[0]
                                  ?.wohnflaeche?.[0]
                              }{" "}
                              m²
                            </span>
                          </div>
                          <div className="text-style">
                            <p>Zimmer</p>
                            <span>
                              {" "}
                              {
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.flaechen?.[0]
                                  ?.anzahl_zimmer?.[0]
                              }{" "}
                            </span>
                          </div>
                          <div className="text-style">
                            <p>Kaltmiete</p>
                            <span>
                              {" "}
                              {Number(
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.preise?.[0]?.kaltmiete?.[0]
                              )?.toLocaleString("en-IN")}
                              €
                            </span>
                          </div>
                        </div>
                        <button>weitere Informationen</button>
                      </div>
                    </NavLink>
                  </div>
                  <div className="mobile-view-card-button">
                    <NavLink to={`/properties-details/${data?._id}`}>
                      <button>weitere Informationen</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="properties-all-content-card-alignment">
        <div className="container">
          <h2>Grundstücksangebote</h2>
          <div className="grid">
            {makeData("g")?.map((data: any) => {
              console.log();
              return (
                <div className="grid-items">
                  <div className="card-grid">
                    <div className="card-grid-items">
                      <div className="card-image">
                        <Slider {...settings}>
                          {data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]?.anhaenge?.[0]?.anhang
                            ?.filter(
                              (itm: any) =>
                                itm?.daten?.[0]?.pfad?.[0]?.split(".")[1] !== "pdf"
                            )
                            .map((item: any) => {
                              {
                                console.log(
                                  "item?.daten[0]?.pfad[0]",
                                  item?.daten?.[0]?.pfad?.[0]?.split(".")
                                );
                              }
                              return (
                                <div>
                                  <div>
                                    <div className="slider-image-style">
                                      <NavLink
                                        to={`/properties-details/${data?._id}/imagepreview`}
                                      >
                                        <img
                                          src={`  https://api.hre.rejoicehub.com/api/v1/image/${data?.projectName}/${item?.daten?.[0]?.pfad?.[0]}`}
                                          alt="hreimage"
                                        />
                                      </NavLink>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </Slider>
                      </div>
                    </div>
                    <NavLink to={`/properties-details/${data?._id}`}>
                      <div className="card-grid-items">
                        <h4>
                          {/* {
                            data?.data?.openimmo?.anbieter[0]?.immobilie[0]
                              ?.freitexte[0]?.objekttitel[0]
                          } */}
                        </h4>
                        <h5>
                          {
                            data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                              ?.kontaktperson?.[0]?.wohnflaeche
                          }
                        </h5>
                        <div className="all-text-bottom-alignment">
                          <div className="text-style">
                            <span className="one-line-title">
                              {" "}
                              {
                                data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                                  ?.freitexte?.[0]?.objekttitel?.[0]
                              }
                            </span>
                            <p>
                              {
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.geo?.[0]?.ort?.[0]
                              }
                            </p>
                          </div>
                          <div className="text-style">
                            <p>Gesamtfläche</p>
                            <span>
                              {" "}
                              {
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.flaechen?.[0]
                                  ?.gesamtflaeche?.[0]
                              }{" "}
                              m²
                            </span>
                          </div>
                          {/* <div className="text-style">
                            <p>Zimmer</p>
                            <span>
                              {" "}
                              {
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.flaechen?.[0]
                                  ?.anzahl_zimmer?.[0]
                              }{" "}
                            </span>
                          </div> */}
                          <div className="text-style">
                            <p>Kaufpreis</p>
                            <span>
                              {" "}
                              {Number(
                                data?.data?.openimmo?.anbieter?.[0]
                                  ?.immobilie?.[0]?.preise?.[0]?.kaufpreis?.[0]
                              )
                                ?.toLocaleString("en-us")
                                .replaceAll(",", ".")}{" "}
                              €
                            </span>
                          </div>
                        </div>
                        <button>weitere Informationen</button>
                      </div>
                    </NavLink>
                  </div>
                  <div className="mobile-view-card-button">
                    <NavLink to={`/properties-details/${data?._id}`}>
                      <button>weitere Informationen</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="properties-all-content-card-alignment">
        <div className="container">
          <h2>Kaufangebote</h2>
          <div className="grid">
            {[0, 1, 2, 3].map(() => {
              return (
                <div className="grid-items">
                  <div className="card-grid">
                    <div className="card-grid-items">
                      <div className="card-image">
                        <img src={NewCardImage} alt="NewCardImage" />
                      </div>
                    </div>
                    <div className="card-grid-items">
                      <h4>LES VERDES</h4>
                      <h5>BREMEN – NORD</h5>
                      <div className="all-text-bottom-alignment">
                        <div className="text-style">
                          <p>Wohnfläche</p>
                          <span>150 m²</span>
                        </div>
                        <div className="text-style">
                          <p>Wohnfläche</p>
                          <span>150 m²</span>
                        </div>
                        <div className="text-style">
                          <p>Wohnfläche</p>
                          <span>150 m²</span>
                        </div>
                      </div>
                      <button>weitere Informationen</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
}
