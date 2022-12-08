import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import LoaderLogo from "../../assets/logo/loader-logo.png";
import "./loader.scss";
export default function Loader() {
  return (
    <>
      <motion.div
        className="custom-loader-design"
        initial={{ x: "100vh" }}
        animate={{ x: "0" }}
        transition={{
          duration: 1.3,
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
            }}
            className="logo-center-alignment"
          >
            <img src={LoaderLogo} alt="LoaderLogo" />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
