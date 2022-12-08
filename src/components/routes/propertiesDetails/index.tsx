import React, { useState, useEffect } from "react";
import "./propertiesDetails.scss";
import ImpressionenSection from "./impressionenSection/index";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PropertiesDetails() {
  const [cardData, setCardData] = useState<any>([]);
  const [mapdata, setMapData] = useState<any>([]);

  const ids = useParams<any>();

  console.log("idididid", ids?.id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    propertyCardData();
  }, [ids?.id]);

  const propertyCardData = async () => {
    await axios
      .get(
        `https://api.hre.rejoicehub.com/api/v1/dataSchema/getDataSchema?id=${ids?.id}`
      )
      .then((res) => {
        console.log(
          "mapDatasss",
          res?.data?.payload?.getData?.[0]?.data.openimmo.anbieter?.[0].immobilie?.[0].anhaenge?.[0].anhang.filter(
            (itm: any) => itm?.daten?.[0]?.pfad?.[0].split(".")[1] !== "pdf"
          )
        );
        setCardData(res?.data?.payload?.getData);
        setMapData(
          res?.data?.payload?.getData?.[0]?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]?.anhaenge?.[0]?.anhang
            .filter(
              (itm: any) => itm?.daten?.[0]?.pfad?.[0].split(".")[1] !== "pdf"
            )
            .map(
              (data1: any) => data1?.daten?.[0]?.pfad[0]
              // data1.data.openimmo.anbieter[0].immobilie[0].anhaenge[0].anhang[0]
              //   ?.daten[0]?.pfad[0]
            )
        );
      })
      .catch((error) => console.log(error));
  };
  console.log("mapdatdaaa", mapdata);
  return (
    <div>
      <div className="properties-details-banner">
        <img
          src={`https://api.hre.rejoicehub.com/api/v1/image/${cardData?.[0]?.projectName}/${mapdata?.[0]}`}
          alt="hreimage"
        />
      </div>

      <div className="properties-details-content-all-alignment">
        <div className="container-sm">
          {cardData?.map((data: any) => {
            console.log(
              "aaares",
              data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]?.anhaenge[0]
                ?.anhang
            );

            return (
              <div className="grid">
                <div className="grid-items">
                  <div className="new-text-style">
                    <span>
                      {
                        data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                          ?.geo?.[0]?.ort?.[0]
                      }
                    </span>
                    <h5>
                      {
                        data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                          ?.freitexte?.[0]?.objekttitel?.[0]
                      }
                    </h5>
                    <p>
                      {
                        data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                          ?.freitexte?.[0]?.objektbeschreibung?.[0]
                      }
                    </p>
                    <p>
                      {
                        data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                          ?.freitexte?.[0]?.lage?.[0]
                      }
                    </p>
                    <p>
                      {
                        data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                          ?.freitexte?.[0]?.ausstatt_beschr?.[0]
                      }
                    </p>
                  </div>
                </div>
                <div className="grid-items">
                  <h4>Kennzahlen:</h4>
                  <div className="right-side-text-all-alignment">
                    <div className="text-style">
                      <p>
                        {data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                          ?.flaechen?.[0]?.wohnflaeche?.[0]
                          ? data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                              ?.flaechen?.[0]?.wohnflaeche?.[0]
                          : data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                              ?.flaechen?.[0]?.gesamtflaeche?.[0]}{" "}
                        m²
                      </p>
                      <span>
                        {data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                          ?.flaechen?.[0]?.wohnflaeche?.[0]
                          ? "Wohnfläche"
                          : "Gesamtfläche"}
                      </span>
                    </div>
                    {data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                      ?.flaechen?.[0]?.anzahl_zimmer?.[0] && (
                      <div className="text-style">
                        <p>
                          {
                            data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                              ?.flaechen?.[0]?.anzahl_zimmer?.[0]
                          }{" "}
                          Zimmer
                        </p>
                        <span>Zimmeranzahl</span>
                      </div>
                    )}
                    <div className="text-style">
                      <p>
                        €{" "}
                        {data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                          ?.preise?.[0]?.kaufpreis
                          ? Number(
                              data?.data?.openimmo?.anbieter?.[0]
                                ?.immobilie?.[0]?.preise?.[0]?.kaufpreis?.[0]
                            )
                              ?.toLocaleString("en-us")
                              .replaceAll(",", ".")
                          : Number(
                              data?.data?.openimmo?.anbieter?.[0]
                                ?.immobilie?.[0]?.preise?.[0]?.kaltmiete?.[0]
                            )
                              ?.toLocaleString("en-us")
                              .replaceAll(",", ".")}
                      </p>
                      <span>
                        {data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                          ?.preise?.[0]?.kaufpreis?.[0]
                          ? "Kaufpreis"
                          : "kaltmiete"}
                      </span>
                    </div>
                  </div>
                  <div className="last-content-alignment">
                    <h3>Ansprechpartner:</h3>
                    <span>
                      {
                        data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                          ?.kontaktperson?.[0]?.vorname?.[0]
                      }
                    </span>{" "}
                    &nbsp;
                    <span>
                      {
                        data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                          ?.kontaktperson?.[0]?.name?.[0]
                      }
                    </span>
                    <br />
                    <a
                      href={`tel:${data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]?.kontaktperson?.[0]?.tel_durchw?.[0]}`}
                    >
                      <span>
                        {
                          data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                            ?.kontaktperson?.[0]?.tel_durchw?.[0]
                        }
                      </span>
                    </a>
                    <br />
                    <a
                      href={`mailto:${data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]?.kontaktperson?.[0]?.email_direkt?.[0]}?subject = Feedback&body = Message`}
                    >
                      <span>
                        {
                          data?.data?.openimmo?.anbieter?.[0]?.immobilie?.[0]
                            ?.kontaktperson?.[0]?.email_direkt?.[0]
                        }
                      </span>
                    </a>
                  </div>
                  <div className="call-button-style">
                    <a href="mailto:info@hre-immobilien.de ?subject = Feedback&body = Message">
                      <button>Jetzt Kontakt aufnehmen</button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ImpressionenSection />
    </div>
  );
}
