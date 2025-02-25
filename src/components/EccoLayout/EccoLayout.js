import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./EccoLayout.module.css";
import EccoFooter from "../EccoFooter/EccoFooter";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const EccoLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className={styles["ecco-layout"]}>
      <div className={styles["ecco-header"]}>
        <Navbar />
      </div>

      <div className={styles["ecco-layout-container"]}>
        {location.pathname === "/" ? (
          children
        ) : (
          <div className={styles["layout"]}>{children}</div>
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
