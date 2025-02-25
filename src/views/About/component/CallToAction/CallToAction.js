import React from "react";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaHeading}>Join Our Community</h2>
        <p className={styles.ctaText}>
          Become a part of Eccosphere today! Sign up now to access exclusive
          coworking spaces, events, and networking opportunities.
        </p>
      </div>
      <div className={styles.ctaDiv}>
        <div className={styles.ctaMapSection}>
          <iframe
            title="Google Map of Eccosphere Coworking Pvt Ltd"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.750858747648!2d77.37880927528806!3d28.607250075678596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0900cd7d65:0xfb53d8bb94645502!2sEccosphere Coworking Pvt Ltd!5e0!3m2!1sen!2sin!4v1740045653582!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ borderWidth: "0", borderRadius: "15px" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className={styles.ctaForm}>
          <iframe
            title="Google Ads Form"
            aria-label="Google Ads"
            frameBorder="0"
            style={{
              height: "100%",
              width: "99%",
              border: "none",
              backgroundColor: "#d0dee1 !important",
            }}
            src="https://forms.zohopublic.in/eccosphere/form/GoogleAds/formperma/hMd2RMdI15dhheK5KlZg-0GriK870jjSoT4_OAFFNfY"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
