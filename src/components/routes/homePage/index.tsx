import React, { useEffect } from "react";
import Loader from "../../loader";
import ExpertiseSection from "./expertiseSection";
import { motion } from "framer-motion/dist/framer-motion";

import HeroSection from "./heroSection";
import HerzlichSection from "./herzlichSection";
import "./homePage.scss";
import InformationSection from "./informationSection";
import SliderSection from "./sliderSection";
import ReviewSection from "./ReviewSection";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <motion.div className="">
        <HeroSection />
        <HerzlichSection />
        <InformationSection />
        <ExpertiseSection />
        <SliderSection />
        <ReviewSection/>
      </motion.div>
    </div>
  );
}
