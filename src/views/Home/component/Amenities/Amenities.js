import React from "react";
import styles from "./Amenities.module.css";

const Amenities = () => {
  return (
    <div className={styles["amenities-container"]}>
      <div className={styles["amenities"]}>
        <h1>Amenities That work for you</h1>
      </div>
    </div>
  );
};

export default Amenities;
