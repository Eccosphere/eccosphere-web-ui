import React, { useEffect } from "react";
import styles from "./style.module.css";
import { images } from "./config/galleryData";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Gallery = () => {
  return (
    <div className={styles["gallery"]}>
      <Helmet>
        <title>Gallery | Eccosphere Office Space</title>
        <meta
          name="description"
          content="Check out our modern coworking space with open desks, private cabins, and conference rooms."
        />
        <meta
          name="keywords"
          content="eccosphere gallery, coworking images, office photos"
        />
        <meta name="author" content="Eccosphere Coworking" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.eccosphere.com/gallery" />
      </Helmet>
      <div className={styles["gallery-container"]}>
        <div className={styles["header-div"]}>
          <h1 className={styles["heading-text"]}>
            Experience the Future of Workspaces
          </h1>
          <h3 className={styles["heading-text"]}>
            A Dynamic Coworking Environment Fostering Innovation, Productivity,
            and Collaboration.
          </h3>
        </div>
      </div>

      <div className={styles["gallery-grid"]}>
        {images.map((src, index) => (
          <div key={index} className={styles["gallery-item"]}>
            <img src={src} alt={`Workspace ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  setTitle: PropTypes.func.isRequired,
};

export default Gallery;
