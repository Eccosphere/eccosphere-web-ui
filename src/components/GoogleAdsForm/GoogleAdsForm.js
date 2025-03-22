import React from "react";
import styles from "./GoogleAdsForm.module.css";
import PropTypes from "prop-types";
import { ReactComponent as CloseIconSVG } from "../../assets/iconSvg/close.svg";
import LogoSVG from "../../assets/logo/ecco_logo.png";

const GoogleAdsForm = ({ className, heading, setOpenModal }) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className={`${styles.iframeContainer} ${className}`}>
      <div className="w-100 d-flex">
        <div className="w-20">
          <img src={LogoSVG} alt="eccosphere-logo" className={styles.logo} />
        </div>
        <div className="w-70 div-center">
          <h2 className={styles.headingText}>{heading}</h2>
        </div>
        <div className="w-10 p-relative">
          <button className={styles.btnClose} onClick={handleClose}>
            <CloseIconSVG className={styles.closeIcon} />
          </button>
        </div>
      </div>
      <iframe
        title="Google Ads Form"
        aria-label="Google Ads"
        frameBorder="0"
        className={styles.iframe}
        src="https://forms.zohopublic.in/eccosphere/form/GoogleAds/formperma/hMd2RMdI15dhheK5KlZg-0GriK870jjSoT4_OAFFNfY"
      />
    </div>
  );
};

GoogleAdsForm.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default GoogleAdsForm;
