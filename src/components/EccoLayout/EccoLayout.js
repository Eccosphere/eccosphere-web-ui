import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./EccoLayout.module.css";
import EccoFooter from "../EccoFooter/EccoFooter";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const EccoLayout = ({ children }) => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    }
  }, [isHome, location.pathname]);

  console.log(isHome, "isHome");

  return (
    <div className={styles["ecco-layout"]}>
      <div className={styles["ecco-header"]}>
        <Navbar />
      </div>

      <div className={styles["ecco-layout-container"]}>
        {!isHome ? (
          <div className={styles["layout"]}>{children}</div>
        ) : (
          children
        )}
      </div>

      <div className={styles["ecco-layout-footer"]}>
        <div className={styles["layout-footer"]}>
          <EccoFooter />
        </div>
      </div>
    </div>
  );
};

export default EccoLayout;

EccoLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
