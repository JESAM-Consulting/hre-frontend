import React, { useState } from "react";
import "./header.scss";
import HrmsLogo from "../../assets/logo/HRE_WHITE.svg";
import MobileMenu from "../../assets/icons/mobile-menu.svg";
import HrmsLogoMobile from "../../assets/logo/HRE_WHITE.svg";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);

  return (
    <>
      <div className="header-sticky">
        <div className="header">
          <div className="container-lg">
            <div className="header-alignment">
              <div className="logo">
                <NavLink to="/">
                  <img
                    className="mobile-view-logo-hidden"
                    src={HrmsLogo}
                    alt="HrmsLogo"
                  />
                  <img
                    className="mobile-view-logo-show"
                    src={HrmsLogoMobile}
                    alt="HrmsLogoMobile"
                  />
                </NavLink>
              </div>
              <div className="menu">
                <ul>
                  <NavLink to="/">
                    <li>Home</li>
                  </NavLink>
                  <NavLink to="/properties-page">
                    <li>Angebote</li>
                  </NavLink>
                  <NavLink to="/angebote-page">
                    <li>Über Uns</li>
                  </NavLink>
                  <NavLink to="/energieausweis">
                    <li>Energieausweis</li>
                  </NavLink>
                  <NavLink to="/referenzen">
                    <li>Referenzen</li>
                  </NavLink>
                  <NavLink to="/kontakt">
                    <li>Kontakt</li>
                  </NavLink>
                </ul>
              </div>
              <div
                className="mobile-toggle"
                onClick={() => setHeaderOpen(!headerOpen)}
              >
                <img src={MobileMenu} alt="MobileMenu" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {headerOpen && <div className="header-wrapper"></div>}
      <div
        className={
          headerOpen
            ? "header-mobile-design mobile-header-show"
            : "header-mobile-design mobile-header-hidden"
        }
      >
        <div className="mobile-view-head-design">
          <div>
            <NavLink to="/">
              <img src={HrmsLogo} alt="HrmsLogo" />
            </NavLink>
          </div>
          <div onClick={() => setHeaderOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="mobile-view-body">
          <ul>
            <NavLink to="/" onClick={() => setHeaderOpen(false)}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/properties-page" onClick={() => setHeaderOpen(false)}>
              <li>Angebote</li>
            </NavLink>
            <NavLink to="/angebote-page" onClick={() => setHeaderOpen(false)}>
              <li>Über Uns</li>
            </NavLink>
            <NavLink to="/referenzen" onClick={() => setHeaderOpen(false)}>
              <li>Referenzen</li>
            </NavLink>
            <NavLink to="/kontakt" onClick={() => setHeaderOpen(false)}>
              <li>Kontakt</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}
