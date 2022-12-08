import React, { useEffect } from "react";
import PropertiesCard from "./propertiesCard";
import "./propertiesPage.scss";
export default function PropertiesPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="properties-page-all-content-alignment">
        <div className="container">
          <h1>Angebote 2022</h1>
        </div>
      </div>
      <PropertiesCard />
    </div>
  );
}
