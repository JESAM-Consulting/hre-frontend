import React, { useState, useEffect } from "react";
import "./footer.scss";
import MailIcon from "../../assets/icons/email.svg";
import WhatsappIcon from "../../assets/icons/whatsap.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstaIcon from "../../assets/icons/insta.svg";
import FooterImage from "../../assets/images/256.svg";
import FooterImage1 from "../../assets/images/80.svg";
import LinkdinIcon from "../../assets/icons/linkdin.svg";
import HRELogo from "../../assets/logo/HRE_WHITE.svg";
import HreGroupImage from "../../assets/images/hre-group.svg";
import { toNamespacedPath } from "path";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import ScrollUp from "../scrollUp";

export default function Footer() {
  const [contactData, setContactData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const [showErrors, setShowErrors] = useState<any>(false);
  const [cardsData, setCardsData] = useState<any>([]);

  useEffect(() => {
    propertyCardSlider();
  }, []);

  const propertyCardSlider = async () => {
    await axios
      .get(
        `https://api.hre.rejoicehub.com/api/v1/icon/getAllIcon?isActive=true`
      )
      .then((res) => {
        setCardsData(res?.data?.payload?.contact);
      })
      .catch((error) => console.log(error));
  };
  console.log("cardsData", cardsData);

  const clearData = () => {
    setContactData({
      firstname: "",
      email: "",
      telephone: "",
      Nachricht: "",
    });
  };

  const handleChange = (e: any) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: "" });
  };
  console.log("contactData", contactData);
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleContactUs = async () => {
    if (
      !contactData.firstname &&
      !contactData.email &&
      !contactData.telephone &&
      !contactData.Nachricht
    ) {
      setErrors({
        ...errors,
        firstname: "Bitte überprüfen Sie ihre Eingabe.",
        email: "Bitte überprüfen Sie ihre Eingabe.",
        telephone: "Bitte überprüfen Sie ihre Eingabe.",
        Nachricht: "Bitte überprüfen Sie ihre Eingabe.",
      });
      setShowErrors(true);
    } else if (!contactData.firstname) {
      setErrors({ ...errors, firstname: "Bitte überprüfen Sie ihre Eingabe." });
      setShowErrors(true);
    } else if (!contactData.email) {
      setErrors({ ...errors, email: "Bitte überprüfen Sie ihre Eingabe." });
      setShowErrors(true);
    } else if (!regex.test(contactData.email)) {
      setErrors({ ...errors, email: "Bitte überprüfen Sie ihre Eingabe." });
      setShowErrors(true);
    } else if (!contactData.telephone || contactData.telephone?.length > 14) {
      // toast.error("Please Enter your Last Name");
      setErrors({ ...errors, telephone: "Bitte überprüfen Sie ihre Eingabe." });
      setShowErrors(true);
    } else if (!contactData.Nachricht) {
      // toast.error("Please Enter your Last Name");
      setErrors({ ...errors, Nachricht: "Bitte überprüfen Sie ihre Eingabe." });
      setShowErrors(true);
    } else {
      const body = {
        name: contactData.firstname,
        email: contactData.email,
        phone: parseInt(contactData.telephone),
        news: contactData.Nachricht,
      };
      console.log("opp", body);

      await axios
        .post(
          "https://api.hre.rejoicehub.com/api/v1/contactUs/addContactUs",
          body
        )
        .then((res) => {
          console.log(res);
          setContactData({});
          clearData();
          toast.success("Nachricht erfolgreich versendet");
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const handleRedirect = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Toaster />
      <div className="footer-design">
        <ScrollUp />
        <div className="container-xs">
          <div className="grid">
            <div className="grid-items">
              <h2>Hier finden Sie uns:</h2>
              <div className="all-child-content-alignment">
                <div className="text-bottom">
                  <p>
                    Hansa Real Estate GmbH <br /> Hohentorsheerstr. 49/51 <br />{" "}
                    28199 Bremen
                  </p>
                </div>
                <div className="text-bottom">
                  <a href="tel:0421/ 38 87 247-0">
                    <p>Telefon: 0421/ 38 87 247-0</p>
                  </a>
                  <a href="mailto: info@hre-immobilien.de">
                    <p>E-Mail: info@hre-immobilien.de</p>
                  </a>
                </div>
                <div className="text-bottom">
                  <p className="bottom-text-a">Öffnungszeiten:</p>
                  <p className="bottom-text-a">
                    {" "}
                    <span>Mo - Do</span> 9:00 - 18:00
                  </p>
                  <p className="bottom-text-a">
                    {" "}
                    <span>Freitag</span> 9:00 - 16:00
                  </p>
                  <p className="">
                    <span>Sa - So</span> Nur nach Vereinbarung
                  </p>
                </div>
                <div className="footer-button-style">
                  <a
                    href="https://bewertung.hre-immobilien.de/"
                    target="_blank"
                  >
                    <button>Was ist Ihre Immobilie wert?</button>
                  </a>
                </div>
              </div>
              <div className="two-image-center-alignment">
                <a
                  href="https://www.immobilienscout24.de/anbieter/hansa-real-estate-gmbh/aa80c935370a444155d50c5?cmp_id=10-04268&cmp_name=residential_realtordirectory&cmp_position=residential_expose&cmp_creative=logo_to_rd_main-realtorinfo"
                  target="_blank"
                >
                  <img
                    className="first-img"
                    src={FooterImage}
                    alt="FooterImage"
                  />
                </a>
                <a
                  href="https://www.immowelt.de/profil/7845086"
                  target="_blank"
                >
                  <div className="sec-image">
                    <img src={FooterImage1} alt="FooterImage1" />
                  </div>
                </a>
              </div>
            </div>
            <div className="grid-items">
              <h3>Ihre Nachricht an uns:</h3>
              <div className="input">
                <input
                  type="text"
                  placeholder="Name"
                  name="firstname"
                  value={contactData.firstname && contactData.firstname}
                  onChange={(e) => handleChange(e)}
                />
                {showErrors && (
                  <span style={{ fontSize: "10px", color: "red" }}>
                    {errors.firstname}
                  </span>
                )}
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="E-Mail-Adresse"
                  name="email"
                  value={contactData.email && contactData.email}
                  onChange={(e) => handleChange(e)}
                />
                {showErrors && (
                  <span style={{ fontSize: "10px", color: "red" }}>
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="input">
                <input
                  type="number"
                  placeholder="Telefon"
                  className="remove-counter"
                  name="telephone"
                  value={contactData.telephone && contactData.telephone}
                  onChange={(e) => handleChange(e)}
                />
                {showErrors && (
                  <span style={{ fontSize: "10px", color: "red" }}>
                    {errors.telephone}
                  </span>
                )}
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Nachricht"
                  name="Nachricht"
                  value={contactData.Nachricht && contactData.Nachricht}
                  onChange={(e) => handleChange(e)}
                />
                {showErrors && (
                  <span style={{ fontSize: "10px", color: "red" }}>
                    {errors.Nachricht}
                  </span>
                )}
              </div>
              <div className="send-button-style">
                <button onClick={handleContactUs}>senden</button>
              </div>
              <div className="oder-button-alignment">
                <a href="tel:004942138 87 2470">
                  <button>Oder rufen Sie uns gerne an!</button>
                </a>
              </div>
              {/* {cardsData.map ((data : any)=>{
                return( */}
              <div className="social-media-iamge-center-alignment">
                <a
                  href={`mailto:${cardsData[2]?.link}?subject = Feedback&body = Message`}
                >
                  {" "}
                  <img src={MailIcon} alt="MailIcon" />
                </a>
                <a href={`tel:${cardsData[1]?.link}`}>
                  {" "}
                  <img src={WhatsappIcon} alt="WhatsappIcon" />
                </a>
                <a href={cardsData[4]?.link} target="_blank">
                  {" "}
                  <img src={FacebookIcon} alt="FacebookIcon" />
                </a>
                <a href={cardsData[3]?.link} target="_blank">
                  {" "}
                  <img src={InstaIcon} alt="InstaIcon" />
                </a>
                <a href={cardsData[0]?.link} target="_blank">
                  {" "}
                  <img src={LinkdinIcon} alt="LinkdinIcon" />
                </a>
              </div>
              {/* code */}
              <div
                className="image-center-alignment"
                onClick={() => handleRedirect()}
              >
                <NavLink to="/">
                  <img src={HRELogo} alt="HreGroupImage" />
                </NavLink>
              </div>
              {/* code */}
              <div className="mobile-view-image-show-footer">
                <div className="two-mobile-image-center-alignment">
                  <a
                    href="https://www.immobilienscout24.de/anbieter/hansa-real-estate-gmbh/aa80c935370a444155d50c5?cmp_id=10-04268&cmp_name=residential_realtordirectory&cmp_position=residential_expose&cmp_creative=logo_to_rd_main-realtorinfo"
                    target="_blank"
                  >
                    <img
                      className="m-first"
                      src={FooterImage}
                      alt="FooterImage"
                    />
                  </a>
                  <a
                    href="https://www.immowelt.de/profil/7845086"
                    target="_blank"
                  >
                    <div className="m-last">
                      <img src={FooterImage1} alt="FooterImage1" />
                    </div>
                  </a>
                </div>
              </div>
              {/* )})} */}
            </div>
          </div>
          <div className="footer-child-content-alignment">
            <NavLink to="/datenschutz">
              <p>Datenschutz</p>
            </NavLink>
            <p style={{ padding: "0 3px" }}>|</p>
            <NavLink to="/impressum-page">
              <p>Impressum</p>
            </NavLink>
            <p style={{ padding: "0 3px" }}>|</p>
            <NavLink to="/agbs">
              <p className="lower-text">AGBs</p>
            </NavLink>
          </div>
          <div className="copy-text">
            <span>Copyright Hansa Real Estate © Alle Rechte vorbehalten.</span>
          </div>
        </div>
      </div>
    </>
  );
}
