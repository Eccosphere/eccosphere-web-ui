import React from "react";
import styles from "./style.module.css";
import { images } from "./config/galleryData";
import PropTypes from "prop-types";

import HelmetSeo from "../../utils/HelmetSeo";

const Gallery = () => {
  return (
    <div className={styles["gallery"]}>
      <HelmetSeo
        title="Gallery | Eccosphere Office Space"
        description={
          "Check out our modern coworking space with open desks, private cabins, and conference rooms."
        }
        keywords={"eccosphere gallery, coworking images, office photos"}
        author={"Eccosphere Coworking"}
        url={"https://www.eccosphere.com/gallery"}
      />

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
