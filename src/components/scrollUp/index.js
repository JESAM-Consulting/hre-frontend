import React, { useEffect } from "react";
import "./scrollUp.scss";
import UpIcon from "../../assets/icons/up.svg";
export default function ScrollUp() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const scrollToTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        className="scrollup-alignment"
        onClick={(e) => {
          scrollToTop(e);
        }}
      >
        <img src={UpIcon} alt="UpIcon" />
      </div>
    </div>
  );
}
