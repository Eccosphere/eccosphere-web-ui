import React from "react";
import { ReactComponent as FacebookIconSVG } from "../../assets/iconSvg/facebook.svg";
import { ReactComponent as InstagramIconSVG } from "../../assets/iconSvg/instagram.svg";
import { ReactComponent as LinkedinIconSVG } from "../../assets/iconSvg/linkedin.svg";
import { ReactComponent as TwitterIconSVG } from "../../assets/iconSvg/twitter.svg";
import styles from "./EccoFooter.module.css";
import logo from "../../assets/logo/eccosphere1.png";
import { Link } from "react-router-dom";

const EccoFooter = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <img src={logo} alt="Eccosphere" className={styles["logo"]} />
        <p className={styles["footer-text"]}>
          We are on a mission to change how India works
        </p>
        <p className={styles["footer-text"]}>
          ©2017 Eccosphere The Coworking Sanctuary.
        </p>
      </div>

      <div className={styles["footer-contact"]}>
        <p className={styles["footer-tittle-text"]}>Contact US</p>
        <p className={styles["footer-address-text"]}>
          Eccosphere coworking Pvt. Ltd.
        </p>
        <p className={styles["footer-address-text"]}>B-61 Sector 67, Noida.</p>
        <p className={styles["footer-address-text"]}>Uttar Pardesh 201301</p>
        <p className={`${styles["footer-no-text"]} mt-2`}>
          Email - chandank@eccosphere.com
        </p>
        <p className={`${styles["footer-no-text"]} mb-3`}>
          Call Us Now - +918506054055
        </p>

        <div className={styles["text-div"]}>
          <p className={styles["follow-us-text"]}>Follow us on</p>
          <p className={styles["follow-us-text"]}>
            <Link target="_blank" to={"https://www.facebook.com/Eccosphere/"}>
              <FacebookIconSVG className={styles["footer-icon"]} />
            </Link>

            <Link
              target="_blank"
              to={"https://x.com/eccosphere?t=gJxSCljYUuQnqSJ_9Fcipg&s=08"}
            >
              <TwitterIconSVG className={styles["footer-icon-two"]} />
            </Link>

            <Link
              target="_blank"
              to={"https://www.instagram.com/eccospherecowork/?hl=en"}
            >
              <InstagramIconSVG className={styles["footer-icon-two"]} />
            </Link>

            <Link
              target="_blank"
              to={
                "https://www.linkedin.com/company/eccosphere-coworking/posts/?feedView=all"
              }
            >
              <LinkedinIconSVG className={styles["footer-icon-two"]} />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EccoFooter;
